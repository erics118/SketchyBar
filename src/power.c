#include "power.h"
#include "event.h"

uint32_t g_power_source = 0;

void power_handler(void* context) {
  CFTypeRef info = IOPSCopyPowerSourcesInfo();
  if (!info) return;
  CFStringRef type = IOPSGetProvidingPowerSourceType(info);
  if (!type) { CFRelease(info); return; }

  if (CFStringCompare(type, POWER_AC_KEY, 0) == 0) {
    if (g_power_source != POWER_AC) {
      g_power_source = POWER_AC;
      char source[8];
      snprintf(source, 8, "AC");
      struct event event = { (void*) source, POWER_SOURCE_CHANGED };
      event_post(&event);
    }
  } else if (CFStringCompare(type, POWER_BATTERY_KEY, 0) == 0) {
    if (g_power_source != POWER_BATTERY) {
      g_power_source = POWER_BATTERY;
      char source[8];
      snprintf(source, 8, "BATTERY");

      struct event event = { (void*) source, POWER_SOURCE_CHANGED };
      event_post(&event);
    }
  }
  CFRelease(info);
}

void forced_power_event() {
  g_power_source = 0;
  power_handler(NULL);
}

void begin_receiving_power_events() {
  CFRunLoopSourceRef source = IOPSNotificationCreateRunLoopSource(power_handler, NULL);
  CFRunLoopAddSource(CFRunLoopGetCurrent(), source, kCFRunLoopDefaultMode);
}

static void battery_get_string(CFDictionaryRef description, CFStringRef key, char* buffer, uint32_t size) {
  CFStringRef string = CFDictionaryGetValue(description, key);
  buffer[0] = '\0';
  if (string) CFStringGetCString(string, buffer, size, kCFStringEncodingUTF8);
}

static int battery_get_int(CFDictionaryRef description, CFStringRef key) {
  CFNumberRef number = CFDictionaryGetValue(description, key);
  int value = -1;
  if (number) CFNumberGetValue(number, kCFNumberIntType, &value);
  return value;
}

void battery_handler(void* context) {
  CFTypeRef info = IOPSCopyPowerSourcesInfo();
  if (!info) return;
  CFArrayRef sources = IOPSCopyPowerSourcesList(info);
  if (!sources) { CFRelease(info); return; }

  char source[64] = "";
  CFStringRef type = IOPSGetProvidingPowerSourceType(info);
  if (type) CFStringGetCString(type, source, 64, kCFStringEncodingUTF8);

  for (CFIndex i = 0; i < CFArrayGetCount(sources); i++) {
    CFDictionaryRef description
      = IOPSGetPowerSourceDescription(info, CFArrayGetValueAtIndex(sources, i));
    if (!description) continue;

    char health[64];
    char transport[64];
    battery_get_string(description, CFSTR(kIOPSBatteryHealthKey), health, 64);
    battery_get_string(description,
                       CFSTR(kIOPSTransportTypeKey),
                       transport,
                       64                          );

    int current = battery_get_int(description, CFSTR(kIOPSCurrentCapacityKey));
    int max = battery_get_int(description, CFSTR(kIOPSMaxCapacityKey));
    int percentage = (current >= 0 && max > 0)
                     ? (int)(100.0 * current / max + 0.5)
                     : -1;

    CFBooleanRef charging = CFDictionaryGetValue(description,
                                                 CFSTR(kIOPSIsChargingKey));

    char json[512];
    snprintf(json, 512, "{\"source\":\"%s\",\"health\":\"%s\","
                        "\"percentage\":%d,\"current\":%d,\"max\":%d,"
                        "\"charging\":%s,\"empty\":%d,\"full\":%d,"
                        "\"transport\":\"%s\"}",
                        source,
                        health,
                        percentage,
                        current,
                        max,
                        charging == kCFBooleanTrue ? "true" : "false",
                        battery_get_int(description,
                                        CFSTR(kIOPSTimeToEmptyKey)),
                        battery_get_int(description,
                                        CFSTR(kIOPSTimeToFullChargeKey)),
                        transport                                         );

    struct event event = { (void*) json, BATTERY_CHANGED };
    event_post(&event);
  }

  CFRelease(sources);
  CFRelease(info);
}

void forced_battery_event() {
  battery_handler(NULL);
}

void begin_receiving_battery_events() {
  static bool receiving = false;
  if (!receiving) {
    receiving = true;
    CFRunLoopSourceRef source = IOPSNotificationCreateRunLoopSource(battery_handler, NULL);
    CFRunLoopAddSource(CFRunLoopGetCurrent(), source, kCFRunLoopDefaultMode);
  }

  battery_handler(NULL);
}
