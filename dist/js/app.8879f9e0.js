(function(t){function e(e){for(var i,o,c=e[0],n=e[1],r=e[2],p=0,h=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);u&&u(e);while(h.length)h.shift()();return l.push.apply(l,r||[]),s()}function s(){for(var t,e=0;e<l.length;e++){for(var s=l[e],i=!0,c=1;c<s.length;c++){var n=s[c];0!==a[n]&&(i=!1)}i&&(l.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},a={app:0},l=[];function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],n=c.push.bind(c);c.push=e,c=c.slice();for(var r=0;r<c.length;r++)e(c[r]);var u=n;l.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"56d7":function(t,e,s){"use strict";s.r(e);var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("vue-bullet-chat")],1)},l=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vue-bullet-chat-wrapper",style:t.background,on:{click:t.bulletChatClick}},[s("div",{staticClass:"vbc-top"},[s("div",{staticClass:"vbc-lock-wrapper"},[s("svg",{staticClass:"vbc-icon-svg vbc-icon-open vbc-show-active",attrs:{t:"1612009086242",viewBox:"0 0 1223 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"11149",width:"128",height:"128"}},[s("path",{attrs:{d:"M874.207389 0.2134C694.712336 6.861365 556.767063 159.764558 556.767063 337.59762v119.663369h-498.59737C26.59186 458.92298 0 483.852849 0 515.430682v452.061616c0 31.577833 26.59186 56.507702 56.507702 56.507702h731.276143c31.577833 0 56.507702-26.59186 56.507702-56.507702V515.430682c0-31.577833-26.59186-56.507702-56.507702-56.507702H698.036318v-127.973325C698.036318 221.258234 792.769819 133.172698 904.123231 143.144646c98.057483 9.971947 169.523106 94.7335 169.523106 192.790983v187.805009c0 16.619912 13.29593 29.915842 29.915843 29.915843h81.43757c16.619912 0 29.915842-13.29593 29.915842-29.915843V329.287664C1216.577584 143.144646 1062.012399-6.434565 874.207389 0.2134z","p-id":"11150"}})]),s("svg",{staticClass:"vbc-icon-svg vbc-icon-close",attrs:{t:"1612009127525",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"12557",width:"128",height:"128"}},[s("path",{attrs:{d:"M842.224081 429.259288h-72.934698V258.894547C769.289383 116.096916 653.9801 0 511.9701 0 370.038864 0 254.572054 116.096916 254.572054 258.815783v170.522268H181.71612A63.798169 63.798169 0 0 0 118.15424 493.214983v466.671795c0 35.443427 28.433505 64.034459 63.56188 64.034459h660.586724a63.719406 63.719406 0 0 0 63.483117-64.034459V493.214983a63.798169 63.798169 0 0 0-63.56188-63.876932z m-294.574264 309.539266v101.840781a8.427659 8.427659 0 0 1-8.270133 8.42766h-54.661641a8.427659 8.427659 0 0 1-8.42766-8.42766V738.798554A79.393277 79.393277 0 0 1 511.9701 588.439658a79.393277 79.393277 0 0 1 35.75848 150.280133z m122.870549-309.539266H353.498598V263.068995c0-87.8997 71.201908-159.574187 158.629029-159.574187 87.427121 0 158.550265 71.674487 158.550265 159.574187v166.190293z","p-id":"12558"}})])])]),s("div",{staticClass:"vbc-text-wrapper vbc-flex-sb-column"},[s("div",{staticClass:"vbc-text",style:t.textStyle,attrs:{id:"vbcTextInput"}},[s("span",{class:t.textClass},[t._v(t._s(t.value))])])]),s("div",{staticClass:"vbc-input-wrapper vbc-flex-sb vbc-input-wrapper-active",on:{click:function(t){t.stopPropagation()}}},[s("div",{staticClass:"vbc-flex-sb"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.setValue,expression:"setValue"}],ref:"inputBox",staticClass:"input-box",attrs:{placeholder:"请输入弹幕文字"},domProps:{value:t.setValue},on:{focus:t.handleFocus,keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInput(e)},input:function(e){e.target.composing||(t.setValue=e.target.value)}}}),s("div",{staticClass:"vbc-close-box"},[s("svg",{staticClass:"vbc-close-icon",attrs:{t:"1612167727491",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1694",width:"128",height:"128"}},[s("path",{attrs:{d:"M512 64a448 448 0 1 1 0 896A448 448 0 0 1 512 64zM408.576 363.136a32 32 0 1 0-45.312 45.248l103.808 103.744-103.808 103.744a32 32 0 1 0 45.312 45.248l103.744-103.68 103.744 103.68a32 32 0 1 0 45.248-45.248l-103.744-103.68 103.744-103.808a32 32 0 0 0-45.248-45.248L512.32 466.88z",fill:"#B8B8B8","p-id":"1695"}})])])]),s("div",{staticClass:"svg-box",on:{click:t.handlePopup}},[s("svg",{staticClass:"vbc-icon-svg",attrs:{t:"1611985197202",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5543",width:"128",height:"128"}},[s("path",{attrs:{d:"M661.3 250.7H138.7c-41.2 0-74.7 33.4-74.7 74.7v560c0 41.2 33.4 74.7 74.7 74.7h522.7c41.2 0 74.7-33.4 74.7-74.7v-560c-0.1-41.3-33.5-74.7-74.8-74.7z m18.7 616c0 20.6-16.7 37.3-37.3 37.3H157.3c-20.6 0-37.3-16.7-37.3-37.3V344c0-20.6 16.7-37.3 37.3-37.3h485.3c20.6 0 37.3 16.7 37.3 37.3v522.7z","p-id":"5544",fill:"#ffffff"}}),s("path",{attrs:{d:"M596 624h-37.3c-15.4 0-28 12.6-28 28s12.6 28 28 28H596c15.4 0 28-12.6 28-28s-12.6-28-28-28z m0-93.3h-93.3c-15.4 0-28 12.6-28 28s12.6 28 28 28H596c15.4 0 28-12.6 28-28s-12.6-28-28-28z m0-93.4H465.3c-15.4 0-28 12.6-28 28s12.6 28 28 28H596c15.4 0 28-12.6 28-28s-12.6-28-28-28z m-297 0l-123 336h77.7l24.7-77h122.1l25.2 77h78.1l-120.6-336H299zM294 641l44.3-145.8h2L383.6 641H294z","p-id":"5545",fill:"#ffffff"}}),s("path",{attrs:{d:"M885.3 64H418.7c-41.1 0-74.7 33.6-74.7 74.7v46.7c0 15.5 12.5 28 28 28s28-12.5 28-28v-28c0-20.5 16.8-37.3 37.3-37.3h429.3c20.5 0 37.3 16.8 37.3 37.3V680c0 20.5-16.8 37.3-37.3 37.3h-65.3c-15.5 0-28 12.5-28 28s12.5 28 28 28h84c41.1 0 74.7-33.6 74.7-74.7v-560c0-41-33.6-74.6-74.7-74.6z","p-id":"5546",fill:"#ffffff"}})])])]),s("vue-bullet-chat-popup",{attrs:{"vbc-popup-vis-able":t.vbcPopupVisAble,animation:t.animation},on:{"update:vbcPopupVisAble":function(e){t.vbcPopupVisAble=e},"update:vbc-popup-vis-able":function(e){t.vbcPopupVisAble=e},effect:t.getEffect,color:t.getColor}})],1)},c=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"bullet-chat-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.vbcPopupVisAble,expression:"vbcPopupVisAble"}],class:["vodal"],style:t.style,attrs:{tabindex:"-1"},on:{click:function(t){t.stopPropagation()}}},[s("div",{staticClass:"bullet-chat-mask",on:{click:t.handleClick}}),s("transition",{attrs:{name:"bullet-chat-slide"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"bullet-chat-dialog",style:t.dialogStyle},[s("div",{staticClass:"vbc-popup-top vbc-flex-sb"},t._l(t.topTitle,(function(e,i){return s("div",{key:i,class:{"vbc-popup-top-active":e===t.active}},[s("span",{on:{click:function(s){return t.handleClickTop(e)}}},[t._v(t._s(e))])])})),0),s("div",{staticClass:"bullet-chat-content"},t._l(t.textOpt,(function(e,i){return s("div",{key:i,staticClass:"content-item"},[s("p",{staticClass:"bullet-chat-cont-title"},[t._v(t._s(e.header))]),s("div",{staticClass:"cont-item"},t._l(e.selectOpt,(function(a,l){return s("span",{key:l,class:{"one-span":1===e.type,"two-span":2===e.type,active:a.active,activeColor:a.active},style:{background:a.background},on:{click:function(e){return t.handleSpan(a,i)}}},[t._v(" "+t._s(a.label)+" ")])})),0)])})),0)])])],1)])},r=[],u={name:"VueBulletChatPopup",props:{vbcPopupVisAble:{type:Boolean,default:!1},duration:{type:Number,default:300}},data(){return{topTitle:["文字","背景","音乐"],active:"文字",show:!1,textOpt:[{header:"效果（多选）",type:1,selectOpt:[{label:"阴影",value:"vbc-text-shadow",active:!0,background:"#3d3d3d"},{label:"叠字",value:"vbc-text-double",active:!1,background:"#3d3d3d"},{label:"闪烁",value:"vbc-text-twinkle",active:!1,background:"#3d3d3d"}]},{header:"字体颜色",type:2,selectOpt:[{label:"",value:"1",active:!0,background:"white"},{label:"",value:"2",active:!1,background:"red"},{label:"",value:"3",active:!1,background:"#FD2E74"},{label:"",value:"4",active:!1,background:"#FCDE46"},{label:"",value:"5",active:!1,background:"#FD2E74"},{label:"",value:"6",active:!1,background:"#61FE4B"},{label:"",value:"7",active:!1,background:"#41A0FE"},{label:"",value:"8",active:!1,background:"#FC5727"},{label:"",value:"9",active:!1,background:"#8911FE"},{label:"",value:"10",active:!1,background:"#65FFC9"}]}]}},watch:{vbcPopupVisAble(t){this.show=t}},computed:{style(){return{animationDuration:this.duration+"ms"}},dialogStyle(){return{animationDuration:this.duration+"ms"}}},mounted(){this.textOpt=this.utils.get("textOpt",!0)||this.textOpt},methods:{handleClickTop(t){this.active=t},handleClick(){this.$emit("update:vbcPopupVisAble",!1)},handleSpan(t,e){this.textOpt[e].selectOpt.map(t=>{t.active&&(t.active=!1)}),t.active||(t.active=!0),0===e?(this.$emit("effect",t.value),this.utils.set("vbcEffect",t.value)):1===e&&(this.$emit("color",t.background),this.utils.set("vbcColor",t.background)),this.utils.set("textOpt",JSON.stringify(this.textOpt))}}},p=u,h=s("2877"),v=Object(h["a"])(p,n,r,!1,null,null,null),d=v.exports,b={name:"vue-bullet-chat",components:{VueBulletChatPopup:d},props:{background:{type:Object,default:function(){return{backgroundColor:"black"}}},textObj:{type:Object,default:function(){return{transform:"rotate(90deg)",letterSpacing:"8px"}}},speed:{type:Number,default:2}},data(){return{el:"",textWrapper:"",innerHeight:"",i:0,timer:null,initBottom:"",initValue:"",initBottomCopy:"",value:"请输入文字显示文字弹幕",clickFlag:!1,inputWrapper:!1,isLock:!1,setValue:"",lockClose:"",lockOpen:"",lockWrapper:"",closeTimer:null,initTransform:"",reqAnFrame:"",inputBox:"",closeIcon:"",vbcPopupVisAble:!1,animation:"",color:"white",fontSize:"80px",textClass:""}},watch:{setValue(){this.setValue?this.utils.addClass(this.closeIcon,"vbc-close-active"):this.utils.removeClass(this.closeIcon,"vbc-close-active")}},computed:{textStyle(){return{...this.textObj,color:this.color,fontSize:this.fontSize}}},mounted(){this.utils.fitIos(),this.getEle(),this.getText()},methods:{getEle(){this.el=this.utils.classEle("vue-bullet-chat-wrapper"),this.inputWrapper=this.el.getElementsByClassName("vbc-input-wrapper")[0],this.textWrapper=this.el.getElementsByClassName("vbc-text")[0],this.lockWrapper=this.el.getElementsByClassName("vbc-lock-wrapper")[0],this.lockClose=this.utils.classEle("vbc-icon-close"),this.lockOpen=this.utils.classEle("vbc-icon-open"),this.inputBox=this.utils.classEle("input-box"),this.initTransform=this.utils.deepClone(this.textWrapper.style.transform),this.closeIcon=this.utils.classEle("vbc-close-box"),this.lockWrapper.onclick=()=>{this.isLock?(this.isLock=!1,this.utils.hiddenClass("vbc-icon-close"),this.utils.showClass("vbc-icon-open")):(this.isLock=!0,this.utils.hiddenClass("vbc-icon-open"),this.utils.showClass("vbc-icon-close"),this.utils.removeClass(this.inputWrapper,"vbc-input-wrapper-active"),this.utils.addClass(this.lockWrapper,"lock-wrapper-active"))}},init(){this.initBottom=Math.round(window.innerHeight/2+this.textWrapper.getBoundingClientRect().height/2),this.initBottomCopy=this.utils.deepClone(this.initBottom),this.textWrapper.style.transform="translateY("+this.initBottom+"px)"+this.initTransform,this.move()},move(){let t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,e=window.cancelAnimationFrame||window.mozCancelAnimationFrame;e(this.reqAnFrame),this.reqAnFrame=t(()=>{this.execute()})},execute(){this.moveInstance(),this.move()},moveInstance(){this.initBottom-=this.speed,this.textWrapper.style.transform="translateY("+this.initBottom+"px)"+this.initTransform,this.initBottom<=-this.initBottomCopy&&(this.initBottom=this.initBottomCopy,this.i=0,this.textWrapper.style.transform="translateY("+this.initBottomCopy+"px)"+this.initTransform)},handleInput(){this.setValue?this.value=this.setValue:(this.value="请输入文字显示文字弹幕",this.utils.removeClass(this.closeIcon,"vbc-close-active")),this.$refs.inputBox.blur(),this.bulletChatClick(),setTimeout(()=>{this.init()},20)},bulletChatClick(){this.isLock?this.clickFlag?(this.clickFlag=!1,this.utils.removeClass(this.lockWrapper,"lock-wrapper-active"),this.utils.showClass("vbc-icon-close")):(this.clickFlag=!0,this.utils.addClass(this.lockWrapper,"lock-wrapper-active"),this.utils.hiddenClass("vbc-icon-open")):this.clickFlag?(this.utils.addClass(this.inputWrapper,"vbc-input-wrapper-active"),this.utils.removeClass(this.lockWrapper,"lock-wrapper-active"),this.clickFlag=!1):(this.utils.removeClass(this.closeIcon,"vbc-close-active"),this.utils.removeClass(this.inputWrapper,"vbc-input-wrapper-active"),this.utils.addClass(this.lockWrapper,"lock-wrapper-active"),this.clickFlag=!0)},closeFun(){this.clickFlag||(clearTimeout(this.closeTimer),this.closeTimer=setTimeout(()=>{this.utils.removeClass(this.inputWrapper,"vbc-input-wrapper-active"),this.utils.addClass(this.lockWrapper,"lock-wrapper-active"),this.clickFlag=!0},3e3))},handleFocus(){this.utils.addClass(this.closeIcon,"vbc-close-active"),clearTimeout(this.closeTimer),this.utils.addClass(this.inputWrapper,"vbc-input-wrapper-active"),this.utils.removeClass(this.lockWrapper,"lock-wrapper-active")},handlePopup(){this.vbcPopupVisAble=!0},getColor(t){this.color=t},getEffect(t){this.textClass=t},getText(){this.color=this.utils.get("vbcColor")||this.color,this.textClass=this.utils.get("vbcEffect")||this.fontSize}}},m=b,f=(s("9b5e"),s("dab7"),Object(h["a"])(m,o,c,!1,null,"4468a7e8",null)),g=f.exports,C={name:"app",components:{VueBulletChat:g},data(){return{}}},w=C,k=(s("034f"),Object(h["a"])(w,a,l,!1,null,null,null)),x=k.exports;class y{constructor(){}hasClass(t,e){return!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))}addClass(t,e){this.hasClass(t,e)||(t.className+=" "+e)}removeClass(t,e){if(this.hasClass(t,e)){const s=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(s,"")}}set(t,e){localStorage.setItem(t,e)}get(t,e=!1){return e?JSON.parse(localStorage.getItem(t)):localStorage.getItem(t)}showClass(t){t?document.getElementsByClassName(t)[0].style.opacity="1":new Error("请输入类名")}hiddenClass(t){t?document.getElementsByClassName(t)[0].style.opacity="0":new Error("请输入类名")}changeInnerText(t,e){document.getElementsByClassName(t)[0].innerHTML=e}clickfu(t,e){t.setAttribute("class",e);const s=t.parentNode.childNodes;for(let i=0;i<s.length;i++)1==s[i].nodeType&&s[i]!=t&&(s[i].className="")}formatSeconds(t){if(!t)return"00:00";let e;if(t=parseInt(t),t>-1){let s=Math.floor(t/3600),i=Math.floor(t/60)%60,a=t%60,l=parseInt(s/24);l>0?(s-=24*l,e=l+"day "+s+":"):e=s>0?s+":":"",i<10&&(e+="0"),e+=i+":",a<10&&(e+="0"),e+=a}return e}classEle(t){return t&&document.getElementsByClassName(t)[0]}deepClone(t){if(t&&"object"!==typeof t)return JSON.parse(JSON.stringify(t));const e=t.constructor===Array?[]:{};return Object.keys(t).forEach(s=>{t[s]&&"object"===typeof t[s]?e[s]=deepClone(t[s]):e[s]=t[s]}),e}isIPHONE(){return-1!==navigator.userAgent.toUpperCase().indexOf("IPHONE")}fitIos(){const t=navigator.userAgent;let e,s,i=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);i&&(document.body.addEventListener("focusin",()=>{e=!0,clearTimeout(s)}),document.body.addEventListener("focusout",()=>{e=!1,e||(s=setTimeout((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),200))}))}}var O=y;s("a7bf");i["a"].config.productionTip=!1,i["a"].prototype.utils=new O,new i["a"]({render:function(t){return t(x)}}).$mount("#app")},"85ec":function(t,e,s){},"935e":function(t,e,s){},9482:function(t,e,s){},"9b5e":function(t,e,s){"use strict";s("935e")},a7bf:function(t,e,s){},dab7:function(t,e,s){"use strict";s("9482")}});
//# sourceMappingURL=app.8879f9e0.js.map