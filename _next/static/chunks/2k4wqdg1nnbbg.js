(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,20907,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(22016),a=e.i(18566),n=e.i(30200),o=e.i(51346),s=e.i(94616),d=e.i(85087),l=e.i(88840),p=e.i(90441),c=e.i(99686),x=e.i(86062),m=e.i(22307),u=e.i(84496),f=e.i(9165);let h=new Set(["USDT","USDC","DAI","FDUSD","TUSD","BUSD"]),g={},b=0,v=null,y=new Set;async function w(){return v||(v=(async()=>{try{let e=await f.api.prices();if(!Array.isArray(e)||0===e.length)return;let t={};for(let r of e)r?.sym&&"number"==typeof r.price&&(t[r.sym.toUpperCase()]=h.has(r.sym.toUpperCase())?1:r.price);for(let e of(g=t,b=Date.now(),y))e(g)}catch{}finally{v=null}})())}var j=e.i(68702),N=e.i(68949),k=e.i(89125);let z={Bitcoin:"BTC",ERC20:"ETH",TRC20:"TRX",BEP20:"BNB",Solana:"SOL",Ripple:"XRP",Litecoin:"LTC",Dogecoin:"DOGE",TON:"TON"},T=e=>`$${Math.abs(e).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}`,S=e=>`$${Math.round(e).toLocaleString("en-US")}`;function D(){let{account:e,ready:h}=(0,c.useAccount)(),v=(0,c.useTier)(),D=(0,a.useSearchParams)(),{priceOf:C}=function(){let[e,t]=(0,r.useState)(g);return(0,r.useEffect)(()=>{y.add(t),Date.now()-b>6e4&&w();let e=setInterval(()=>void w(),6e4);return()=>{y.delete(t),clearInterval(e)}},[]),{prices:e,priceOf:t=>e[t?.trim().toUpperCase()]??0}}(),I=Number(D.get("amount")),_=Number.isFinite(I)&&I>0?String(Math.max(100,Math.round(I))):"",[$,E]=(0,r.useState)([]),[R,M]=(0,r.useState)(100),U=(0,j.useT)(),[A,B]=(0,r.useState)(null),[L,P]=(0,r.useState)(_),[F,O]=(0,r.useState)(),[q,X]=(0,r.useState)(!1),Y=(0,r.useRef)(null);(0,r.useEffect)(()=>{f.api.wallets().catch(()=>f.api.publicWallets()).then(E).catch(()=>E([])),f.api.config().then(e=>{e?.min_deposit>0&&M(e.min_deposit)}).catch(()=>{})},[]);let K=(0,r.useMemo)(()=>{let e=["BTC","ETH","USDT","USDC","BNB","SOL","XRP","DOGE","TON","LTC","TRX","ADA"],t=t=>{let r=e.indexOf(t);return -1===r?e.length:r},r=new Set;return[...$.filter(e=>!r.has(e.coin_name_short)&&r.add(e.coin_name_short))].sort((e,r)=>t(e.coin_name_short)-t(r.coin_name_short))},[$]),G=$.find(e=>e.id===A)??K[0]??null,H=G?.coin_name_short??"",V=G?.network??"",Q=G?.address??"",W=(0,r.useMemo)(()=>$.filter(e=>e.coin_name_short===H),[$,H]),J=C(H),Z=J&&Number.isFinite(J)&&Number.isFinite(R)&&!(R<=0)?R/J:null,ee=e.promo,et=e.transactions.filter(e=>"deposit"===e.type||"bonus"===e.type).slice(0,3),er=(0,N.parseAmount)(L),ei=null!==er&&er>0?er:0,ea=(0,x.tierAfterDeposit)(e.deposited,ei),en=ei>0&&ea.index>v.index,eo=ee?(0,m.bonusFor)(ee,ei):0,es=!!ee?.minDeposit&&ei>0&&ei<ee.minDeposit;async function ed(){if(null===er||er<=0)return O("Enter the amount you sent.");if(er<R)return O(`Minimum deposit is $${R.toLocaleString("en-US")}.`);if(!G)return O("No deposit wallet is configured yet — contact support.");O(void 0),X(!0);try{await (0,c.deposit)(er,H,V),P(""),(0,l.toast)("Thanks — we're checking the wallet and will credit your balance shortly.")}catch(e){O(e instanceof f.ApiError?e.message:"Couldn't reach the server. Try again.")}finally{X(!1)}}return h?(0,t.jsxs)("div",{className:"dp",children:[(0,t.jsxs)("main",{className:"dp-main wrap",children:[(0,t.jsxs)("header",{className:"dp-header",children:[(0,t.jsx)("h1",{className:"h2",children:U("dep.title")}),(0,t.jsx)("p",{className:"lead",children:U("dep.lead")})]}),(0,t.jsxs)("section",{className:"card dp-panel dp-plans",children:[(0,t.jsxs)("div",{className:"dp-panel-head",children:[(0,t.jsx)(n.Icon,{name:"workspace_premium",size:20}),(0,t.jsx)("h2",{children:U("dep.choosePlan")}),(0,t.jsxs)("span",{className:"dp-dep",children:["Deposited so far ",(0,t.jsx)("b",{className:"tnum",children:S(e.deposited)})]})]}),(0,t.jsx)("div",{className:"dp-tier-grid",children:(0,x.activeTiers)().map((r,i)=>{let a=Math.max(0,x.TIER_MIN[r.key]-e.deposited),n=v.key===r.key,o=v.index>=i;return(0,t.jsxs)("button",{type:"button",className:`dp-tier ${n?"on":""} ${o&&!n?"past":""}`,onClick:()=>{var t;let i;return t=r.key,P(String(Math.round(Math.max(R,x.TIER_MIN[t]-e.deposited)))),O(void 0),i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,void requestAnimationFrame(()=>Y.current?.scrollIntoView({behavior:i?"auto":"smooth",block:"start"}))},"aria-pressed":ei>0&&ea.key===r.key,children:[r.featured&&(0,t.jsx)("span",{className:"dp-tier-pill",children:U("dep.mostChosen")}),(0,t.jsx)("span",{className:"dp-tier-nm",children:r.name}),(0,t.jsx)("span",{className:"dp-tier-yield",children:U("dep.tierYield",{x:r.ceilingX,pct:r.dailyPct})}),(0,t.jsx)("span",{className:"dp-tier-amt tnum",children:o?n?U("dep.yourPlan"):U("dep.unlockedShort"):`+${S(a)}`}),(0,t.jsx)("span",{className:"dp-tier-sub",children:o?U("dep.deposited",{amount:S(x.TIER_MIN[r.key])}):U("dep.lifetime",{amount:S(x.TIER_MIN[r.key])})})]},r.key)})})]}),(0,t.jsxs)("div",{className:"dp-grid",children:[(0,t.jsxs)("section",{className:"card dp-panel dp-pay",ref:Y,children:[(0,t.jsxs)("div",{className:"dp-avail",children:[(0,t.jsx)("span",{className:"dp-avail-k",children:U("dep.currentBalance")}),(0,t.jsx)("span",{className:"dp-avail-v tnum",children:T(e.balance)})]}),(0,t.jsxs)("div",{className:"dp-two",children:[(0,t.jsx)(o.Dropdown,{label:U("dep.coin"),value:H,options:K.map(e=>e.coin_name_short),onChange:function(e){let t=$.find(t=>t.coin_name_short===e);t&&B(t.id)},renderIcon:e=>(0,t.jsx)(s.CoinIcon,{sym:e,size:20})}),(0,t.jsx)(o.Dropdown,{label:U("dep.network"),value:V,options:W.map(e=>e.network),onChange:e=>{let t=W.find(t=>t.network===e);t&&B(t.id)},renderIcon:e=>(0,t.jsx)(s.CoinIcon,{sym:z[e]??H,size:20})})]}),(0,t.jsxs)("div",{className:"dp-rate",children:[(0,t.jsxs)("span",{className:"dp-rate-min",children:["Minimum deposit ",(0,t.jsxs)("b",{children:[function(e){if(null==e||!Number.isFinite(e)||e<=0)return"—";let t=e>=1e3?0:e>=1?2:e>=.01?4:5;return e.toLocaleString("en-US",{maximumFractionDigits:t})}(Z)," ",H]})," ","≈ ",S(R)]}),J>0&&(0,t.jsxs)("span",{className:"dp-rate-quote tnum",children:["1 ",H," ≈ $",J.toLocaleString("en-US",{maximumFractionDigits:J>=100?0:2})]})]}),ee&&(0,t.jsxs)("div",{className:`dp-promo ${es?"short":""}`,children:[(0,t.jsx)(n.Icon,{name:es?"info":"redeem",size:16,fill:+!es}),es?(0,t.jsx)("span",{children:(0,t.jsx)(j.Rich,{text:U("dep.promoShort",{code:ee.code,min:S(ee.minDeposit),add:S(ee.minDeposit-ei),pct:ee.bonusPct})})}):(0,t.jsxs)("span",{children:[(0,t.jsx)(j.Rich,{text:U("dep.promoActive",{code:ee.code,label:ee.label??U("dep.promoDefaultLabel",{pct:ee.bonusPct})})}),eo>0&&(0,t.jsxs)(t.Fragment,{children:[" ",(0,t.jsx)(j.Rich,{text:U("dep.promoEarns",{amount:S(eo)})})]})]})]}),(0,t.jsxs)("div",{className:"dp-qr-wrap",children:[(0,t.jsx)("div",{className:"dp-qr",children:(0,t.jsx)(d.QRCode2,{value:Q,size:92})}),(0,t.jsxs)("div",{className:"dp-qr-note",children:["Scan to deposit",(0,t.jsx)("br",{}),(0,t.jsx)("b",{children:H})," · ",V]})]}),(0,t.jsxs)("div",{className:"dp-addr",children:[(0,t.jsx)("span",{className:"dp-addr-val mono",children:Q}),(0,t.jsx)(p.CopyButton,{value:Q,label:U("dep.copyBtn"),ariaLabel:U("dep.copyAddress"),successMessage:U("dep.copiedToast"),className:"dp-copy"})]}),(0,t.jsxs)("div",{className:`dp-field ${F?"err":""}`,children:[(0,t.jsx)("span",{children:U("dep.amountLabel")}),(0,t.jsx)("input",{"aria-label":U("dep.amountLabel"),value:L,inputMode:"decimal",placeholder:"0.00","aria-invalid":!!F,onChange:e=>{P((0,N.sanitizeAmountInput)(e.target.value)),F&&O(void 0)}}),F&&(0,t.jsx)("small",{className:"dp-fielderr",children:F})]}),ei>0&&(0,t.jsxs)("div",{className:`dp-effect ${en?"up":ea.hasTier?"same":"none"}`,children:[(0,t.jsx)(n.Icon,{name:en?"trending_up":ea.hasTier?"check_circle":"info",size:16,fill:+!!en}),en?(0,t.jsx)("span",{children:(0,t.jsx)(j.Rich,{text:U("dep.unlocks",{tier:ea.tier?.name??"",x:ea.tier?.ceilingX??0,pct:ea.tier?.dailyPct??0})})}):ea.hasTier?(0,t.jsxs)("span",{children:[(0,t.jsx)(j.Rich,{text:U("dep.topsUp",{tier:ea.tier?.name??""})})," ",ea.next?U("dep.topsUpNext",{amount:S(ea.gap),tier:ea.next.name}):U("dep.topsUpTop")]}):(0,t.jsx)("span",{children:(0,t.jsx)(j.Rich,{text:U("dep.noPlanYet",{amount:S(ea.gap),tier:ea.next?.name??""})})})]}),(0,t.jsx)("button",{className:"btn btn-dark dp-submit",onClick:ed,disabled:q||!G,children:q?U("dep.sending"):U("dep.madeDeposit")}),(0,t.jsxs)("p",{className:"dp-hint",children:[(0,t.jsx)(n.Icon,{name:"info",size:15})," ",U("dep.hint",{min:S(R),entry:S(x.ENTRY_MIN)})]})]}),(0,t.jsxs)("section",{className:"card dp-panel dp-side",children:[(0,t.jsxs)("div",{className:"dp-panel-head",children:[(0,t.jsx)(n.Icon,{name:"bolt",size:20}),(0,t.jsx)("h2",{children:U("dep.howTitle")})]}),(0,t.jsxs)("ol",{className:"dp-steps",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:U("dep.step1T")}),(0,t.jsx)("span",{children:U("dep.step1S")})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:U("dep.step2T")}),(0,t.jsx)("span",{children:U("dep.step2S")})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("b",{children:U("dep.step3T")}),(0,t.jsx)("span",{children:U("dep.step3S")})]})]}),(0,t.jsxs)("div",{className:"dp-panel-head dp-recent-head",children:[(0,t.jsx)(n.Icon,{name:"history",size:20}),(0,t.jsx)("h2",{children:U("dep.historyTitle")}),(0,t.jsxs)(i.default,{href:"/history",className:"dp-viewall",children:["View all ",(0,t.jsx)(n.Icon,{name:"chevron_right",size:15})]})]}),0===et.length?(0,t.jsx)("div",{className:"dp-empty",children:U("dep.empty")}):(0,t.jsx)("div",{className:"dp-list",children:et.map(e=>(0,t.jsxs)("div",{className:"dp-item",children:[(0,t.jsx)("span",{className:`dp-item-ic ${e.type}`,children:(0,t.jsx)(n.Icon,{name:"bonus"===e.type?"redeem":"south_west",size:17,fill:1})}),(0,t.jsxs)("div",{className:"dp-item-body",children:[(0,t.jsxs)("div",{className:"dp-item-top",children:[(0,t.jsxs)("span",{className:"dp-item-amt tnum",children:["+",T(e.amount)]}),(0,t.jsx)("span",{className:"dp-item-when",children:e.at?(0,u.relTime)(e.at):e.when})]}),(0,t.jsx)("div",{className:"dp-item-sub",children:"bonus"===e.type?e.note??"Bonus":`Deposit${e.coin?` \xb7 ${e.coin}`:""}`})]})]},e.id))})]})]})]}),(0,t.jsx)("style",{children:`
        .dp-main { width: 100%; min-width: 0; max-width: 1100px; padding-top: 40px; padding-bottom: 60px; display: flex; flex-direction: column; gap: 20px; }
        .dp-header .lead { margin-top: 8px; }
        .dp-header .h2 { font-size: clamp(30px, 4vw, 40px); }
        .dp-grid { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr); gap: 18px; align-items: start; }
        .dp-panel { min-width: 0; padding: 24px 26px; }
        /* Clears the 60px sticky topbar (Topbar.tsx) plus breathing room. */
        .dp-pay { scroll-margin-top: 76px; }
        .dp-panel-head { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
        .dp-panel-head .material-symbols-rounded { color: var(--blue); }
        .dp-panel-head h2 { font-size: 17px; font-weight: 700; }
        .dp-dep { margin-left: auto; font-size: 12.5px; color: var(--text-3); }
        .dp-dep b { color: var(--text); font-weight: 700; }

        .dp-tier-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .dp-tier {
          position: relative; display: flex; flex-direction: column; gap: 2px; text-align: left;
          padding: 16px 16px 14px; border-radius: 16px; cursor: pointer;
          background: var(--surface-1); border: 1px solid var(--line-soft);
          transition: border-color .18s var(--ease), background .18s var(--ease);
        }
        .dp-tier.on { border-color: var(--blue); background: var(--blue-soft); }
        .dp-tier.past { background: #fff; }
        .dp-tier-pill {
          position: absolute; top: -9px; left: 16px; font-size: 10.5px; font-weight: 700; letter-spacing: .02em;
          color: #fff; background: var(--text); padding: 3px 9px; border-radius: 999px;
        }
        .dp-tier-nm { font-size: 15px; font-weight: 700; color: var(--text); }
        .dp-tier-yield { font-size: 12.5px; font-weight: 600; color: var(--blue); }
        .dp-tier-amt { font-size: 22px; font-weight: 700; letter-spacing: -0.02em; color: var(--text); margin-top: 8px; }
        .dp-tier.on .dp-tier-amt, .dp-tier.past .dp-tier-amt { font-size: 15px; color: var(--green); }
        .dp-tier-sub { font-size: 11.5px; color: var(--text-3); }

        .dp-avail { display: flex; flex-direction: column; gap: 4px; padding: 16px 18px; border-radius: 16px; background: var(--blue-soft); margin-bottom: 20px; }
        .dp-avail-k { font-size: 13px; font-weight: 600; color: var(--blue-strong); }
        .dp-avail-v { font-size: 28px; font-weight: 700; color: var(--text); letter-spacing: -0.02em; }
        .dp-two { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 16px; }

        .dp-rate { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 6px 12px; font-size: 12.5px; color: var(--muted); margin-bottom: 16px; }
        .dp-rate-min b { color: var(--text); font-weight: 600; }
        .dp-rate-quote { color: var(--muted); }

        .dp-promo { display: flex; align-items: center; gap: 8px; font-size: 12.5px; color: var(--green); background: #e6f4ea; border: 1px solid #cde9d6; border-radius: 12px; padding: 10px 12px; margin-bottom: 14px; }
        .dp-promo .material-symbols-rounded { color: var(--green); flex-shrink: 0; }
        .dp-promo b { color: var(--text); }
        .dp-promo.short { color: #8a5a00; background: #fef7e0; border-color: #fde293; }
        .dp-promo.short .material-symbols-rounded { color: #b06000; }

        .dp-qr-wrap { display: flex; flex-wrap: wrap; align-items: center; gap: 16px; padding: 16px; margin-bottom: 14px; background: var(--surface-1); border: 1px solid var(--line-soft); border-radius: 16px; }
        .dp-qr { width: 92px; height: 92px; flex-shrink: 0; border-radius: 12px; background: #fff; border: 1px solid var(--line-soft); padding: 8px; box-sizing: content-box; }
        .dp-qr-note { font-size: 13px; color: var(--text-3); line-height: 1.5; }
        .dp-qr-note b { color: var(--text); }

        .dp-addr { display: flex; align-items: center; gap: 8px; padding: 8px 8px 8px 14px; border-radius: var(--radius-input); border: 1px solid var(--line); background: var(--surface-1); margin-bottom: 16px; }
        .dp-addr-val { flex: 1; min-width: 0; font-size: 12px; line-height: 1.6; color: var(--text-2); overflow-wrap: anywhere; }
        /* Colour + hover come from the shared .copy-btn; this is layout only. */

        .dp-field { display: block; margin-bottom: 14px; }
        .dp-field span { display: block; font-size: 13px; font-weight: 600; color: var(--text-2); margin-bottom: 7px; }
        .dp-field input { width: 100%; padding: 13px 15px; border-radius: var(--radius-input); border: 1px solid var(--line); background: var(--surface-1); font-size: 15px; color: var(--text); outline: none; transition: border-color .2s var(--ease), background .2s var(--ease), box-shadow .2s var(--ease); }
        .dp-field input:hover { border-color: #c4c7c5; }
        .dp-field input:focus { border-color: var(--blue); background: #fff; box-shadow: 0 0 0 3px var(--blue-soft); }
        .dp-field.err input { border-color: var(--red); background: #fff; }
        .dp-fielderr { display: block; margin-top: 4px; padding-left: 8px; font-size: 12px; font-weight: 500; color: var(--red); }

        .dp-effect { display: flex; align-items: flex-start; gap: 8px; font-size: 12.5px; line-height: 1.45; padding: 11px 13px; border-radius: 12px; margin-bottom: 16px; }
        .dp-effect b { font-weight: 700; }
        .dp-effect.up { color: var(--green); background: #e6f4ea; border: 1px solid #cde9d6; }
        .dp-effect.up .material-symbols-rounded { color: var(--green); }
        .dp-effect.up b { color: var(--text); }
        .dp-effect.same { color: var(--text-2); background: var(--surface-1); border: 1px solid var(--line-soft); }
        .dp-effect.same .material-symbols-rounded { color: var(--text-3); }
        .dp-effect.same b { color: var(--text); }
        .dp-effect.none { color: #8a5a00; background: #fef7e0; border: 1px solid #fde293; }
        .dp-effect.none .material-symbols-rounded { color: #b06000; }
        .dp-effect.none b { color: var(--text); }
        .dp-effect .material-symbols-rounded { flex-shrink: 0; margin-top: 1px; }

        .dp-submit { width: 100%; }
        .dp-hint { display: flex; align-items: flex-start; gap: 7px; font-size: 12px; color: var(--text-3); line-height: 1.5; margin-top: 14px; }
        .dp-hint .material-symbols-rounded { color: var(--text-3); margin-top: 1px; flex-shrink: 0; }

        .dp-steps { list-style: none; display: flex; flex-direction: column; gap: 14px; margin-bottom: 24px; counter-reset: dp; }
        .dp-steps li { position: relative; padding-left: 38px; }
        .dp-steps li::before { counter-increment: dp; content: counter(dp); position: absolute; left: 0; top: 0; width: 26px; height: 26px; display: grid; place-items: center; border-radius: 50%; background: var(--blue-soft); color: var(--blue-strong); font-size: 13px; font-weight: 700; }
        .dp-steps b { display: block; font-size: 14px; font-weight: 600; color: var(--text); }
        .dp-steps span { display: block; font-size: 12.5px; color: var(--text-3); margin-top: 2px; line-height: 1.5; }
        .dp-recent-head { padding-top: 20px; border-top: 1px solid var(--line-soft); }
        .dp-viewall { display: inline-flex; align-items: center; gap: 1px; margin-left: auto; font-size: 12.5px; font-weight: 600; color: var(--blue); white-space: nowrap; }
        .dp-viewall .material-symbols-rounded { color: var(--blue); }
        .dp-viewall:hover { text-decoration: underline; }

        .dp-list { display: flex; flex-direction: column; }
        .dp-item { display: flex; gap: 12px; padding: 12px 0; border-top: 1px solid var(--line-soft); }
        .dp-item:first-child { border-top: none; padding-top: 0; }
        .dp-item-ic { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 50%; flex-shrink: 0; background: #e6f4ea; color: var(--green); }
        .dp-item-ic.bonus { background: #fef7e0; color: #b06000; }
        .dp-item-body { flex: 1; min-width: 0; }
        .dp-item-top { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
        .dp-item-amt { font-size: 15px; font-weight: 700; color: var(--green); }
        .dp-item-when { font-size: 11.5px; color: var(--text-3); }
        .dp-item-sub { font-size: 12.5px; color: var(--text-3); margin-top: 2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .dp-empty { font-size: 14px; color: var(--text-3); padding: 8px 0 4px; }

        @media (max-width: 900px) { .dp-tier-grid { grid-template-columns: 1fr; } }
        @media (max-width: 820px) {
          .dp-grid { grid-template-columns: minmax(0, 1fr); }
          /* The copy-address button is ~33px tall — a fingertip needs 44px. */
          .dp-copy { min-height: 44px; }
        }
        @media (max-width: 460px) {
          .dp-two { grid-template-columns: minmax(0, 1fr); }
          .dp-panel { padding: 20px 18px; }
          .dp-addr { flex-direction: column; align-items: stretch; padding: 12px; }
          .dp-copy { align-self: flex-end; }
        }
      `})]}):(0,t.jsx)(k.PagePending,{})}e.s(["default",0,function(){return(0,t.jsx)(r.Suspense,{fallback:null,children:(0,t.jsx)(D,{})})}],20907)},90441,e=>{"use strict";var t=e.i(43476),r=e.i(30200),i=e.i(88840),a=e.i(68702);async function n(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}try{let t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();let r=document.execCommand("copy");return document.body.removeChild(t),r}catch{return!1}}e.s(["CopyButton",0,function({value:e,label:o,ariaLabel:s,className:d="",successMessage:l}){let p=(0,a.useT)();async function c(){await n(e)?(0,i.toast)(l??p("common.copied")):(0,i.toast)(p("errors.copyFailed"),"error")}return(0,t.jsxs)("button",{type:"button",className:`copy-btn ${d}`.trim(),onClick:c,"aria-label":s??o??p("common.copy"),children:[(0,t.jsx)(r.Icon,{name:"content_copy",size:16}),o]})}])},51346,68949,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(30200);function a(e){let t=Number(e);return Number.isFinite(t)?t:null}e.s(["Dropdown",0,function({label:e,value:a,options:n,onChange:o,error:s,renderIcon:d}){let[l,p]=(0,r.useState)(!1),[c,x]=(0,r.useState)(()=>Math.max(0,n.indexOf(a))),m=(0,r.useRef)(null);return(0,r.useEffect)(()=>{function e(e){m.current&&!m.current.contains(e.target)&&p(!1)}return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,r.useEffect)(()=>{l&&x(Math.max(0,n.indexOf(a)))},[l,a,n]),(0,t.jsxs)("div",{className:"dd",ref:m,children:[e&&(0,t.jsx)("span",{className:"dd-label",children:e}),(0,t.jsxs)("button",{type:"button",className:`dd-trigger ${l?"open":""} ${s?"err":""}`,"aria-haspopup":"listbox","aria-expanded":l,"aria-invalid":s||void 0,onClick:()=>p(e=>!e),onKeyDown:function(e){if(!l){("Enter"===e.key||" "===e.key||"ArrowDown"===e.key)&&(e.preventDefault(),p(!0));return}"Escape"===e.key?p(!1):"ArrowDown"===e.key?(e.preventDefault(),x(e=>(e+1)%n.length)):"ArrowUp"===e.key?(e.preventDefault(),x(e=>(e-1+n.length)%n.length)):"Enter"===e.key&&(e.preventDefault(),o(n[c]),p(!1))},children:[(0,t.jsxs)("span",{className:"dd-valwrap",children:[d&&(0,t.jsx)("span",{className:"dd-ic",children:d(a)}),(0,t.jsx)("span",{className:"dd-value",children:a})]}),(0,t.jsx)(i.Icon,{name:"expand_more",size:18,className:"dd-chev"})]}),l&&(0,t.jsx)("ul",{className:"dd-menu",role:"listbox",tabIndex:-1,children:n.map((e,r)=>(0,t.jsxs)("li",{role:"option","aria-selected":e===a,className:`dd-opt ${r===c?"active":""} ${e===a?"sel":""}`,onMouseEnter:()=>x(r),onClick:()=>{o(e),p(!1)},children:[(0,t.jsxs)("span",{className:"dd-optwrap",children:[d&&(0,t.jsx)("span",{className:"dd-ic",children:d(e)}),(0,t.jsx)("span",{children:e})]}),e===a&&(0,t.jsx)(i.Icon,{name:"check",size:17,className:"dd-check"})]},e))}),(0,t.jsx)("style",{children:`
        .dd { position: relative; }
        .dd-label {
          display: block; font-size: 12px; font-weight: 600; color: var(--text-2); margin-bottom: 7px;
        }
        .dd-trigger {
          display: flex; align-items: center; justify-content: space-between; gap: 8px;
          width: 100%; padding: 12px 12px 12px 14px; border-radius: var(--radius-input);
          border: 1px solid var(--line); background: var(--surface-1);
          font-family: inherit; font-size: 14px; font-weight: 600; color: var(--text);
          cursor: pointer; text-align: left;
          transition: border-color .2s var(--ease), background .2s var(--ease), box-shadow .2s var(--ease);
        }
        .dd-trigger:hover { border-color: #c4c7c5; }
        .dd-trigger:focus-visible { outline: none; border-color: var(--blue); box-shadow: 0 0 0 3px var(--blue-soft); }
        .dd-trigger.open { border-color: var(--blue); background: #fff; box-shadow: 0 0 0 3px var(--blue-soft); }
        .dd-trigger.err { border-color: var(--red); }
        .dd-trigger.err.open { box-shadow: 0 0 0 3px #fce8e6; }
        .dd-valwrap, .dd-optwrap { display: inline-flex; align-items: center; gap: 8px; min-width: 0; }
        .dd-ic { display: inline-flex; flex-shrink: 0; }
        .dd-value { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .dd-trigger .dd-chev {
          color: var(--text-3); flex-shrink: 0;
          transition: transform .2s var(--ease), color .2s var(--ease);
        }
        .dd-trigger.open .dd-chev { transform: rotate(180deg); color: var(--blue); }

        .dd-menu {
          position: absolute; z-index: 30; top: calc(100% + 6px); left: 0; right: 0;
          list-style: none; margin: 0; padding: 6px;
          background: #fff; border: 1px solid var(--line-soft);
          border-radius: 14px; box-shadow: var(--shadow-lg);
          max-height: 240px; overflow-y: auto;
          animation: dd-in .14s var(--ease);
        }
        @keyframes dd-in { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce) { .dd-menu { animation: none; } }
        .dd-opt {
          display: flex; align-items: center; justify-content: space-between; gap: 8px;
          padding: 10px 12px; border-radius: 9px;
          font-size: 14px; font-weight: 500; color: var(--text-2); cursor: pointer;
        }
        .dd-opt.active { background: var(--surface-2); color: var(--text); }
        .dd-opt.sel { color: var(--blue); font-weight: 600; }
        .dd-opt .dd-check { color: var(--blue); flex-shrink: 0; }
      `})]})}],51346),e.s(["parseAmount",0,function(e){var t;let r=e.replace(/[\s  ]/g,"");if(!r||!/^[\d.,]+$/.test(r))return null;let i=[];for(let e=0;e<r.length;e++)("."===r[e]||","===r[e])&&i.push(e);if(0===i.length)return a(r);let n=i[i.length-1],o=r.slice(n+1);if(0===o.length)return a(r.slice(0,n).replace(/[.,]/g,""));let s=i.every(e=>r[e]===r[n]),d=!(3===o.length&&(1===i.length||s));if(d&&o.length>2)return null;let l=(d?r.slice(0,n):r).replace(/[.,]/g,"")||"0",p=d?i.slice(0,-1):i,c=d?r.slice(0,n):r;return(!c||(t=c,0===p.length?!/[.,]/.test(t):/^\d{1,3}([.,]\d{3})+$/.test(t)))&&/^\d+$/.test(l)?a(d?`${l}.${o}`:l):null},"sanitizeAmountInput",0,function(e){return e.replace(/[^\d.,]/g,"").slice(0,16)}],68949)}]);