"use strict";(self.webpackChunksketchybar_site=self.webpackChunksketchybar_site||[]).push([[882,884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,u=h["".concat(s,".").concat(d)]||h[d]||m[d]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4612:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(7294),r=(n(3935),n(9941)),i=n(780);class o extends a.Component{constructor(){super(...arguments),this.state={displayColorPicker:!1,color:{r:"241",g:"112",b:"19",a:"1"}},this.handleClick=()=>{this.setState({displayColorPicker:!this.state.displayColorPicker})},this.handleClose=()=>{this.setState({displayColorPicker:!1})},this.handleChange=e=>{this.setState({color:e.rgb}),document.getElementById("color").innerHTML="0x"+("0"+Math.round(255*e.rgb.a).toString(16)).slice(-2)+("0"+Math.round(e.rgb.r).toString(16)).slice(-2)+("0"+Math.round(e.rgb.g).toString(16)).slice(-2)+("0"+Math.round(e.rgb.b).toString(16)).slice(-2)}}render(){const e=(0,r.ZP)({default:{color:{width:"36px",height:"14px",borderRadius:"2px",background:`rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`},swatch:{padding:"5px",background:"#fff",borderRadius:"1px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block",cursor:"pointer"},popover:{position:"absolute",zIndex:"2"},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}}});return a.createElement("div",null,a.createElement("div",{style:e.swatch,onClick:this.handleClick},a.createElement("div",{style:e.color})),a.createElement("div",{id:"color"},"Try the Picker!"),this.state.displayColorPicker?a.createElement("div",{style:e.popover},a.createElement("div",{style:e.cover,onClick:this.handleClose}),a.createElement(i.xS,{color:this.state.color,onChange:this.handleChange})):null)}}const l=o},5598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),i=n(4612);const o={id:"tricks",title:"Tips & Tricks",sidebar_position:1},l=void 0,s={unversionedId:"config/tricks",id:"config/tricks",title:"Tips & Tricks",description:"Batching of configuration commands",source:"@site/docs/config/Tricks.md",sourceDirName:"config",slug:"/config/tricks",permalink:"/SketchyBar/config/tricks",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"tricks",title:"Tips & Tricks",sidebar_position:1},sidebar:"docs",previous:{title:"Reloading the configuration",permalink:"/SketchyBar/config/reloading"},next:{title:"Credits",permalink:"/SketchyBar/credits"}},c={},p=[{value:"Batching of configuration commands",id:"batching-of-configuration-commands",level:2},{value:"Using bash arrays for cleaner configuration",id:"using-bash-arrays-for-cleaner-configuration",level:3},{value:"Debugging Problems",id:"debugging-problems",level:2},{value:"Color Picker",id:"color-picker",level:2},{value:"Finding Icons",id:"finding-icons",level:2},{value:"Multiple Bars",id:"multiple-bars",level:2},{value:"Performance optimizations",id:"performance-optimizations",level:2}],h={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"batching-of-configuration-commands"},"Batching of configuration commands"),(0,r.kt)("p",null,"It is possible to batch commands together into a single call to ",(0,r.kt)("em",{parentName:"p"},"SketchyBar"),", this can be helpful to\nkeep the configuration file a bit cleaner and also to reduce startup times.\nAssume 5 individual configuration calls to ",(0,r.kt)("em",{parentName:"p"},"SketchyBar"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --bar position=top\nsketchybar --bar margin=5\nsketchybar --add item demo left\nsketchybar --set demo label=Hello\nsketchybar --subscribe demo system_woke\n")),(0,r.kt)("p",null,"after each configuration command the bar is redrawn (if needed), thus it is\nfaster to append these calls into a single command like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --bar position=top           \\\n                 margin=5               \\\n           --add item demo left         \\\n           --set demo label=Hello       \\\n           --subscribe demo system_woke\n")),(0,r.kt)("p",null,"The backslash at the end of the first 4 lines is the default bash way to join lines together and should not be followed by a whitespace.  "),(0,r.kt)("h3",{id:"using-bash-arrays-for-cleaner-configuration"},"Using bash arrays for cleaner configuration"),(0,r.kt)("p",null,"Lets assume this bar configuration command (from the default config):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sketchybar --bar height=32        \\\n                 blur_radius=30   \\\n                 position=top     \\\n                 sticky=off       \\\n                 padding_left=10  \\\n                 padding_right=10 \\\n                 color=0x15ffffff\n")),(0,r.kt)("p",null,"We can rewrite this as a bash array to get rid of the backslashes and pass the\ncontents of the array to the ",(0,r.kt)("inlineCode",{parentName:"p"},"--bar")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'bar=(\n  height=32\n  blur_radius=30\n  position=top\n  sticky=off\n  padding_left=10\n  padding_right=10\n  color=0x15ffffff\n)\n\nsketchybar --bar "${bar[@]}"\n')),(0,r.kt)("h2",{id:"debugging-problems"},"Debugging Problems"),(0,r.kt)("p",null,"If you are experiencing problems with the configuration of ",(0,r.kt)("em",{parentName:"p"},"SketchyBar")," it might be helpful to work through the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1.) Start ",(0,r.kt)("inlineCode",{parentName:"li"},"sketchybar")," directly from the commandline to see the verbose error/warning messages"),(0,r.kt)("li",{parentName:"ul"},"2.) Make sure you have no trailing whitespaces after the bash newline escape char ",(0,r.kt)("inlineCode",{parentName:"li"},"\\")),(0,r.kt)("li",{parentName:"ul"},"3.) Make sure your scripts are made executable via: ",(0,r.kt)("inlineCode",{parentName:"li"},"chmod +x script.sh")),(0,r.kt)("li",{parentName:"ul"},"4.) Reduce the configuration to a minimal example and narrow down the problematic region"),(0,r.kt)("li",{parentName:"ul"},"5.) Try running erroneous scripts directly in the commandline"),(0,r.kt)("li",{parentName:"ul"},"6.) Query ",(0,r.kt)("em",{parentName:"li"},"SketchyBar")," for relevant properties and use them to deduce the problems root cause"),(0,r.kt)("li",{parentName:"ul"},"7.) Create an ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/FelixKratz/SketchyBar/issues"},"Issue")," on GitHub, a second pair of eyes might now be the only thing that helps")),(0,r.kt)("h2",{id:"color-picker"},"Color Picker"),(0,r.kt)("p",null,"SketchyBar uses the argb hex color format, which means: ",(0,r.kt)("inlineCode",{parentName:"p"},"0xAARRGGBB")," encodes a\ncolor."),(0,r.kt)(i.default,{mdxType:"SketchExample"}),(0,r.kt)("h2",{id:"finding-icons"},"Finding Icons"),(0,r.kt)("p",null,"The default font ",(0,r.kt)("em",{parentName:"p"},"SketchyBar")," uses is the ",(0,r.kt)("em",{parentName:"p"},"Hack Nerd Font")," which means all ",(0,r.kt)("em",{parentName:"p"},"Nerdfont")," icons can be used.\nRefer to the ",(0,r.kt)("em",{parentName:"p"},"Nerdfont")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.nerdfonts.com/cheat-sheet"},"cheat-sheet")," to find new icons."),(0,r.kt)("p",null,"Additionally, it is possible to use other icons and glyphs from different fonts,\nsuch as the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/sf-symbols/"},"sf-symbols")," from apple.\nThose symbols can be installed via brew:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install --cask sf-symbols\n")),(0,r.kt)("p",null,"After installing this package, an app called ",(0,r.kt)("inlineCode",{parentName:"p"},"SF Symbols")," will be available where you can find all the available icons.\nOnce you find a fitting icon, right click it, select ",(0,r.kt)("em",{parentName:"p"},"Copy Symbol")," and paste it in the relevant configuration file."),(0,r.kt)("p",null,"If you are looking for stylised app icons you might want to checkout the excellent community maintained\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kvndrsslr/sketchybar-app-font"},"app-icon-font")," for SketchyBar."),(0,r.kt)("h2",{id:"multiple-bars"},"Multiple Bars"),(0,r.kt)("p",null,"It is possible to have multiple independent instances of SketchyBar running.\nThis is possible by changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"argv[0]")," of the sketchybar program. This is\nvery easy, e.g. by symlinking the sketchybar binary with a different name, e.g.\n",(0,r.kt)("inlineCode",{parentName:"p"},"bottom_bar"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ln -s $(which sketchybar) $(dirname $(which sketchybar))/bottom_bar\n")),(0,r.kt)("p",null,"This symlink can now be used to spawn and target an additional bar, i.e. for\nthis bar we do not call ",(0,r.kt)("inlineCode",{parentName:"p"},"sketchybar --bar color=0xffff0000"),", but rather\n",(0,r.kt)("inlineCode",{parentName:"p"},"bottom_bar --bar color=0xffff0000")," and start it by running ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom_bar")," in the\ncommandline."),(0,r.kt)("p",null,"The config path for this additional bar is in ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.config/bottom_bar/"),".\nOf course ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom_bar")," is only an example and can be freely replaced with any\nother identifier."),(0,r.kt)("h2",{id:"performance-optimizations"},"Performance optimizations"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"SketchyBar")," can be configured to have a ",(0,r.kt)("em",{parentName:"p"},"very")," small performance footprint. In the following I will highlight some optimizations that can be used to reduce the footprint further. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Batch together configuration commands where ever possible."),(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("em",{parentName:"li"},"updates=when_shown")," for items that do not need to run their script if they are not rendered."),(0,r.kt)("li",{parentName:"ul"},"Reduce the ",(0,r.kt)("em",{parentName:"li"},"update_freq")," of ",(0,r.kt)("em",{parentName:"li"},"scripts")," and ",(0,r.kt)("em",{parentName:"li"},"aliases")," and use event-driven scripting when ever possible."),(0,r.kt)("li",{parentName:"ul"},"Do not add ",(0,r.kt)("em",{parentName:"li"},"aliases")," to apps that are not always running, otherwise ",(0,r.kt)("em",{parentName:"li"},"SketchyBar")," searches for them continuously."),(0,r.kt)("li",{parentName:"ul"},"(Advanced; Only >=v2.9.0) Use compiled ",(0,r.kt)("inlineCode",{parentName:"li"},"mach_helper")," programs that directly interface with ",(0,r.kt)("em",{parentName:"li"},"SketchyBar")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/FelixKratz/SketchyBarHelper"},"example")," for performance sensitive tasks")))}m.isMDXComponent=!0}}]);