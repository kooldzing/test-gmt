(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,94542,e=>{"use strict";var t=e.i(43476),a=e.i(71645),n=e.i(22016),i=e.i(18566),r=e.i(3374),s=e.i(30200),o=e.i(86062),l=e.i(91572),d=e.i(86909),p=e.i(9165),c=e.i(68702);function h(){let e=(0,i.useRouter)(),h=(0,i.useSearchParams)(),{session:u,ready:g}=(0,l.useSession)(),m=(0,c.useT)(),x="signup"===h.get("mode")?"signup":"login";function f(t){let a=new URLSearchParams(h.toString());"signup"===t?a.set("mode","signup"):a.delete("mode");let n=a.toString();e.replace(n?`/login?${n}`:"/login",{scroll:!1}),I({})}let b=Math.round(Number(h.get("amount"))||0),v=b>0?Math.max(o.ENTRY_MIN,b):0,w=v?(0,o.tierFromDeposited)(v).tier:null,k=v?`/deposit?amount=${v}`:"/dashboard",[y,j]=(0,a.useState)(""),[N,S]=(0,a.useState)(""),[z,E]=(0,a.useState)(""),[M,I]=(0,a.useState)({}),[L,T]=(0,a.useState)(!1);async function P(t){let a;if(t.preventDefault(),L)return;let n=(a={},"signup"!==x||y.trim()||(a.name=m("auth.errName")),N.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(N)||(a.email=m("auth.errEmailInvalid")):a.email=m("auth.errEmail"),z?z.length<8&&(a.password=m("auth.errPasswordShort")):a.password=m("auth.errPassword"),a);if(I(n),Object.keys(n).length)return;T(!0);let i="signup"===x?await (0,d.registerUser)(y,N,z):await (0,d.authenticate)(N,z);(T(!1),i.ok)?((0,l.signIn)(i.session),e.push(k)):I({form:i.error instanceof p.ApiError&&429===i.error.status?m("errors.loginRateLimited"):i.message})}(0,a.useEffect)(()=>{g&&u&&e.replace(k)},[g,u,e]);let A=e=>I(t=>t[e]?{...t,[e]:void 0}:t);return(0,t.jsxs)("main",{className:"login-page",children:[(0,t.jsx)(r.Header,{variant:"auth"}),(0,t.jsxs)("form",{className:"login-card card",onSubmit:P,noValidate:!0,children:[(0,t.jsx)("h1",{className:"login-h",children:"login"===x?m("auth.welcomeBack"):m("auth.createAccount")}),(0,t.jsx)("p",{className:"login-sub",children:"login"===x?m("auth.subLogin"):m("auth.subSignup")}),v>0&&(0,t.jsxs)("div",{className:"login-intent",children:[(0,t.jsx)(s.Icon,{name:"check_circle",size:17,fill:1}),(0,t.jsxs)("span",{children:[w?(0,t.jsx)("b",{children:w.name}):(0,t.jsx)("b",{children:"Deposit"})," · $",v.toLocaleString("en-US"),(0,t.jsx)("em",{children:" — we'll take you straight to funding"})]})]}),"signup"===x&&(0,t.jsxs)("div",{className:`login-field ${M.name?"err":""}`,children:[(0,t.jsx)("span",{children:m("auth.fullName")}),(0,t.jsx)("input",{"aria-label":m("auth.fullName"),type:"text",placeholder:m("auth.namePlaceholder"),value:y,"aria-invalid":!!M.name,onChange:e=>{j(e.target.value),A("name")}}),M.name&&(0,t.jsx)("small",{className:"login-err",children:M.name})]}),(0,t.jsxs)("div",{className:`login-field ${M.email?"err":""}`,children:[(0,t.jsx)("span",{children:m("auth.email")}),(0,t.jsx)("input",{"aria-label":m("auth.email"),type:"email",placeholder:m("auth.emailPlaceholder"),value:N,"aria-invalid":!!M.email,onChange:e=>{S(e.target.value),A("email")}}),M.email&&(0,t.jsx)("small",{className:"login-err",children:M.email})]}),(0,t.jsxs)("div",{className:`login-field ${M.password?"err":""}`,children:[(0,t.jsx)("span",{children:m("auth.password")}),(0,t.jsx)("input",{"aria-label":m("auth.password"),type:"password",placeholder:m("auth.passwordPlaceholder"),value:z,"aria-invalid":!!M.password,onChange:e=>{E(e.target.value),A("password")}}),M.password&&(0,t.jsx)("small",{className:"login-err",children:M.password})]}),"login"===x&&(0,t.jsx)("div",{className:"login-row",children:(0,t.jsxs)("label",{className:"login-check",children:[(0,t.jsx)("input",{type:"checkbox",className:"login-check-input"}),(0,t.jsx)("span",{className:"login-box","aria-hidden":!0,children:(0,t.jsx)("svg",{viewBox:"0 0 16 16",width:"11",height:"11",children:(0,t.jsx)("path",{d:"M3 8.4l3.1 3.1L13 4.6",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})}),m("auth.rememberMe")]})}),M.form&&(0,t.jsxs)("div",{className:"login-form-err",role:"alert",children:[(0,t.jsx)(s.Icon,{name:"error",size:16})," ",M.form]}),(0,t.jsx)("button",{type:"submit",className:"btn btn-dark btn-lg login-submit",disabled:L,children:L?m("auth.pleaseWait"):"login"===x?m("auth.logIn"):m("auth.createBtn")}),(0,t.jsx)("p",{className:"login-note",children:"login"===x?(0,t.jsxs)(t.Fragment,{children:[m("auth.newHere")," ",(0,t.jsx)("button",{type:"button",className:"login-swap",onClick:()=>f("signup"),children:m("auth.createSwap")})]}):(0,t.jsxs)(t.Fragment,{children:[m("auth.haveAccount")," ",(0,t.jsx)("button",{type:"button",className:"login-swap",onClick:()=>f("login"),children:m("auth.loginSwap")})]})}),(0,t.jsxs)("p",{className:"login-legal",children:[m("auth.legalBefore")," ",(0,t.jsx)(n.default,{href:"/legal/terms",children:m("auth.legalTerms")})," ",m("auth.legalAnd")," ",(0,t.jsx)(n.default,{href:"/legal/privacy",children:m("auth.legalPrivacy")}),"."]})]}),(0,t.jsx)("style",{children:`
        .login-page {
          min-height: 100vh;
          background:
            radial-gradient(900px 500px at 50% -8%, #eef3fb, transparent),
            var(--surface-1);
          padding-bottom: 32px;
        }
        .login-card {
          max-width: 430px;
          margin: 26px auto 0;
          padding: 30px 30px 24px;
          background: #fff;
        }
        .login-h { font-size: 24px; font-weight: 700; letter-spacing: -0.02em; }
        .login-sub { color: var(--text-3); font-size: 14.5px; margin: 5px 0 18px; }
        .login-field { display: block; margin-bottom: 13px; }
        /* 8px in from the left edge so the label sits over the field's text, not
           over its border, and close enough to read as one control. */
        .login-field span {
          display: block; font-size: 13px; font-weight: 600; color: var(--text-2);
          margin-bottom: 4px; padding-left: 8px;
        }
        .login-field input {
          width: 100%; padding: 13px 15px; border-radius: var(--radius-input);
          border: 1px solid var(--line); background: var(--surface-1); font-size: 15px; color: var(--text);
          outline: none; transition: border-color .2s var(--ease), background .2s var(--ease), box-shadow .2s var(--ease);
        }
        .login-field input:hover { border-color: #c4c7c5; }
        .login-field input:focus { border-color: var(--blue); background: #fff; box-shadow: 0 0 0 3px var(--blue-soft); }
        .login-field.err input {
          border-color: var(--red); background: #fff;
        }
        .login-field.err input:focus { box-shadow: 0 0 0 3px #fce8e6; }
        .login-err {
          display: block; margin-top: 4px; padding-left: 8px;
          font-size: 12.5px; font-weight: 500; color: var(--red);
        }
        .login-row {
          display: flex; align-items: center; justify-content: space-between;
          margin: 2px 0 16px;
        }
        .login-check {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 13px; color: var(--text-2); cursor: pointer;
        }
        /* The native checkbox cannot be rounded the same way across browsers, so the
           real input stays for the keyboard and a rounded box is drawn beside it. */
        .login-check-input { position: absolute; opacity: 0; width: 1px; height: 1px; }
        .login-box {
          width: 18px; height: 18px; flex-shrink: 0;
          display: grid; place-items: center;
          border: 1.5px solid var(--line); border-radius: 6px;
          background: #fff; color: #fff;
          transition: background .16s var(--ease), border-color .16s var(--ease);
        }
        .login-box svg { opacity: 0; transition: opacity .14s var(--ease); }
        .login-check-input:checked + .login-box { background: var(--blue); border-color: var(--blue); }
        .login-check-input:checked + .login-box svg { opacity: 1; }
        .login-check-input:focus-visible + .login-box { outline: 2px solid var(--blue); outline-offset: 2px; }
        .login-intent {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 14px 0 2px;
          padding: 10px 12px;
          font-size: 13.5px;
          color: var(--text-2);
          background: var(--surface-2);
          border-radius: 12px;
        }
        .login-intent b { font-weight: 600; color: var(--text); }
        .login-intent em { font-style: normal; color: var(--text-3); }
        .login-intent .material-symbols-rounded { color: var(--blue); flex-shrink: 0; }
        .login-submit { width: 100%; margin-top: 8px; }
        .login-submit:disabled { opacity: .6; cursor: default; }
        .login-form-err { display: flex; align-items: center; gap: 8px; margin-top: 14px; padding: 11px 13px; font-size: 13.5px; font-weight: 500; color: #b3261e; background: #fce8e6; border-radius: 12px; }
        .login-form-err .material-symbols-rounded { flex-shrink: 0; }
        .login-demo { margin-top: 12px; font-size: 12px; color: var(--text-3); text-align: center; }
        .login-demo b { font-weight: 600; color: var(--text-2); }
        .login-note { font-size: 14px; color: var(--text-3); margin-top: 16px; text-align: center; }
        .login-swap {
          border: none; background: none; cursor: pointer;
          font-size: 14px; font-weight: 600; color: var(--blue); padding: 0;
        }
        .login-swap:hover { color: var(--blue-strong); }
        .login-legal {
          text-align: center; font-size: 12.5px; line-height: 1.5; color: var(--text-3);
          margin: 16px 0 0; padding-top: 14px; border-top: 1px solid var(--line-soft);
        }
        .login-legal a { color: var(--text-2); font-weight: 600; }
        .login-legal a:hover { color: var(--blue); }
      `})]})}e.s(["default",0,function(){return(0,t.jsx)(a.Suspense,{fallback:null,children:(0,t.jsx)(h,{})})}])},3374,e=>{"use strict";var t=e.i(43476),a=e.i(71645),n=e.i(22016),i=e.i(50974),r=e.i(18566),s=e.i(30200),o=e.i(91572),l=e.i(68702);function d({name:e,email:i,initials:p}){let c=(0,l.useT)(),[h,u]=(0,a.useState)(!1),g=(0,a.useRef)(null),m=(0,r.useRouter)();return(0,a.useEffect)(()=>{function e(e){g.current&&!g.current.contains(e.target)&&u(!1)}return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,t.jsxs)("div",{className:"um",ref:g,children:[(0,t.jsxs)("button",{className:"um-btn",onClick:()=>u(e=>!e),"aria-expanded":h,children:[(0,t.jsx)("span",{className:"um-av",children:p}),(0,t.jsx)("span",{className:"um-nm",title:i,children:i}),(0,t.jsx)(s.Icon,{name:"expand_more",size:18,className:"um-chev"})]}),h&&(0,t.jsxs)("div",{className:"um-menu",role:"menu",children:[(0,t.jsxs)("div",{className:"um-head",children:[(0,t.jsx)("span",{className:"um-av lg",children:p}),(0,t.jsxs)("div",{className:"um-head-txt",children:[(0,t.jsx)("div",{className:"um-head-em",children:i}),e&&e!==i&&(0,t.jsx)("div",{className:"um-head-nm",children:e})]})]}),(0,t.jsxs)(n.default,{href:"/dashboard",className:"um-item",role:"menuitem",onClick:()=>u(!1),children:[(0,t.jsx)(s.Icon,{name:"dashboard",size:19})," ",c("nav.dashboard")]}),(0,t.jsxs)(n.default,{href:"/settings",className:"um-item",role:"menuitem",onClick:()=>u(!1),children:[(0,t.jsx)(s.Icon,{name:"settings",size:19})," ",c("nav.settings")]}),(0,t.jsxs)(n.default,{href:"/plan",className:"um-item",role:"menuitem",onClick:()=>u(!1),children:[(0,t.jsx)(s.Icon,{name:"workspace_premium",size:19})," ",c("nav.plan")]}),(0,t.jsx)("div",{className:"um-sep"}),(0,t.jsxs)("button",{className:"um-item danger",role:"menuitem",onClick:function(){(0,o.signOut)(),u(!1),m.push("/")},children:[(0,t.jsx)(s.Icon,{name:"logout",size:19})," ",c("common.logOut")]})]}),(0,t.jsx)("style",{children:`
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
      `})]})}var p=e.i(67176);let c={name:"Alex Morgan",email:"alex@email.com",initials:"AM",joined:"2026-03-12"};e.s(["Header",0,function({variant:e="marketing"}){let r=(0,l.useT)(),[s,h]=(0,a.useState)(!1),{session:u,ready:g}=(0,o.useSession)();(0,a.useEffect)(()=>{if("marketing"!==e)return;let t=()=>h(window.scrollY>8);return window.addEventListener("scroll",t,{passive:!0}),t(),()=>window.removeEventListener("scroll",t)},[e]);let m="marketing"!==e||s,x="app"===e?u??c:u;return(0,t.jsxs)("header",{className:`gm-head v-${e} ${m?"solid":""}`,children:[(0,t.jsxs)("div",{className:"wrap gm-nav",children:[(0,t.jsx)(n.default,{href:"/",className:"gm-brand","aria-label":r("header.home"),children:(0,t.jsx)(i.Logo,{size:30})}),(0,t.jsx)("div",{className:"gm-right",children:g&&x?(0,t.jsx)(d,{name:x.name,email:x.email,initials:x.initials}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.LanguageSwitcher,{}),(0,t.jsx)(n.default,{href:"/login",className:"gm-login",children:r("common.logIn")}),(0,t.jsx)(n.default,{href:"/login?mode=signup",className:"btn btn-dark btn-sm gm-cta",children:r("common.signUp")})]})})]}),(0,t.jsx)("style",{children:`
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
      `})]})}],3374)},67176,e=>{"use strict";var t=e.i(43476),a=e.i(71645),n=e.i(30200),i=e.i(68702),r=e.i(44770);e.s(["LanguageSwitcher",0,function({variant:e="pill"}){let{locale:s,setLocale:o}=(0,i.useI18n)(),[l,d]=(0,a.useState)(!1),p=(0,a.useRef)(null),c=(0,a.useRef)(null),[h,u]=(0,a.useState)(null);function g(){let e=c.current;if(!e)return;let t=(e.closest(".tb-menu, .sb-acc-pop, .um-menu")??e).getBoundingClientRect(),a=Math.min(.6*window.innerHeight,468),n=Math.max(8,Math.min(t.top,window.innerHeight-a-8)),i=t.right+8+200<=window.innerWidth-8,r=t.left-8-200>=8;i?u({top:n,left:t.right+8}):r?u({top:n,right:window.innerWidth-t.left+8}):u({top:n,left:Math.max(8,Math.min(t.left,window.innerWidth-200-8))})}(0,a.useEffect)(()=>{if(!l)return;let t=e=>{p.current&&!p.current.contains(e.target)&&d(!1)},a=e=>{"Escape"===e.key&&d(!1)},n=()=>{"row"===e&&g()};return document.addEventListener("mousedown",t),document.addEventListener("keydown",a),window.addEventListener("resize",n),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("keydown",a),window.removeEventListener("resize",n)}},[l]);let m=r.LANGUAGES.find(e=>e.code===s)??r.LANGUAGES[0];return(0,t.jsxs)("div",{className:`lsw v-${e}`,ref:p,children:[(0,t.jsxs)("button",{ref:c,type:"button",className:`lsw-btn ${l?"open":""}`,onClick:function(){l||g(),d(e=>!e)},"aria-haspopup":"listbox","aria-expanded":l,"aria-label":`Language — ${m.english}`,children:[(0,t.jsx)(n.Icon,{name:"language",size:"pill"===e?20:19}),(0,t.jsx)("span",{className:"lsw-cur",children:"pill"===e?m.code.toUpperCase():m.native}),"row"===e&&(0,t.jsx)(n.Icon,{name:"expand_more",size:17,className:"lsw-chev"})]}),l&&(0,t.jsx)("div",{className:"lsw-list",role:"listbox","aria-label":"Language",style:"row"===e&&h?{position:"fixed",...h}:void 0,children:r.LANGUAGES.map(e=>(0,t.jsxs)("button",{type:"button",role:"option","aria-selected":e.code===s,className:`lsw-item ${e.code===s?"on":""}`,onClick:()=>{o(e.code),d(!1)},children:[(0,t.jsx)("span",{className:"lsw-native",children:e.native}),e.code===s&&(0,t.jsx)(n.Icon,{name:"check",size:17,className:"lsw-check"})]},e.code))}),(0,t.jsx)("style",{children:`
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
      `})]})}])},50974,e=>{"use strict";var t=e.i(43476);function a({size:e=26,className:n}){return(0,t.jsx)("img",{src:"/gemini-spark.svg",alt:"",width:e,height:e,className:n,draggable:!1,"aria-hidden":"true",style:{display:"block",flexShrink:0}})}e.s(["Logo",0,function({size:e=26}){return(0,t.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:9},children:[(0,t.jsx)(a,{size:e}),(0,t.jsx)("span",{style:{fontWeight:600,fontSize:.82*e,letterSpacing:"-0.02em",color:"var(--text)"},children:"Gemini Trade"})]})},"Spark",0,a])},16148,e=>{"use strict";e.s(["FAQ_KEYS",0,["start","howOften","potential","dailyLimit","withdrawAnytime","howItWorks","returns","fees"],"TIERS",0,[{key:"core",name:"Core",price:"$100",minDeposit:100,ceilingX:5,dailyPct:40,sessionMin:20,firstDayPct:120,firstDayMult:3,profitFeePct:10,cooldownSec:21600,featured:!1,badge:null},{key:"prime",name:"Prime",price:"$500",minDeposit:500,ceilingX:10,dailyPct:60,sessionMin:25,firstDayPct:180,firstDayMult:3,profitFeePct:7,cooldownSec:21600,featured:!0,badge:"chosen"},{key:"private",name:"Private",price:"$1,000",minDeposit:1e3,ceilingX:20,dailyPct:75,sessionMin:30,firstDayPct:225,firstDayMult:3,profitFeePct:5,cooldownSec:14400,featured:!1,badge:null},{key:"elite",name:"Elite",price:"$2,500",minDeposit:2500,ceilingX:25,dailyPct:85,sessionMin:35,firstDayPct:255,firstDayMult:3,profitFeePct:3,cooldownSec:10800,featured:!1,badge:null},{key:"sovereign",name:"Sovereign",price:"$10,000",minDeposit:1e4,ceilingX:30,dailyPct:95,sessionMin:40,firstDayPct:285,firstDayMult:3,profitFeePct:0,cooldownSec:7200,featured:!1,badge:"top"}]])},86062,e=>{"use strict";var t=e.i(16148);function a(e){return Number(e.replace(/[^0-9]/g,""))}let n=Object.fromEntries(t.TIERS.map(e=>[e.key,a(e.price)])),i=a(t.TIERS[0].price),r=t.TIERS;function s(e){let t=Math.max(0,e),a=-1,i=r;for(let e=0;e<i.length;e++)t>=n[i[e].key]&&(a=e);let s=a>=0?i[a]:null,o=a+1<i.length?i[a+1]:null,l=o?Math.max(0,n[o.key]-t):0,d=s?n[s.key]:0,p=(o?n[o.key]:d)-d,c=o&&p>0?Math.min(100,Math.max(0,(t-d)/p*100)):100;return{tier:s,key:s?.key??null,index:a,next:o,gap:l,deposited:t,progress:c,hasTier:!!s,maxed:!o}}function o(e){return Math.max(i,Math.round(Number(e)||0))}e.s(["ENTRY_MIN",()=>i,"TIER_MIN",0,n,"activeTiers",0,function(){return r},"applyServerTiers",0,function(e){if(!Array.isArray(e)||0===e.length)return;let a=1/0;for(let t of e)t&&"string"==typeof t.key&&t.min_deposit>0&&(n[t.key]=t.min_deposit,t.min_deposit<a&&(a=t.min_deposit));Number.isFinite(a)&&(i=a);let s=new Set(e.filter(e=>e&&e.min_deposit>0).map(e=>e.key)),o=t.TIERS.filter(e=>s.has(e.key));o.length>0&&(r=o)},"depositAsk",0,o,"depositHref",0,function(e){return`/deposit?amount=${o(e)}`},"tierAfterDeposit",0,function(e,t){return s(e+Math.max(0,t))},"tierFromDeposited",0,s])}]);