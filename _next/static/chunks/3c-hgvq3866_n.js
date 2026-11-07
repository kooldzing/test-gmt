(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,3374,e=>{"use strict";var t=e.i(43476),n=e.i(71645),i=e.i(22016),a=e.i(50974),r=e.i(18566),o=e.i(30200),s=e.i(91572),l=e.i(68702);function d({name:e,email:a,initials:c}){let p=(0,l.useT)(),[u,m]=(0,n.useState)(!1),f=(0,n.useRef)(null),h=(0,r.useRouter)();return(0,n.useEffect)(()=>{function e(e){f.current&&!f.current.contains(e.target)&&m(!1)}return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,t.jsxs)("div",{className:"um",ref:f,children:[(0,t.jsxs)("button",{className:"um-btn",onClick:()=>m(e=>!e),"aria-expanded":u,children:[(0,t.jsx)("span",{className:"um-av",children:c}),(0,t.jsx)("span",{className:"um-nm",title:a,children:a}),(0,t.jsx)(o.Icon,{name:"expand_more",size:18,className:"um-chev"})]}),u&&(0,t.jsxs)("div",{className:"um-menu",role:"menu",children:[(0,t.jsxs)("div",{className:"um-head",children:[(0,t.jsx)("span",{className:"um-av lg",children:c}),(0,t.jsxs)("div",{className:"um-head-txt",children:[(0,t.jsx)("div",{className:"um-head-em",children:a}),e&&e!==a&&(0,t.jsx)("div",{className:"um-head-nm",children:e})]})]}),(0,t.jsxs)(i.default,{href:"/dashboard",className:"um-item",role:"menuitem",onClick:()=>m(!1),children:[(0,t.jsx)(o.Icon,{name:"dashboard",size:19})," ",p("nav.dashboard")]}),(0,t.jsxs)(i.default,{href:"/settings",className:"um-item",role:"menuitem",onClick:()=>m(!1),children:[(0,t.jsx)(o.Icon,{name:"settings",size:19})," ",p("nav.settings")]}),(0,t.jsxs)(i.default,{href:"/plan",className:"um-item",role:"menuitem",onClick:()=>m(!1),children:[(0,t.jsx)(o.Icon,{name:"workspace_premium",size:19})," ",p("nav.plan")]}),(0,t.jsx)("div",{className:"um-sep"}),(0,t.jsxs)("button",{className:"um-item danger",role:"menuitem",onClick:function(){(0,s.signOut)(),m(!1),h.push("/")},children:[(0,t.jsx)(o.Icon,{name:"logout",size:19})," ",p("common.logOut")]})]}),(0,t.jsx)("style",{children:`
        .um { position: relative; }
        .um-btn {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 6px 10px 6px 6px; border-radius: 999px;
          background: transparent; border: 1px solid var(--line-soft); cursor: pointer;
          transition: background 0.2s var(--ease), border-color 0.2s var(--ease);
        }
        .um-btn:hover { background: var(--surface-1); border-color: var(--line); }
        /* An email is longer than a first name and must not push the header
           around; it truncates instead. */
        .um-nm {
          font-size: 14px; font-weight: 600; color: var(--text);
          max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .um-btn .um-chev { color: var(--text-3); }
        .um-av {
          width: 34px; height: 34px; border-radius: 50%;
          display: grid; place-items: center;
          font-size: 13px; font-weight: 600; color: #fff; background: #3c4043;
          flex-shrink: 0;
        }
        .um-av.lg { width: 40px; height: 40px; font-size: 15px; }

        .um-menu {
          position: absolute; top: calc(100% + 10px); right: 0;
          width: 264px;
          background: #fff; border: 1px solid var(--line-soft);
          border-radius: 18px; box-shadow: var(--shadow-lg);
          padding: 8px;
          animation: um-in 0.16s var(--ease);
        }
        @keyframes um-in { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
        .um-head { display: flex; align-items: center; gap: 12px; padding: 12px 12px 14px; }
        .um-head-txt { min-width: 0; }
        .um-head-em {
          font-size: 13.5px; font-weight: 700; color: var(--text);
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .um-head-nm { font-size: 12.5px; color: var(--text-3); margin-top: 1px; }
        .um-item {
          width: 100%; display: flex; align-items: center; gap: 12px;
          padding: 11px 12px; border-radius: 12px; border: none; background: transparent;
          font-family: inherit; font-size: 14px; font-weight: 500; color: var(--text-2);
          text-align: left; cursor: pointer;
          transition: background 0.16s var(--ease), color 0.16s var(--ease);
        }
        .um-item:hover { background: var(--surface-1); color: var(--text); }
        .um-item.danger { color: var(--red); }
        .um-item.danger:hover { background: #fce8e6; }
        .um-sep { height: 1px; background: var(--line-soft); margin: 6px 8px; }

        @media (max-width: 640px) {
          .um-nm { display: none; }
        }
      `})]})}var c=e.i(67176);let p={name:"Alex Morgan",email:"alex@email.com",initials:"AM",joined:"2026-03-12"};e.s(["Header",0,function({variant:e="marketing"}){let r=(0,l.useT)(),[o,u]=(0,n.useState)(!1),{session:m,ready:f}=(0,s.useSession)();(0,n.useEffect)(()=>{if("marketing"!==e)return;let t=()=>u(window.scrollY>8);return window.addEventListener("scroll",t,{passive:!0}),t(),()=>window.removeEventListener("scroll",t)},[e]);let h="marketing"!==e||o,g="app"===e?m??p:m;return(0,t.jsxs)("header",{className:`gm-head v-${e} ${h?"solid":""}`,children:[(0,t.jsxs)("div",{className:"wrap gm-nav",children:[(0,t.jsx)(i.default,{href:"/",className:"gm-brand","aria-label":r("header.home"),children:(0,t.jsx)(a.Logo,{size:30})}),(0,t.jsx)("div",{className:"gm-right",children:f&&g?(0,t.jsx)(d,{name:g.name,email:g.email,initials:g.initials}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.LanguageSwitcher,{}),(0,t.jsx)(i.default,{href:"/login",className:"gm-login",children:r("common.logIn")}),(0,t.jsx)(i.default,{href:"/login?mode=signup",className:"btn btn-dark btn-sm gm-cta",children:r("common.signUp")})]})})]}),(0,t.jsx)("style",{children:`
        .gm-head {
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          transition: background 0.3s var(--ease), box-shadow 0.3s var(--ease),
            border-color 0.3s var(--ease);
          border-bottom: 1px solid transparent;
        }
        .gm-head.v-marketing { position: fixed; }
        .gm-head.v-app,
        .gm-head.v-auth { position: sticky; }
        .gm-head.solid {
          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(18px) saturate(180%);
          -webkit-backdrop-filter: blur(18px) saturate(180%);
          border-bottom-color: var(--line-soft);
        }
        .gm-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 84px;
        }
        /* Anchor targets clear the fixed bar instead of hiding behind it.
           Plain selectors: this is a plain style element, not styled-jsx, so
           :global() would be invalid CSS and silently dropped. */
        #how,
        #tiers,
        #faq { scroll-margin-top: 100px; }

        .gm-right {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: nowrap;
          white-space: nowrap;
        }
        .gm-brand {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
          white-space: nowrap;
        }
        .gm-login {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          height: 44px;
          font-size: 15px;
          font-weight: 600;
          color: var(--text-2);
          background: var(--surface-2);
          padding: 0 22px;
          border-radius: 999px;
          transition: background 0.2s var(--ease), color 0.2s var(--ease);
        }
        .gm-cta.btn-sm {
          height: 44px;
          padding: 0 24px;
          font-size: 15px;
        }
        .gm-login:hover {
          background: var(--surface-3);
          color: var(--text);
        }
        @media (max-width: 640px) {
          .gm-nav { height: 68px; gap: 10px; }

          /* The language control used to be hidden here by a ".gm-lang" rule for a
             dead placeholder button. The real switcher is ".lsw.v-pill", that rule
             matched nothing, and its 80px pill pushed Sign Up 25px off a 390px
             screen — 95px off a 320px one. It stays (the site speaks twelve
             languages and a phone must be able to switch), but as the globe alone:
             the "EN" label beside it is the part there is no room for. */
          .gm-right .lsw.v-pill .lsw-btn {
            width: 40px;
            height: 40px;
            padding: 0;
            justify-content: center;
            gap: 0;
          }
          .gm-right .lsw.v-pill .lsw-cur { display: none; }

          /* The wordmark takes the same 19px it used to take only below 400px: at
             390px the full-size brand alone was 191px of the 350px available. The
             Logo component sets font-size inline, so this needs !important. */
          .gm-brand span span { font-size: 19px !important; }
          .gm-brand span { gap: 7px !important; }

          .gm-right { gap: 6px; }

          /* Log In loses its filled pill — as plain text beside a dark CTA the
             hierarchy actually reads better, and it gives the CTA back ~25px. */
          .gm-login {
            height: 40px;
            padding: 0 8px;
            font-size: 14px;
            background: transparent;
          }
          .gm-login:hover { background: transparent; color: var(--text); }
          .gm-cta.btn-sm {
            height: 40px;
            padding: 0 14px;
            font-size: 14px;
          }
        }

        /* The wordmark is the first thing to go when the row runs out of room, and
           how soon depends on the language: "Sign Up / Log In" is half the width of
           "Creer un compte / Se connecter". Measured slack (px left to the screen
           edge with the wordmark up), not guessed:

             382px  fr -82  es -58  pl -36  de -34  pt -1  it 3  tr 12  en/ja/zh/ko/hi 20
             430px  fr -48  es -22  pl 0    de 3    everyone else 20
             480px  fr 3    everyone else 20

           So below 380px nobody keeps it, and each language group loses it at the
           width where its own translation stops fitting. Re-measure this table if
           the header button strings change — that is what moves these numbers. */
        @media (max-width: 380px) {
          .gm-brand span span { display: none; }
        }
        @media (max-width: 460px) {
          html:lang(de) .gm-brand span span,
          html:lang(pl) .gm-brand span span,
          html:lang(pt) .gm-brand span span,
          html:lang(it) .gm-brand span span { display: none; }
        }
        @media (max-width: 520px) {
          html:lang(fr) .gm-brand span span,
          html:lang(es) .gm-brand span span { display: none; }
        }

        @media (max-width: 400px) {
          .gm-login { padding: 0 6px; font-size: 13.5px; }
          .gm-cta.btn-sm { padding: 0 13px; font-size: 13.5px; }
        }

        /* 320px, the narrowest phone still in use: French ("Cr\xe9er un compte" beside
           "Se connecter") is the one row that still ran 24px past the edge. Type and
           padding tighten by a few px each; the 40px tap heights are untouched. */
        @media (max-width: 340px) {
          .gm-right { gap: 4px; }
          .gm-login { padding: 0 2px; font-size: 12.5px; }
          .gm-cta.btn-sm { padding: 0 9px; font-size: 12.5px; }
        }
      `})]})}],3374)},67176,e=>{"use strict";var t=e.i(43476),n=e.i(71645),i=e.i(30200),a=e.i(68702),r=e.i(44770);e.s(["LanguageSwitcher",0,function({variant:e="pill"}){let{locale:o,setLocale:s}=(0,a.useI18n)(),[l,d]=(0,n.useState)(!1),c=(0,n.useRef)(null),p=(0,n.useRef)(null),[u,m]=(0,n.useState)(null);function f(){let e=p.current;if(!e)return;let t=(e.closest(".tb-menu, .sb-acc-pop, .um-menu")??e).getBoundingClientRect(),n=Math.min(.6*window.innerHeight,468),i=Math.max(8,Math.min(t.top,window.innerHeight-n-8)),a=t.right+8+200<=window.innerWidth-8,r=t.left-8-200>=8;a?m({top:i,left:t.right+8}):r?m({top:i,right:window.innerWidth-t.left+8}):m({top:i,left:Math.max(8,Math.min(t.left,window.innerWidth-200-8))})}(0,n.useEffect)(()=>{if(!l)return;let t=e=>{c.current&&!c.current.contains(e.target)&&d(!1)},n=e=>{"Escape"===e.key&&d(!1)},i=()=>{"row"===e&&f()};return document.addEventListener("mousedown",t),document.addEventListener("keydown",n),window.addEventListener("resize",i),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("keydown",n),window.removeEventListener("resize",i)}},[l]);let h=r.LANGUAGES.find(e=>e.code===o)??r.LANGUAGES[0];return(0,t.jsxs)("div",{className:`lsw v-${e}`,ref:c,children:[(0,t.jsxs)("button",{ref:p,type:"button",className:`lsw-btn ${l?"open":""}`,onClick:function(){l||f(),d(e=>!e)},"aria-haspopup":"listbox","aria-expanded":l,"aria-label":`Language — ${h.english}`,children:[(0,t.jsx)(i.Icon,{name:"language",size:"pill"===e?20:19}),(0,t.jsx)("span",{className:"lsw-cur",children:"pill"===e?h.code.toUpperCase():h.native}),"row"===e&&(0,t.jsx)(i.Icon,{name:"expand_more",size:17,className:"lsw-chev"})]}),l&&(0,t.jsx)("div",{className:"lsw-list",role:"listbox","aria-label":"Language",style:"row"===e&&u?{position:"fixed",...u}:void 0,children:r.LANGUAGES.map(e=>(0,t.jsxs)("button",{type:"button",role:"option","aria-selected":e.code===o,className:`lsw-item ${e.code===o?"on":""}`,onClick:()=>{s(e.code),d(!1)},children:[(0,t.jsx)("span",{className:"lsw-native",children:e.native}),e.code===o&&(0,t.jsx)(i.Icon,{name:"check",size:17,className:"lsw-check"})]},e.code))}),(0,t.jsx)("style",{children:`
        .lsw { position: relative; }
        .lsw-btn {
          display: inline-flex; align-items: center; gap: 7px;
          border: none; background: transparent; cursor: pointer;
          font-family: inherit; color: var(--text-2);
          transition: background 0.16s var(--ease), color 0.16s var(--ease);
        }
        .lsw-btn:focus-visible { outline: 2px solid var(--blue); outline-offset: 2px; }

        /* Header pill — same tonal surface, height and radius as the "Log In"
           button beside it. Transparent, it read as an icon someone forgot to
           finish rather than as one of the three controls in that row. */
        .lsw.v-pill .lsw-btn {
          height: 44px; padding: 0 18px; border-radius: 999px;
          font-size: 15px; font-weight: 500;
          background: var(--surface-2);
        }
        .lsw.v-pill .lsw-btn:hover, .lsw.v-pill .lsw-btn.open {
          background: var(--surface-3); color: var(--text);
        }

        /* Menu row — matches the items it sits among. */
        .lsw.v-row { width: 100%; }
        .lsw.v-row .lsw-btn {
          width: 100%; padding: 10px 12px; border-radius: 12px;
          font-size: 14px; font-weight: 500; text-align: left;
        }
        .lsw.v-row .lsw-btn .material-symbols-rounded { color: var(--text-3); flex-shrink: 0; }
        .lsw.v-row .lsw-btn:hover, .lsw.v-row .lsw-btn.open { background: var(--surface-2); color: var(--text); }
        .lsw.v-row .lsw-cur { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .lsw-chev { transition: transform 0.18s var(--ease); }
        .lsw-btn.open .lsw-chev { transform: rotate(180deg); }

        .lsw-list {
          position: absolute; z-index: 60;
          background: #fff; border: 1px solid var(--line-soft);
          border-radius: 14px; box-shadow: var(--shadow-lg);
          padding: 6px; min-width: 190px;
          max-height: min(420px, 60vh); overflow-y: auto;
        }
        .lsw.v-pill .lsw-list { top: calc(100% + 8px); right: 0; }
        /* In a menu the list is positioned in script (see the place() helper) — it
           opens beside the menu, on whichever side has room, never inside it. */
        .lsw.v-row .lsw-list { width: 200px; }  /* = LIST_W */

        .lsw-item {
          display: flex; align-items: center; gap: 10px; width: 100%;
          padding: 9px 11px; border: none; border-radius: 10px; background: transparent;
          font-family: inherit; font-size: 14px; color: var(--text-2);
          text-align: left; cursor: pointer;
          transition: background 0.14s var(--ease), color 0.14s var(--ease);
        }
        .lsw-item:hover { background: var(--surface-2); color: var(--text); }
        .lsw-item.on { color: var(--text); font-weight: 600; }
        .lsw-item:focus-visible { outline: 2px solid var(--blue); outline-offset: -2px; }
        .lsw-native { flex: 1; min-width: 0; }
        .lsw-check { color: var(--blue); flex-shrink: 0; }
      `})]})}])},50974,e=>{"use strict";var t=e.i(43476);function n({size:e=26,className:i}){return(0,t.jsx)("img",{src:"/gemini-spark.svg",alt:"",width:e,height:e,className:i,draggable:!1,"aria-hidden":"true",style:{display:"block",flexShrink:0}})}e.s(["Logo",0,function({size:e=26}){return(0,t.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:9},children:[(0,t.jsx)(n,{size:e}),(0,t.jsx)("span",{style:{fontWeight:600,fontSize:.82*e,letterSpacing:"-0.02em",color:"var(--text)"},children:"Gemini Trade"})]})},"Spark",0,n])},59351,e=>{"use strict";var t=e.i(43476);e.s(["StarBorder",0,function({children:e,className:n=""}){return(0,t.jsx)("span",{className:`starborder ${n}`.trim(),children:(0,t.jsx)("span",{className:"starborder-in",children:e})})}])},99686,e=>{"use strict";var t=e.i(71645),n=e.i(90281),i=e.i(86062),a=e.i(22307),r=e.i(94208),o=e.i(9165),s=e.i(71519);let l="gm_account",d="gm_account_change",c={balance:0,deposited:0,tierSince:"",bonusBalance:0,promo:null,usedPromos:[],twoFA:!1,twoFASecret:"",watchlist:[],withdrawals:[],transactions:[],devices:[],offerClaimed:!1,session:null,lastSessionEnd:0,sessionsDone:0,prefs:{payoutNotifs:!0,weeklySummary:!1},schema:2},p=["gm_notifs","gm_ach_unlocked","gm_ach_claimed","gm_ach_lvl_claimed"];function u(){try{let e=localStorage.getItem(l);if(!e)return c;let t=JSON.parse(e);if(2!==t.schema){for(let e of(localStorage.removeItem(l),p))localStorage.removeItem(e);return c}let n={...c,...t};return{...n,devices:(n.devices??[]).filter(e=>!!e&&"string"==typeof e.firstSeen&&"string"==typeof e.lastSeen)}}catch{return c}}function m(e){var t;t=e(u()),localStorage.setItem(l,JSON.stringify(t)),window.dispatchEvent(new Event(d))}async function f(e,t="USDT",i=""){await o.api.depositIntent({amount_usd:e,coin:t,network:i}),(0,n.pushNotif)({icon:"savings",title:"Deposit reported",body:`We're checking the wallet for your $${e.toLocaleString("en-US")} — your balance updates once it's confirmed.`})}async function h(){let e=await o.api.twoFaSetup();return{secret:e.secret,otpauthUrl:e.otpauth_url}}async function g(e){await o.api.twoFaEnable(e),m(e=>({...e,twoFA:!0})),(0,s.refreshLive)(),(0,n.pushNotif)({icon:"verified_user",title:"Two-factor auth enabled",body:"Withdrawals now require a code from your app."})}async function w(e){await o.api.twoFaDisable(e),m(e=>({...e,twoFA:!1,twoFASecret:""})),(0,s.refreshLive)()}async function x(){let[e,t]=await Promise.all([o.api.userInfo().catch(()=>null),o.api.sessions().catch(()=>[])]),n=(t??[]).filter(e=>e.is_active).map(e=>{let t=(0,r.describeUserAgent)(e.user_agent);return{id:String(e.id),label:t.label,kind:t.kind,icon:t.icon,firstSeen:e.created_at,lastSeen:e.created_at,current:e.current}});m(t=>({...t,twoFA:e?e.totp_enabled:t.twoFA,devices:n}))}function b(e){let t=(0,a.findPromo)(e.code),n={code:e.code,bonusPct:e.percent,minDeposit:e.min_deposit||void 0,label:t?.label??`+${e.percent}% deposit bonus`};return m(e=>({...e,promo:n})),n}async function v(e){try{let t=await o.api.applyPromo(e),n=b(t);return{ok:!0,def:{code:n.code,bonusPct:n.bonusPct,minDeposit:n.minDeposit,label:n.label??`+${n.bonusPct}% deposit bonus`}}}catch(t){let e=t instanceof o.ApiError?t:null;if(e?.code==="promo_already_used"){try{let e=await o.api.promo();e&&b(e)}catch{}return{ok:!1,reason:"used",message:e.message}}return{ok:!1,reason:"unknown",message:e?.message??"Couldn't reach the server. Try again."}}}async function y(){try{let e=await o.api.promo();e&&b(e)}catch{}}async function S(e){await o.api.revokeSession(Number(e)),await x()}function k(){let[e,n]=(0,t.useState)(c),[i,a]=(0,t.useState)(!1),r=(0,s.useLive)();return(0,t.useEffect)(()=>{let e=()=>n(u());return e(),a(!0),window.addEventListener(d,e),window.addEventListener("storage",e),()=>{window.removeEventListener(d,e),window.removeEventListener("storage",e)}},[]),{account:(0,t.useMemo)(()=>r.ready?{...e,balance:r.balance,deposited:r.deposited,twoFA:r.twoFA,transactions:r.transactions.map(e=>({id:e.id,type:e.type,amount:e.amount,when:"",at:e.at,note:e.note}))}:e,[e,r.ready,r.balance,r.deposited,r.twoFA,r.transactions]),ready:i&&r.ready}}e.s(["SEED_DEPOSITED",0,0,"applyPromo",0,v,"claimOffer",0,function(e="GEMINI25",t=25){let i=(0,a.findPromo)(e);m(n=>({...n,promo:i?{code:i.code,bonusPct:i.bonusPct,minDeposit:i.minDeposit,label:i.label}:{code:e,bonusPct:t},offerClaimed:!0})),(0,n.pushNotif)({icon:"redeem",title:"Bonus activated",body:`${e} — +${t}% on your next deposit.`})},"deposit",0,f,"disable2FA",0,w,"dismissOffer",0,function(){m(e=>({...e,offerClaimed:!0}))},"enable2FA",0,g,"endDevice",0,S,"refreshSecurity",0,x,"removePromo",0,function(){m(e=>({...e,promo:null}))},"setPrefs",0,function(e){m(t=>({...t,prefs:{...t.prefs,...e}}))},"startTwoFASetup",0,h,"syncPromo",0,y,"toggleWatch",0,function(e){m(t=>({...t,watchlist:t.watchlist.includes(e)?t.watchlist.filter(t=>t!==e):[...t.watchlist,e]}))},"touchDevice",0,function(){let e=(0,r.deviceId)(),t=(0,r.detectDevice)(),n=new Date().toISOString();m(i=>{let a=i.devices.find(t=>t.id===e),o={id:e,label:t.label,kind:t.kind,icon:t.icon,firstSeen:a?.firstSeen??(0,r.deviceSince)(),lastSeen:n,current:!0},s=i.devices.filter(t=>t.id!==e).map(e=>({...e,current:!1}));return{...i,devices:[o,...s]}})},"useAccount",0,k,"useTier",0,function(){let{account:e,ready:n}=k();return{...(0,t.useMemo)(()=>(0,i.tierFromDeposited)(e.deposited),[e.deposited]),ready:n}}])},16148,e=>{"use strict";e.s(["FAQ_KEYS",0,["start","howOften","potential","dailyLimit","withdrawAnytime","howItWorks","returns","fees"],"TIERS",0,[{key:"core",name:"Core",price:"$100",minDeposit:100,ceilingX:5,dailyPct:40,sessionMin:20,firstDayPct:120,firstDayMult:3,profitFeePct:10,cooldownSec:21600,featured:!1,badge:null},{key:"prime",name:"Prime",price:"$500",minDeposit:500,ceilingX:10,dailyPct:60,sessionMin:25,firstDayPct:180,firstDayMult:3,profitFeePct:7,cooldownSec:21600,featured:!0,badge:"chosen"},{key:"private",name:"Private",price:"$1,000",minDeposit:1e3,ceilingX:20,dailyPct:75,sessionMin:30,firstDayPct:225,firstDayMult:3,profitFeePct:5,cooldownSec:14400,featured:!1,badge:null},{key:"elite",name:"Elite",price:"$2,500",minDeposit:2500,ceilingX:25,dailyPct:85,sessionMin:35,firstDayPct:255,firstDayMult:3,profitFeePct:3,cooldownSec:10800,featured:!1,badge:null},{key:"sovereign",name:"Sovereign",price:"$10,000",minDeposit:1e4,ceilingX:30,dailyPct:95,sessionMin:40,firstDayPct:285,firstDayMult:3,profitFeePct:0,cooldownSec:7200,featured:!1,badge:"top"}]])},94208,e=>{"use strict";e.i(71645);let t="gm_device_since",n="gm_device_id";function i(e,t){let n=(t?.brands?.map(e=>e.brand)??[]).find(e=>!/Not.?A.?Brand|Chromium/i.test(e));return n?n.replace(/Google |Microsoft /,""):/Edg\//.test(e)?"Edge":/OPR\/|Opera/.test(e)?"Opera":/Firefox\//.test(e)?"Firefox":/CriOS\//.test(e)||/Chrome\//.test(e)?"Chrome":/Safari\//.test(e)?"Safari":"Browser"}function a(e,t){let n=t?.platform;if(n){if("macOS"===n)return"macOS";if("Windows"===n)return"Windows";if("Android"===n)return"Android";if("iOS"===n)return"iOS";if("Linux"===n)return"Linux";if("Chrome OS"===n)return"ChromeOS"}return/iPhone|iPad|iPod/.test(e)?"iOS":/Android/.test(e)?"Android":/Mac OS X|Macintosh/.test(e)?"macOS":/Windows/.test(e)?"Windows":/CrOS/.test(e)?"ChromeOS":/Linux/.test(e)?"Linux":"Unknown OS"}function r(e,t){return/iPad|Tablet/.test(e)?"tablet":t?.mobile||/Mobi|iPhone|Android.*Mobile/.test(e)?"mobile":"desktop"}let o={desktop:"computer",mobile:"smartphone",tablet:"tablet_mac"};e.s(["describeUserAgent",0,function(e){if(!e)return{browser:"Browser",os:"Unknown OS",kind:"desktop",label:"Unknown device",icon:"computer"};let t=i(e),n=a(e),s=r(e);return{browser:t,os:n,kind:s,label:`${t} \xb7 ${n}`,icon:o[s]}},"detectDevice",0,function(){if("u"<typeof navigator)return{browser:"Browser",os:"Unknown OS",kind:"desktop",label:"Browser",icon:"computer"};let e=navigator.userAgent,t=navigator.userAgentData,n=i(e,t),s=a(e,t),l=r(e,t);return{browser:n,os:s,kind:l,label:`${n} \xb7 ${s}`,icon:o[l]}},"deviceId",0,function(){let e=localStorage.getItem(n);return e||(e="d_"+Math.random().toString(36).slice(2,10),localStorage.setItem(n,e)),e},"deviceSince",0,function(){let e=localStorage.getItem(t);return e||(e=new Date().toISOString(),localStorage.setItem(t,e)),e},"timeAgo",0,function(e,t=Date.now()){let n=Date.parse(e);if(!Number.isFinite(n))return"—";let i=Math.max(0,Math.round((t-n)/1e3));if(i<90)return"Active now";let a=Math.round(i/60);if(a<60)return`${a} minute${1===a?"":"s"} ago`;let r=Math.round(a/60);if(r<24)return`${r} hour${1===r?"":"s"} ago`;let o=Math.round(r/24);return`${o} day${1===o?"":"s"} ago`}])},90281,22307,e=>{"use strict";var t=e.i(71645);let n="gm_notifs",i="gm_notifs_change",a=[];function r(){try{let e=localStorage.getItem(n);return e?JSON.parse(e):a}catch{return a}}function o(e){localStorage.setItem(n,JSON.stringify(e.slice(0,20))),window.dispatchEvent(new Event(i))}e.s(["markAllRead",0,function(){o(r().map(e=>({...e,read:!0})))},"pushNotif",0,function(e){o([{...e,id:"n_"+Math.random().toString(36).slice(2,8),when:"Just now",at:Date.now(),read:!1},...r()])},"useNotifs",0,function(){let[e,n]=(0,t.useState)(a);return(0,t.useEffect)(()=>{let e=()=>n(r());return e(),window.addEventListener(i,e),window.addEventListener("storage",e),()=>{window.removeEventListener(i,e),window.removeEventListener("storage",e)}},[]),{notifs:e,unread:e.filter(e=>!e.read).length}}],90281);let s=[{code:"WELCOME15",bonusPct:15,label:"+15% on your first deposit",firstDepositOnly:!0},{code:"GEMINI25",bonusPct:25,label:"+25% on deposits of $100 or more",minDeposit:100},{code:"BOOST10",bonusPct:10,label:"+10% on deposits of $100 or more",minDeposit:100}];e.s(["bonusFor",0,function(e,t){return e.minDeposit&&t<e.minDeposit?0:+(t*e.bonusPct/100).toFixed(2)},"findPromo",0,function(e){let t=e.trim().toUpperCase();return s.find(e=>e.code===t)}],22307)},17958,47133,e=>{"use strict";var t=e.i(71645),n=e.i(16148),i=e.i(86062),a=e.i(9165);let r={ready:!1,settled:!1,appName:"Gemini",minDeposit:0,demoEnabled:!1,demoStakes:[],demoMaxRuns:0,cooldownHours:0,firstSessionMinutes:0,firstDayBoost:0,sessionShare:0,tiers:[]},o=r,s=null,l=new Set;function d(e){for(let t of(o=e,l))t(o)}function c(){let[e,n]=(0,t.useState)(o);return(0,t.useEffect)(()=>(l.add(n),n(o),!o.settled&&(s||(s=a.api.config().then(e=>{(0,i.applyServerTiers)(e.tiers??[]),d({ready:!0,settled:!0,appName:e.app_name||r.appName,minDeposit:e.min_deposit??0,demoEnabled:!!e.demo_enabled,demoStakes:Array.isArray(e.demo_stakes)?e.demo_stakes.filter(e=>e>0):[],demoMaxRuns:e.demo_max_runs??0,cooldownHours:e.cooldown_hours??0,firstSessionMinutes:e.first_session_minutes??0,firstDayBoost:e.first_day_boost??0,sessionShare:e.session_share??0,tiers:Array.isArray(e.tiers)?e.tiers:[]})}).catch(()=>{d({...o,settled:!0})}).finally(()=>{s=null}))),()=>{l.delete(n)}),[]),e}e.s(["useAppConfig",0,c],47133);let p={core:{featured:!1,badge:null,accent:!1,engine:"Spot Momentum"},prime:{featured:!0,badge:"chosen",accent:!1,engine:"Dual Momentum"},private:{featured:!1,badge:null,accent:!1,engine:"Multi-Strategy"},elite:{featured:!1,badge:null,accent:!1,engine:"Adaptive Alpha"},sovereign:{featured:!1,badge:"top",accent:!0,engine:"Sovereign Desk"}},u={core:{support:"chat",early:!1},prime:{support:"chat",early:!1},private:{support:"chat",early:!0},elite:{support:"priority",early:!0},sovereign:{support:"manager",early:!0}},m={core:"appPlan.core.wd",prime:"appPlan.prime.wd",private:"appPlan.private.wd",elite:"appPlan.elite.wd",sovereign:"appPlan.sovereign.wd"},f=e=>Math.round(100*e);e.s(["depositBand",0,function(e){let t=`$${e.minDeposit.toLocaleString("en-US")}`;return null==e.maxDeposit?`${t}+`:`${t} — $${e.maxDeposit.toLocaleString("en-US")}`},"planCardFeatures",0,function(e,t){let n,i=[{id:"daily",text:t("appPlan.daily",{pct:e.dailyPct})},{id:"firstDay",text:t("appPlan.firstDay",{pct:e.firstDayPct,mult:e.firstDayMult})},{id:"potential",text:t("appPlan.potential",{amount:(n=e.potential,`$${Math.round(n).toLocaleString("en-US")}`)})},{id:"session",text:t("appPlan.session",{min:e.sessionMin})},{id:"pause",text:e.cooldownSec>0?t("appPlan.pause",{hours:e.cooldownHours}):t("appPlan.noPause")},{id:"wd",text:t("appPlan.wdLine",{speed:t(e.wdKey)})},{id:"fee",text:e.profitFeePct>0?t("appPlan.fee",{pct:e.profitFeePct}):t("appPlan.noFee")}];return e.early&&i.push({id:"early",text:t("appPlan.early")}),"priority"===e.support&&i.push({id:"support",text:t("appPlan.priority")}),"manager"===e.support&&i.push({id:"support",text:t("appPlan.manager")}),i},"tierName",0,function(e){return n.TIERS.find(t=>t.key===e)?.name??e},"usePlanRows",0,function(){let e=c();return(0,t.useMemo)(()=>{let t=new Map(e.tiers.map(e=>[e.key,e])),a=e.tiers.length>0?n.TIERS.filter(e=>t.has(e.key)):(0,i.activeTiers)();return a.map((e,r)=>{var o,s;let l,d,c,h,g,w,x,b,v,y,S=a[r+1],k=S?t.get(S.key):void 0,P=S?k?.min_deposit??i.TIER_MIN[S.key]??S.minDeposit:null;return o=e.key,s=t.get(e.key),l=n.TIERS.find(e=>e.key===o),d=s?.min_deposit??i.TIER_MIN[o]??l?.minDeposit??0,c=s?.ceiling_x??l?.ceilingX??0,h=s?f(s.daily_pct):l?.dailyPct??0,g=s?.first_day_mult??l?.firstDayMult??1,w=s?.session_secs??(s?.session_minutes?60*s.session_minutes:(l?.sessionMin??0)*60),x=s?.cooldown_sec??l?.cooldownSec??0,b=s?.profit_fee_pct!=null?f(s.profit_fee_pct):l?.profitFeePct??0,v=p[o]??{featured:!1,badge:null,accent:!1,engine:""},y=u[o]??{support:"chat",early:!1},{key:o,name:s?.name??l?.name??o,engine:v.engine,minDeposit:d,maxDeposit:null!=P?P-1:null,dailyPct:h,firstDayMult:g,firstDayPct:h*g,ceilingX:c,potential:d*c,sessionSecs:w,sessionMin:Math.round(w/60),cooldownSec:x,cooldownHours:x/3600,profitFeePct:b,support:y.support,early:y.early,wdKey:m[o]??"appPlan.core.wd",featured:v.featured,badge:v.badge,accent:v.accent}})},[e.tiers])}],17958)},86062,e=>{"use strict";var t=e.i(16148);function n(e){return Number(e.replace(/[^0-9]/g,""))}let i=Object.fromEntries(t.TIERS.map(e=>[e.key,n(e.price)])),a=n(t.TIERS[0].price),r=t.TIERS;function o(e){let t=Math.max(0,e),n=-1,a=r;for(let e=0;e<a.length;e++)t>=i[a[e].key]&&(n=e);let o=n>=0?a[n]:null,s=n+1<a.length?a[n+1]:null,l=s?Math.max(0,i[s.key]-t):0,d=o?i[o.key]:0,c=(s?i[s.key]:d)-d,p=s&&c>0?Math.min(100,Math.max(0,(t-d)/c*100)):100;return{tier:o,key:o?.key??null,index:n,next:s,gap:l,deposited:t,progress:p,hasTier:!!o,maxed:!s}}function s(e){return Math.max(a,Math.round(Number(e)||0))}e.s(["ENTRY_MIN",()=>a,"TIER_MIN",0,i,"activeTiers",0,function(){return r},"applyServerTiers",0,function(e){if(!Array.isArray(e)||0===e.length)return;let n=1/0;for(let t of e)t&&"string"==typeof t.key&&t.min_deposit>0&&(i[t.key]=t.min_deposit,t.min_deposit<n&&(n=t.min_deposit));Number.isFinite(n)&&(a=n);let o=new Set(e.filter(e=>e&&e.min_deposit>0).map(e=>e.key)),s=t.TIERS.filter(e=>o.has(e.key));s.length>0&&(r=s)},"depositAsk",0,s,"depositHref",0,function(e){return`/deposit?amount=${s(e)}`},"tierAfterDeposit",0,function(e,t){return o(e+Math.max(0,t))},"tierFromDeposited",0,o])}]);