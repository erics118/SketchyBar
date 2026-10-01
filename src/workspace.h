#pragma once
#include "event.h"

void workspace_create_custom_observer (void **context, char* notification);
void workspace_event_handler_init(void **context);
void workspace_event_handler_begin(void **context);
void workspace_event_handler_end(void *context);
int workspace_display_notch_height(uint32_t did);
float workspace_get_scale();

CGImageRef workspace_icon_for_app(char* app);
CGImageRef workspace_icon_for_symbol(char* name, float value, int mode, uint32_t color, bool has_color, float scale);
char* workspace_copy_app_name_for_pid(pid_t pid);
