(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,16015,(e,t,a)=>{},98547,(e,t,a)=>{var r=e.i(47167);e.r(16015);var s=e.r(71645),i=s&&"object"==typeof s&&"default"in s?s:{default:s},n=void 0!==r.default&&r.default.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function e(e){var t=void 0===e?{}:e,a=t.name,r=void 0===a?"stylesheet":a,s=t.optimizeForSpeed,i=void 0===s?n:s;c(o(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",c("boolean"==typeof i,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=i,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var l="u">typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=l?l.getAttribute("content"):null}var t,a=e.prototype;return a.setOptimizeForSpeed=function(e){c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},a.isOptimizeForSpeed=function(){return this._optimizeForSpeed},a.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,"u">typeof window&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,a){return"number"==typeof a?e._serverSheet.cssRules[a]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),a},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},a.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},a.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},a.insertRule=function(e,t){if(c(o(e),"`insertRule` accepts only strings"),"u"<typeof window)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var a=this.getSheet();"number"!=typeof t&&(t=a.cssRules.length);try{a.insertRule(e,t)}catch(t){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},a.replaceRule=function(e,t){if(this._optimizeForSpeed||"u"<typeof window){var a="u">typeof window?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!a.cssRules[e])return e;a.deleteRule(e);try{a.insertRule(t,e)}catch(r){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),a.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];c(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},a.deleteRule=function(e){if("u"<typeof window)return void this._serverSheet.deleteRule(e);if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},a.flush=function(){this._injected=!1,this._rulesCount=0,"u">typeof window?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},a.cssRules=function(){var e=this;return"u"<typeof window?this._serverSheet.cssRules:this._tags.reduce(function(t,a){return a?t=t.concat(Array.prototype.map.call(e.getSheetForTag(a).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},a.makeStyleTag=function(e,t,a){t&&c(o(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return a?s.insertBefore(r,a):s.appendChild(r),r},t=[{key:"length",get:function(){return this._rulesCount}}],function(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,t),e}();function c(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var d=function(e){for(var t=5381,a=e.length;a;)t=33*t^e.charCodeAt(--a);return t>>>0},p={};function h(e,t){if(!t)return"jsx-"+e;var a=String(t),r=e+a;return p[r]||(p[r]="jsx-"+d(e+"-"+a)),p[r]}function u(e,t){"u"<typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var a=e+t;return p[a]||(p[a]=t.replace(/__jsx-style-dynamic-selector/g,e)),p[a]}var f=function(){function e(e){var t=void 0===e?{}:e,a=t.styleSheet,r=void 0===a?null:a,s=t.optimizeForSpeed,i=void 0!==s&&s;this._sheet=r||new l({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),r&&"boolean"==typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"u">typeof window&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var a=this.getIdAndRules(e),r=a.styleId,s=a.rules;if(r in this._instancesCounts){this._instancesCounts[r]+=1;return}var i=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[r]=i,this._instancesCounts[r]=1},t.remove=function(e){var t=this,a=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(a in this._instancesCounts,"styleId: `"+a+"` not found"),this._instancesCounts[a]-=1,this._instancesCounts[a]<1){var r=this._fromServer&&this._fromServer[a];r?(r.parentNode.removeChild(r),delete this._fromServer[a]):(this._indices[a].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[a]),delete this._instancesCounts[a]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],a=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return a[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,a;return t=this.cssRules(),void 0===(a=e)&&(a={}),t.map(function(e){var t=e[0],r=e[1];return i.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:a.nonce?a.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})})},t.getIdAndRules=function(e){var t=e.children,a=e.dynamic,r=e.id;if(a){var s=h(r,a);return{styleId:s,rules:Array.isArray(t)?t.map(function(e){return u(s,e)}):[u(s,t)]}}return{styleId:h(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),m=s.createContext(null);function x(){return new f}function g(){return s.useContext(m)}m.displayName="StyleSheetContext";var v=i.default.useInsertionEffect||i.default.useLayoutEffect,b="u">typeof window?x():void 0;function w(e){var t=b||g();return t&&("u"<typeof window?t.add(e):v(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)])),null}w.dynamic=function(e){return e.map(function(e){return h(e[0],e[1])}).join(" ")},a.StyleRegistry=function(e){var t=e.registry,a=e.children,r=s.useContext(m),n=s.useState(function(){return r||t||x()})[0];return i.default.createElement(m.Provider,{value:n},a)},a.createStyleRegistry=x,a.style=w,a.useStyleRegistry=g},37902,(e,t,a)=>{t.exports=e.r(98547).style},95854,e=>{"use strict";var t=e.i(43476),a=e.i(46932),r=e.i(72328),s=e.i(37902),i=e.i(71645),n=e.i(91572),o=e.i(16148),l=e.i(86062),c=e.i(68702);function d(){let e=(0,c.useT)(),[a,r]=(0,i.useState)(500),d=(0,n.usePrimaryCta)({amount:a}),{firstSession:p,firstDay:h,steadyDay:u,tier:f,pct:m}=(0,i.useMemo)(()=>{let e=(0,l.tierFromDeposited)(a).tier??o.TIERS[0],t=Math.round(a*e.firstDayPct/100);return{firstSession:Math.round(.45*t),firstDay:t,steadyDay:Math.round(a*e.dailyPct/100),tier:e.name,pct:(a-l.ENTRY_MIN)/(2e3-l.ENTRY_MIN)*100}},[a]);return(0,t.jsxs)("div",{className:"jsx-66d0b3eef3a0ba64 hc",children:[(0,t.jsx)("div",{className:"jsx-66d0b3eef3a0ba64 hc-q",children:e("calc.question")}),(0,t.jsxs)("div",{className:"jsx-66d0b3eef3a0ba64 hc-amount-row",children:[(0,t.jsxs)("div",{className:"jsx-66d0b3eef3a0ba64 hc-amount",children:[(0,t.jsx)("span",{className:"jsx-66d0b3eef3a0ba64 hc-cur",children:"$"}),(0,t.jsx)("span",{className:"jsx-66d0b3eef3a0ba64 hc-val tnum",children:a.toLocaleString("en-US")})]}),(0,t.jsx)("button",{onClick:function(){document.querySelector("#tiers")?.scrollIntoView({behavior:"smooth"})},title:e("calc.viewTiers"),className:"jsx-66d0b3eef3a0ba64 hc-tier",children:f})]}),(0,t.jsx)("input",{type:"range",min:l.ENTRY_MIN,max:2e3,step:10,value:a,onChange:e=>r(Number(e.target.value)),style:{"--pct":m+"%"},"aria-label":e("calc.amountLabel"),className:"jsx-66d0b3eef3a0ba64 hc-slider"}),(0,t.jsx)("div",{className:"jsx-66d0b3eef3a0ba64 hc-chips",children:[...(0,l.activeTiers)().map(e=>l.TIER_MIN[e.key]).filter(e=>e<2e3),2e3].map(e=>(0,t.jsxs)("button",{onClick:()=>r(e),className:`jsx-66d0b3eef3a0ba64 hc-chip tnum ${a===e?"on":""}`,children:["$",e>=1e3?e/1e3+"k":e]},e))}),(0,t.jsxs)("div",{className:"jsx-66d0b3eef3a0ba64 hc-out",children:[(0,t.jsxs)("div",{className:"jsx-66d0b3eef3a0ba64 hc-out-main",children:[(0,t.jsx)("div",{className:"jsx-66d0b3eef3a0ba64 hc-out-k",children:e("calc.firstDay")}),(0,t.jsxs)("div",{className:"jsx-66d0b3eef3a0ba64 hc-out-v tnum",children:["+$",h.toLocaleString("en-US")]})]}),(0,t.jsxs)("div",{className:"jsx-66d0b3eef3a0ba64 hc-out-side",children:[(0,t.jsxs)("div",{className:"jsx-66d0b3eef3a0ba64 hc-out-row",children:[(0,t.jsx)("span",{className:"jsx-66d0b3eef3a0ba64",children:e("calc.firstSession",{minutes:o.TIERS[0].sessionMin})}),(0,t.jsxs)("b",{className:"jsx-66d0b3eef3a0ba64 pos tnum",children:["+$",p.toLocaleString("en-US")]})]}),(0,t.jsxs)("div",{className:"jsx-66d0b3eef3a0ba64 hc-out-row",children:[(0,t.jsx)("span",{className:"jsx-66d0b3eef3a0ba64",children:e("calc.thenDaily")}),(0,t.jsxs)("b",{className:"jsx-66d0b3eef3a0ba64 tnum",children:["+$",u.toLocaleString("en-US")]})]})]})]}),(0,t.jsx)("a",{href:d.href,className:"jsx-66d0b3eef3a0ba64 btn btn-dark hc-cta",children:d.loggedIn?e("common.goToDashboard"):e("calc.ctaAmount",{amount:a.toLocaleString("en-US")})}),(0,t.jsx)(s.default,{id:"66d0b3eef3a0ba64",children:".hc.jsx-66d0b3eef3a0ba64{text-align:left;border:1px solid var(--line-soft);border-radius:var(--radius-card);box-shadow:var(--shadow-md);background:#fff;padding:26px}.hc-q.jsx-66d0b3eef3a0ba64{color:var(--text);letter-spacing:-.01em;margin-bottom:20px;font-size:16px;font-weight:500}.hc-amount-row.jsx-66d0b3eef3a0ba64{justify-content:space-between;align-items:center;gap:12px;margin-bottom:16px;display:flex}.hc-amount.jsx-66d0b3eef3a0ba64{align-items:baseline;gap:4px;display:inline-flex}.hc-cur.jsx-66d0b3eef3a0ba64{color:var(--text-3);font-size:26px;font-weight:500}.hc-val.jsx-66d0b3eef3a0ba64{letter-spacing:-.03em;color:var(--text);font-size:50px;font-weight:700;line-height:1}.hc-tier.jsx-66d0b3eef3a0ba64{cursor:pointer;border:1px solid var(--line);color:var(--text-2);background:var(--surface-1);transition:background .2s var(--ease), border-color .2s var(--ease), color .2s var(--ease);border-radius:999px;align-items:center;gap:2px;padding:8px 10px 8px 16px;font-size:13px;font-weight:600;display:inline-flex}.hc-tier.jsx-66d0b3eef3a0ba64:hover{background:var(--surface-2);color:var(--text);border-color:#c4c7c5}.hc-slider.jsx-66d0b3eef3a0ba64{appearance:none;cursor:pointer;background:linear-gradient(to right, var(--blue) 0%, var(--blue) var(--pct), var(--surface-3) var(--pct), var(--surface-3) 100%);border-radius:999px;width:100%;height:6px;margin:8px 0 20px}.hc-slider.jsx-66d0b3eef3a0ba64::-webkit-slider-thumb{appearance:none;border:3px solid var(--blue);background:#fff;border-radius:50%;width:20px;height:20px;box-shadow:0 1px 6px #3c404359}.hc-slider.jsx-66d0b3eef3a0ba64::-moz-range-thumb{border:3px solid var(--blue);background:#fff;border-radius:50%;width:20px;height:20px;box-shadow:0 1px 6px #3c404359}.hc-slider.jsx-66d0b3eef3a0ba64:focus{outline:none}.hc-chips.jsx-66d0b3eef3a0ba64{gap:8px;margin-bottom:20px;display:flex}.hc-chip.jsx-66d0b3eef3a0ba64{border:1px solid var(--line);color:var(--text-2);cursor:pointer;transition:all .2s var(--ease);background:#fff;border-radius:999px;flex:1;padding:10px 0;font-size:13px;font-weight:600}.hc-chip.jsx-66d0b3eef3a0ba64:hover{background:var(--surface-1)}.hc-chip.on.jsx-66d0b3eef3a0ba64{background:var(--blue-soft);color:var(--blue-strong);border-color:#0000}.hc-out.jsx-66d0b3eef3a0ba64{background:var(--surface-1);border:1px solid var(--line-soft);border-radius:18px;gap:14px;margin-bottom:18px;padding:18px;display:flex}.hc-out-main.jsx-66d0b3eef3a0ba64{flex:1}.hc-out-k.jsx-66d0b3eef3a0ba64{color:var(--text-3);font-size:12px;font-weight:500}.hc-out-v.jsx-66d0b3eef3a0ba64{color:var(--green);letter-spacing:-.02em;margin-top:6px;font-size:34px;font-weight:700;line-height:1}.hc-out-side.jsx-66d0b3eef3a0ba64{border-left:1px solid var(--line-soft);flex-direction:column;justify-content:center;gap:9px;min-width:120px;padding-left:16px;display:flex}.hc-out-row.jsx-66d0b3eef3a0ba64{color:var(--text-3);justify-content:space-between;align-items:baseline;gap:8px;font-size:13px;display:flex}.hc-out-row.jsx-66d0b3eef3a0ba64 b.jsx-66d0b3eef3a0ba64{color:var(--text);font-size:14px;font-weight:700}.hc-cta.jsx-66d0b3eef3a0ba64{width:100%}@media (width<=520px){.hc.jsx-66d0b3eef3a0ba64{padding:20px}.hc-val.jsx-66d0b3eef3a0ba64{font-size:40px}.hc-out.jsx-66d0b3eef3a0ba64{flex-direction:column;gap:12px}.hc-out-side.jsx-66d0b3eef3a0ba64{border-left:0;border-top:1px solid var(--line-soft);flex-direction:row;padding-top:12px;padding-left:0}}"})]})}var p=e.i(42561);e.s(["HeroSection",0,function(){let e=(0,r.useReducedMotion)(),s=(0,n.usePrimaryCta)(),i=(0,c.useT)(),o=t=>e?{}:{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.9,delay:t,ease:[.2,0,0,1]}};return(0,t.jsxs)("section",{className:"hero",id:"top",children:[(0,t.jsxs)("div",{className:"wrap hero-inner",children:[(0,t.jsxs)(a.motion.h1,{className:"hero-title display",...o(.15),children:[i("hero.titleBefore")," ",(0,t.jsx)("span",{className:"grad-text",children:(0,t.jsx)(p.CountUp,{value:180,suffix:"%",duration:1.4})}),(0,t.jsx)("br",{}),i("hero.titleAfter")]}),(0,t.jsx)(a.motion.p,{className:"hero-sub lead",...o(.3),children:i("hero.sub")}),(0,t.jsxs)(a.motion.div,{className:"hero-cta",...o(.45),children:[(0,t.jsx)("a",{href:s.href,className:"btn btn-dark btn-lg",children:s.label}),(0,t.jsx)("a",{href:"#tiers",className:"btn btn-ghost btn-lg",children:i("common.seePlans")})]}),(0,t.jsx)(a.motion.div,{className:"hero-guarantee",...o(.55),children:i("hero.guarantee")}),(0,t.jsx)(a.motion.div,{className:"hero-calc",...o(.7),children:(0,t.jsx)(d,{})})]}),(0,t.jsx)("style",{children:`
        .hero {
          position: relative;
          padding: 132px 0 104px;
          text-align: center;
          overflow: hidden;
        }
        .hero-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--text-2);
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(8px);
          border: 1px solid var(--line-soft);
          padding: 8px 16px;
          border-radius: 999px;
          margin-bottom: 40px;
          box-shadow: var(--shadow-sm);
        }
        .hero-badge b {
          color: var(--text);
          font-weight: 700;
        }
        .hero-title {
          margin-bottom: 40px;
          text-wrap: balance;
        }
        .hero-sub {
          max-width: 580px;
          margin: 0 auto 52px;
        }
        .hero-cta {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .hero-guarantee {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 40px;
          font-size: 14px;
          color: var(--text-3);
        }
        .hero-calc {
          width: 100%;
          max-width: 560px;
          margin: 88px auto 0;
        }
        @media (max-width: 640px) {
          .hero {
            padding: 104px 0 64px;
          }
          .hero-cta {
            gap: 14px;
          }
          .hero-calc {
            margin-top: 64px;
          }
        }
      `})]})}],95854)},58234,e=>{"use strict";var t=e.i(43476),a=e.i(50974),r=e.i(68702),s=e.i(47133),i=e.i(17958);let n=[{title:"footer.colPlatform",links:[{label:"footer.howItEarns",href:"/#how"},{label:"footer.whatItPays",href:"/#earnings"},{label:"footer.plansPricing",href:"/#tiers"},{label:"footer.payoutProof",href:"/#payouts"},{label:"footer.faq",href:"/#faq"}]},{title:"footer.colLearn",links:[{label:"footer.gettingStarted",href:"/legal/getting-started"},{label:"footer.howEngineWorks",href:"/legal/how-it-works"},{label:"footer.plansExplained",href:"/legal/plans"},{label:"footer.limitsPotential",href:"/legal/account-limits"},{label:"footer.feeSchedule",href:"/legal/fees"}]},{title:"footer.colAccount",links:[{label:"footer.createAccount",href:"/login?mode=signup"},{label:"footer.signIn",href:"/login"},{label:"common.dashboard",href:"/dashboard"},{label:"common.deposit",href:"/deposit"},{label:"common.withdraw",href:"/withdraw"}]},{title:"footer.colLegal",links:[{label:"footer.terms",href:"/legal/terms"},{label:"footer.privacy",href:"/legal/privacy"},{label:"footer.cookies",href:"/legal/cookies"},{label:"footer.risk",href:"/legal/risk"},{label:"footer.disclosures",href:"/legal/disclosures"}]},{title:"footer.colPolicies",links:[{label:"footer.aml",href:"/legal/aml"},{label:"footer.acceptableUse",href:"/legal/acceptable-use"},{label:"footer.security",href:"/legal/security"},{label:"footer.withdrawalPolicy",href:"/legal/withdrawals"},{label:"footer.complaints",href:"/legal/complaints"}]}],o=["Binance","Kraken","OKX","Coinbase","Bybit","KuCoin","Bitfinex"];e.s(["Footer",0,function(){let e=(0,r.useT)(),l=(0,s.useAppConfig)(),c=(0,i.usePlanRows)().map(e=>e.cooldownHours).filter(e=>e>0),d=c.length?Math.min(...c):l.cooldownHours||6,p=c.length?Math.max(...c):l.cooldownHours||6,h=d===p?`${p}`:`${d}–${p}`,u=[{k:e("footer.factCommission"),v:e("footer.factCommissionV")},{k:e("footer.factDeposit"),v:`$${l.minDeposit.toLocaleString("en-US")}`},{k:e("footer.factWithdraw"),v:"$10"},{k:e("footer.factPause"),v:e("footer.factPauseV",{hours:h})},{k:e("footer.factPlans"),v:e("footer.factPlansV")}];return(0,t.jsx)("footer",{className:"gm-foot",children:(0,t.jsxs)("div",{className:"wrap",children:[(0,t.jsxs)("div",{className:"foot-grid",children:[(0,t.jsxs)("div",{className:"foot-brand",children:[(0,t.jsx)(a.Logo,{size:26}),(0,t.jsx)("p",{children:e("footer.about")})]}),n.map(a=>(0,t.jsxs)("div",{className:"foot-col",children:[(0,t.jsx)("h5",{children:e(a.title)}),a.links.map(a=>(0,t.jsx)("a",{href:a.href,children:e(a.label)},a.label))]},a.title))]}),(0,t.jsx)("dl",{className:"foot-facts",children:u.map(e=>(0,t.jsxs)("div",{children:[(0,t.jsx)("dt",{children:e.k}),(0,t.jsx)("dd",{children:e.v})]},e.k))}),(0,t.jsxs)("div",{className:"foot-partners",children:[(0,t.jsx)("span",{className:"fp-label",children:e("footer.venues")}),(0,t.jsx)("div",{className:"fp-logos",children:o.map(e=>(0,t.jsx)("span",{className:"fp-logo",children:e},e))})]}),(0,t.jsxs)("div",{className:"foot-note",children:[(0,t.jsx)("p",{children:e("footer.disclaimer")}),(0,t.jsxs)("p",{className:"foot-note-links",children:[(0,t.jsx)("a",{href:"/legal/risk",children:e("footer.shortRisk")}),(0,t.jsx)("a",{href:"/legal/terms",children:e("footer.shortTerms")}),(0,t.jsx)("a",{href:"/legal/privacy",children:e("footer.shortPrivacy")})]})]})]})})}])},62737,e=>{"use strict";var t=e.i(43476),a=e.i(49005),r=e.i(30200),s=e.i(68702),i=e.i(17958);e.s(["CompareTable",0,function(){let e=(0,s.useT)(),n=(0,i.usePlanRows)(),o=[{id:"min",label:e("compare.rowMin"),cell:e=>`$${e.minDeposit.toLocaleString("en-US")}`},{id:"engine",label:e("compare.rowEngine"),cell:e=>e.engine},{id:"daily",label:e("compare.rowDaily"),cell:t=>e("compare.daily",{pct:t.dailyPct})},{id:"firstDay",label:e("compare.rowFirstDay"),cell:t=>e("compare.firstDay",{pct:t.firstDayPct,mult:t.firstDayMult})},{id:"session",label:e("compare.rowSession"),cell:t=>e("compare.session",{min:t.sessionMin})},{id:"ceiling",label:e("compare.rowCeiling"),cell:t=>e("compare.ceiling",{x:t.ceilingX})},{id:"pause",label:e("compare.rowPause"),cell:t=>t.cooldownSec>0?e("compare.pause",{hours:t.cooldownHours}):e("compare.noPause")},{id:"wd",label:e("compare.rowWithdraw"),cell:t=>e(t.wdKey)},{id:"fee",label:e("compare.rowFee"),cell:t=>t.profitFeePct>0?e("compare.fee",{pct:t.profitFeePct}):e("compare.noFee")},{id:"early",label:e("compare.rowEarly"),cell:t=>e(t.early?"compare.included":"compare.excluded"),accent:e=>e.early},{id:"support",label:e("compare.rowSupport"),cell:t=>e("manager"===t.support?"compare.supportManager":"priority"===t.support?"compare.supportPriority":"compare.supportChat")}];return(0,t.jsxs)("section",{id:"compare",className:"section ctab-sec",children:[(0,t.jsxs)("div",{className:"wrap",children:[(0,t.jsxs)(a.Reveal,{className:"sec-head center",children:[(0,t.jsx)("h2",{className:"h2",children:e("compare.title")}),(0,t.jsx)("p",{className:"lead",children:e("compare.sub")})]}),(0,t.jsx)(a.Reveal,{className:"ctab-wrap",children:(0,t.jsxs)("div",{className:"ctab-grid",role:"table",style:{"--cols":n.length},children:[(0,t.jsxs)("div",{className:"ctab-row ctab-head",role:"row",children:[(0,t.jsx)("div",{className:"ctab-cell ctab-corner",role:"columnheader"}),n.map(e=>(0,t.jsx)("div",{className:`ctab-cell ctab-th ${e.featured?"feat":""} ${e.accent?"sov":""}`,role:"columnheader",children:e.name},e.key))]}),o.map(e=>(0,t.jsxs)("div",{className:"ctab-row",role:"row",children:[(0,t.jsx)("div",{className:"ctab-cell ctab-label",role:"rowheader",children:e.label}),n.map(a=>(0,t.jsx)("div",{className:`ctab-cell ${a.featured?"feat":""} ${a.accent?"sov":""}`,role:"cell",children:e.accent?.(a)?(0,t.jsxs)("span",{className:"ctab-yes",children:[(0,t.jsx)(r.Icon,{name:"check",size:16})," ",e.cell(a)]}):e.cell(a)},a.key))]},e.id))]})}),(0,t.jsx)("div",{className:"ctab-stack",children:n.map(e=>(0,t.jsxs)("div",{className:`ctab-card ${e.featured?"feat":""} ${e.accent?"sov":""}`,children:[(0,t.jsx)("div",{className:"ctab-card-nm",children:e.name}),(0,t.jsx)("dl",{children:o.map(a=>(0,t.jsxs)("div",{className:"ctab-card-row",children:[(0,t.jsx)("dt",{children:a.label}),(0,t.jsx)("dd",{children:a.cell(e)})]},a.id))})]},e.key))})]}),(0,t.jsx)("style",{children:`
        .ctab-sec { background: #fff; }
        .ctab-wrap { margin-top: 48px; border: 1px solid var(--line-soft); border-radius: var(--radius-card); overflow: hidden; }
        .ctab-grid { display: grid; }
        .ctab-row { display: grid; grid-template-columns: 1.3fr repeat(var(--cols), 1fr); }
        .ctab-row:not(:last-child) { border-bottom: 1px solid var(--line-soft); }
        .ctab-cell {
          padding: 14px 16px; font-size: 13.5px; color: var(--text-2);
          display: flex; align-items: center;
        }
        .ctab-cell:not(:first-child) { justify-content: center; text-align: center; border-left: 1px solid var(--line-soft); }
        .ctab-label { font-weight: 600; color: var(--text-3); font-size: 12.5px; background: var(--surface-1); }
        .ctab-head .ctab-cell { background: var(--surface-1); }
        .ctab-th { font-size: 15px; font-weight: 700; color: var(--text); justify-content: center; }
        .ctab-th.feat { color: var(--blue-strong); }
        .ctab-th.sov { color: #8a6400; }
        .ctab-cell.feat { background: var(--blue-soft); color: var(--text); }
        .ctab-cell.sov { background: #fffaf1; }
        .ctab-corner { background: var(--surface-1); }
        .ctab-yes { display: inline-flex; align-items: center; gap: 5px; color: var(--green); font-weight: 600; }
        .ctab-yes .material-symbols-rounded { color: var(--green); }

        .ctab-stack { display: none; }
        .ctab-card { border: 1px solid var(--line-soft); border-radius: var(--radius-card); padding: 20px; background: #fff; }
        .ctab-card + .ctab-card { margin-top: 14px; }
        .ctab-card.feat { border-color: var(--blue); }
        .ctab-card.sov { border-color: #e7c789; background: linear-gradient(180deg, #fffaf1 0%, #fff 42%); }
        .ctab-card-nm { font-size: 18px; font-weight: 700; margin-bottom: 12px; }
        .ctab-card-row { display: flex; justify-content: space-between; gap: 16px; padding: 9px 0; border-top: 1px solid var(--line-soft); }
        .ctab-card-row dt { font-size: 13px; color: var(--text-3); }
        .ctab-card-row dd { font-size: 13.5px; font-weight: 600; color: var(--text); text-align: right; }

        @media (max-width: 900px) {
          .ctab-wrap { display: none; }
          .ctab-stack { display: block; margin-top: 40px; }
        }
      `})]})}])},93836,e=>{"use strict";var t=e.i(43476),a=e.i(46932),r=e.i(72328),s=e.i(49005),i=e.i(68702),n=e.i(86062);let o=[{key:"Bank",labelKey:"earnings.rowBank",valueKey:"earnings.rowBankValue",width:5,hero:!1},{key:"Crypto",labelKey:"earnings.rowCrypto",valueKey:"earnings.rowCryptoValue",width:20,hero:!1},{key:"Gemini",labelKey:"earnings.rowGemini",valueKey:"earnings.rowGeminiValue",width:100,hero:!0}];e.s(["EarningsSection",0,function(){let e=(0,r.useReducedMotion)(),l=(0,i.useT)(),c=(0,n.activeTiers)(),d=c[c.length-1].dailyPct;return(0,t.jsxs)("section",{id:"earnings",className:"section cmp",children:[(0,t.jsxs)("div",{className:"wrap",children:[(0,t.jsxs)(s.Reveal,{className:"sec-head center",children:[(0,t.jsx)("h2",{className:"h2",children:l("earnings.title")}),(0,t.jsx)("p",{className:"lead",children:l("earnings.lead")})]}),(0,t.jsx)("div",{className:"cmp-bars",children:o.map((r,i)=>(0,t.jsxs)(s.Reveal,{delay:.12*i,className:`cmp-row ${r.hero?"cmp-hero":""}`,children:[(0,t.jsxs)("div",{className:"cmp-top",children:[(0,t.jsx)("span",{className:"cmp-label",children:l(r.labelKey)}),(0,t.jsx)("span",{className:"cmp-val",children:l(r.valueKey,{pct:d})})]}),(0,t.jsx)("div",{className:"cmp-track",children:(0,t.jsx)(a.motion.div,{className:"cmp-fill",initial:!e&&{width:0},whileInView:{width:`${r.width}%`},viewport:{once:!0,margin:"0px 0px -12% 0px"},transition:{duration:1.1,delay:.15+.12*i,ease:[.2,0,0,1]}})})]},r.key))}),(0,t.jsx)("p",{className:"cmp-note",children:l("earnings.note")})]}),(0,t.jsx)("style",{children:`
        .cmp { background: var(--surface-1); }
        .cmp-bars {
          max-width: 900px;
          margin: 56px auto 0;
          display: flex;
          flex-direction: column;
          gap: 34px;
        }
        .cmp-top {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 12px;
        }
        .cmp-label {
          font-size: 17px;
          font-weight: 500;
          color: var(--text-2);
        }
        .cmp-val {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-3);
          font-variant-numeric: tabular-nums;
        }
        .cmp-row.cmp-hero {
          margin-top: 14px;
          padding-top: 26px;
          border-top: 1px solid var(--line-soft);
        }
        .cmp-row.cmp-hero .cmp-label { color: var(--text); font-weight: 600; font-size: 19px; }
        .cmp-row.cmp-hero .cmp-val { color: var(--text); font-size: 20px; }
        .cmp-track {
          height: 22px;
          border-radius: 999px;
          background: #eceff3;
          overflow: hidden;
        }
        .cmp-row.cmp-hero .cmp-track { height: 34px; }
        .cmp-fill {
          height: 100%;
          border-radius: 999px;
          background: #c7ccd3;
        }
        .cmp-row.cmp-hero .cmp-fill {
          background: var(--grad-gemini);
          box-shadow: 0 6px 20px rgba(66,133,244,.22);
        }
        .cmp-note {
          text-align: center;
          margin-top: 40px;
          font-size: 13px;
          color: var(--text-3);
        }
        @media (max-width: 640px) {
          .cmp-bars { gap: 26px; }
          .cmp-label, .cmp-row.cmp-hero .cmp-label { font-size: 15px; }
          .cmp-val, .cmp-row.cmp-hero .cmp-val { font-size: 15px; }
        }
      `})]})}])},38702,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(88653),s=e.i(46932),i=e.i(72328),n=e.i(49005),o=e.i(30200),l=e.i(16148),c=e.i(68702);e.s(["Faq",0,function(){let e=(0,c.useT)(),[d,p]=(0,a.useState)(null),h=(0,i.useReducedMotion)();return(0,t.jsxs)("section",{id:"faq",className:"section",children:[(0,t.jsxs)("div",{className:"wrap faq-wrap",children:[(0,t.jsx)(n.Reveal,{className:"sec-head center",children:(0,t.jsx)("h2",{className:"h2",children:e("faq.title")})}),(0,t.jsx)("div",{className:"faq-list",children:l.FAQ_KEYS.map((a,i)=>{let n=d===i;return(0,t.jsxs)("div",{className:`faq-item ${n?"open":""}`,children:[(0,t.jsxs)("button",{className:"faq-q",onClick:()=>p(n?null:i),"aria-expanded":n,children:[(0,t.jsx)("span",{children:e(`faq.${a}.q`)}),(0,t.jsx)(o.Icon,{name:n?"remove":"add",size:22,className:"faq-sign"})]}),(0,t.jsx)(r.AnimatePresence,{initial:!1,children:n&&(0,t.jsx)(s.motion.div,{className:"faq-a-wrap",initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.35*!h,ease:[.2,0,0,1]},children:(0,t.jsx)("p",{className:"faq-a",children:e(`faq.${a}.a`)})})})]},a)})})]}),(0,t.jsx)("style",{children:`
        .faq-wrap {
          max-width: 820px;
        }
        .faq-list {
          margin-top: 44px;
          border-top: 1px solid var(--line-soft);
        }
        .faq-item {
          border-bottom: 1px solid var(--line-soft);
        }
        .faq-q {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 24px 8px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--text);
          transition: color 0.2s var(--ease);
        }
        .faq-q:hover {
          color: var(--blue);
        }
        .faq-sign {
          flex-shrink: 0;
          color: var(--text-3);
          transition: color 0.2s var(--ease);
        }
        .faq-q:hover .faq-sign {
          color: var(--blue);
        }
        .faq-a-wrap {
          overflow: hidden;
        }
        .faq-a {
          padding: 0 8px 26px;
          color: var(--text-3);
          font-size: 16px;
          line-height: 1.65;
          max-width: 680px;
        }
      `})]})}])},71962,e=>{"use strict";var t=e.i(43476),a=e.i(49005),r=e.i(59351),s=e.i(30200),i=e.i(50974),n=e.i(91572),o=e.i(68702);let l=[{icon:"person_add",key:"finalCta.step1"},{icon:"account_balance_wallet",key:"finalCta.step2"},{icon:"spark",key:"finalCta.step3"}];e.s(["FinalCta",0,function(){let e=(0,n.usePrimaryCta)(),c=(0,o.useT)();return(0,t.jsxs)("section",{className:"section final-sec",children:[(0,t.jsx)("div",{className:"wrap",children:(0,t.jsxs)(a.Reveal,{className:"final",children:[(0,t.jsxs)("h2",{className:"h2 final-title",children:[c("finalCta.titleBefore")," ",(0,t.jsx)("span",{className:"final-accent",children:c("finalCta.titleAccent")})]}),(0,t.jsx)("p",{className:"lead final-lead",children:c("finalCta.lead")}),(0,t.jsx)("div",{className:"fsteps",children:l.map((e,a)=>(0,t.jsxs)("div",{className:"fstep",children:[(0,t.jsx)("span",{className:"fstep-ic",children:"spark"===e.icon?(0,t.jsx)(i.Spark,{size:26}):(0,t.jsx)(s.Icon,{name:e.icon,size:26})}),(0,t.jsx)("span",{className:"fstep-n",children:c("finalCta.step",{n:a+1})}),(0,t.jsx)("span",{className:"fstep-t",children:c(e.key)})]},e.key))}),(0,t.jsx)(r.StarBorder,{children:(0,t.jsx)("a",{href:e.href,className:"btn btn-dark btn-lg final-cta",children:e.label})}),(0,t.jsx)("div",{className:"final-guarantee",children:c("finalCta.guarantee")})]})}),(0,t.jsx)("style",{children:`
        .final-sec { padding-top: 40px; }
        .final {
          position: relative;
          text-align: center;
          background:
            radial-gradient(80% 120% at 50% 0%, rgba(66,133,244,0.08), transparent 60%),
            var(--surface-1);
          border: 1px solid var(--line-soft);
          border-radius: var(--radius-lg);
          padding: 80px 32px 72px;
          overflow: hidden;
        }
        .final-title { margin-bottom: 14px; }
        .final-accent { color: var(--blue); }
        .final-lead { margin: 0 auto; }

        /* Three-step path */
        .fsteps {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 720px;
          margin: 52px auto 48px;
        }
        .fstep {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .fstep-ic {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: var(--blue);
          background: #fff;
          border: 1px solid var(--line-soft);
          box-shadow: var(--shadow-sm);
          margin-bottom: 16px;
        }
        .fstep-n {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-3);
        }
        .fstep-t {
          font-size: 17px;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--text);
          margin-top: 4px;
        }
        .final-cta { margin: 0 auto; }
        .final-guarantee {
          margin-top: 24px;
          font-size: 14px;
          color: var(--text-3);
        }

        @media (max-width: 760px) {
          .fsteps { grid-template-columns: 1fr; gap: 28px; max-width: 300px; margin: 44px auto 40px; }
        }
        @media (max-width: 640px) {
          .final { padding: 60px 22px 56px; }
        }
      `})]})}])},54146,e=>{"use strict";var t=e.i(43476),a=e.i(49005),r=e.i(68702),s=e.i(17958);e.s(["HowSection",0,function(){let e=(0,r.useT)(),i=(0,s.usePlanRows)().map(e=>e.profitFeePct),n=100-(i.length?Math.max(...i):0),o=100-(i.length?Math.min(...i):0),l=n===o?`${o}%`:`${n}–${o}%`;return(0,t.jsxs)("section",{id:"how",className:"section",children:[(0,t.jsxs)("div",{className:"wrap",children:[(0,t.jsxs)(a.Reveal,{className:"sec-head center",children:[(0,t.jsx)("h2",{className:"h2",children:e("how.title")}),(0,t.jsx)("p",{className:"lead",children:e("how.lead")})]}),(0,t.jsxs)("div",{className:"how-grid",children:[(0,t.jsxs)(a.Reveal,{className:"how-card card-soft",children:[(0,t.jsxs)("div",{className:"hv hv-spread",children:[(0,t.jsxs)("div",{className:"hv-ex",children:[(0,t.jsxs)("span",{className:"hv-ex-nm",children:[(0,t.jsx)("i",{className:"hv-mark m-b"}),"Binance"]}),(0,t.jsx)("span",{className:"hv-ex-pr",children:"$2,401.20"})]}),(0,t.jsxs)("div",{className:"hv-ex",children:[(0,t.jsxs)("span",{className:"hv-ex-nm",children:[(0,t.jsx)("i",{className:"hv-mark m-g"}),"Kraken"]}),(0,t.jsx)("span",{className:"hv-ex-pr",children:"$2,403.85"})]}),(0,t.jsx)("span",{className:"hv-cap",children:e("how.captured",{amount:"$2.65"})})]}),(0,t.jsx)("h3",{className:"how-title",children:e("how.card1Title")}),(0,t.jsx)("p",{className:"how-text",children:e("how.card1Text")})]}),(0,t.jsxs)(a.Reveal,{delay:.1,className:"how-card card-soft",children:[(0,t.jsxs)("div",{className:"hv hv-pool",children:[(0,t.jsxs)("div",{className:"hv-avs",children:[["AM","SR","DK","LO","MT"].map(e=>(0,t.jsx)("span",{className:"hv-av",children:e},e)),(0,t.jsx)("span",{className:"hv-more",children:"+8k"})]}),(0,t.jsx)("div",{className:"hv-bar",children:(0,t.jsx)("i",{style:{width:"84%"}})}),(0,t.jsx)("span",{className:"hv-lbl",children:e("how.pool")})]}),(0,t.jsx)("h3",{className:"how-title",children:e("how.card2Title")}),(0,t.jsx)("p",{className:"how-text",children:e("how.card2Text")})]}),(0,t.jsxs)(a.Reveal,{delay:.2,className:"how-card card-soft",children:[(0,t.jsxs)("div",{className:"hv hv-fee",children:[(0,t.jsxs)("div",{className:"hv-split",children:[(0,t.jsx)("span",{className:"hv-keep",children:e("how.youKeep")}),(0,t.jsx)("span",{className:"hv-cut","aria-label":e("how.feeLabel")})]}),(0,t.jsxs)("div",{className:"hv-legend",children:[(0,t.jsxs)("span",{children:[(0,t.jsx)("b",{children:l})," ",e("how.keepPct")]}),(0,t.jsx)("span",{className:"hv-legend-sub",children:e("how.feeSub")})]})]}),(0,t.jsx)("h3",{className:"how-title",children:e("how.card3Title")}),(0,t.jsx)("p",{className:"how-text",children:e("how.card3Text")})]})]})]}),(0,t.jsx)("style",{children:`
        .how-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 56px;
        }
        .how-card { padding: 28px 30px 32px; }
        .how-title {
          font-size: 20px; font-weight: 600; letter-spacing: -0.015em;
          margin-bottom: 8px; line-height: 1.25;
        }
        .how-text { color: var(--text-3); font-size: 15px; line-height: 1.55; }

        /* Shared mini-graphic frame */
        .hv {
          height: 132px;
          margin-bottom: 24px;
          padding: 18px;
          border-radius: 16px;
          background: var(--surface-1);
          border: 1px solid var(--line-soft);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* 1 — Spread */
        .hv-spread { gap: 9px; }
        .hv-ex {
          display: flex; align-items: center; justify-content: space-between;
          background: #fff; border: 1px solid var(--line-soft);
          border-radius: 10px; padding: 9px 12px;
        }
        .hv-ex-nm {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 13px; font-weight: 600; color: var(--text-2);
        }
        .hv-mark { width: 9px; height: 9px; border-radius: 3px; flex-shrink: 0; }
        .hv-mark.m-b { background: var(--blue); }
        .hv-mark.m-g { background: var(--green); }
        .hv-ex-pr { font-size: 13px; font-weight: 700; color: var(--text); font-variant-numeric: tabular-nums; }
        .hv-cap {
          align-self: flex-end;
          font-size: 12px; font-weight: 700; color: var(--green);
          background: #e6f4ea; padding: 3px 10px; border-radius: 999px;
        }

        /* 2 — Pool */
        .hv-pool { gap: 14px; }
        .hv-avs { display: flex; align-items: center; }
        .hv-av {
          width: 34px; height: 34px; border-radius: 50%;
          display: grid; place-items: center;
          font-size: 12px; font-weight: 600; color: #fff;
          background: #3c4043; border: 2px solid var(--surface-1);
          margin-left: -8px;
        }
        .hv-av:first-child { margin-left: 0; }
        .hv-more {
          margin-left: 10px; font-size: 13px; font-weight: 700; color: var(--text-2);
        }
        .hv-bar {
          height: 8px; border-radius: 999px; background: var(--surface-3); overflow: hidden;
        }
        .hv-bar i { display: block; height: 100%; border-radius: 999px; background: var(--blue); }
        .hv-lbl { font-size: 12px; font-weight: 500; color: var(--text-3); }

        /* 3 — Fee */
        .hv-fee { gap: 14px; }
        .hv-split {
          /* flex-shrink: 0 is load-bearing: .hv is a fixed 132px, so any growth in
             the legend below used to be paid for by squashing this bar until the
             word inside it was clipped. */
          display: flex; gap: 4px; height: 42px; flex-shrink: 0;
          border-radius: 10px; overflow: hidden;
        }
        .hv-keep {
          flex: 1; display: grid; place-items: center;
          font-size: 13px; font-weight: 700; color: var(--text);
          background: var(--blue-soft);
        }
        .hv-cut {
          flex: 0 0 6px;
          background: var(--surface-3);
        }
        .hv-legend { display: flex; flex-direction: column; gap: 2px; font-size: 13px; line-height: 1.35; color: var(--text-3); }
        .hv-legend-sub { font-size: 12.5px; }
        .hv-legend b { color: var(--text); font-weight: 700; }

        @media (max-width: 900px) {
          .how-grid { grid-template-columns: 1fr; gap: 16px; }
        }
      `})]})}])},48438,e=>{"use strict";var t=e.i(43476),a=e.i(37902),r=e.i(71645),s=e.i(42561),i=e.i(68702);function n(){var e;let t=new Date,a=Math.floor(t.getTime()/864e5),r=(e=0x9e3779b1*a,function(){e|=0;let t=Math.imul((e=e+0x6d2b79f5|0)^e>>>15,1|e);return(((t=t+Math.imul(t^t>>>7,61|t)^t)^t>>>14)>>>0)/0x100000000}),s=(60*t.getHours()+t.getMinutes()+t.getSeconds()/60)/1440,i=Math.pow(s,1.25),n=900+Math.floor(350*r()),o=52e4+Math.floor(26e4*r()),l=23400+a%365*14+Math.floor(40*r()),c=60*t.getMinutes()+t.getSeconds(),d=.5*Math.sin(c/47)+.5*Math.sin(c/13);return{paidPeople:Math.floor(n*i),withdrawn:Math.floor(o*i+180*d),sessions:Math.floor(980+260*Math.sin((s-.3)*Math.PI*2)+9*d+60*r()),traders:l+Math.floor(120*i)}}e.s(["LiveStats",0,function(){let e=(0,i.useT)(),[o,l]=(0,r.useState)({sessions:0,paidPeople:0,withdrawn:0,traders:0});(0,r.useEffect)(()=>{l(n());let e=setInterval(()=>l(n()),5e3);return()=>clearInterval(e)},[]);let c=[{value:o.sessions,prefix:"",label:e("stats.sessions")},{value:o.paidPeople,prefix:"",label:e("stats.paid")},{value:o.withdrawn,prefix:"$",label:e("stats.withdrawn")},{value:o.traders,prefix:"",label:e("stats.traders")}];return(0,t.jsxs)("section",{id:"stats",className:"jsx-3991a63644d7ae46 ls",children:[(0,t.jsx)("div",{className:"jsx-3991a63644d7ae46 wrap",children:(0,t.jsx)("div",{className:"jsx-3991a63644d7ae46 ls-grid",children:c.map((e,a)=>(0,t.jsxs)("div",{className:"jsx-3991a63644d7ae46 ls-cell",children:[(0,t.jsx)("div",{className:"jsx-3991a63644d7ae46 ls-num tnum",children:(0,t.jsx)(s.CountUp,{value:e.value,prefix:e.prefix})}),(0,t.jsx)("div",{className:"jsx-3991a63644d7ae46 ls-label",children:e.label})]},a))})}),(0,t.jsx)(a.default,{id:"3991a63644d7ae46",children:".ls.jsx-3991a63644d7ae46{padding:56px 0}.ls-grid.jsx-3991a63644d7ae46{grid-template-columns:repeat(4,1fr);gap:24px;display:grid}.ls-cell.jsx-3991a63644d7ae46{text-align:center;padding:0 12px}.ls-num.jsx-3991a63644d7ae46{letter-spacing:-.02em;color:var(--text);font-size:max(34px,min(4vw,52px));font-weight:700;line-height:1}.ls-label.jsx-3991a63644d7ae46{color:var(--text-3);margin-top:12px;font-size:15px;font-weight:500}@media (width<=720px){.ls-grid.jsx-3991a63644d7ae46{grid-template-columns:1fr 1fr;gap:36px 12px}}"})]})}])},8905,e=>{"use strict";var t=e.i(43476),a=e.i(49005),r=e.i(30200),s=e.i(91572),i=e.i(99686),n=e.i(86062),o=e.i(68702),l=e.i(47133),c=e.i(17958);e.s(["Tiers",0,function(){let e=(0,o.useT)(),d=(0,l.useAppConfig)(),{loggedIn:p}=(0,s.usePrimaryCta)(),h=(0,i.useTier)(),u=(0,c.usePlanRows)(),f=e=>p?(0,n.depositHref)(e):`/login?mode=signup&amount=${Math.max(n.ENTRY_MIN,Math.round(e))}`,m=p?h.index:-1,x=e=>Math.max(0,n.TIER_MIN[e]-h.deposited);return(0,t.jsxs)("section",{id:"tiers",className:"section tiers-sec",children:[(0,t.jsxs)("div",{className:"wrap",children:[(0,t.jsxs)(a.Reveal,{className:"sec-head center",children:[(0,t.jsx)("h2",{className:"h2",children:e("tiers.title")}),(0,t.jsx)("p",{className:"lead",children:e("tiers.lead",{hours:d.cooldownHours||6})})]}),(0,t.jsx)("div",{className:"tiers-grid",children:u.map((s,i)=>(0,t.jsx)(a.Reveal,{delay:.06*i,className:"tier-cell",children:(0,t.jsxs)("div",{className:`tier ${s.featured?"feat":""} ${s.accent?"sov":""}`,children:["chosen"===s.badge&&(0,t.jsx)("span",{className:"tier-badge chosen",children:e("tiers.badgeChosen")}),"top"===s.badge&&(0,t.jsx)("span",{className:"tier-badge top",children:e("tiers.badgeTop")}),(0,t.jsx)("div",{className:"tier-nm",children:s.name}),(0,t.jsxs)("div",{className:"tier-price tnum",children:[`$${s.minDeposit.toLocaleString("en-US")}`,(0,t.jsx)("small",{children:e("tiers.minimum")})]}),(0,t.jsx)("div",{className:"tier-band",children:(0,c.depositBand)(s)}),(0,t.jsx)("div",{className:"tier-yld",children:e("tiers.yield",{x:s.ceilingX})}),(0,t.jsx)("ul",{className:"tier-feats",children:(0,c.planCardFeatures)(s,e).map(e=>(0,t.jsxs)("li",{children:[(0,t.jsx)(r.Icon,{name:"check",size:18,className:"tier-check"}),e.text]},e.id))}),p?i===m?(0,t.jsxs)("span",{className:"tier-cta tier-current","aria-current":"true",children:[(0,t.jsx)(r.Icon,{name:"check_circle",size:18,fill:1})," ",e("tiers.currentPlan")]}):i<m?(0,t.jsxs)("span",{className:"tier-cta tier-passed",children:[(0,t.jsx)(r.Icon,{name:"lock_open",size:17})," ",e("tiers.unlocked")]}):(0,t.jsx)("a",{href:f(x(s.key)),className:"btn btn-dark tier-cta",children:e("tiers.depositMore",{amount:(0,n.depositAsk)(x(s.key)).toLocaleString("en-US")})}):(0,t.jsx)("a",{href:f(n.TIER_MIN[s.key]),className:"btn btn-dark tier-cta",children:e("common.getStarted")})]})},s.key))})]}),(0,t.jsx)("style",{children:`
        .tiers-sec { background: var(--surface-1); }
        /* Three cards on top, two centred below — wider cards than a flat 5-up row. */
        .tiers-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          margin-top: 56px;
        }
        .tier-cell { flex: 0 1 calc((100% - 2 * 16px) / 3); min-width: 0; }
        .tier {
          position: relative;
          display: flex;
          flex-direction: column;
          background: #fff;
          border: 1px solid var(--line-soft);
          border-radius: var(--radius-card);
          padding: 28px 22px;
          height: 100%;
          box-shadow: var(--shadow-sm);
          transition: box-shadow .3s var(--ease);
        }
        .tier:hover { box-shadow: var(--shadow-md); }
        .tier.feat {
          border-color: transparent;
          box-shadow: var(--shadow-md);
        }
        .tier.feat::before {
          content: "";
          position: absolute; inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: var(--grad-gemini, linear-gradient(120deg, #4285f4, var(--blue-strong)));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          pointer-events: none;
        }
        /* Sovereign: warm accent ring + a faint warm wash — the top of the ladder. */
        .tier.sov {
          border-color: #e7c789;
          background: linear-gradient(180deg, #fffaf1 0%, #ffffff 42%);
          box-shadow: var(--shadow-md);
        }
        .tier-badge {
          position: absolute; top: -12px; left: 22px;
          font-size: 10.5px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase;
          padding: 5px 11px; border-radius: 999px;
        }
        .tier-badge.chosen { color: #fff; background: var(--text, #202124); }
        .tier-badge.top { color: #5b4300; background: #f6d989; }
        .tier-nm {
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--text-3);
        }
        .tier-price {
          font-size: 34px; font-weight: 700; letter-spacing: -0.02em;
          margin: 10px 0 2px; display: flex; align-items: baseline; gap: 7px;
        }
        .tier-price small { font-size: 12px; font-weight: 500; color: var(--text-3); }
        .tier-band { font-size: 12px; color: var(--text-3); }
        .tier-yld { font-size: 14px; font-weight: 600; color: var(--blue); margin-top: 6px; }
        .tier-feats {
          list-style: none; display: grid; gap: 11px;
          margin: 20px 0 24px; align-content: start;
        }
        .tier-feats li {
          display: flex; gap: 9px; font-size: 13.5px; color: var(--text-2); line-height: 1.4;
        }
        .tier-feats .tier-check { color: var(--green); flex-shrink: 0; margin-top: 1px; }
        .tier-cta { width: 100%; margin-top: auto; }
        .tier-current, .tier-passed {
          display: inline-flex; align-items: center; justify-content: center; gap: 7px;
          padding: 12px 18px; border-radius: 999px; font-size: 14px; font-weight: 600; cursor: default;
        }
        .tier-current { color: var(--green); background: #e6f4ea; border: 1px solid #cde9d6; }
        .tier-current .material-symbols-rounded { color: var(--green); }
        .tier-passed { color: var(--text-3); background: var(--surface-1); border: 1px solid var(--line-soft); }
        .tier-passed .material-symbols-rounded { color: var(--text-3); }

        /* 3 → 2 → 1. Odd card on each row centres on its own. */
        @media (max-width: 1100px) { .tier-cell { flex-basis: calc((100% - 16px) / 2); } }
        /* Five cards two-up leave Sovereign alone on the last row (2 + 2 + 1). It
           takes the whole row instead, its list in two columns, so the row reads as
           the top of the ladder rather than a card that fell off the grid. */
        @media (max-width: 1100px) and (min-width: 561px) {
          .tier-cell:last-child:nth-child(odd) { flex-basis: 100%; }
          .tier-cell:last-child:nth-child(odd) .tier-feats { grid-template-columns: 1fr 1fr; column-gap: 24px; }
        }
        @media (max-width: 560px) { .tier-cell { flex-basis: 100%; } }
      `})]})}])},2271,e=>{"use strict";var t=e.i(43476),a=e.i(49005),r=e.i(68702);let s=[{name:"Marcus T.",flag:"🇩🇪",country:"Germany",amount:1340,net:"TRC20",stars:5,reviewKey:"payouts.review1"},{name:"Sofia R.",flag:"🇪🇸",country:"Spain",amount:3900,net:"BEP20",stars:5,reviewKey:"payouts.review2"},{name:"Mia K.",flag:"🇸🇪",country:"Sweden",amount:940,net:"Solana",stars:4.5,reviewKey:"payouts.review3"},{name:"David K.",flag:"🇬🇧",country:"UK",amount:1610,net:"ERC20",stars:5,reviewKey:"payouts.review4"},{name:"Liam O.",flag:"🇮🇪",country:"Ireland",amount:2650,net:"TRC20",stars:5,reviewKey:"payouts.review5"},{name:"Aisha M.",flag:"🇦🇪",country:"UAE",amount:1180,net:"Polygon",stars:4.5,reviewKey:"payouts.review6"},{name:"Emma L.",flag:"🇫🇷",country:"France",amount:1490,net:"ERC20",stars:5,reviewKey:"payouts.review7"},{name:"Noah B.",flag:"🇳🇱",country:"Netherlands",amount:690,net:"BEP20",stars:4,reviewKey:"payouts.review8"},{name:"Priya N.",flag:"🇸🇬",country:"Singapore",amount:3450,net:"TRC20",stars:5,reviewKey:"payouts.review9"},{name:"Hannah S.",flag:"🇨🇦",country:"Canada",amount:820,net:"Polygon",stars:4.5,reviewKey:"payouts.review10"},{name:"Yuki T.",flag:"🇯🇵",country:"Japan",amount:1720,net:"ERC20",stars:5,reviewKey:"payouts.review11"},{name:"Omar H.",flag:"🇶🇦",country:"Qatar",amount:2240,net:"BEP20",stars:4.5,reviewKey:"payouts.review12"}];function i({value:e,t:a}){return(0,t.jsx)("span",{className:"pm-stars","aria-label":a("payouts.stars",{value:e}),children:[1,2,3,4,5].map(a=>{let r=Math.min(1,Math.max(0,e-a+1));return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",width:"15",height:"15","aria-hidden":!0,children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:`st${a}-${Math.round(10*e)}`,children:[(0,t.jsx)("stop",{offset:`${100*r}%`,stopColor:"currentColor"}),(0,t.jsx)("stop",{offset:`${100*r}%`,stopColor:"transparent"})]})}),(0,t.jsx)("path",{d:"M12 3.6l2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75-5.2 2.75 1-5.8-4.2-4.1 5.8-.85z",fill:`url(#st${a}-${Math.round(10*e)})`,stroke:"currentColor",strokeWidth:"1.1",strokeLinejoin:"round"})]},a)})})}function n({p:e,t:a}){return(0,t.jsxs)("figure",{className:"pm-card",children:[(0,t.jsxs)("header",{className:"pm-head",children:[(0,t.jsxs)("div",{className:"pm-who",children:[(0,t.jsx)("span",{className:"pm-name",children:e.name}),(0,t.jsx)("span",{className:"pm-flag",children:e.flag})]}),(0,t.jsx)(i,{value:e.stars,t:a})]}),(0,t.jsx)("blockquote",{className:"pm-review",children:a(e.reviewKey)}),(0,t.jsxs)("figcaption",{className:"pm-sub",children:[a("payouts.withdrew")," ",(0,t.jsxs)("b",{children:["$",e.amount.toLocaleString("en-US")]}),(0,t.jsxs)("span",{className:"pm-net",children:["· ",e.net]})]})]})}function o({items:e,reverse:a,t:r}){return(0,t.jsx)("div",{className:"pm-row",children:(0,t.jsx)("div",{className:`pm-track ${a?"rev":""}`,children:[0,1].map(a=>(0,t.jsx)("div",{className:"pm-group","aria-hidden":1===a,children:e.map((e,s)=>(0,t.jsx)(n,{p:e,t:r},a+"-"+s))},a))})})}e.s(["WithdrawalsProof",0,function(){let e=(0,r.useT)(),i=s.slice(0,6),n=s.slice(6);return(0,t.jsxs)("section",{id:"payouts",className:"section pm",children:[(0,t.jsx)("div",{className:"wrap",children:(0,t.jsxs)(a.Reveal,{className:"sec-head center",children:[(0,t.jsx)("h2",{className:"h2",children:e("payouts.title")}),(0,t.jsx)("p",{className:"lead",children:e("payouts.lead")})]})}),(0,t.jsxs)(a.Reveal,{className:"pm-rows",delay:.1,children:[(0,t.jsx)(o,{items:i,t:e}),(0,t.jsx)(o,{items:n,reverse:!0,t:e})]}),(0,t.jsx)("style",{children:`
        .pm-rows {
          margin-top: 52px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
        }
        .pm-row { overflow: hidden; }
        .pm-track {
          display: flex;
          width: max-content;
          gap: 18px;
          animation: pm-scroll 46s linear infinite;
        }
        .pm-track.rev { animation-direction: reverse; }
        .pm-group { display: flex; gap: 18px; }
        @keyframes pm-scroll { to { transform: translateX(calc(-50% - 9px)); } }
        @media (prefers-reduced-motion: reduce) {
          .pm-track { animation: none; }
        }

        /* A review needs a column and a fixed width — the old row was one line of
           text and could be as wide as it liked. */
        .pm-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 340px;
          padding: 18px 20px;
          border: 1px solid var(--line-soft);
          border-radius: 18px;
          background: #fff;
          box-shadow: var(--shadow-sm);
          flex-shrink: 0;
        }
        .pm-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .pm-who { display: flex; align-items: center; gap: 7px; min-width: 0; }
        .pm-name { font-size: 15px; font-weight: 600; color: var(--text); }
        .pm-flag { font-size: 14px; }
        .pm-stars { display: flex; gap: 2px; color: #f5a623; flex-shrink: 0; }
        .pm-review {
          margin: 0;
          font-size: 13.5px;
          line-height: 1.55;
          color: var(--text-2);
          /* Three lines on every card, so the two rows keep an even edge whatever
             the review says. */
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .pm-sub {
          font-size: 12.5px;
          color: var(--text-2);
          padding-top: 11px;
          border-top: 1px solid var(--line-soft);
        }
        .pm-sub b { color: var(--text); font-weight: 700; }
        .pm-net { color: var(--text-3); margin-left: 2px; }
      `})]})}])},42561,e=>{"use strict";var t=e.i(43476),a=e.i(71645);class r{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>e.finished))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let a=0;a<this.animations.length;a++)this.animations[a][e]=t}attachTimeline(e){let t=this.animations.map(t=>t.attachTimeline(e));return()=>{t.forEach((e,t)=>{e&&e(),this.animations[t].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return s(this.animations,"duration")}get iterationDuration(){return s(this.animations,"iterationDuration")}runAll(e){this.animations.forEach(t=>t[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function s(e,t){let a=0;for(let r=0;r<e.length;r++){let s=e[r][t];null!==s&&s>a&&(a=s)}return a}class i extends r{then(e,t){return this.finished.finally(e).then(()=>{})}}var n=e.i(33887),o=e.i(86427),l=e.i(28409),c=e.i(83411),d=e.i(15923),p=e.i(97307),h=e.i(21748),u=e.i(15932),f=e.i(83920),m=e.i(63074),x=e.i(65566),g=e.i(30151),v=e.i(93544);function b(e,t){var a;let r;return(0,v.isEasingArray)(e)?e[a=e.length,((t-0)%(r=a-0)+r)%r+0]:e}var w=e.i(49652);function y(e){return"object"==typeof e&&!Array.isArray(e)}function j(e,t,a,r){return null==e?[]:"string"==typeof e&&y(t)?(0,w.resolveElements)(e,a,r):e instanceof NodeList?Array.from(e):Array.isArray(e)?e.filter(e=>null!=e):[e]}function N(e,t,a,r){return"number"==typeof t?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):"<"===t?a:t.startsWith("<")?Math.max(0,a+parseFloat(t.slice(1))):r.get(t)??e}var k=e.i(706);function S(e,t){return e.at!==t.at?e.at-t.at:null===e.value?1:null===t.value?-1:0}function _(e,t){return t.has(e)||t.set(e,{}),t.get(e)}function z(e,t){return t[e]||(t[e]=[]),t[e]}let R=e=>"number"==typeof e,C=e=>e.every(R);var M=e.i(68705),T=e.i(72094),A=e.i(72323),E=e.i(89026),P=e.i(36331),F=e.i(75737),I=e.i(86783),$=e.i(30162),q=e.i(17218);class K extends q.VisualElement{constructor(){super(...arguments),this.type="object"}readValueFromInstance(e,t){if(t in e){let a=e[t];if("string"==typeof a||"number"==typeof a)return a}}getBaseTargetFromProps(){}removeValueFromRenderState(e,t){delete t.output[e]}measureInstanceViewportBox(){return(0,$.createBox)()}build(e,t){Object.assign(e.output,t)}renderInstance(e,{output:t}){Object.assign(e,t)}sortInstanceNodePosition(){return 0}}function O(e){let t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},a=(0,E.isSVGElement)(e)&&!(0,P.isSVGSVGElement)(e)?new F.SVGVisualElement(t):new I.HTMLVisualElement(t);a.mount(e),T.visualElementStore.set(e,a)}function V(e){let t=new K({presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}});t.mount(e),T.visualElementStore.set(e,t)}function L(e,t,a,r){let s=[];if((0,c.isMotionValue)(e)||"number"==typeof e||"string"==typeof e&&!y(t))s.push((0,M.animateSingleValue)(e,y(t)&&t.default||t,a&&a.default||a));else{if(null==e)return s;let i=j(e,t,r),n=i.length;(0,x.invariant)(!!n,"No valid elements provided.","no-valid-elements");for(let e=0;e<n;e++){let r=i[e],o=r instanceof Element?O:V;T.visualElementStore.has(r)||o(r);let l=T.visualElementStore.get(r),c={...a};"delay"in c&&"function"==typeof c.delay&&(c.delay=c.delay(e,n)),s.push(...(0,A.animateTarget)(l,{...t,transition:c},{}))}}return s}let B=function(e={}){let{scope:t,reduceMotion:a,skipAnimations:r}=e;return function(e,s,v){var w;let y,R=[],M={};if(void 0!==a&&(M.reduceMotion=a),void 0!==r&&(M.skipAnimations=r),Array.isArray(e)&&e.some(Array.isArray)){let a,{onComplete:r,...i}=s||{};"function"==typeof r&&(y=r),w={...M,...i},a=[],(function(e,{defaultTransition:t={},...a}={},r,s){let i=t.duration||.3,o=new Map,l=new Map,v={},w=new Map,y=0,R=0,M=0;for(let a=0;a<e.length;a++){let o=e[a];if("string"==typeof o){w.set(o,R);continue}if(!Array.isArray(o)){w.set(o.name,N(R,o.at,y,w));continue}let[f,S,E={}]=o;void 0!==E.at&&(R=N(R,E.at,y,w));let P=0,F=(e,a,r,o=0,l=0)=>{var c;let f=Array.isArray(c=e)?c:[c],{delay:v=0,times:w=(0,d.defaultOffset)(f),type:y=t.type||"keyframes",repeat:j,repeatType:N,repeatDelay:S=0,..._}=a,{ease:z=t.ease||"easeOut",duration:T}=a,A="function"==typeof v?v(o,l):v,E=f.length,F=(0,p.isGenerator)(y)?y:s?.[y||"keyframes"];if(E<=2&&F){let e=100;2===E&&C(f)&&(e=Math.abs(f[1]-f[0]));let a={...t,..._};void 0!==T&&(a.duration=(0,m.secondsToMilliseconds)(T));let r=(0,h.createGeneratorEasing)(a,e,F);z=r.ease,T=r.duration}T??(T=i);let I=R+A;1===w.length&&0===w[0]&&(w[1]=1);let $=w.length-f.length;if($>0&&(0,u.fillOffset)(w,$),1===f.length&&f.unshift(null),j&&(0,x.warning)(j<20,`Sequence segments can't repeat ${j} times — ignoring repeat option. Use a value below 20 or apply repeat at the sequence level instead.`),j&&j<20){let e=T>0?S/T:0;T=T*(j+1)+S*j;let t=[...f],a=[...w],r=[...z=Array.isArray(z)?[...z]:[z]],s="reverse"===N||"mirror"===N,i=t,n=r;s&&(i=[...t].reverse(),"reverse"===N&&(n=[...r].reverse().map(e=>"function"==typeof e?(0,g.reverseEasing)(e):e)));for(let o=0;o<j;o++){let l=s&&o%2==0,c=l?i:t,d=l?n:r,p=(o+1)*(1+e);e>0&&(f.push(f[f.length-1]),w.push(p),z.push("linear")),f.push(...c);for(let e=0;e<c.length;e++)w.push(a[e]+p),z.push(0===e?"linear":b(d,e-1))}!function(e,t,a=0){let r=t+1+t*a;for(let t=0;t<e.length;t++)e[t]=e[t]/r}(w,j,e)}let q=I+T;!function(e,t,a,r,s,i){for(let t=0;t<e.length;t++){let a=e[t];a.at>s&&a.at<i&&((0,n.removeItem)(e,a),t--)}for(let n=0;n<t.length;n++)e.push({value:t[n],at:(0,k.mixNumber)(s,i,r[n]),easing:b(a,n)})}(r,f,z,w,I,q),P=Math.max(A+T,P),M=Math.max(q,M)};if((0,c.isMotionValue)(f))F(S,E,z("default",_(f,l)));else{let e=j(f,S,r,v),t=e.length;for(let a=0;a<t;a++){let r=_(e[a],l);for(let e in S){var T,A;F(S[e],(T=E,A=e,T&&T[A]?{...T,...T[A]}:{...T}),z(e,r),a,t)}}}y=R,R+=P}return l.forEach((e,r)=>{for(let s in e){let i=e[s];i.sort(S);let n=[],l=[],c=[];for(let e=0;e<i.length;e++){let{at:t,value:a,easing:r}=i[e];n.push(a),l.push((0,f.progress)(0,M,t)),c.push(r||"easeOut")}0!==l[0]&&(l.unshift(0),n.unshift(n[0]),c.unshift("easeInOut")),1!==l[l.length-1]&&(l.push(1),n.push(null)),o.has(r)||o.set(r,{keyframes:{},transition:{}});let d=o.get(r);d.keyframes[s]=n;let{type:p,...h}=t;d.transition[s]={...h,duration:M,ease:c,times:l,...a}}}),o})(e.map(e=>{if(Array.isArray(e)&&"function"==typeof e[0]){let t=e[0],a=(0,o.motionValue)(0);return(a.on("change",t),1===e.length)?[a,[0,1]]:2===e.length?[a,[0,1],e[1]]:[a,e[1],e[2]]}return e}),w,t,{spring:l.spring}).forEach(({keyframes:e,transition:t},r)=>{a.push(...L(r,e,t))}),R=a}else{let{onComplete:a,...r}=v||{};"function"==typeof a&&(y=a),R=L(e,s,{...M,...r},t)}let T=new i(R);return y&&T.finished.then(y),t&&(t.animations.push(T),T.finished.then(()=>{(0,n.removeItem)(t.animations,T)})),T}}(),D={some:0,all:1};var U=e.i(37806),H=e.i(47414),G=e.i(72328);e.s(["CountUp",0,function({value:e,prefix:r="",suffix:s="",duration:i=1.8}){let n=(0,a.useRef)(null),l=function(e,{root:t,margin:r,amount:s,once:i=!1,initial:n=!1}={}){let[o,l]=(0,a.useState)(n);return(0,a.useEffect)(()=>{if(!e.current||i&&o)return;let a={root:t&&t.current||void 0,margin:r,amount:s};return function(e,t,{root:a,margin:r,amount:s="some"}={}){let i=(0,w.resolveElements)(e),n=new WeakMap,o=new IntersectionObserver(e=>{e.forEach(e=>{let a=n.get(e.target);if(!!a!==e.isIntersecting)if(e.isIntersecting){let a=t(e.target,e);"function"==typeof a?n.set(e.target,a):o.unobserve(e.target)}else"function"==typeof a&&(a(e),n.delete(e.target))})},{root:a,rootMargin:r,threshold:"number"==typeof s?s:D[s]});return i.forEach(e=>o.observe(e)),()=>o.disconnect()}(e.current,()=>(l(!0),i?void 0:()=>l(!1)),a)},[t,e,r,i,s]),o}(n,{once:!0,margin:"0px 0px -12% 0px"}),c=(0,G.useReducedMotion)(),d=function(){let e=(0,H.useConstant)(()=>(0,o.motionValue)(0)),{isStatic:t}=(0,a.useContext)(U.MotionConfigContext);if(t){let[,t]=(0,a.useState)(0);(0,a.useEffect)(()=>e.on("change",t),[])}return e}(),[p,h]=(0,a.useState)(0),u=(0,a.useRef)(!1);return(0,a.useEffect)(()=>{if(!l||0===e)return;if(c)return void h(e);let t=!u.current;u.current=!0;let a=B(d,e,{duration:t?i:.7,ease:[.16,1,.3,1],onUpdate:e=>h(Math.round(e))});return()=>a.stop()},[l,e,c,i,d]),(0,t.jsxs)("span",{ref:n,children:[r,p.toLocaleString("en-US"),s]})}],42561)},49005,e=>{"use strict";var t=e.i(43476),a=e.i(46932),r=e.i(72328);e.s(["Reveal",0,function({children:e,delay:s=0,y:i=26,className:n,as:o="div"}){let l=(0,r.useReducedMotion)(),c=a.motion[o];return l?(0,t.jsx)(o,{className:n,children:e}):(0,t.jsx)(c,{className:n,initial:{opacity:0,y:i},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"0px 0px -10% 0px"},transition:{duration:.7,delay:s,ease:[.2,0,0,1]},children:e})}])}]);