(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,27671,e=>{"use strict";var t=e.i(43476),a=e.i(22016),s=e.i(71645),r=e.i(3032),n=e.i(86062),i=e.i(30200),l=e.i(59351),o=e.i(68702);let d="gm_chart_prefs_v4",c={kind:"candles",tf:null,legend:"simple",overlays:{ma:!0,levels:!1,lastValue:!0,markers:!1,movePane:!0}},h={},p=[{key:"candles",label:"chart.candles"},{key:"bars",label:"chart.bars"},{key:"area",label:"chart.area"},{key:"line",label:"chart.line"},{key:"baseline",label:"chart.baseline"}];function m({on:e,size:a=17}){return(0,t.jsxs)("svg",{width:a,height:a,viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,children:[(0,t.jsx)("path",{d:"M4 7.5h2.5L10 4.5v11L6.5 12.5H4z"}),e?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{d:"M13 7.6a3.4 3.4 0 0 1 0 4.8"}),(0,t.jsx)("path",{d:"M15.2 5.4a6.5 6.5 0 0 1 0 9.2"})]}):(0,t.jsx)("path",{d:"M13.5 8l4 4M17.5 8l-4 4"})]})}function u({exit:e=!1,size:a=17}){return(0,t.jsx)("svg",{width:a,height:a,viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,children:e?(0,t.jsx)("path",{d:"M8 3v5H3M12 17v-5h5M8 17v-5H3M12 3v5h5"}):(0,t.jsx)("path",{d:"M3 7.5V3h4.5M16.5 7.5V3H12M3 12.5V17h4.5M16.5 12.5V17H12"})})}function x({kind:e,size:a=17}){let s={width:a,height:a,viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0};switch(e){case"candles":return(0,t.jsxs)("svg",{...s,children:[(0,t.jsx)("path",{d:"M6 3v3.2M6 13.4V17M13.5 5v2.4M13.5 14v2.6"}),(0,t.jsx)("rect",{x:"3.6",y:"6.2",width:"4.8",height:"7.2",rx:"1"}),(0,t.jsx)("rect",{x:"11.1",y:"7.4",width:"4.8",height:"6.6",rx:"1"})]});case"bars":return(0,t.jsxs)("svg",{...s,children:[(0,t.jsx)("path",{d:"M6 4v12M13.5 6.5v9"}),(0,t.jsx)("path",{d:"M6 7H3.4M6 12.5h2.6M13.5 9h-2.6M13.5 13.5h2.9"})]});case"line":return(0,t.jsx)("svg",{...s,children:(0,t.jsx)("path",{d:"M3 14.2l4-4.4 3.4 2.6L17 5.4"})});case"baseline":return(0,t.jsxs)("svg",{...s,children:[(0,t.jsx)("path",{d:"M2.6 10h14.8",strokeDasharray:"2.4 2.2",opacity:"0.65"}),(0,t.jsx)("path",{d:"M3 13.6l3.6-5.2L10 12l3.4-6.4L17 8.6"})]});default:return(0,t.jsxs)("svg",{...s,children:[(0,t.jsx)("path",{d:"M3 13.4l4-4.2 3.4 2.4L17 5.6"}),(0,t.jsx)("path",{d:"M3 13.4l4-4.2 3.4 2.4L17 5.6V16H3z",fill:"currentColor",fillOpacity:"0.16",stroke:"none"})]})}}let g=[{key:"levels",label:"chart.levels",hint:"chart.levelsHint"},{key:"lastValue",label:"chart.lastValue",hint:"chart.lastValueHint"},{key:"markers",label:"chart.markers",hint:"chart.markersHint"},{key:"movePane",label:"chart.movePane",hint:"chart.movePaneHint"},{key:"ma",label:"chart.ma",hint:"chart.maHint"}],f=[{key:"1s",sec:1},{key:"5s",sec:5},{key:"15s",sec:15},{key:"1m",sec:60},{key:"5m",sec:300},{key:"15m",sec:900},{key:"1h",sec:3600}];function b(e,t){if(!e.length||!Number.isFinite(t)||t<=0)return[];let a=e.filter(e=>Number.isFinite(e.at)&&Number.isFinite(e.value));if(!a.length)return[];let s=new Map;for(let e of a){let a=Math.floor(e.at/1e3/t)*t,r=s.get(a);r?r.push(e):s.set(a,[e])}let r=[],n=a[0].value;for(let e of[...s.keys()].sort((e,t)=>e-t)){let t=s.get(e),a=t.map(e=>e.value),i=a[a.length-1],l=n,o=0;for(let e of t){let t="number"==typeof e.delta?e.delta:0;Math.abs(t)>Math.abs(o)&&(o=t)}r.push({time:e,o:l,c:i,h:Math.max(l,i,...a),l:Math.min(l,i,...a),move:+Math.abs(i-l).toFixed(2),up:i>=l,delta:o}),n=i}return r}function v(e,t){return e.map((a,s)=>s<t-1?null:e.slice(s-t+1,s+1).reduce((e,t)=>e+t,0)/t)}function y(e){return!Number.isFinite(e)||e<=0?2:e<2?3:e<20?2:+(e<400)}function w(e){return`$${Math.round(e).toLocaleString("en-US")}`}function k(e,t){return"$"+e.toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t})}function j(e){return"$"+e.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function N(e){let t=Math.max(0,Math.floor(e)),a=Math.floor(t/3600),s=Math.floor(t%3600/60),r=t%60;return a>0?`${a}h ${String(s).padStart(2,"0")}m ${String(r).padStart(2,"0")}s`:s>0?`${s}m ${String(r).padStart(2,"0")}s`:`${r}s`}function q(e,t){return new Date(e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",...t?{second:"2-digit"}:{},hour12:!1})}function S(e,t){let a=e.replace("#","").trim();if(6!==a.length)return e;let s=parseInt(a,16);return`rgba(${s>>16&255},${s>>8&255},${255&s},${t})`}class M{chart;palette;main=null;mainKind=null;ma7=null;ma25=null;movePane=null;markers=null;watermark=null;priceLines=[];decimals=2;lastRowCount=0;applying=!1;userMoved=!1;host;detachGestures;onUserMove;onRange;scrollState(){let e=this.chart.timeScale().getVisibleLogicalRange();if(!e)return null;let t=e.to-e.from,a=this.rows.length;return!Number.isFinite(t)||t<=0||a<=t?null:{fraction:Math.min(1,Math.max(0,(e.from+.5)/(a-t+.5))),span:t,total:a}}scrollToFraction(e){let t=this.chart.timeScale(),a=t.getVisibleLogicalRange();if(!a)return;let s=a.to-a.from,r=-.5+Math.min(1,Math.max(0,e))*(Math.max(0,this.rows.length-s)+.5);this.userMoved||(this.userMoved=!0,this.onUserMove()),t.setVisibleLogicalRange({from:r,to:r+s})}setResizeEnabled(e){this.chart.applyOptions({layout:{panes:{enableResize:e}}})}constructor(e,t,a,s,n){this.onUserMove=s,this.onRange=n,this.palette=t,this.host=e,this.chart=(0,r.createChart)(e,this.baseOptions()),this.chart.subscribeCrosshairMove(e=>{e.time&&this.main?a(this.rowAt(e.time)):a(null)});let i=null,l=0;const o=e=>{i={x:e.clientX,y:e.clientY}},d=e=>{!i||0===e.buttons||(Math.abs(e.clientX-i.x)>4||Math.abs(e.clientY-i.y)>4)&&(l=performance.now()+600)},c=()=>{i=null},h={capture:!0};e.addEventListener("pointerdown",o,h),e.addEventListener("pointermove",d,h),e.addEventListener("pointerup",c,h),e.addEventListener("pointercancel",c,h),this.detachGestures=()=>{e.removeEventListener("pointerdown",o,h),e.removeEventListener("pointermove",d,h),e.removeEventListener("pointerup",c,h),e.removeEventListener("pointercancel",c,h)},this.chart.timeScale().subscribeVisibleLogicalRangeChange(()=>{this.onRange(this.scrollState()),this.applying||!(performance.now()>l)&&(this.userMoved||(this.userMoved=!0,this.onUserMove()))})}rows=[];rowAt(e){return this.rows.find(t=>t.time===e)??null}baseOptions(){let e=this.palette;return{autoSize:!0,layout:{attributionLogo:!1,background:{type:r.ColorType.Solid,color:"rgba(255,255,255,0)"},textColor:e.text3,fontFamily:'"Roboto Mono", ui-monospace, "SF Mono", Menlo, monospace',fontSize:11,panes:{separatorColor:e.line,separatorHoverColor:S(e.blue,.55),enableResize:!0}},grid:{vertLines:{color:e.grid},horzLines:{color:e.grid}},localization:{priceFormatter:e=>k(e,this.decimals),timeFormatter:e=>q(1e3*e,!0)},crosshair:{mode:r.CrosshairMode.Magnet,vertLine:{color:S(e.text3,.45),width:1,style:r.LineStyle.Solid,labelBackgroundColor:e.text},horzLine:{color:S(e.text3,.45),width:1,style:r.LineStyle.Solid,labelBackgroundColor:e.text}},rightPriceScale:{borderColor:e.grid,scaleMargins:{top:.12,bottom:.12}},timeScale:{borderColor:e.grid,timeVisible:!0,secondsVisible:!0,rightOffset:0,tickMarkFormatter:e=>q(1e3*e,this.stepSec<60)},handleScroll:{mouseWheel:!1,pressedMouseMove:!0,horzTouchDrag:!0,vertTouchDrag:!1},handleScale:{mouseWheel:!1,pinch:!0,axisPressedMouseMove:!0,axisDoubleClickReset:!0}}}stepSec=15;setPalette(e){this.palette=e,this.chart.applyOptions(this.baseOptions())}sync(e){this.rows=e.rows,this.stepSec=e.stepSec;let t=e.rows.map(e=>e.c),a=t.length?Math.min(...e.rows.map(e=>e.l)):0,s=t.length?Math.max(...e.rows.map(e=>e.h)):0;this.decimals=y(s-a),this.chart.applyOptions({localization:{priceFormatter:e=>k(e,this.decimals)}}),this.syncMain(e),this.syncMa(e,t),this.syncMovePane(e),this.syncMarkers(e),this.syncLevels(e),this.syncWatermark(e),this.frame(e),this.lastRowCount=e.rows.length}syncMain(e){let t=this.palette,{rows:a,kind:s}=e,r=!a.length||a[a.length-1].c>=e.startValue?t.green:t.red;if(this.mainKind!==s?(this.main&&this.chart.removeSeries(this.main),this.main=null,this.mainKind=s,this.main=this.createMain(s,r,e)):this.main&&this.applyMainColors(s,r,e),!this.main)return;let n=e.overlays.lastValue;this.main.applyOptions({priceLineVisible:n,lastValueVisible:!0,priceLineColor:r}),"candles"===s||"bars"===s?this.main.setData(a.map(e=>({time:e.time,open:e.o,high:e.h,low:e.l,close:e.c}))):this.main.setData(a.map(e=>({time:e.time,value:e.c})))}createMain(e,t,a){let s=this.palette;switch(e){case"line":return this.chart.addSeries(r.LineSeries,{color:t,lineWidth:2});case"candles":return this.chart.addSeries(r.CandlestickSeries,{upColor:s.green,downColor:s.red,borderUpColor:s.green,borderDownColor:s.red,wickUpColor:s.green,wickDownColor:s.red});case"bars":return this.chart.addSeries(r.BarSeries,{upColor:s.green,downColor:s.red,thinBars:!1});case"baseline":return this.chart.addSeries(r.BaselineSeries,{baseValue:{type:"price",price:a.startValue},topLineColor:s.green,topFillColor1:S(s.green,.28),topFillColor2:S(s.green,.02),bottomLineColor:s.red,bottomFillColor1:S(s.red,.02),bottomFillColor2:S(s.red,.28),lineWidth:2});default:return this.chart.addSeries(r.AreaSeries,{lineColor:t,topColor:S(t,.22),bottomColor:S(t,0),lineWidth:2})}}applyMainColors(e,t,a){if(!this.main)return;let s=this.palette;"area"===e?this.main.applyOptions({lineColor:t,topColor:S(t,.22),bottomColor:S(t,0)}):"line"===e?this.main.applyOptions({color:t}):"baseline"===e?this.main.applyOptions({baseValue:{type:"price",price:a.startValue}}):this.main.applyOptions({upColor:s.green,downColor:s.red})}syncMa(e,t){if(!(e.overlays.ma&&e.rows.length>7)){this.ma7&&(this.chart.removeSeries(this.ma7),this.ma7=null),this.ma25&&(this.chart.removeSeries(this.ma25),this.ma25=null);return}this.ma7||(this.ma7=this.chart.addSeries(r.LineSeries,{color:"#f5a623",lineWidth:1,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1})),this.ma25||(this.ma25=this.chart.addSeries(r.LineSeries,{color:"#7b61ff",lineWidth:1,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1}));let a=v(t,7),s=v(t,25);this.ma7.setData(e.rows.flatMap((e,t)=>null==a[t]?[]:[{time:e.time,value:a[t]}])),this.ma25.setData(e.rows.flatMap((e,t)=>null==s[t]?[]:[{time:e.time,value:s[t]}]))}syncMovePane(e){if(!e.overlays.movePane){if(this.movePane){this.chart.removeSeries(this.movePane),this.movePane=null;let e=this.chart.panes();e.length>1&&this.chart.removePane(e.length-1)}return}if(!this.movePane){for(;this.chart.panes().length<2;)this.chart.addPane();let e=this.chart.panes();this.movePane=this.chart.addSeries(r.HistogramSeries,{priceLineVisible:!1,lastValueVisible:!1,priceFormat:{type:"volume"}},e.length-1),e[0].setStretchFactor(4),e[e.length-1].setStretchFactor(1)}let t=this.palette;this.movePane.setData(e.rows.map(e=>({time:e.time,value:e.move,color:S(e.up?t.green:t.red,.5)})))}syncMarkers(e){if(!e.overlays.markers||!this.main){this.markers&&(this.markers.detach?.(),this.markers=null);return}let t=this.palette,a=[...e.rows].filter(e=>Math.abs(e.delta)>0).sort((e,t)=>Math.abs(t.delta)-Math.abs(e.delta)).slice(0,12).sort((e,t)=>e.time-t.time).map(e=>({time:e.time,position:e.delta>=0?"aboveBar":"belowBar",color:e.delta>=0?t.green:t.red,shape:e.delta>=0?"arrowUp":"arrowDown",text:(e.delta>=0?"+":"−")+j(Math.abs(e.delta)).slice(1)}));this.markers?this.markers.setMarkers(a):this.markers=(0,r.createSeriesMarkers)(this.main,a)}syncLevels(e){let t=this.main;if(!t)return;for(let e of this.priceLines)t.removePriceLine(e.line);if(this.priceLines=[],!e.overlays.levels)return;let a=this.palette,s=(e,a,s,r)=>{if(!Number.isFinite(e)||e<=0)return;let n=t.createPriceLine({price:e,color:a,lineWidth:1,lineStyle:r,axisLabelVisible:!0,title:s});this.priceLines.push({line:n})};s(e.startValue,S(a.text3,.9),"start",r.LineStyle.Dashed),e.targetValue>e.startValue&&s(e.targetValue,S(a.green,.9),"target",r.LineStyle.Dotted)}syncWatermark(e){if(!e.demo){this.watermark&&(this.watermark.detach?.(),this.watermark=null);return}if(this.watermark)return;let t=this.chart.panes()[0];if(!t)return;let a=this.palette;this.watermark=(0,r.createTextWatermark)(t,{horzAlign:"center",vertAlign:"center",lines:[{text:"DEMO",color:S(a.text3,.22),fontSize:44,fontStyle:"bold",fontFamily:'"Roboto Mono", monospace'},{text:"virtual funds",color:S(a.text3,.22),fontSize:12,fontFamily:'"Manrope", sans-serif'}]})}frame(e,t=!1){let a=this.chart.timeScale();if(!e.rows.length||this.userMoved&&!t)return;let s=e.finishAt>e.startedAt?Math.ceil((e.finishAt-e.startedAt)/1e3/e.stepSec):0,r=Math.max(Math.ceil(1.35*e.rows.length),14),n=Math.min(s>0?Math.min(s,r):r,120),i=Math.max(-.5,e.rows.length-120);this.applying=!0,a.setVisibleLogicalRange({from:i,to:n+.5}),requestAnimationFrame(()=>{this.applying=!1})}resetView(e){this.userMoved=!1,this.frame(e,!0);let t=this.chart.panes();t.length>1&&(t[0].setStretchFactor(4),t[t.length-1].setStretchFactor(1))}get grew(){return this.rows.length-this.lastRowCount}dispose(){this.detachGestures(),this.markers?.detach?.(),this.watermark?.detach?.(),this.chart.remove()}}function z(e){try{localStorage.setItem(d,JSON.stringify(e))}catch{}}function L({points:e,active:r,startedAt:v=0,finishAt:S=0,demo:T=!1,note:C="",startValue:R=0,targetValue:$=0,readyToStart:I=!1,onStart:E,starting:A=!1,cooldownLeft:F=0,dailyResetLeft:D=0,dayIsSpent:U=!1,cooldownHours:_=0,fullCooldownHours:B=0,firstDayPace:V=!1,minDeposit:P=0,depositUrl:O="/deposit",tierName:H="",stats:W=[],demoRun:Y=null,soundOn:X=!1,onToggleSound:G,nextTierName:K="",nextTierGap:J=0,nextCeiling:Q=0,nextDailyLimit:Z=0,nextFirstDay:ee=0,dailyBase:et=0,ceilingReached:ea=!1,earnedLifetime:es=0,accountCeiling:er=0,dailyUsed:en=0,dailyLimit:ei=0}){let el=(0,o.useT)(),eo=(0,s.useRef)(null),ed=(0,s.useRef)(null),ec=(0,s.useRef)(null),eh=(0,s.useRef)(null),[ep,em]=(0,s.useState)(c),[eu,ex]=(0,s.useState)(!1),[eg,ef]=(0,s.useState)(!1),[eb,ev]=(0,s.useState)(null),[ey,ew]=(0,s.useState)(null),[ek,ej]=(0,s.useState)(!1),[eN,eq]=(0,s.useState)(!1),[eS,eM]=(0,s.useState)(!1),ez=(0,s.useRef)(null);(0,s.useEffect)(()=>{em(function(e){let t=e?{...c,...h,overlays:{...c.overlays,...h.overlays}}:c;try{let e=localStorage.getItem(d),a=e??localStorage.getItem("gm_chart_prefs_v3");if(!a)return t;let s=JSON.parse(a);return{...t,...s,overlays:{...t.overlays,...s.overlays??{},...!e?{levels:!1}:{}},tf:null}}catch{return t}}(T)),ex(!0)},[T]),(0,s.useEffect)(()=>{let e=()=>eM(document.fullscreenElement===ez.current);return document.addEventListener("fullscreenchange",e),()=>document.removeEventListener("fullscreenchange",e)},[]);let eL=(0,s.useCallback)(()=>{let e=ez.current;e&&(document.fullscreenElement?document.exitFullscreen():e.requestFullscreen?.().catch(()=>{}))},[]);(0,s.useEffect)(()=>{let e=window.matchMedia("(max-width: 720px)"),t=()=>eq(e.matches);return t(),e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]);let eT=(0,s.useMemo)(()=>{let t=S>v?(S-v)/1e3:Math.max(60,5*(e.length||1));return f.filter(e=>{let a=t/e.sec;return a>=8&&a<=900})},[v,S,e.length]),eC=(0,s.useMemo)(()=>{if(!eT.length)return f[2];let t=eT[0];for(let a of eT){let s=b(e,a.sec).length;if(0!==s&&(t=a,s<=90&&e.length/s>=3))return a}return t},[eT,e]),eR=(0,s.useMemo)(()=>eT.find(e=>e.key===ep.tf)??null,[eT,ep.tf])??eC,e$=eR.sec,eI=(0,s.useMemo)(()=>b(e,e$),[e,e$]),eE=(0,s.useMemo)(()=>({rows:eI,kind:ep.kind,overlays:ep.overlays,stepSec:e$,demo:T,startValue:R||(e.length?e[0].value:0),targetValue:$,startedAt:v,finishAt:S}),[eI,ep.kind,ep.overlays,e$,T,R,$,v,S,e]);eh.current=eE;let eA=(0,s.useCallback)(e=>{let t=ec.current;if(!t)return;let a=eh.current?.rows??[],s=e??a[a.length-1]??null;if(!s){t.innerHTML="";return}let r=eh.current?.startValue||s.o,n=s.c-r,i=r>0?n/r*100:0,l=q(1e3*s.time,e$<60);if("ohlc"===ep.legend){let e=y(s.h-s.l||1);t.innerHTML=`<span>O <b>${k(s.o,e)}</b></span><span>H <b>${k(s.h,e)}</b></span><span>L <b>${k(s.l,e)}</b></span><span>C <b>${k(s.c,e)}</b></span><span class="eql-t">${l}</span>`}else t.innerHTML=`<span class="eql-v">${j(s.c)}</span><span class="${n>=0?"pos":"neg"}">${n>=0?"+":"−"}${j(Math.abs(n))} \xb7 ${i>=0?"+":"−"}${Math.abs(i).toFixed(2)}%</span><span class="eql-t">${l}</span>`},[ep.legend,e$]);(0,s.useEffect)(()=>{let e=eo.current;if(!e)return;let t=new M(e,{text:"#e8eaed",text2:"#c3c7cd",text3:"#9aa0a6",line:"#39404b",grid:"#20262f",blue:"#4da3ff",green:"#0ecb81",red:"#f6465d",surface:"#0f141b"},e=>eA(e),()=>ef(!0),e=>ev(e));return ed.current=t,eh.current&&t.sync(eh.current),()=>{t.dispose(),ed.current=null}},[]),(0,s.useEffect)(()=>{ed.current?.setResizeEnabled(!ey&&!ek)},[ey,ek]),(0,s.useEffect)(()=>{ed.current?.sync(eE),eA(null)},[eE,eA]);let eF=`${T?"demo":"live"}:${v}`;(0,s.useEffect)(()=>{let e=ed.current;e&&eh.current&&(e.userMoved=!1,ef(!1),e.frame(eh.current,!0))},[eF]),(0,s.useEffect)(()=>{let e=ed.current;e&&eh.current&&e.frame(eh.current,!0)},[e$]);let eD=(0,s.useCallback)((e,t=!1)=>{em(t=>{let a={...t,...e,overlays:{...t.overlays,...e.overlays??{}}};return z(a),a}),t&&ew(null)},[]),eU=(0,s.useCallback)(e=>{em(t=>{let a={...t,overlays:{...t.overlays,[e]:!t.overlays[e]}};return z(a),a})},[]),e_=(0,s.useCallback)(()=>{em(e=>{let t=T?{...c.overlays,...h.overlays}:c.overlays,a={...e,overlays:{...t}};return z(a),a})},[T]),eB=(0,s.useCallback)(()=>{let e=ed.current;e&&eh.current&&(e.resetView(eh.current),ef(!1))},[]);(0,s.useEffect)(()=>{if(!ey&&!ek)return;let e=e=>{let t=e.target;t.closest(".eql-menu")||t.closest(".eql-sheet")||(ew(null),ej(!1))},t=e=>{"Escape"===e.key&&(ew(null),ej(!1))};return document.addEventListener("mousedown",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",t)}},[ey,ek]);let eV=!T&&(ea||U||F>0||I),eP=r&&!eV&&e.length<=1,eO=el(p.find(e=>e.key===ep.kind)?.label??"chart.candles"),eH=g.filter(e=>ep.overlays[e.key]).length,eW=null===ep.tf,eY=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"eql-group",children:[(0,t.jsx)("div",{className:"eql-group-k",children:el("chart.chartType")}),(0,t.jsx)("div",{className:"eql-opts",children:p.map(e=>(0,t.jsxs)("button",{type:"button",role:"menuitemradio","aria-checked":ep.kind===e.key,className:`eql-opt ${ep.kind===e.key?"on":""}`,onClick:()=>eD({kind:e.key},!0),children:[(0,t.jsx)(x,{kind:e.key}),el(e.label)]},e.key))})]}),(0,t.jsxs)("div",{className:"eql-group",children:[(0,t.jsx)("div",{className:"eql-group-k",children:el("chart.legend")}),(0,t.jsxs)("div",{className:"eql-opts",children:[(0,t.jsx)("button",{type:"button",role:"menuitemradio","aria-checked":"simple"===ep.legend,className:`eql-opt ${"simple"===ep.legend?"on":""}`,onClick:()=>eD({legend:"simple"},!0),children:"Value and result"}),(0,t.jsx)("button",{type:"button",role:"menuitemradio","aria-checked":"ohlc"===ep.legend,className:`eql-opt ${"ohlc"===ep.legend?"on":""}`,onClick:()=>eD({legend:"ohlc"},!0),children:"O · H · L · C"})]})]})]}),eX=(0,t.jsxs)("div",{className:"eql-group",children:[(0,t.jsx)("div",{className:"eql-group-k",children:el("chart.drawnOver")}),(0,t.jsx)("div",{className:"eql-opts",children:g.map(e=>(0,t.jsxs)("button",{type:"button",role:"menuitemcheckbox","aria-checked":ep.overlays[e.key],className:`eql-check ${ep.overlays[e.key]?"on":""}`,onClick:()=>eU(e.key),children:[(0,t.jsx)("span",{className:"eql-box",children:ep.overlays[e.key]&&(0,t.jsx)(i.Icon,{name:"check",size:13})}),(0,t.jsxs)("span",{className:"eql-check-body",children:[(0,t.jsx)("b",{children:el(e.label)}),(0,t.jsx)("em",{children:el(e.hint)})]})]},e.key))}),(0,t.jsx)("button",{type:"button",className:"eql-resetall",onClick:e_,children:"Reset to defaults"})]}),eG=(0,t.jsxs)("div",{className:"eql-tabs",role:"radiogroup","aria-label":el("chart.timeframe"),children:[(0,t.jsxs)("button",{type:"button",role:"radio","aria-checked":eW,className:`eql-auto ${eW?"on":""}`,onClick:()=>eD({tf:null}),title:el("chart.autoTitle"),children:[(0,t.jsx)("i",{}),"Auto"]}),eT.map(e=>(0,t.jsx)("button",{type:"button",role:"radio","aria-checked":!eW&&eR.key===e.key,className:`eql-tab ${eR.key===e.key?"on":""} ${eW?"byauto":""}`,onClick:()=>eD({tf:e.key}),children:e.key},e.key))]});return(0,t.jsxs)("div",{className:`eql ${eV?"is-resting":""} ${eS?"is-full":""}`,ref:ez,children:[Y&&(0,t.jsxs)("div",{className:"eql-demo",children:[(0,t.jsxs)("div",{className:"eql-demo-row",children:[(0,t.jsx)("span",{className:"eql-demo-badge",children:el("chart.demoBadge")}),(0,t.jsx)("span",{className:"eql-demo-txt",children:(0,t.jsx)(o.Rich,{text:el("chart.demoRunning",{stake:Y.stake,tier:Y.tier})})}),(0,t.jsx)("span",{className:"eql-demo-note",children:Y.note})]}),(0,t.jsx)("div",{className:"eql-demo-bar",children:(0,t.jsx)("span",{style:{width:`${Math.min(100,Math.max(0,Y.progressPct))}%`}})})]}),!eV&&(0,t.jsxs)("div",{className:"eql-header",children:[(0,t.jsxs)("div",{className:"eql-legendbar",children:[(0,t.jsxs)("span",{className:"eql-title",children:[T?el("chart.demoPortfolio"):el("chart.portfolio")," · ",eR.key,eW&&(0,t.jsx)("span",{className:"eql-autotag",children:el("chart.auto")})]}),(0,t.jsx)("div",{className:"eql-legend",ref:ec}),r&&(0,t.jsxs)("span",{className:`eql-live ${T?"muted":""}`,children:[(0,t.jsx)("i",{})," ",T?el("chart.replay"):el("chart.live")]}),C&&(0,t.jsx)("span",{className:"eql-note",children:C})]}),eu&&!eV&&(0,t.jsxs)("div",{className:"eql-controls",children:[eg&&(0,t.jsxs)("button",{type:"button",className:"eql-reset",onClick:eB,children:[(0,t.jsx)(i.Icon,{name:"refresh",size:16})," ",el("chart.resetView")]}),G&&(0,t.jsx)("button",{type:"button",className:`eql-icon ${X?"on":""}`,onClick:G,"aria-pressed":X,"aria-label":X?el("chart.muteSounds"):el("chart.unmuteSounds"),title:X?el("chart.soundsOn"):el("chart.soundsOff"),children:(0,t.jsx)(m,{on:X})}),(0,t.jsx)("button",{type:"button",className:"eql-icon",onClick:eL,"aria-label":eS?el("chart.exitFull"):el("chart.fullScreen"),title:eS?el("chart.exitFull"):el("chart.fullScreen"),children:(0,t.jsx)(u,{exit:eS})}),!eN&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"eql-menu",children:[(0,t.jsxs)("button",{type:"button",className:`eql-btn ${"view"===ey?"open":""}`,"aria-haspopup":"menu","aria-expanded":"view"===ey,onClick:()=>ew("view"===ey?null:"view"),children:[(0,t.jsx)(x,{kind:ep.kind}),eO,(0,t.jsx)(i.Icon,{name:"expand_more",size:16})]}),"view"===ey&&(0,t.jsx)("div",{className:"eql-pop",role:"menu",children:eY})]}),(0,t.jsxs)("div",{className:"eql-menu",children:[(0,t.jsxs)("button",{type:"button",className:`eql-btn ${"marks"===ey?"open":""}`,"aria-haspopup":"menu","aria-expanded":"marks"===ey,onClick:()=>ew("marks"===ey?null:"marks"),children:[(0,t.jsx)(i.Icon,{name:"tune",size:17}),"Overlays",(0,t.jsx)("span",{className:"eql-count",children:eH}),(0,t.jsx)(i.Icon,{name:"expand_more",size:16})]}),"marks"===ey&&(0,t.jsx)("div",{className:"eql-pop wide",role:"menu",children:eX})]}),eG]}),eN&&(0,t.jsxs)("button",{type:"button",className:"eql-btn","aria-haspopup":"dialog","aria-expanded":ek,onClick:()=>ej(!0),children:[(0,t.jsx)(i.Icon,{name:"settings",size:17}),eR.key]})]})]}),!eV&&eS&&W.length>0&&(0,t.jsx)("div",{className:"eql-stats",children:W.map(e=>(0,t.jsxs)("div",{className:"eql-stat",children:[(0,t.jsx)("span",{className:"eql-stat-k",children:e.k}),(0,t.jsx)("span",{className:`eql-stat-v ${e.tone??""}`,children:e.v})]},e.k))}),(0,t.jsx)("div",{className:"eql-canvas",style:eV?{display:"none"}:void 0,children:(0,t.jsx)("div",{className:"eql-host",ref:eo})}),!eV&&eb&&(0,t.jsx)("div",{className:"eql-scrub",children:(0,t.jsx)("input",{type:"range",min:0,max:1e3,step:1,value:Math.round(1e3*eb.fraction),onChange:e=>ed.current?.scrollToFraction(Number(e.target.value)/1e3),"aria-label":el("chart.scrollAria")})}),eV&&(0,t.jsx)("div",{className:"eql-rest",role:"status",children:ea?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"eql-rest-ic is-done",children:(0,t.jsx)(i.Icon,{name:"workspace_premium",size:22,fill:1})}),(0,t.jsx)("div",{className:"eql-rest-title",children:el("chart.ceilingTitle")}),(0,t.jsx)("p",{className:"eql-rest-sub",children:(0,t.jsx)(o.Rich,{text:el("chart.ceilingSub",{earned:w(es),ceiling:w(er)})})}),K&&J>0&&Q>0?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"eql-rest-clock",children:w(Q)}),(0,t.jsx)("div",{className:"eql-rest-label",children:el("chart.potentialOn",{tier:K})}),(0,t.jsxs)("div",{className:"eql-rest-acts",children:[(0,t.jsx)(l.StarBorder,{children:(0,t.jsx)(a.default,{href:(0,n.depositHref)(J),className:"btn btn-dark eql-rest-cta",children:el("chart.addToReach",{amount:w((0,n.depositAsk)(J)),tier:K})})}),(0,t.jsx)("span",{className:"eql-rest-alt",children:(0,t.jsx)(o.Rich,{text:el("chart.ceilingAlt",{amount:w(Z)})})})]})]}):P>0&&(0,t.jsxs)("div",{className:"eql-rest-acts",children:[(0,t.jsx)(l.StarBorder,{children:(0,t.jsx)(a.default,{href:(0,n.depositHref)(P),className:"btn btn-dark eql-rest-cta",children:el("chart.depositToRaise",{amount:w((0,n.depositAsk)(P))})})}),(0,t.jsx)("span",{className:"eql-rest-alt",children:el("chart.ceilingAltPlain")})]})]}):U?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"eql-rest-ic is-done",children:(0,t.jsx)(i.Icon,{name:"check_circle",size:22,fill:1})}),(0,t.jsx)("div",{className:"eql-rest-title",children:el("chart.dailyTitle")}),(0,t.jsx)("p",{className:"eql-rest-sub",children:el("chart.dailySub")}),(0,t.jsx)("div",{className:"eql-rest-clock",children:N(D)}),(0,t.jsx)("div",{className:"eql-rest-label",children:el("chart.untilReset")}),ei>0&&(0,t.jsxs)("div",{className:"eql-rest-tally",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"eql-rest-tk",children:el("chart.earnedToday")}),(0,t.jsxs)("span",{className:"eql-rest-tv is-pos",children:["+",w(en)]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"eql-rest-tk",children:el("chart.tomorrow")}),(0,t.jsx)("span",{className:"eql-rest-tv",children:w(et||ei)})]})]}),K&&J>0?(0,t.jsxs)("div",{className:"eql-rest-acts",children:[(0,t.jsx)(l.StarBorder,{children:(0,t.jsx)(a.default,{href:(0,n.depositHref)(J),className:"btn btn-dark eql-rest-cta",children:el("chart.dailyUpgrade",{amount:w((0,n.depositAsk)(J)),tier:K,daily:w(ee||Z)})})}),P>0&&(0,t.jsx)(a.default,{href:(0,n.depositHref)(P),className:"eql-rest-alt is-link",children:el("chart.dailyTopUp",{amount:w((0,n.depositAsk)(P))})})]}):P>0&&(0,t.jsx)("div",{className:"eql-rest-acts",children:(0,t.jsx)(a.default,{href:(0,n.depositHref)(P),className:"eql-rest-alt is-link",children:el("chart.dailyTopUp",{amount:w((0,n.depositAsk)(P))})})})]}):F>0?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"eql-rest-ic",children:(0,t.jsx)(i.Icon,{name:"bolt",size:22,fill:1})}),(0,t.jsx)("div",{className:"eql-rest-title",children:el("chart.restingTitle")}),(0,t.jsx)("p",{className:"eql-rest-sub",children:V?el("chart.restingFirstDaySub",{hours:B||6}):el("chart.restingSub",{hours:_||6})}),(0,t.jsx)("div",{className:"eql-rest-clock",children:N(F)}),(0,t.jsx)("div",{className:"eql-rest-label",children:el("chart.untilNext")}),P>0&&(0,t.jsxs)("div",{className:"eql-rest-acts",children:[K&&J>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.StarBorder,{children:(0,t.jsx)(a.default,{href:(0,n.depositHref)(J),className:"btn btn-dark eql-rest-cta",children:el("chart.addToReach",{amount:w((0,n.depositAsk)(J)),tier:K})})}),Q>0&&(0,t.jsx)("span",{className:"eql-rest-alt",children:(0,t.jsx)(o.Rich,{text:el("chart.pauseAlt",{ceiling:w(Q),daily:w(Z)})})})]}),(0,t.jsxs)(a.default,{href:(0,n.depositHref)(P),className:"eql-rest-alt is-link",children:[K&&J>0?el("chart.orDeposit"):el("chart.depositWord")," ",el("chart.startNow",{amount:w((0,n.depositAsk)(P))})]})]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"eql-rest-ic",children:(0,t.jsx)(i.Icon,{name:"bolt",size:22,fill:1})}),(0,t.jsx)("div",{className:"eql-rest-title",children:el("dash.emptyReady")}),(0,t.jsx)("p",{className:"eql-rest-sub",children:el("dash.emptyReadySub")}),(0,t.jsx)("div",{className:"eql-rest-acts",children:(0,t.jsx)("button",{type:"button",className:"btn btn-dark btn-lg eql-rest-cta",onClick:E,disabled:A||!E,children:A?el("dash.starting"):el("dash.startSession")})})]})}),eP&&(0,t.jsxs)("div",{className:"eql-scanning",role:"status",children:[(0,t.jsx)("span",{className:"eql-scan-ic",children:(0,t.jsx)(i.Icon,{name:"timer",size:20,fill:1})}),(0,t.jsxs)("div",{className:"eql-scan-txt",children:[(0,t.jsxs)("div",{className:"eql-scan-title",children:[el("chart.scanning"),(0,t.jsxs)("span",{className:"eql-scan-dots","aria-hidden":!0,children:[(0,t.jsx)("i",{}),(0,t.jsx)("i",{}),(0,t.jsx)("i",{})]})]}),(0,t.jsx)("div",{className:"eql-scan-sub",children:el("chart.scanningSub")})]})]}),!eV&&ep.overlays.movePane&&(0,t.jsx)("div",{className:"eql-panelabel",children:el("chart.movementPerBar")}),eN&&ek&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"eql-scrim"}),(0,t.jsxs)("div",{className:"eql-sheet",role:"dialog","aria-label":el("chart.settings"),children:[(0,t.jsxs)("div",{className:"eql-sheet-head",children:[(0,t.jsx)("span",{children:el("chart.settings")}),(0,t.jsx)("button",{type:"button",className:"eql-x",onClick:()=>ej(!1),"aria-label":el("chart.close"),children:(0,t.jsx)(i.Icon,{name:"close",size:18})})]}),(0,t.jsxs)("div",{className:"eql-sheet-body",children:[(0,t.jsxs)("div",{className:"eql-group",children:[(0,t.jsx)("div",{className:"eql-group-k",children:el("chart.timeframe")}),eG]}),eY,eX]})]})]}),(0,t.jsx)("style",{children:`
        /* ---- The chart runs on its own dark surface ----
           A trading chart is something people have only ever seen on a dark terminal,
           and the white card underneath it made the whole panel read as an infographic
           about trading rather than the thing itself.
           Everything inside .eql already styles itself through the design tokens, so
           the surface is switched by REDEFINING those tokens here rather than by
           rewriting three hundred lines of rules. Anything outside this block is
           untouched: the card, the balance and the page stay light. */
        .eql {
          position: relative;
          --text: #e8eaed;
          --text-2: #c3c7cd;
          --text-3: #9aa0a6;
          --line: #39404b;
          --line-soft: #262c35;
          --surface-1: #161b22;
          --surface-2: #1b212a;
          --surface-3: #222933;
          --blue: #4da3ff;
          --blue-soft: #12305c;
          /* Used by the demo badge as its TEXT colour on --blue-soft. Left at the
             light-theme value it was a dark navy on a dark navy chip. */
          --blue-strong: #8fc2ff;
          --green: #0ecb81;
          --red: #f6465d;
          --shadow-sm: 0 1px 2px rgba(0,0,0,.4);
          --shadow-md: 0 2px 8px rgba(0,0,0,.45);
          --shadow-lg: 0 12px 44px rgba(0,0,0,.55);
          /* Local roles the rules below use in place of the old white literals. */
          --eql-bg: #0f141b;
          --eql-raise: #212832;
          --eql-ctrl: rgba(255,255,255,.06);
          --eql-ok-bg: rgba(14,203,129,.15);
          --eql-ok-line: rgba(14,203,129,.3);

          background: var(--eql-bg);
          border: 1px solid #1e242d;
          border-radius: 18px;
          padding: 18px 16px 14px;
          color: var(--text-2);
        }
        .eql.is-full { border-radius: 0; }
        /* The veil spans the canvas only; the line above it stays legible, so
           the card still says what is being covered. */
        .eql-canvas { position: relative; }
        .eql-header {
          display: flex; align-items: flex-start; justify-content: space-between;
          gap: 12px; margin-bottom: 12px; flex-wrap: wrap;
        }
        /* Shrinkable, and allowed to shrink past its content: the legend beside the
           title changes width every time the crosshair moves to another candle
           ("$1,000.00" is two characters wider than "$998.50"). While this side
           could push, that width decided whether the controls fitted on the first
           row — so hovering across the chart made the toolbar jump between the
           right-hand end of row one and the left of row two. Full screen never
           showed it: the card is wide enough there for both to fit either way.
           Now only the controls' own width decides, and that never changes. */
        .eql-legendbar { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; flex: 1 1 auto; min-width: 0; }
        .eql-title { font-size: 12px; font-weight: 700; color: var(--text-2); white-space: nowrap; }
        .eql-autotag {
          margin-left: 6px; font-family: var(--font-mono); font-size: 9.5px; font-weight: 500;
          letter-spacing: .08em; text-transform: uppercase; color: var(--green);
          background: var(--eql-ok-bg); border-radius: 999px; padding: 2px 6px;
        }
        .eql-legend {
          /* nowrap + hidden so a long readout is clipped rather than reflowing the
             header under the cursor. */
          display: inline-flex; gap: 10px; flex-wrap: nowrap; overflow: hidden; min-width: 0;
          align-items: baseline;
          font-family: var(--font-mono); font-size: 12px; font-weight: 500; color: var(--text-3);
          font-variant-numeric: tabular-nums;
        }
        .eql-legend b { color: var(--text); font-weight: 700; margin-left: 2px; }
        .eql-legend .eql-v { font-size: 13px; font-weight: 700; color: var(--text); }
        .eql-legend .pos { color: var(--green); }
        .eql-legend .neg { color: var(--red); }
        .eql-legend .eql-t { color: var(--text-3); opacity: .75; }
        .eql-live {
          display: inline-flex; align-items: center; gap: 6px; flex-shrink: 0;
          font-size: 11px; font-weight: 700; letter-spacing: .04em; color: var(--green);
        }
        .eql-live i { width: 6px; height: 6px; border-radius: 50%; background: var(--green); }
        /* In demo everything else is deliberately desaturated; a green LIVE pill
           would make the chart the one element claiming the money is real. */
        .eql-live.muted { color: var(--text-3); font-weight: 500; }
        .eql-live.muted i { background: var(--text-3); }
        .eql-note { font-family: var(--font-mono); font-size: 11px; font-weight: 500; color: var(--text-3); }

        .eql-controls { display: inline-flex; align-items: center; gap: 8px; flex-wrap: wrap; flex: 0 0 auto; margin-left: auto; }

        .eql-btn, .eql-reset {
          display: inline-flex; align-items: center; gap: 6px; height: 34px; padding: 0 11px;
          font-family: var(--font-sans); font-size: 12.5px; font-weight: 600; color: var(--text-2);
          background: var(--eql-ctrl); border: 1px solid var(--line-soft); border-radius: 10px;
          cursor: pointer; white-space: nowrap;
          transition: color .18s var(--ease), border-color .18s var(--ease), background .18s var(--ease);
        }
        .eql-btn .material-symbols-rounded, .eql-reset .material-symbols-rounded { color: currentColor; }
        .eql-btn.open { color: var(--text); border-color: var(--line); background: var(--eql-raise); }
        .eql-reset { color: var(--blue); }
        .eql-count {
          display: inline-grid; place-items: center; min-width: 17px; height: 17px; padding: 0 4px;
          font-size: 10.5px; font-weight: 700; color: var(--blue); background: var(--blue-soft); border-radius: 999px;
        }
        @media (hover: hover) {
          .eql-btn:hover, .eql-reset:hover { color: var(--text); border-color: var(--line); background: var(--eql-raise); }
        }
        .eql-btn:focus-visible, .eql-reset:focus-visible, .eql-tab:focus-visible,
        .eql-auto:focus-visible, .eql-opt:focus-visible, .eql-check:focus-visible {
          outline: 2px solid var(--blue); outline-offset: 2px;
        }

        /* Timeframes + the auto toggle live in one strip: they answer the same
           question, and separating them made "auto" read as another chart type. */
        .eql-tabs {
          display: inline-flex; align-items: center; gap: 2px; padding: 3px;
          background: var(--eql-ctrl); border: 1px solid var(--line-soft); border-radius: 10px;
        }
        .eql-tab {
          font-family: var(--font-mono); font-size: 12px; font-weight: 500; color: var(--text-3);
          background: transparent; border: none; border-radius: 7px; padding: 6px 10px; cursor: pointer;
          transition: color .18s var(--ease), background .18s var(--ease);
        }
        .eql-tab:hover { color: var(--text); }
        .eql-tab.on { color: var(--text); background: var(--eql-raise); box-shadow: var(--shadow-sm); }
        /* Chosen by the machine, not by the person: same position, lighter voice. */
        .eql-tab.on.byauto { color: var(--text-2); background: var(--surface-2); box-shadow: none; }
        .eql-auto {
          display: inline-flex; align-items: center; gap: 6px; margin-right: 4px;
          font-family: var(--font-sans); font-size: 12px; font-weight: 700; color: var(--text-3);
          background: transparent; border: 1px solid transparent; border-radius: 7px;
          padding: 5px 9px; cursor: pointer; transition: all .18s var(--ease);
        }
        .eql-auto i { width: 7px; height: 7px; border-radius: 50%; background: var(--line); transition: background .18s var(--ease); }
        .eql-auto.on { color: var(--green); background: var(--eql-ok-bg); border-color: var(--eql-ok-line); }
        .eql-auto.on i { background: var(--green); }

        .eql-menu { position: relative; }
        /* Anchored to the LEFT edge of its own trigger. Right-anchoring pushed the
           leftmost menu out past the card and under the navigation rail, where
           half of it was simply unreachable. The wide overlays menu keeps the
           right anchor: it sits closer to the card's right edge. */
        .eql-pop {
          position: absolute; top: calc(100% + 6px); left: 0; right: auto; z-index: 45; width: 232px;
          max-width: min(88vw, 320px);
          display: flex; flex-direction: column; gap: 14px; padding: 14px;
          background: var(--eql-raise); border: 1px solid var(--line-soft); border-radius: 14px; box-shadow: var(--shadow-md);
        }
        .eql-pop.wide { width: 288px; left: auto; right: 0; }
        .eql-group { display: flex; flex-direction: column; gap: 8px; }
        .eql-group-k {
          font-size: 10.5px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; color: var(--text-3);
        }
        .eql-opts { display: flex; flex-direction: column; gap: 2px; }
        .eql-opt {
          display: flex; align-items: center; gap: 9px; width: 100%; min-height: 36px; padding: 7px 9px;
          font-family: var(--font-sans); font-size: 13px; font-weight: 600; color: var(--text-2);
          background: transparent; border: none; border-radius: 9px; cursor: pointer; text-align: left;
          transition: background .15s var(--ease), color .15s var(--ease);
        }
        .eql-opt:hover { background: var(--surface-2); color: var(--text); }
        .eql-opt.on { color: var(--blue); background: var(--blue-soft); }
        /* Stand-in for the kinds the icon subset has no glyph for, so labels
           still line up in one column. */
        .eql-dot { width: 17px; height: 17px; flex-shrink: 0; }
        .eql-check {
          display: flex; align-items: flex-start; gap: 10px; width: 100%; padding: 8px 9px;
          background: transparent; border: none; border-radius: 9px; cursor: pointer; text-align: left;
          transition: background .15s var(--ease);
        }
        .eql-check:hover { background: var(--surface-2); }
        .eql-box {
          display: grid; place-items: center; flex-shrink: 0; width: 18px; height: 18px; margin-top: 1px;
          border: 1.5px solid var(--line); border-radius: 5px; color: #fff;
          transition: background .15s var(--ease), border-color .15s var(--ease);
        }
        .eql-check.on .eql-box { background: var(--blue); border-color: var(--blue); }
        .eql-check-body { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
        .eql-check-body b { font-size: 13px; font-weight: 600; color: var(--text); }
        .eql-check-body em { font-style: normal; font-size: 11.5px; color: var(--text-3); line-height: 1.35; }

        .eql-icon {
          display: grid; place-items: center; width: 34px; height: 34px; flex-shrink: 0;
          color: var(--text-3); background: var(--eql-ctrl);
          border: 1px solid var(--line-soft); border-radius: 10px; cursor: pointer;
          transition: color .18s var(--ease), border-color .18s var(--ease), background .18s var(--ease);
        }
        @media (hover: hover) { .eql-icon:hover { color: var(--text); border-color: var(--line); background: var(--eql-raise); } }
        .eql-icon:focus-visible { outline: 2px solid var(--blue); outline-offset: 2px; }
        /* Sound on is a state, not an action, so it reads as pressed rather than
           as the hover of a button someone happens to be over. */
        .eql-icon.on { color: var(--text); border-color: var(--line); background: var(--eql-raise); }

        /* Every toggle above can be switched, and after a few clicks nobody
           remembers what the card looked like when they found it. */
        .eql-resetall {
          width: 100%; margin-top: 4px; padding: 9px 10px;
          font-family: var(--font-sans); font-size: 12.5px; font-weight: 600; color: var(--text-3);
          background: transparent; border: none; border-top: 1px solid var(--line-soft);
          border-radius: 0 0 8px 8px; cursor: pointer; text-align: center;
          transition: color .15s var(--ease), background .15s var(--ease);
        }
        @media (hover: hover) { .eql-resetall:hover { color: var(--text); background: var(--surface-2); } }
        .eql-resetall:focus-visible { outline: 2px solid var(--blue); outline-offset: -2px; }

        .eql-demo { margin: -2px 0 12px; }
        .eql-demo-row { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }
        .eql-demo-badge {
          font-family: var(--font-mono); font-size: 10px; font-weight: 700;
          letter-spacing: .14em; text-transform: uppercase;
          color: var(--blue-strong); background: var(--blue-soft);
          border-radius: 999px; padding: 3px 9px; flex-shrink: 0;
        }
        .eql-demo-txt { font-size: 13px; color: var(--text-2); }
        .eql-demo-txt b { color: var(--text); font-weight: 700; }
        .eql-demo-note {
          margin-left: auto; font-family: var(--font-mono); font-size: 11px; color: var(--text-3); white-space: nowrap;
        }
        .eql-demo-bar { height: 3px; margin-top: 9px; border-radius: 999px; background: var(--surface-3); overflow: hidden; }
        .eql-demo-bar span { display: block; height: 100%; background: var(--blue); transition: width .25s linear; }
        @media (prefers-reduced-motion: reduce) { .eql-demo-bar span { transition: none; } }

        .eql-stats {
          display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px;
          margin: 0 0 14px; padding-bottom: 14px; border-bottom: 1px solid var(--line-soft);
        }
        .eql-stat { display: flex; flex-direction: column; gap: 5px; min-width: 0; }
        .eql-stat-k {
          font-size: 11px; font-weight: 600; letter-spacing: .05em; text-transform: uppercase; color: var(--text-3);
        }
        .eql-stat-v { font-size: 19px; font-weight: 700; color: var(--text); font-variant-numeric: tabular-nums; }
        .eql-stat-v.pos { color: var(--green); }
        .eql-stat-v.neg { color: var(--red); }

        /* Full screen: the card stops being a card and becomes the page. */
        .eql.is-full {
          background: var(--eql-bg); padding: 22px 26px; overflow-y: auto;
        }
        .eql.is-full .eql-host { height: calc(100vh - 260px); }
        .eql.is-full .eql-title { font-size: 14px; }
        @media (max-width: 720px) {
          .eql.is-full { padding: 14px; }
          .eql.is-full .eql-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
          .eql.is-full .eql-host { height: calc(100vh - 300px); }
        }

        .eql-host { position: relative; height: clamp(260px, 34vh, 380px); width: 100%; }
        /* The canvas is draggable, so it says so. The library sets its own cursor
           on the axes (resize arrows) inline, and inline wins — those keep theirs. */
        .eql-host, .eql-host canvas { cursor: grab; }
        .eql-host:active, .eql-host:active canvas { cursor: grabbing; }

        /* ---- Scrubber ----
           Deliberately chunky and blue: it is the one control on the chart that
           moves the view, and the thin grey handle it replaces was invisible until
           someone hit it by accident. */
        .eql-scrub { margin-top: 12px; padding: 0 2px; }
        .eql-scrub input[type="range"] {
          -webkit-appearance: none; appearance: none;
          width: 100%; height: 16px; margin: 0; background: transparent; cursor: pointer;
        }
        .eql-scrub input[type="range"]::-webkit-slider-runnable-track {
          height: 6px; border-radius: 999px; background: var(--surface-3);
        }
        .eql-scrub input[type="range"]::-moz-range-track {
          height: 6px; border-radius: 999px; background: var(--surface-3);
        }
        .eql-scrub input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none;
          width: 58px; height: 10px; border-radius: 999px; border: none;
          background: var(--blue); margin-top: -2px;
          box-shadow: 0 1px 4px rgba(0,0,0,.5);
          transition: background .15s var(--ease);
        }
        .eql-scrub input[type="range"]::-moz-range-thumb {
          width: 58px; height: 10px; border-radius: 999px; border: none;
          background: var(--blue); box-shadow: 0 1px 4px rgba(0,0,0,.5);
        }
        @media (hover: hover) {
          .eql-scrub input[type="range"]:hover::-webkit-slider-thumb { background: #7dbcff; }
          .eql-scrub input[type="range"]:hover::-moz-range-thumb { background: #7dbcff; }
        }
        .eql-scrub input[type="range"]:focus-visible { outline: 2px solid var(--blue); outline-offset: 3px; border-radius: 999px; }
        .eql-panelabel {
          margin-top: 4px; text-align: right;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .06em;
          text-transform: uppercase; color: var(--text-3);
        }

        /* Cooldown panel — covers the canvas, not a modal over the page. */
        /* Light, and covering the whole card. The chart runs on a dark surface, but
           this is not the chart — it is the same kind of panel as the "fund your
           account" card on the dashboard, and it should look like one rather than
           like a chart with the lights off. Opaque for the same reason as before:
           a ghost of the last session behind the countdown reads as a glitch. */
        /* In the flow rather than pinned over the card: the panel decides the card's
           height instead of being cropped by it. min-height keeps it from collapsing
           into a thin strip when its content is short. */
        .eql-rest {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 4px; min-height: 340px; padding: 36px 24px; text-align: center;
          background: #fff;
          border-radius: 14px;
          color: #202124;
        }
        .eql-rest-ic {
          width: 44px; height: 44px; display: grid; place-items: center; border-radius: 13px;
          margin-bottom: 12px; background: #e8f0fe; color: #1a73e8;
        }
        .eql-rest-title { font-size: 21px; font-weight: 700; letter-spacing: -.02em; color: #202124; }
        .eql-rest-sub { font-size: 14px; color: #5f6368; line-height: 1.5; max-width: 44ch; margin-top: 4px; }
        .eql-rest-sub b { color: #444746; font-weight: 700; }
        .eql-rest-clock {
          margin-top: 18px; font-family: var(--font-mono);
          font-size: clamp(32px, 5.5vw, 42px); font-weight: 700; line-height: 1;
          letter-spacing: .01em; color: #1a73e8; font-variant-numeric: tabular-nums;
        }
        .eql-rest-label {
          margin-top: 9px; font-family: var(--font-mono); font-size: 10.5px;
          letter-spacing: .14em; text-transform: uppercase; color: #5f6368;
        }
        /* The way out of the wait: one button for the bigger move, one line for the
           smaller one. Ranked rather than side by side — two equal buttons make the
           choice itself the task. */
        .eql-rest-acts { margin-top: 22px; display: flex; flex-direction: column; align-items: center; gap: 9px; }
        .eql-rest-cta { height: 44px; padding: 0 22px; display: inline-flex; align-items: center; font-size: 14px; }
        /* Explicit colours, not the chart's tokens: this panel is light while
           everything around it in .eql has been redefined dark. --text-2 here would
           resolve to a near-white and vanish on the card. */
        .eql-rest-alt { font-size: 13px; color: #5f6368; max-width: 42ch; line-height: 1.5; }
        /* Второй выход со экрана — тоже действие, а не подпись: подчёркиваем, чтобы
           было видно, что по нему можно нажать. Цвет и кегль остаются прежними. */
        .eql-rest-alt.is-link { text-decoration: underline; text-underline-offset: 3px; cursor: pointer; }
        .eql-rest-alt.is-link:hover { color: #202124; }
        .eql-rest-alt b { color: #202124; font-weight: 700; }
        .eql-rest-alt.is-link { color: #1a73e8; font-weight: 600; }
        .eql-rest-alt.is-link:hover { text-decoration: underline; }
        .eql-rest-ic.is-done { background: #e6f4ea; color: #1e8e3e; }
        /* The day's tally: what was taken, and what tomorrow holds. */
        .eql-rest-tally {
          margin-top: 20px; padding-top: 16px; border-top: 1px solid #e8eaed;
          display: flex; gap: 30px; justify-content: center;
        }
        .eql-rest-tally div { display: flex; flex-direction: column; gap: 2px; }
        .eql-rest-tk {
          font-size: 10.5px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #5f6368;
        }
        .eql-rest-tv { font-size: 16px; font-weight: 700; color: #202124; font-variant-numeric: tabular-nums; }
        .eql-rest-tv.is-pos { color: #1e8e3e; }
        /* Sits over the empty canvas rather than replacing it: the chart is live,
           it simply has nothing to draw yet. */
        /* Built like the resting panels — icon, title, explanation — but dark and
           compact, because unlike them it does NOT take the screen: the chart is
           live underneath and about to start drawing. */
        .eql-scanning {
          position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
          display: flex; align-items: center; gap: 13px; z-index: 6;
          padding: 14px 18px; border-radius: 16px;
          background: rgba(22,27,34,.94); border: 1px solid #2a323d;
          box-shadow: 0 10px 34px rgba(0,0,0,.45);
        }
        .eql-scan-ic {
          width: 38px; height: 38px; flex-shrink: 0; display: grid; place-items: center;
          border-radius: 12px; background: rgba(77,163,255,.14); color: #4da3ff;
        }
        .eql-scan-txt { text-align: left; }
        .eql-scan-title {
          display: flex; align-items: center; gap: 3px;
          font-size: 14px; font-weight: 700; color: #e8eaed; letter-spacing: -.01em;
        }
        .eql-scan-sub { font-size: 12.5px; color: #9aa0a6; margin-top: 2px; }
        /* Three dots filling in one after another — the visual of a search in
           progress, which a single blinking dot never quite reads as. */
        .eql-scan-dots { display: inline-flex; gap: 3px; margin-left: 4px; }
        .eql-scan-dots i {
          width: 4px; height: 4px; border-radius: 50%; background: #4da3ff;
          animation: eql-scan 1.3s ease-in-out infinite;
        }
        .eql-scan-dots i:nth-child(2) { animation-delay: .18s; }
        .eql-scan-dots i:nth-child(3) { animation-delay: .36s; }
        @keyframes eql-scan { 0%, 100% { opacity: .22; } 45% { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) { .eql-scan-dots i { animation: none; opacity: 1; } }
        /* Nothing of the chart is visible while resting, so the card keeps a plain
           light ground underneath rather than the dark chart surface showing at its
           edges. */
        .eql.is-resting { background: #fff; border-color: #e8eaed; padding: 0; }

        .eql-scrim { position: fixed; inset: 0; z-index: 60; background: rgba(0,0,0,.55); }
        .eql-sheet {
          position: fixed; left: 0; right: 0; bottom: 0; z-index: 61; max-height: 82vh;
          display: flex; flex-direction: column;
          background: var(--eql-raise); border-radius: 22px 22px 0 0; box-shadow: var(--shadow-lg);
        }
        .eql-sheet-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 18px; border-bottom: 1px solid var(--line-soft);
          font-size: 15px; font-weight: 700; color: var(--text);
        }
        .eql-x { display: grid; place-items: center; width: 34px; height: 34px; color: var(--text-3); background: transparent; border: none; border-radius: 50%; cursor: pointer; }
        .eql-sheet-body { display: flex; flex-direction: column; gap: 18px; padding: 16px 18px 26px; overflow-y: auto; }
        .eql-sheet-body .eql-tabs { display: flex; flex-wrap: wrap; }

        @media (max-width: 720px) {
          .eql-header { gap: 8px; }
          .eql-legend { font-size: 11.5px; gap: 7px; }
          .eql-host { height: clamp(240px, 42vh, 340px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .eql-btn, .eql-reset, .eql-tab, .eql-auto, .eql-opt, .eql-check, .eql-box { transition: none; }
        }
      `})]})}function T({balance:e}){let s=(0,o.useT)();return(0,t.jsxs)("div",{className:"fl card",children:[(0,t.jsxs)("div",{className:"fl-bal",children:[(0,t.jsx)("span",{className:"fl-bal-k",children:s("fl.available")}),(0,t.jsxs)("span",{className:"fl-bal-v tnum",children:["$",e.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),(0,t.jsxs)("div",{className:"fl-actions",children:[(0,t.jsxs)(a.default,{href:"/deposit",className:"btn btn-dark fl-btn",children:[(0,t.jsx)(i.Icon,{name:"south_west",size:17})," ",s("fl.deposit")]}),(0,t.jsxs)(a.default,{href:"/withdraw",className:"btn btn-tonal fl-btn",children:[(0,t.jsx)(i.Icon,{name:"north_east",size:17})," ",s("fl.withdraw")]})]}),(0,t.jsxs)("p",{className:"fl-hint",children:[(0,t.jsx)(i.Icon,{name:"bolt",size:14,fill:1})," ",s("fl.hint")]}),(0,t.jsx)("style",{children:`
        .fl { padding: 20px; }
        .fl-bal { display: flex; flex-direction: column; gap: 4px; padding: 16px 18px; border-radius: 16px; background: var(--blue-soft); margin-bottom: 16px; }
        .fl-bal-k { font-size: 13px; font-weight: 600; color: var(--blue-strong); }
        .fl-bal-v { font-size: 28px; font-weight: 700; color: var(--text); letter-spacing: -0.02em; }
        .fl-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .fl-btn { padding: 12px 0; font-size: 14px; gap: 6px; }
        .fl-hint { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-3); margin-top: 14px; line-height: 1.4; }
        .fl-hint .material-symbols-rounded { color: var(--blue); flex-shrink: 0; }
      `})]})}var C=e.i(47133);let R=["BTC/USDT","ETH/USDT","SOL/USDT","XRP/USDT","TON/USDT","DOGE/USDT","BNB/USDT"];function $(e){return String(e).padStart(2,"0")}function I({dayIsDone:e=!1,canStart:r,start:i,gap:l}){let d,c=(0,o.useT)(),[h,p]=(0,s.useState)([]),[m,u]=(0,s.useState)(null),x=(0,s.useRef)(0);(0,s.useEffect)(()=>{let e,t,a=e=>{let t,a=`trader_${1e3+Math.floor(9e3*Math.random())}`,s=++x.current,r=(t=new Date(Date.now()-e),`${$(t.getHours())}:${$(t.getMinutes())}:${$(t.getSeconds())}`),n=Math.random();if(n<.42){let e=+(46*Math.random()+3).toFixed(2);return{line:{id:s,ts:r,tag:"TRADE",cls:"trade",msg:c("net.closed",{user:a,pair:R[Math.floor(Math.random()*R.length)]}),profit:`+$${e.toFixed(2)}`},paid:Math.round(e),sessions:0}}if(n<.62){let e=Math.round(1400*Math.random()+100);return{line:{id:s,ts:r,tag:"PAYOUT",cls:"payout",msg:c("net.withdrew",{user:a,amount:e.toLocaleString("en-US")})},paid:e,sessions:0}}return n<.82?{line:{id:s,ts:r,tag:"DEPOSIT",cls:"scan",msg:c("net.funded",{user:a,amount:Math.round(900*Math.random()+100).toLocaleString("en-US")})},paid:0,sessions:0}:{line:{id:s,ts:r,tag:"SESSION",cls:"session",msg:c("net.started",{user:a})},paid:0,sessions:1}};u({sessions:1840+Math.round(420*Math.sin((t=60*(e=new Date).getHours()+e.getMinutes())/1440*Math.PI*2-1.2))+7*e.getDate()%60,paidToday:100*Math.round((213*t+137*e.getDate()%4e3)/100)});let s=[],r=0;for(let e=0;e<7;e++)s.push(a(r).line),r+=2400+1800*Math.random();p(s);let n=setInterval(()=>{if(document.hidden)return;let{line:e,paid:t,sessions:s}=a(0);p(t=>[e,...t].slice(0,7)),(t||s)&&u(e=>e&&{...e,paidToday:e.paidToday+t,sessions:e.sessions+s})},2800);return()=>clearInterval(n)},[]);let g=(0,C.useAppConfig)(),f=(d=g.tiers?.[Math.min(1,(g.tiers?.length??1)-1)],d?.daily_pct&&g.sessionShare?Math.round(d.daily_pct*g.sessionShare*100):0);return(0,t.jsxs)("div",{className:"netfeed",children:[m&&(0,t.jsxs)("div",{className:"net-stats",children:[(0,t.jsxs)("span",{children:[(0,t.jsx)("b",{children:m.sessions.toLocaleString("en-US")})," sessions running"]}),(0,t.jsxs)("span",{children:["paid out today ",(0,t.jsxs)("b",{className:"net-money",children:["$",m.paidToday.toLocaleString("en-US")]})]}),f>0&&(0,t.jsxs)("span",{children:["avg session ",(0,t.jsxs)("b",{children:["+",f,"%"]})]})]}),h.map(e=>(0,t.jsxs)("div",{className:"cf-line",children:[(0,t.jsx)("span",{className:"cf-t mono",children:e.ts}),(0,t.jsx)("span",{className:`cf-tag t-${e.cls}`,children:e.tag}),(0,t.jsx)("span",{className:"cf-msg",children:e.msg}),e.profit&&(0,t.jsx)("span",{className:"cf-val mono pos",children:e.profit})]},e.id)),(0,t.jsxs)("div",{className:"net-foot mono",children:[(0,t.jsx)("span",{className:"cf-cursor"}),(0,t.jsx)("span",{className:"net-hint",children:c("net.hint")}),r?(0,t.jsx)("button",{className:"net-join",onClick:i,children:c("net.join")}):e?(0,t.jsx)("span",{className:"net-hint",children:c("net.backTomorrow")}):(0,t.jsx)(a.default,{href:(0,n.depositHref)(l),className:"net-join",children:c("net.join")})]}),(0,t.jsx)("style",{children:`
        .net-stats {
          display: flex; flex-wrap: wrap; gap: 6px 18px;
          padding: 2px 0 12px; margin-bottom: 4px;
          border-bottom: 1px solid var(--line-soft);
          font-size: 12px; color: var(--text-3);
        }
        .net-stats b { font-weight: 700; color: var(--text); }
        .net-stats .net-money { color: var(--green); }
        /* The stats strip already draws the divider above the first line. */
        .net-stats + .cf-line { border-top: none; }
        .net-foot {
          display: flex; align-items: center; gap: 8px;
          padding: 12px 0 2px; border-top: 1px solid var(--line-soft);
          font-size: 12px; color: var(--text-3);
        }
        .net-join {
          font-size: 12px; font-weight: 600; color: var(--blue);
          background: none; border: 0; padding: 0; cursor: pointer; font-family: inherit;
        }
        .net-join:hover { text-decoration: underline; }
      `})]})}var E=e.i(71519),A=e.i(88840),F=e.i(9165);function D(e){return String(e).padStart(2,"0")}let U={TRADE:"trade",LOSS:"loss",FAIL:"fail",SCAN:"scan",FOUND:"found",REBAL:"rebal",PAYOUT:"payout",SESSION:"session",SYS:"session",INFO:"info"};function _(e){let t,a=U[(e.tag||e.type||"").toUpperCase()]??"info";return"trade"===a&&"number"==typeof e.value&&e.value<0&&(a="loss"),{t:(t=new Date(e.at),`${D(t.getHours())}:${D(t.getMinutes())}:${D(t.getSeconds())}`),tag:a,msg:e.message,val:e.value}}let B="gm_sound",V=[783.99,1046.5,1318.5,1568],P=e=>`gm_demo:${e||"anon"}`,O=e=>`gm_demo_runs:${e||"anon"}`,H={email:"",plan:null,startedAt:0,revealed:0,now:0,logs:[],points:[],runsUsed:0,maxRuns:0,loading:!1,error:""},W=H,Y=null,X=new Set;function G(e){for(let t of(W={...W,...e},X))t(W)}function K(){Y&&(clearInterval(Y),Y=null)}function J(e){return e.plan&&e.startedAt?Math.max(0,Math.min(e.now-e.startedAt,e.plan.playback_ms)):0}function Q(e){return!!e.plan&&J(e)>=e.plan.playback_ms}function Z(){let e=W,t=e.plan;if(!t)return;let a=Q(e),s=t.window_ms||1,r=t.playback_ms||1,n=a?1/0:J(e)/r*s,i=[],l=[],o=e.points.length?e.points[e.points.length-1].value:t.start_balance,d=e.revealed;for(;d<t.logs.length&&t.logs[d].offset_ms<=n;){let a=t.logs[d],n=Math.min(e.startedAt+a.offset_ms/s*r,e.startedAt+r);i.push({tag:a.tag,type:a.type,message:a.message,value:a.value??null,at:n}),"number"==typeof a.value&&0!==a.value&&(o=+(o+a.value).toFixed(2),l.push({at:n,value:o,delta:a.value})),d++}(i.length||d!==e.revealed)&&G({revealed:d,logs:[...i].reverse().concat(e.logs),points:[...e.points,...l]})}function ee(){G({now:Date.now()}),Z(),Q(W)&&K()}function et(){K(),Y=setInterval(ee,250)}function ea(e,t){return[{at:t,value:e.start_balance}]}async function es(e){if(!W.loading){G({loading:!0,error:""});try{let a=await F.api.demoSession(e);if(!a?.logs?.length)throw Error("empty plan");let s=Date.now(),r=W.runsUsed+1;K(),G({plan:a,startedAt:s,now:s,revealed:0,logs:[],points:ea(a,s),runsUsed:r,maxRuns:a.max_runs>0?a.max_runs:W.maxRuns,loading:!1});try{localStorage.setItem(O(W.email),String(r))}catch{}var t=P(W.email);try{localStorage.setItem(t,JSON.stringify({plan:a,startedAt:s}))}catch{}Z(),et()}catch(e){if(e instanceof F.ApiError&&429===e.status){let t=e.data.max_runs,a="number"==typeof t&&t>0?t:W.maxRuns;G({loading:!1,error:"",maxRuns:a,runsUsed:a});try{localStorage.setItem(O(W.email),String(a))}catch{}return}G({loading:!1,error:e instanceof Error?e.message:"demo failed"})}}}var er=e.i(99686);let en="gm_congestion_dismissed";function ei(){let e=(0,o.useT)(),r=(0,E.useLive)(),n=r.ready&&r.dailyLimit>0&&r.dailyLeft<=.01||r.ready&&r.accountCeiling>0&&r.potentialLeft<=0,l=(0,er.useTier)(),[d,c]=(0,s.useState)(!1);return((0,s.useEffect)(()=>{if(l.maxed||!l.hasTier||n||sessionStorage.getItem(en))return;let e=setTimeout(()=>c(!0),6e3);return()=>clearTimeout(e)},[l.maxed,l.hasTier,n]),d)?(0,t.jsxs)("div",{className:"cg",role:"status",children:[(0,t.jsx)("span",{className:"cg-ic",children:(0,t.jsx)(i.Icon,{name:"network_check",size:22,fill:1})}),(0,t.jsxs)("div",{className:"cg-body",children:[(0,t.jsxs)("div",{className:"cg-title",children:[e("cong.title"),(0,t.jsx)("span",{className:"cg-pill",children:e("cong.pill")})]}),(0,t.jsx)("div",{className:"cg-sub",children:e("cong.sub")})]}),(0,t.jsxs)("div",{className:"cg-actions",children:[(0,t.jsx)(a.default,{href:"/plan",className:"btn btn-dark btn-sm cg-cta",children:e("cong.cta")}),(0,t.jsx)("button",{className:"cg-dismiss",onClick:function(){sessionStorage.setItem(en,"1"),c(!1)},"aria-label":e("cong.dismiss"),children:(0,t.jsx)(i.Icon,{name:"close",size:18})})]}),(0,t.jsx)("style",{children:`
        .cg {
          display: flex; align-items: center; gap: 14px;
          padding: 16px 18px; border-radius: 18px;
          background: linear-gradient(180deg, #fff8e9, #fef7e0);
          border: 1px solid #fde3a7; box-shadow: var(--shadow-sm);
          animation: cg-in .3s var(--ease);
        }
        @keyframes cg-in { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: none; } }
        .cg-ic { display: grid; place-items: center; width: 40px; height: 40px; border-radius: 50%; background: #fce8b6; color: #b06000; flex-shrink: 0; }
        .cg-body { flex: 1; min-width: 0; }
        .cg-title { display: flex; align-items: center; gap: 10px; font-size: 14.5px; font-weight: 700; color: #7a4a00; }
        .cg-pill { font-size: 10.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.03em; color: #b06000; background: #fce8b6; padding: 2px 8px; border-radius: 999px; }
        .cg-sub { font-size: 13px; color: #8a6d3b; margin-top: 3px; line-height: 1.45; }
        .cg-actions { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
        .cg-cta { white-space: nowrap; }
        .cg-dismiss { display: grid; place-items: center; width: 32px; height: 32px; border: none; background: transparent; color: #b06000; cursor: pointer; border-radius: 8px; transition: background .18s var(--ease); }
        .cg-dismiss:hover { background: #fce8b6; }
        @media (max-width: 680px) {
          .cg { flex-wrap: wrap; }
          .cg-actions { width: 100%; justify-content: flex-end; }
        }
        @media (prefers-reduced-motion: reduce) { .cg { animation: none; } }
      `})]}):null}let el="gm_getstarted_dismissed";function eo(){let e=(0,o.useT)(),{account:r,ready:l}=(0,er.useAccount)(),d=(0,E.useLive)(),[c,h]=(0,s.useState)(!0);if((0,s.useEffect)(()=>{h(!!sessionStorage.getItem(el))},[]),!l||!d.ready||c)return null;let p=[{key:"deposit",label:e("gs.depositLabel"),sub:e("gs.depositSub",{amount:n.ENTRY_MIN}),icon:"south_west",done:r.deposited>=n.ENTRY_MIN,href:"/deposit"},{key:"twofa",label:e("gs.twofaLabel"),sub:e("gs.twofaSub"),icon:"verified_user",done:r.twoFA,href:"/settings"}],m=p.filter(e=>e.done).length;return m===p.length?null:(0,t.jsxs)("div",{className:"gs card",children:[(0,t.jsxs)("div",{className:"gs-head",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"gs-title",children:e("gs.title")}),(0,t.jsx)("p",{className:"gs-sub",children:e("gs.sub",{done:m,total:p.length})})]}),(0,t.jsx)("button",{className:"gs-x",onClick:function(){sessionStorage.setItem(el,"1"),h(!0)},"aria-label":e("gs.dismiss"),children:(0,t.jsx)(i.Icon,{name:"close",size:18})})]}),(0,t.jsx)("div",{className:"gs-steps",children:p.map(e=>{let s=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"gs-check",children:(0,t.jsx)(i.Icon,{name:e.done?"check_circle":e.icon,size:22,fill:+!!e.done})}),(0,t.jsxs)("span",{className:"gs-txt",children:[(0,t.jsx)("span",{className:"gs-label",children:e.label}),(0,t.jsx)("span",{className:"gs-stepsub",children:e.sub})]}),!e.done&&(0,t.jsx)(i.Icon,{name:"chevron_right",size:20,className:"gs-arrow"})]});return e.done?(0,t.jsx)("div",{className:"gs-step done",children:s},e.key):(0,t.jsx)(a.default,{href:e.href,className:"gs-step",children:s},e.key)})}),(0,t.jsxs)(a.default,{href:"/achievements",className:"gs-more",children:[(0,t.jsx)(i.Icon,{name:"military_tech",size:16})," ",e("gs.seeAll"),(0,t.jsx)(i.Icon,{name:"chevron_right",size:16,className:"gs-more-arrow"})]}),(0,t.jsx)("style",{children:`
        .gs { padding: 20px 22px; }
        .gs-more { display: inline-flex; align-items: center; gap: 6px; margin-top: 14px; font-size: 13px; font-weight: 600; color: var(--blue); }
        .gs-more .gs-more-arrow { color: var(--blue); }
        .gs-more:hover { color: var(--blue-strong); }
        .gs-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 16px; }
        .gs-title { font-size: 16px; font-weight: 700; }
        .gs-sub { font-size: 13px; color: var(--text-3); margin-top: 3px; }
        .gs-x { display: grid; place-items: center; width: 30px; height: 30px; border: none; background: transparent; color: var(--text-3); cursor: pointer; border-radius: 8px; transition: background .18s var(--ease); flex-shrink: 0; }
        .gs-x:hover { background: var(--surface-2); color: var(--text); }
        .gs-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .gs-step { display: flex; align-items: center; gap: 11px; padding: 13px 14px; border-radius: 14px; border: 1px solid var(--line-soft); background: var(--surface-1); transition: background .16s var(--ease), border-color .16s var(--ease); }
        .gs-step:not(.done):hover { background: #fff; border-color: var(--line); box-shadow: var(--shadow-sm); }
        /* A finished step isn't an action any more — no hover, no pointer. */
        .gs-step.done { background: #f0f9f2; border-color: #cde9d6; cursor: default; }
        .gs-check { display: grid; place-items: center; width: 38px; height: 38px; border-radius: 50%; background: var(--blue-soft); color: var(--blue); flex-shrink: 0; }
        .gs-step.done .gs-check { background: #e6f4ea; color: var(--green); }
        .gs-txt { flex: 1; min-width: 0; display: flex; flex-direction: column; }
        .gs-label { font-size: 13.5px; font-weight: 600; color: var(--text); }
        .gs-stepsub { font-size: 11.5px; color: var(--text-3); line-height: 1.35; }
        .gs-step .gs-arrow { color: var(--text-3); flex-shrink: 0; }

        @media (max-width: 780px) { .gs-steps { grid-template-columns: 1fr; } }
      `})]})}var ed=e.i(35007),ec=e.i(60436);let eh="GEMINI25",ep=e=>String(e).padStart(2,"0");function em(){let e=(0,o.useT)(),{account:a,ready:r}=(0,er.useAccount)(),n=(0,E.useLive)(),[d,c]=(0,s.useState)(!1),[h,p]=(0,s.useState)(720),m=n.session,u=m?.status==="ACTIVE",x=!!m&&"ACTIVE"!==m.status&&(m.finishAt??0)>0,g=n.ready&&n.cooldownUntil>Date.now(),f=a.offerClaimed||!!a.promo||a.deposited<=0||!x||!g||n.ready&&n.dailyLimit>0&&n.dailyLeft<=.01||n.ready&&n.accountCeiling>0&&n.potentialLeft<=0;(0,s.useEffect)(()=>{if(!r||f)return;let e=setTimeout(()=>c(!0),3e4);return()=>clearTimeout(e)},[r,f]),(0,s.useEffect)(()=>{u&&c(!1)},[u]),(0,s.useEffect)(()=>{if(!d)return;let e=setInterval(()=>p(e=>e>0?e-1:0),1e3);return()=>clearInterval(e)},[d]),(0,ed.useBodyScrollLock)(d);let b=(0,s.useRef)(null);if((0,ec.useDialogFocus)(d,b,{onEscape:()=>y()}),!d)return null;function v(){(0,er.claimOffer)(eh,25),c(!1),(0,A.toast)(`Promo ${eh} activated`)}function y(){(0,er.dismissOffer)(),c(!1)}let w=h<=0;return(0,t.jsxs)("div",{className:"of-overlay",onClick:y,children:[(0,t.jsxs)("div",{className:"card of-modal",ref:b,onClick:e=>e.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":"of-title",children:[(0,t.jsx)("button",{className:"of-close",onClick:y,"aria-label":e("common.close"),children:(0,t.jsx)(i.Icon,{name:"close",size:20})}),(0,t.jsxs)("div",{className:"of-badge",children:[(0,t.jsx)(i.Icon,{name:"bolt",size:15,fill:1})," ",e("offer.badge")]}),(0,t.jsxs)("div",{className:"of-pct",children:["+",25,"%"]}),(0,t.jsx)("h3",{id:"of-title",children:e("offer.title")}),(0,t.jsx)("p",{children:(0,t.jsx)(o.Rich,{text:e("offer.text",{pct:25})})}),(0,t.jsxs)("div",{className:`of-timer ${w?"done":""}`,children:[(0,t.jsx)(i.Icon,{name:"timer",size:18,fill:1}),w?e("offer.expired"):(0,t.jsxs)(t.Fragment,{children:[e("offer.expiresIn")," ",(0,t.jsxs)("span",{className:"tnum",children:[ep(Math.floor(h/60)),":",ep(h%60)]})]})]}),w?(0,t.jsx)("button",{className:"btn btn-dark of-claim",onClick:v,disabled:!0,children:e("offer.claim",{pct:25})}):(0,t.jsx)(l.StarBorder,{className:"is-block",children:(0,t.jsx)("button",{className:"btn btn-dark of-claim",onClick:v,children:e("offer.claim",{pct:25})})})]}),(0,t.jsx)("style",{children:`
        .of-overlay { position: fixed; inset: 0; z-index: 120; background: rgba(32,33,36,0.5); backdrop-filter: blur(4px); display: grid; place-items: center; padding: 20px; animation: of-fade .2s var(--ease); }
        @keyframes of-fade { from { opacity: 0; } to { opacity: 1; } }
        .of-modal { position: relative; max-width: 380px; width: 100%; padding: 30px 30px 26px; text-align: center; display: flex; flex-direction: column; align-items: center; overflow: hidden; animation: of-pop .24s var(--ease); }
        @keyframes of-pop { from { opacity: 0; transform: translateY(14px) scale(.96); } to { opacity: 1; transform: none; } }
        .of-close { position: absolute; top: 14px; right: 14px; display: grid; place-items: center; width: 32px; height: 32px; border: none; background: transparent; color: var(--text-3); cursor: pointer; border-radius: 8px; transition: background .18s var(--ease); }
        .of-close:hover { background: var(--surface-2); color: var(--text); }
        .of-badge { display: inline-flex; align-items: center; gap: 5px; font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: var(--blue-strong); background: var(--blue-soft); padding: 5px 12px; border-radius: 999px; margin-bottom: 18px; }
        .of-badge .material-symbols-rounded { color: var(--blue); }
        .of-pct { font-size: 56px; font-weight: 800; letter-spacing: -0.03em; line-height: 1; color: var(--blue); }
        .of-modal h3 { font-size: 21px; font-weight: 700; margin-top: 16px; }
        .of-modal p { font-size: 14px; color: var(--text-3); line-height: 1.5; margin: 10px 0 20px; }
        .of-modal p b { color: var(--text); font-weight: 700; }
        .of-timer { display: inline-flex; align-items: center; gap: 7px; font-size: 13.5px; font-weight: 600; color: var(--text-2); background: var(--surface-1); border: 1px solid var(--line-soft); border-radius: 999px; padding: 8px 16px; margin-bottom: 24px; }
        .of-timer .material-symbols-rounded { color: var(--red); }
        .of-timer .tnum { font-weight: 700; color: var(--text); }
        .of-timer.done { color: var(--text-3); }
        .of-claim { width: 100%; }
        .of-claim:disabled { opacity: .5; cursor: not-allowed; }
        @media (prefers-reduced-motion: reduce) { .of-overlay, .of-modal { animation: none; } }
      `})]})}var eu=e.i(16148),ex=e.i(17958),eg=e.i(91572),ef=e.i(84496);function eb(e){let t=Math.floor(e/3600),a=Math.floor(e%3600/60);return`${t}h ${String(a).padStart(2,"0")}m ${String(e%60).padStart(2,"0")}s`}e.s(["default",0,function(){let e,r,d=(0,o.useT)(),{balance:c,startBalance:h,pnl:p,pnlPct:m,left:u,progress:x,equity:g,startedAt:f,finishAt:b,log:v,active:y,hasTier:w,status:k,cooldownLeft:j,seq:N,canStart:q,start:S,targetNet:M,starting:z,accountCeiling:R,earnedLifetime:$,potentialLeft:D,dailyResetLeft:U,dailyLimit:Y,dailyUsed:ee,dailyLeft:en,dailyBoosted:el,dailyResetAt:ed,cooldownSecs:ec,nextFirstDay:eh,dailyBase:ep,nextDeposit:ev,nextCeiling:ey,nextDailyLimit:ew}=function(){let e=(0,E.useLive)(),[t,a]=(0,s.useState)(0),[r,i]=(0,s.useState)(!1);(0,s.useEffect)(()=>{a(Date.now());let e=setInterval(()=>a(Date.now()),1e3);return()=>clearInterval(e)},[]);let l=(0,n.tierFromDeposited)(e.deposited).hasTier,o=e.session,d=o?.status==="ACTIVE",c=d&&o&&t?Math.max(0,Math.ceil((o.finishAt-t)/1e3)):0,h=e.cooldownUntil&&t?Math.max(0,Math.ceil((e.cooldownUntil-t)/1e3)):0,p=e.dailyResetAt&&t?Math.max(0,Math.ceil((e.dailyResetAt-t)/1e3)):0,m=o?o.earned:0,u=o?.startBalance||0,x=u>0?+(m/u*100).toFixed(1):0,g=o?.targetNet??0,f=d&&o&&t&&o.finishAt>o.startedAt?Math.min(100,Math.max(0,(t-o.startedAt)/(o.finishAt-o.startedAt)*100)):100*!!o,b=(0,s.useMemo)(()=>e.logs.map(_).slice(0,7),[e.logs]),v=o?+(e.balance-(o.startBalance+o.earned)).toFixed(2):0,y=(0,s.useMemo)(()=>{if(!o)return[];let t=e.logs.filter(e=>e.at>=o.startedAt&&"number"==typeof e.value).sort((e,t)=>e.at-t.at),a=o.startBalance+v,s=[{at:o.startedAt,value:a}],r=0;for(let e of t)r+=e.value,s.push({at:e.at,value:+(a+Math.sign(r)*Math.round(100*Math.abs(r))/100).toFixed(2),delta:e.value});return s},[e.logs,o,v]),w=e.ready&&e.accountCeiling>0&&e.potentialLeft<=0,k=e.ready&&e.dailyLimit>0&&e.dailyLeft<=.01,j=l?d?"active":w?"ceiling":k?"daily":h>0?"cooldown":"ready":"idle",N=!!t&&e.ready&&l&&!d&&!w&&!k&&0===h&&!r;return{left:c,balance:e.balance,startBalance:o?.startBalance??e.balance,pnl:m,pnlPct:x,progress:f,targetPct:u>0?+(g/u).toFixed(4):0,targetNet:g,equity:y,starting:r,accountCeiling:e.accountCeiling,earnedLifetime:e.earned,potentialLeft:e.potentialLeft,dailyLimit:e.dailyLimit,dailyUsed:e.dailyUsed,dailyLeft:e.dailyLeft,dailyBoosted:e.dailyBoosted,cooldownSecs:e.cooldownSecs,nextFirstDay:e.nextFirstDay,dailyBase:e.dailyBase,dailyResetLeft:p,dailyResetAt:e.dailyResetAt,nextTier:e.nextTier,nextDeposit:e.nextDeposit,nextCeiling:e.nextCeiling,nextDailyLimit:e.nextDailyLimit,startedAt:o?.startedAt??0,finishAt:o?.finishAt??0,log:b,hasTier:l,active:d,status:j,cooldownLeft:h,seq:e.sessionsDone+ +!!d,sessionsDone:e.sessionsDone,canStart:N,start:()=>{N&&(i(!0),(0,E.startLiveSession)().catch(e=>{if(!(e instanceof F.ApiError))return void(0,A.toast)("Couldn't start the session. Try again.","info");let t=String(e.data?.error??"");if(402===e.status){let t=Number(e.data.min_deposit??0);(0,A.toast)(t>0?`Fund your account with at least $${t} to start a session.`:e.message,"info")}else"daily limit reached"===t||"ceiling reached"===t||(429===e.status?(0,A.toast)("The engine is cooling down after your last session.","info"):409===e.status?(0,A.toast)("A session is already running.","info"):(0,A.toast)(e.message,"info"))}).finally(()=>i(!1)))}}}(),ek=(0,er.useTier)(),{account:ej,ready:eN}=(0,er.useAccount)(),eq=(0,C.useAppConfig)(),eS=(0,ex.usePlanRows)(),eM=eS.find(e=>e.key===ek.key)?.cooldownHours||eq.cooldownHours||6,ez=ec?Math.max(1,Math.round(ec/3600)):eM,{session:eL}=(0,eg.useSession)(),eT=function(e,t){let[a,r]=(0,s.useState)(W);(0,s.useEffect)(()=>(X.add(r),1===X.size&&W.plan&&!Q(W)&&(G({now:Date.now()}),Z(),Q(W)||et()),()=>{X.delete(r),0===X.size&&K()}),[]),(0,s.useEffect)(()=>{!e||W.email===e&&W.plan||function(e,t){let a=(()=>{try{return parseInt(localStorage.getItem(O(e))||"0",10)||0}catch{return 0}})(),s=function(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}(P(e));if(!s?.plan?.logs?.length){K(),G({...H,email:e,maxRuns:t,runsUsed:a});return}K(),G({...H,email:e,maxRuns:t,runsUsed:a,plan:s.plan,startedAt:s.startedAt,now:Date.now(),points:ea(s.plan,s.startedAt)}),Z(),Q(W)||et()}(e,t)},[e]),(0,s.useEffect)(()=>{t>0&&W.maxRuns!==t&&G({maxRuns:t})},[t]);let n=(0,s.useCallback)(e=>void es(e),[]),i=(0,s.useCallback)(()=>(function(){K();var e=P(W.email);try{localStorage.removeItem(e)}catch{}G({plan:null,startedAt:0,revealed:0,now:0,logs:[],points:[],error:"",loading:!1})})(),[]),l=a.plan,o=J(a),d=Q(a),c=a.logs.reduce((e,t)=>e+("number"==typeof t.value?t.value:0),0),h=Math.ceil((l?Math.max(0,l.playback_ms-o):0)/1e3);return{plan:l,loading:a.loading,error:a.error,logs:a.logs,points:a.points,running:!!l&&!d,finished:d,progressPct:l?Math.min(100,o/(l.playback_ms||1)*100):0,earned:c,startBalance:l?.start_balance??0,currentBalance:(l?.start_balance??0)+c,startedAt:a.startedAt,finishAt:a.startedAt+(l?.playback_ms??0),timeLeftText:l?`${Math.floor(h/60)}:${String(h%60).padStart(2,"0")}`:"",windowMinutes:Math.round((l?.window_ms??0)/6e4),speed:Math.round((l?.speed??1)*10)/10,runsLeft:Math.max(0,a.maxRuns-a.runsUsed),run:n,reset:i}}(eL?.email??"",eq.demoMaxRuns),eC=!!eT.plan&&!w&&eq.demoEnabled,eR=eq.demoEnabled&&eN&&!w&&!y&&!eT.plan&&eT.runsLeft>0&&eq.demoStakes.length>0,e$=eq.demoEnabled&&eN&&!w&&!eT.plan&&eT.runsLeft<=0,[eI,eE]=(0,s.useState)(!1),[eA,eF]=(0,s.useState)(0),eD=(0,s.useRef)(null),eU=(0,s.useRef)(!1);(0,s.useEffect)(()=>{!eA&&eq.demoStakes.length&&eF(eq.demoStakes[Math.floor(eq.demoStakes.length/2)])},[eq.demoStakes,eA]),(0,s.useEffect)(()=>{eT.plan&&eT.running&&!eI&&eE(!0)},[eT.plan,eT.running,eI]),(0,s.useEffect)(()=>{if(!eT.finished||!eI)return;let e=setTimeout(()=>eE(!1),5e3);return()=>clearTimeout(e)},[eT.finished,eI]),(0,s.useEffect)(()=>{eN&&w&&eT.plan&&(eT.reset(),eE(!1))},[eN,w,eT]),(0,s.useEffect)(()=>{if(!eU.current||!eT.plan)return;eU.current=!1;let e=eD.current;if(!e)return;let t=document.querySelector(".tb"),a=t?t.getBoundingClientRect().height:60,s=e.getBoundingClientRect().top+window.scrollY-a-12,r=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:Math.max(0,s),behavior:r?"auto":"smooth"})},[eT.plan]);let e_=(0,s.useCallback)(e=>{eU.current=!0,eE(!0),eT.run(e)},[eT]),eB=(0,s.useCallback)(()=>{eT.reset(),eE(!1)},[eT]),eV=(0,n.tierFromDeposited)(eT.startBalance).tier?.name??eu.TIERS[0].name,eP=eT.plan?`${eT.windowMinutes}-minute session \xb7 ${eT.speed}\xd7 speed`:"",eO=eT.startBalance>0?`+${(eT.earned/eT.startBalance*100).toFixed(1)}%`:"—",eH=eT.logs.filter(e=>"number"==typeof e.value).length,eW=eI?eT.points:g,eY=eI?eT.currentBalance:c,eX=eI?eT.startBalance:h,eG=eI?eT.earned:p,eK=eI?eT.startBalance>0?+(eT.earned/eT.startBalance*100).toFixed(1):0:m,eJ=eI?eT.progressPct:x,eQ=eI?eT.running:y,eZ=function(e,t,a=!1){let[r,n]=(0,s.useState)(null),[i,l]=(0,s.useState)(!1),[o,d]=(0,s.useState)(!1),c=(0,s.useRef)(null),h=(0,s.useRef)(0),p=(0,s.useRef)(0),m=(0,s.useRef)([]),u=(0,s.useRef)(0),x=(0,s.useRef)(0),g=(0,s.useRef)(!1),f=(0,s.useRef)(a);f.current=a,(0,s.useEffect)(()=>{let e=!0;try{e="off"!==localStorage.getItem(B)}catch{}d(e),g.current=e},[]);let b=(0,s.useCallback)(()=>{try{if(!c.current){let e=window.AudioContext??window.webkitAudioContext;if(!e)return null;c.current=new e}return"suspended"===c.current.state&&c.current.resume(),c.current}catch{return null}},[]),v=(0,s.useCallback)((e,t,a,s,r,n="triangle")=>{let i=e.createOscillator(),l=e.createGain();i.type=n,i.frequency.value=t,l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(r,a+.015),l.gain.exponentialRampToValueAtTime(1e-4,a+s),i.connect(l).connect(e.destination),i.start(a),i.stop(a+s+.02)},[]),y=(0,s.useCallback)(e=>{if(!g.current||"u">typeof document&&document.hidden)return;let t=performance.now();if(t-p.current<(f.current?450:70))return;p.current=t;let a=b();if(!a||"running"!==a.state)return;if(e<0)return void v(a,174.6,a.currentTime,.26,.075,"sine");let s=x.current?u.current/x.current:Math.abs(e),r=s>0?Math.abs(e)/s:1,n=r>=2?4:r>=1?3:2,i=a.currentTime;for(let e=0;e<n;e++)v(a,V[e],i+.06*e,.16,.11)},[b,v]),w=(0,s.useCallback)(()=>{let e=!g.current;g.current=e,d(e);try{localStorage.setItem(B,e?"on":"off")}catch{}if(e){let e=b();if(e&&"running"===e.state){let t=e.currentTime;for(let a=0;a<2;a++)v(e,V[a],t+.06*a,.16,.09)}}},[b,v]),k=e.length;return(0,s.useEffect)(()=>{0===k&&(h.current=0,u.current=0,x.current=0)},[k]),(0,s.useEffect)(()=>{if(!t||0===k)return;let a=h.current,s=e.filter(e=>e.at>a),r=0===a&&k>4;if(h.current=Math.max(a,...e.map(e=>e.at)),!s.length)return;for(let e of s)"number"==typeof e.delta&&0!==e.delta&&(u.current+=Math.abs(e.delta),x.current+=1);if(r)return;let i=function(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}();s.slice(-3).forEach((e,t)=>{let a="number"==typeof e.delta?e.delta:0;if(0===a)return;let s=setTimeout(()=>{if(y(a),i)return;n(a>=0?"win":"loss"),l(!1),requestAnimationFrame(()=>l(!0));let e=setTimeout(()=>{n(null),l(!1)},620);m.current.push(e)},130*t);m.current.push(s)})},[e,k,t,y]),(0,s.useEffect)(()=>{let e=m.current;return()=>{for(let t of e)clearTimeout(t);try{c.current?.close()}catch{}c.current=null}},[]),{flash:r,bump:i,soundOn:o,toggleSound:w}}(eW,eQ,eI),e0=eI?eT.startedAt:f,e1=eI?eT.finishAt:b,e2=(0,s.useMemo)(()=>eT.logs.map(_).slice(0,7),[eT.logs]),e3=eI?eT.startBalance+(eT.plan?.target_net??0):h+M,e5=eI?e2:v,e4=ej.transactions.filter(e=>"payout"===e.type).slice(0,3).map(e=>{let t;return{...e,amount:e.amount+(e.at?(t=e.at,ej.transactions.find(e=>"fee"===e.type&&1e4>Math.abs((e.at??0)-t))?.amount??0):0)}}).map(e=>{let t=e.note?.match(/([+-]?\d+(?:\.\d+)?)%/)?.[1],a=void 0===t?null:parseFloat(t);return{when:e.at?(0,ef.relTime)(e.at):e.when,earned:e.amount,pct:null===a||Number.isNaN(a)?null:`${a>=0?"+":""}${a.toFixed(1)}%`}});ek.index;let e6=ek.tier,e8=ek.next,e7=Math.round(ek.gap),e9=(0,n.activeTiers)(),te=[0,...e9.map(e=>n.TIER_MIN[e.key])],tt=100/(te.length-1),ta=(()=>{let e=Math.max(0,ej.deposited);if(e<=te[0])return 0;for(let t=1;t<te.length;t++)if(e<=te[t]){let a=te[t-1],s=te[t];return(t-1)*tt+(s>a?(e-a)/(s-a):1)*tt}return 100})(),ts=e=>`$${e.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}`,tr=e=>`$${Math.round(e||0).toLocaleString("en-US")}`,tn=[{k:eI?d("dash.virtualStake"):d("dash.sessionStart"),v:eI?tr(eX):ts(eX)},{k:eI?d("dash.demoPnl"):d("dash.sessionPnl"),v:`${eG>=0?"+":"−"}${ts(Math.abs(eG))}`,tone:eG>=0?"pos":"neg"},{k:eI?d("dash.replayRemaining"):"ceiling"===k?d("dash.potentialLeft"):"daily"===k?d("dash.dayResetsIn"):"cooldown"===k?d("dash.nextSessionIn"):d("dash.timeRemaining"),v:eI?eT.timeLeftText:"ceiling"===k?ts(D):"daily"===k?(0,ef.fmtCountdown)(U):"cooldown"===k?(0,ef.fmtCountdown)(j):eb(u)},{k:eI?d("dash.replayElapsed"):d("dash.sessionElapsed"),v:`${eJ.toFixed(1)}%`}];return(0,t.jsxs)("div",{className:"dash",children:[(0,t.jsxs)("main",{className:"dash-main wrap",children:[(0,t.jsx)(ei,{}),(0,t.jsx)(eo,{}),eR&&(0,t.jsxs)("section",{className:"card demo-launch",children:[(0,t.jsxs)("div",{className:"dl-left",children:[(0,t.jsxs)("span",{className:"dl-badge",children:[(0,t.jsx)("i",{"aria-hidden":!0}),"Demo"]}),(0,t.jsx)("h2",{className:"dl-t",children:d("demo.title")}),(0,t.jsx)("p",{className:"dl-p",children:d("demo.lead")}),(0,t.jsxs)("ul",{className:"dl-points",children:[(0,t.jsx)("li",{children:d("demo.point1")}),(0,t.jsx)("li",{children:d("demo.point2")}),(0,t.jsx)("li",{children:d("demo.point3")})]})]}),(0,t.jsxs)("div",{className:"dl-right",children:[(0,t.jsx)("div",{className:"dl-stakes-k",children:d("demo.pickStake")}),(0,t.jsx)("div",{className:"dl-stakes",role:"radiogroup","aria-label":d("demo.stakeGroup"),children:eq.demoStakes.map(e=>{let a=eA===e,s=(0,n.tierFromDeposited)(e).tier?.name;return(0,t.jsxs)("button",{type:"button",role:"radio","aria-checked":a,disabled:eT.loading,className:`dl-chip ${a?"on":""}`,onClick:()=>eF(e),children:[(0,t.jsxs)("span",{className:"dl-chip-amt mono",children:["$",e.toLocaleString("en-US")]}),(0,t.jsx)("span",{className:"dl-chip-tier",children:s?d("demo.planSuffix",{tier:s}):d("demo.virtual")})]},e)})}),(0,t.jsxs)("div",{className:"dl-actions",children:[(0,t.jsxs)("button",{className:"btn btn-primary dl-cta",disabled:eT.loading,onClick:()=>e_(eA||eq.demoStakes[0]),children:[(0,t.jsx)(i.Icon,{name:"bolt",size:19,fill:1}),eT.loading?d("dash.starting"):eT.error?d("demo.tryAgain"):d("demo.run")]}),(0,t.jsx)(a.default,{href:(0,n.depositHref)(e7),className:"btn btn-tonal dl-skip",children:d("demo.skip")})]}),eT.error&&(0,t.jsxs)("div",{className:"dl-alert",role:"alert",children:[(0,t.jsx)("span",{className:"dl-alert-ic",children:"!"}),(0,t.jsx)("span",{children:d("demo.failed")})]}),(0,t.jsx)("p",{className:"dl-fine",children:(0,t.jsx)(o.Rich,{text:d("demo.previewNote",{amount:(0,n.depositAsk)(e7).toLocaleString("en-US")})})})]})]}),eC&&eT.finished&&(0,t.jsxs)("section",{className:"card demo-launch",children:[(0,t.jsxs)("div",{className:"dl-left",children:[(0,t.jsxs)("span",{className:"dl-badge is-done",children:[(0,t.jsx)("i",{"aria-hidden":!0}),d("demo.complete")]}),(0,t.jsx)("h2",{className:"dl-t",children:(0,t.jsx)(o.Rich,{text:d("demo.made",{earned:ts(eT.earned),stake:tr(eT.startBalance)})})}),(0,t.jsx)("p",{className:"dl-p",children:d("demo.wasFull",{minutes:eT.windowMinutes})}),(0,t.jsxs)("ul",{className:"dl-points",children:[(0,t.jsx)("li",{children:(0,t.jsx)(o.Rich,{text:d("demo.growth",{pct:eO})})}),(0,t.jsx)("li",{children:(0,t.jsx)(o.Rich,{text:d("demo.trades",{trades:eH,lines:eT.plan?.logs.length??0})})}),(0,t.jsx)("li",{children:d("demo.virtualOnly")})]})]}),(0,t.jsxs)("div",{className:"dl-right",children:[(0,t.jsx)("div",{className:"dl-stakes-k",children:d("demo.runResult")}),(0,t.jsxs)("div",{className:"dl-result",children:[(0,t.jsxs)("span",{className:"dl-result-v mono",children:["+",ts(eT.earned)]}),(0,t.jsxs)("span",{className:"dl-result-k mono",children:["on ",tr(eT.startBalance)]})]}),(0,t.jsxs)("div",{className:"dl-result-split",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"dl-mini-k",children:d("demo.startedWith")}),(0,t.jsx)("span",{className:"dl-mini-v tnum",children:ts(eT.startBalance)})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"dl-mini-k",children:d("demo.finishedAt")}),(0,t.jsx)("span",{className:"dl-mini-v tnum pos",children:ts(eT.currentBalance)})]})]}),(0,t.jsxs)("div",{className:"dl-actions",children:[(0,t.jsx)(l.StarBorder,{className:"is-grow",children:(0,t.jsx)(a.default,{href:(0,n.depositHref)(eT.startBalance),className:"btn btn-primary dl-cta",children:d("demo.depositBtn",{amount:tr(eT.startBalance)})})}),eT.runsLeft>0&&(0,t.jsx)("button",{className:"btn btn-tonal dl-skip",onClick:eB,children:d("demo.again",{left:eT.runsLeft})})]}),(0,t.jsxs)("p",{className:"dl-fine",children:[d("demo.notCredited"),0===eT.runsLeft&&" "+d("demo.lastRunNote")]})]})]}),e$&&(0,t.jsxs)("section",{className:"card demo-launch",children:[(0,t.jsxs)("div",{className:"dl-left",children:[(0,t.jsxs)("span",{className:"dl-badge is-spent",children:[(0,t.jsx)("i",{"aria-hidden":!0}),"Demo"]}),(0,t.jsx)("h2",{className:"dl-t",children:d("demo.seenTitle")}),(0,t.jsx)("p",{className:"dl-p",children:d("demo.seenLead")}),(0,t.jsxs)("ul",{className:"dl-points",children:[(0,t.jsx)("li",{children:d("demo.seenPoint1",{minutes:20})}),(0,t.jsx)("li",{children:d("demo.seenPoint2")})]})]}),(0,t.jsxs)("div",{className:"dl-right",children:[(0,t.jsx)("div",{className:"dl-stakes-k",children:d("demo.toStart")}),(0,t.jsx)("div",{className:"dl-stakes is-spent","aria-hidden":!0,children:eq.demoStakes.map(e=>(0,t.jsxs)("div",{className:"dl-chip",children:[(0,t.jsxs)("span",{className:"dl-chip-amt mono",children:["$",e.toLocaleString("en-US")]}),(0,t.jsx)("span",{className:"dl-chip-tier",children:d("demo.planSuffix",{tier:(0,n.tierFromDeposited)(e).tier?.name??""})})]},e))}),(0,t.jsx)("div",{className:"dl-actions",children:(0,t.jsx)(l.StarBorder,{className:"is-grow",children:(0,t.jsx)(a.default,{href:(0,n.depositHref)(e7),className:"btn btn-primary dl-cta",children:d("demo.fundAccount")})})}),(0,t.jsx)("p",{className:"dl-fine",children:(0,t.jsx)(o.Rich,{text:d("demo.minNote",{amount:n.TIER_MIN[eu.TIERS[0].key].toLocaleString("en-US"),tier:eu.TIERS[0].name})})})]})]}),eN&&eq.settled&&!w&&!eR&&!eC&&!e$&&(0,t.jsxs)("section",{className:"card dash-idle",children:[(0,t.jsx)("span",{className:"di-ic",children:(0,t.jsx)(i.Icon,{name:"bolt",size:22,fill:1})}),(0,t.jsxs)("div",{className:"di-body",children:[(0,t.jsx)("h2",{children:d("dash.idleTitle")}),(0,t.jsx)("p",{children:(0,t.jsx)(o.Rich,{text:d("dash.idleText",{min:n.TIER_MIN[eu.TIERS[0].key].toLocaleString("en-US"),deposited:Math.round(ej.deposited).toLocaleString("en-US"),ask:(0,n.depositAsk)(e7).toLocaleString("en-US")})})})]}),(0,t.jsx)(a.default,{href:(0,n.depositHref)(e7),className:"btn btn-dark di-cta",children:d("common.deposit")})]}),eN&&"ceiling"===k&&(0,t.jsxs)("section",{className:"card dash-idle",children:[(0,t.jsx)("span",{className:"di-ic",children:(0,t.jsx)(i.Icon,{name:"workspace_premium",size:22,fill:1})}),(0,t.jsxs)("div",{className:"di-body",children:[(0,t.jsx)("h2",{children:d("dash.ceilingTitle")}),(0,t.jsxs)("p",{children:[(0,t.jsx)(o.Rich,{text:d("dash.ceilingLead",{earned:ts($),ceiling:ts(R)})}),ev>0&&ey>0?(0,t.jsxs)(t.Fragment,{children:[" ",(0,t.jsx)(o.Rich,{text:d("dash.ceilingUpgrade",{amount:tr(ev),ceiling:tr(ey)})}),ew>0?(0,t.jsxs)(t.Fragment,{children:[" ",(0,t.jsx)(o.Rich,{text:d("dash.ceilingDaily",{amount:tr(ew)})})]}):null]}):null,d("dash.ceilingTail")]})]}),(0,t.jsx)(l.StarBorder,{className:"is-fixed",children:(0,t.jsx)(a.default,{href:(0,n.depositHref)(ev||void 0),className:"btn btn-dark di-cta",children:ev>0?d("dash.depositAmount",{amount:tr(ev)}):d("dash.addFunds")})})]}),(0,t.jsxs)("section",{className:`card dash-hero ${eZ.flash?`is-${eZ.flash}`:""}`,ref:eD,children:[(0,t.jsxs)("div",{className:"dh-top",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"dh-label",children:[eI?d("dash.demoPortfolio"):d("dash.portfolioValue"),eI&&(0,t.jsx)("span",{className:"dh-demo mono",children:d("demo.badge")})]}),(0,t.jsx)("div",{className:`dh-bal tnum ${eZ.bump?"is-bump":""}`,children:eI||eN?ts(eY):"—"}),!eI&&R>0&&(0,t.jsxs)("div",{className:"dh-pot",children:[(0,t.jsxs)("div",{className:"dh-pot-line",children:[(0,t.jsx)("span",{className:"dh-pot-k",children:d("dash.potentialUsed")}),(0,t.jsxs)("span",{className:"dh-pot-v tnum",children:[ts($)," / ",ts(R)]})]}),(0,t.jsx)("span",{className:"dh-pot-bar",children:(0,t.jsx)("i",{style:{width:`${Math.min(100,$/R*100)}%`}})})]}),(0,t.jsx)("div",{className:`dh-delta ${eG>=0?"pos":"neg"}`,children:eI?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Icon,{name:eG>=0?"trending_up":"trending_down",size:18})," ",eG>=0?"+":"−",ts(Math.abs(eG))," (",eK>=0?"+":"",eK,"%) ",d("dash.thisDemoSession")]}):z?(0,t.jsxs)("span",{className:"dh-cool",children:[(0,t.jsx)(i.Icon,{name:"bolt",size:18})," ",d("dash.opening")]}):"ceiling"===k?(0,t.jsxs)("span",{className:"dh-cool",children:[(0,t.jsx)(i.Icon,{name:"workspace_premium",size:18})," ",d("dash.potentialReached")]}):"daily"===k?(0,t.jsxs)("span",{className:"dh-cool",children:[(0,t.jsx)(i.Icon,{name:"schedule",size:18})," ",d("dash.budgetDone",{time:(0,ef.fmtCountdown)(U)})]}):"cooldown"===k?(0,t.jsxs)("span",{className:"dh-cool",children:[(0,t.jsx)(i.Icon,{name:"schedule",size:18})," ",d("dash.resting",{time:(0,ef.fmtCountdown)(j)})]}):"ready"===k?(0,t.jsxs)("span",{className:"dh-cool",children:[(0,t.jsx)(i.Icon,{name:"bolt",size:18}),q?d("dash.readyStart"):d("dash.readyFund")]}):"idle"===k?(0,t.jsxs)("span",{className:"dh-cool",children:[(0,t.jsx)(i.Icon,{name:"schedule",size:18})," ",d("dash.noPlan")]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Icon,{name:p>=0?"trending_up":"trending_down",size:18})," ",p>=0?"+":"−",ts(Math.abs(p))," (",m>=0?"+":"",m,"%) ",d("dash.thisSession")]})})]}),(0,t.jsx)("div",{className:"dh-head-right",children:(0,t.jsxs)("div",{className:"dh-tier",children:[(0,t.jsx)("span",{className:"dh-tier-nm",children:eI?eV:e6?e6.name:d("dash.noPlan")}),(0,t.jsx)("span",{className:"dh-tier-sub",children:eI?d("dash.demoTier"):e6?d("dash.tierSub",{minutes:e6.sessionMin,x:e6.ceilingX}):d("dash.tierSubNone",{amount:n.TIER_MIN[eu.TIERS[0].key].toLocaleString("en-US")})})]})})]}),eW.length>=1?(0,t.jsx)(L,{points:eW,active:eQ,timeLeft:eI?eT.timeLeftText:eb(u),startedAt:e0,finishAt:e1,demo:eI,note:eI?eP:"",startValue:eX,targetValue:e3,readyToStart:!eI&&!eQ&&"ready"===k,onStart:S,starting:z,cooldownLeft:eI?0:j,dailyResetLeft:eI?0:U,dayIsSpent:!eI&&"daily"===k,cooldownHours:ez,fullCooldownHours:eM,firstDayPace:el,minDeposit:eq.minDeposit,depositUrl:(0,n.depositHref)(),tierName:e6?.name??"",nextTierName:e8?.name??"",nextTierGap:e7,nextFirstDay:eh,dailyBase:ep,nextCeiling:ey,nextDailyLimit:ew,ceilingReached:!eI&&"ceiling"===k,earnedLifetime:$,accountCeiling:R,dailyUsed:ee,dailyLimit:Y,soundOn:eZ.soundOn,onToggleSound:eZ.toggleSound,stats:tn,demoRun:eI&&eT.running?{progressPct:eT.progressPct,stake:tr(eT.startBalance),tier:eV,note:eP}:null}):(0,t.jsxs)("div",{className:"dh-chart-empty",children:[(0,t.jsx)("span",{className:"dce-ic",children:(0,t.jsx)(i.Icon,{name:"idle"===k?"south_west":"bolt",size:26,fill:1})}),(0,t.jsx)("h3",{className:"dce-title",children:z?d("dash.opening"):"idle"===k?d("dash.emptyFund"):"ceiling"===k?d("dash.emptyCeiling"):"daily"===k?d("dash.emptyDaily"):"cooldown"===k?d("dash.emptyCooldown"):d("dash.emptyReady")}),(0,t.jsx)("p",{className:"dce-sub",children:z?d("dash.openingSub"):"idle"===k?d("dash.emptyIdleSub",{amount:(0,n.depositAsk)(e7).toLocaleString("en-US"),tier:eu.TIERS[0].name}):"ceiling"===k?d("dash.emptyCeilingSub",{earned:ts($),ceiling:ts(R)}):"daily"===k?d("dash.emptyDailySub",{time:(0,ef.fmtCountdown)(U)}):"cooldown"===k?d("dash.emptyCooldownSub",{hours:eM,min:eq.minDeposit.toLocaleString("en-US")}):d("dash.emptyReadySub")}),"idle"!==k&&("ready"!==k||q)?(0,t.jsx)("button",{className:"btn btn-dark btn-lg dce-cta",onClick:S,disabled:!q,children:z?d("dash.starting"):"ceiling"===k?d("dash.addFunds"):d("dash.startSession")}):(0,t.jsx)(a.default,{href:(0,n.depositHref)(e7),className:"btn btn-dark btn-lg dce-cta",children:d("common.deposit")}),!eI&&"cooldown"===k&&(0,t.jsx)(a.default,{href:(0,n.depositHref)(),className:"dh-clear-pause",children:d("dash.clearPause",{amount:tr(eq.minDeposit)})}),(0,t.jsx)(a.default,{href:"/performance",className:"dh-chart-link",children:d("dash.allTime")})]}),(0,t.jsxs)("div",{className:"dh-strip",children:[(0,t.jsxs)("div",{className:"dh-cell",children:[(0,t.jsx)("span",{className:"dh-k",children:eI?d("dash.virtualStake"):d("dash.sessionStart")}),(0,t.jsx)("span",{className:"dh-v tnum",children:eI?tr(eX):ts(eX)})]}),(0,t.jsxs)("div",{className:"dh-cell",children:[(0,t.jsx)("span",{className:"dh-k",children:eI?d("dash.demoPnl"):d("dash.sessionPnl")}),(0,t.jsxs)("span",{className:`dh-v tnum ${eG>=0?"pos":"neg"}`,children:[eG>=0?"+":"−",ts(Math.abs(eG))," ",(0,t.jsxs)("em",{className:"dh-of",children:[eK>=0?"+":"−",Math.abs(eK),"%"]})]})]}),(0,t.jsxs)("div",{className:"dh-cell",children:[(0,t.jsx)("span",{className:"dh-k",children:eI?d("dash.replayRemaining"):"ceiling"===k?d("dash.potentialLeft"):"daily"===k?d("dash.dayResetsIn"):"cooldown"===k?d("dash.nextSessionIn"):d("dash.timeRemaining")}),(0,t.jsx)("span",{className:"dh-v tnum",children:eI?eT.timeLeftText:"ceiling"===k?ts(D):"daily"===k?(0,ef.fmtCountdown)(U):"cooldown"===k?(0,ef.fmtCountdown)(j):eb(u)})]}),(0,t.jsxs)("div",{className:"dh-cell",children:[(0,t.jsx)("span",{className:"dh-k",children:eI?d("dash.replayElapsed"):d("dash.sessionElapsed")}),(0,t.jsxs)("span",{className:"dh-v tnum",children:[eJ.toFixed(1),"%"]}),(0,t.jsx)("span",{className:"dh-v-bar",children:(0,t.jsx)("i",{style:{width:`${eJ}%`}})})]}),!eI&&Y>0&&(0,t.jsxs)("div",{className:"dh-cell",children:[(0,t.jsxs)("span",{className:"dh-k",children:[d("dash.dailyLeft"),el&&(0,t.jsx)("span",{className:"rt-badge",children:d("dash.boostBadge")})]}),(0,t.jsx)("span",{className:"dh-v tnum",children:ts(en)}),ed>0&&(0,t.jsx)("span",{className:"dh-sub",children:d("dash.refills",{time:(e=new Date(ed),r={hour:"2-digit",minute:"2-digit",hour12:!1},ed-Date.now()>72e6&&(r.weekday="short"),e.toLocaleTimeString([],r))})}),(0,t.jsx)("span",{className:"dh-v-bar",children:(0,t.jsx)("i",{style:{width:`${Math.min(100,ee/Y*100)}%`}})})]})]})]}),(0,t.jsxs)("section",{className:"dash-row",children:[(0,t.jsxs)("div",{className:"dash-col-main",children:[(0,t.jsxs)("div",{className:"card console",children:[(0,t.jsxs)("div",{className:"console-bar",children:[(0,t.jsx)("span",{className:"console-title",children:eQ||0!==e5.length?d("dash.activityTitle"):d("dash.networkTitle")}),eI?(0,t.jsxs)("span",{className:"console-live is-demo mono",children:[(0,t.jsx)("i",{className:"live-dot"})," ",d("dash.demoEngine")]}):y?(0,t.jsxs)("span",{className:"console-live",children:[(0,t.jsx)("i",{className:"live-dot"})," ",d("dash.live",{n:N})]}):(0,t.jsx)("span",{className:"console-idle",children:z?d("dash.starting"):"cooldown"===k?d("dash.coolingDown"):"daily"===k?d("dash.budgetSpent"):"ceiling"===k?d("dash.potentialReachedShort"):d("dash.idle")})]}),(0,t.jsx)("div",{className:"console-feed",children:eQ||0!==e5.length?(0,t.jsxs)(t.Fragment,{children:[e5.map((e,a)=>(0,t.jsxs)("div",{className:"cf-line",children:[(0,t.jsx)("span",{className:"cf-t mono",children:e.t}),(0,t.jsx)("span",{className:`cf-tag t-${e.tag}`,children:e.tag}),(0,t.jsx)("span",{className:"cf-msg",children:e.msg}),null!==e.val&&(0,t.jsxs)("span",{className:`cf-val mono ${e.val>=0?"pos":"neg"}`,children:[e.val>=0?"+":"−","$",Math.abs(e.val).toFixed(2)]})]},`${e.t}-${a}`)),eQ&&(0,t.jsxs)("div",{className:"cf-line cf-scan",children:[(0,t.jsx)("span",{className:"cf-cursor"})," ",d("dash.scanning")]})]}):(0,t.jsx)(I,{canStart:q,start:S,gap:e7,dayIsDone:"daily"===k})})]}),(0,t.jsxs)("div",{className:"card recent",children:[(0,t.jsxs)("div",{className:"recent-head",children:[(0,t.jsx)("span",{className:"console-title",children:d("dash.recentTitle")}),(0,t.jsx)(a.default,{href:"/performance",className:"recent-sub",children:d("dash.allResults")})]}),0===e4.length?(0,t.jsxs)("div",{className:"recent-empty",children:[(0,t.jsx)("p",{children:"active"===k?d("dash.recentActive"):d("dash.recentEmpty")}),"idle"===k&&(0,t.jsxs)(a.default,{href:(0,n.depositHref)(e7),className:"recent-cta",children:[d("dash.recentCta")," ",(0,t.jsx)(i.Icon,{name:"chevron_right",size:16})]})]}):(0,t.jsxs)("div",{className:"recent-table",children:[(0,t.jsxs)("div",{className:"rt-head",children:[(0,t.jsx)("span",{children:d("dash.colSettled")}),(0,t.jsx)("span",{children:d("dash.colResult")}),(0,t.jsx)("span",{className:"ta-r",children:d("dash.colEarned")})]}),e4.map((e,a)=>(0,t.jsxs)("div",{className:"rt-row",children:[(0,t.jsxs)("span",{className:"rt-date",children:[0===a&&(0,t.jsx)("span",{className:"rt-badge",children:d("dash.badgeLast")}),e.when]}),(0,t.jsx)("span",{className:"rt-dur",children:e.pct??"—"}),(0,t.jsxs)("span",{className:"rt-earned pos tnum ta-r",children:["+",ts(e.earned)]})]},a))]})]})]}),(0,t.jsx)("aside",{className:"dash-col-side",children:(0,t.jsx)(T,{balance:Math.round(c)})})]}),(0,t.jsxs)("section",{className:"card tier-band",children:[(0,t.jsxs)("div",{className:"tb-head",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"tb-title",children:d("dash.ladderTitle")}),(0,t.jsx)("div",{className:"tb-note",children:e6?(0,t.jsx)(o.Rich,{text:d("dash.ladderOn",{tier:e6.name,deposited:Math.round(ej.deposited).toLocaleString("en-US"),x:e6.ceilingX,pct:e6.dailyPct})}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.Rich,{text:d("dash.ladderNone",{amount:n.TIER_MIN[eu.TIERS[0].key].toLocaleString("en-US")})})})}),e6&&R>0&&(0,t.jsxs)("div",{className:"tb-note",children:[(0,t.jsx)(o.Rich,{text:d("dash.ladderEarned",{earned:ts($),ceiling:ts(R)})})," ",D>0?d("dash.ladderLeft",{amount:ts(D)}):d("dash.ladderRaise")]})]}),e8?(0,t.jsxs)(a.default,{href:(0,n.depositHref)(e7),className:"btn btn-tonal btn-sm",children:[e6?`Upgrade to ${e8.name}`:`Start ${e8.name}`," · +$",(0,n.depositAsk)(e7).toLocaleString("en-US")]}):(0,t.jsxs)("span",{className:"tb-top",children:[(0,t.jsx)(i.Icon,{name:"check_circle",size:16,fill:1})," ",d("dash.topPlan")]})]}),(0,t.jsxs)("div",{className:"tb-track",children:[(0,t.jsx)("div",{className:"tb-fill",style:{width:`${ta}%`}}),te.slice(1,-1).map((e,a)=>(0,t.jsx)("span",{className:"tb-tick",style:{left:`${(a+1)*tt}%`}},e)),(0,t.jsx)("span",{className:"tb-knob",style:{left:`${ta}%`},children:(0,t.jsxs)("span",{className:`tb-tip tnum ${ta>90?"end":ta<10?"start":""}`,children:["$",Math.round(ej.deposited).toLocaleString("en-US")]})})]}),(0,t.jsx)("div",{className:"tb-labels",children:te.map((e,a)=>{let s=te.reduce((e,t,a)=>ej.deposited>=t?a:e,0),r=e=>0===e||e===s||e===s+1||e===te.length-1,n=!r(a),i=te.map((e,t)=>t).filter(r).indexOf(a)%2==1,l=0===a?null:e9[a-1],o=ej.deposited>=e,d=a*tt;return(0,t.jsxs)("span",{className:`tb-lbl ${o?"on":""} ${0===a?"first":""} ${a===te.length-1?"last":""} ${i?"alt":""} ${n?"minor":""}`,style:{left:`${d}%`},children:[(0,t.jsx)("b",{children:l?l.name:"Start"}),"$",e.toLocaleString("en-US")]},e)})})]})]}),(0,t.jsx)(em,{}),(0,t.jsx)("style",{children:`
        .dash { min-height: calc(100vh - 60px); }
        .dash-main {
          max-width: 1120px;
          padding-top: 28px; padding-bottom: 60px;
          display: flex; flex-direction: column; gap: 20px;
        }

        /* Hero */
        .dash-idle { display: flex; align-items: center; gap: 16px; padding: 20px 22px; border-color: #fde293; background: #fffdf5; }
        .di-ic { display: grid; place-items: center; width: 44px; height: 44px; border-radius: 50%; flex-shrink: 0; color: #b06000; background: #fef7e0; }
        .di-body { flex: 1; min-width: 0; }
        .di-body h2 { font-size: 16px; font-weight: 700; color: var(--text); }
        .di-body p { font-size: 13.5px; color: var(--text-2); margin-top: 3px; line-height: 1.5; }
        .di-body b { color: var(--text); font-weight: 700; }
        .di-cta { flex-shrink: 0; }
        @media (max-width: 620px) { .dash-idle { flex-wrap: wrap; } .di-cta { width: 100%; } }
        .di-demo-used { font-size: 12.5px; color: var(--text-3); margin-top: 6px; }

        /* ---- Demo session ----------------------------------------------------
           No new colour is introduced anywhere here. The DEMO markers are mono
           captions in --text-3, green keeps meaning profit, and the brand
           gradient is left alone: it says whose site this is, not what state a
           card is in. An earlier build of this on the sibling product used amber
           for the demo and read as someone else's site bolted onto ours. */
        .demo-launch {
          display: grid; grid-template-columns: 1.02fr 0.98fr; gap: 30px;
          padding: 28px 30px;
        }
        .dl-left { display: flex; flex-direction: column; min-width: 0; }

        /* The DEMO marker carries the whole promise of the card — that nothing
           here is real money — so it is the one place the blue is spent loudly. */
        .dl-badge {
          display: inline-flex; align-items: center; gap: 7px; align-self: flex-start;
          font-family: var(--font-mono); font-size: 11px; font-weight: 700;
          letter-spacing: .16em; text-transform: uppercase;
          color: var(--blue-strong); background: var(--blue-soft);
          border: 1px solid #d2e3fc; border-radius: 999px; padding: 6px 13px 6px 11px;
        }
        .dl-badge i {
          width: 7px; height: 7px; border-radius: 50%; background: var(--blue);
          box-shadow: 0 0 0 3px rgba(26,115,232,.18);
        }
        .dl-t { font-size: 25px; font-weight: 700; letter-spacing: -.025em; color: var(--text); margin-top: 14px; }
        .dl-p { font-size: 14.5px; color: var(--text-2); line-height: 1.55; margin-top: 9px; max-width: 46ch; }
        .dl-points { list-style: none; display: flex; flex-direction: column; gap: 9px; margin-top: 18px; }
        .dl-points li {
          position: relative; padding-left: 24px;
          font-size: 13.5px; color: var(--text-2); line-height: 1.45;
        }
        .dl-points li::before {
          content: ""; position: absolute; left: 0; top: 6px;
          width: 14px; height: 8px; border-left: 2px solid var(--blue); border-bottom: 2px solid var(--blue);
          transform: rotate(-45deg) scale(.85); transform-origin: center; border-radius: 1px;
        }

        .dl-right {
          display: flex; flex-direction: column; min-width: 0;
          padding: 20px; border-radius: 18px;
          background: var(--surface-1); border: 1px solid var(--line-soft);
        }
        .dl-stakes-k {
          font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
          color: var(--text-3);
        }
        /* Three equal tiles, not chips in a row: the stake is the only decision
           on this card, and it should look like the decision. */
        /* minmax(0, 1fr), not 1fr: a grid item is min-content wide by default, so
           "$1,000 \xb7 Private plan" made its own tile wider than the other two. */
        .dl-stakes { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; margin-top: 12px; }
        .dl-chip {
          display: flex; flex-direction: column; align-items: center; gap: 3px;
          padding: 14px 8px 12px; cursor: pointer; text-align: center;
          background: #fff; border: 1.5px solid var(--line); border-radius: 14px;
          transition: border-color .18s var(--ease), background .18s var(--ease),
                      box-shadow .18s var(--ease), transform .18s var(--ease);
        }
        .dl-chip-amt { font-size: 19px; font-weight: 700; color: var(--text); letter-spacing: -.01em; }
        .dl-chip-tier { font-size: 11px; font-weight: 600; color: var(--text-3); }
        .dl-chip.on {
          border-color: var(--blue); background: var(--blue-soft);
          box-shadow: 0 0 0 3px rgba(26,115,232,.12);
        }
        .dl-chip.on .dl-chip-amt { color: var(--blue-strong); }
        .dl-chip.on .dl-chip-tier { color: var(--blue); }
        .dl-chip:focus-visible { outline: 2px solid var(--blue); outline-offset: 2px; }
        /* Hover is a colour change and nothing else — no lift, no shadow pop.
           That is the house rule for this product's UI; the only translateY on
           hover in the codebase lives on the landing's .card-int and does not
           belong in the cabinet. */
        @media (hover: hover) {
          /* Едва заметно: подложка не меняется, темнеет только обводка. Плитка
             не должна спорить с выбранной — выбор и так отмечен цветом. */
          .dl-chip:not(.on):hover { border-color: #c4c7c5; }
        }

        .dl-actions { display: flex; gap: 10px; margin-top: 18px; }
        .dl-cta { flex: 1 1 auto; gap: 8px; height: 48px; padding: 0 22px; font-size: 15px; }
        .dl-cta .material-symbols-rounded { color: currentColor; }
        .dl-cta:disabled { opacity: .55; cursor: not-allowed; }
        /* Second-plan action: it has to be reachable, not attractive. Filled and
           outlined so it reads as a control, in the quiet surface tone. */
        /* Hover did nothing here: a direct background declaration overrode the
           --btn-bg variable every button in the project is painted through.
           The fill now comes from the variable only, and hover moves it. */
        .dl-skip {
          flex: 0 0 auto; height: 48px; padding: 0 18px; font-size: 14px; font-weight: 600;
          border: 1px solid var(--line);
          --btn-bg: var(--surface-2); --btn-fg: var(--text-2);
        }
        @media (hover: hover) {
          .dl-skip:hover { --btn-bg: var(--surface-3); --btn-fg: var(--text); border-color: #c4c7c5; }
        }
        .dl-err { font-size: 13px; color: var(--red); margin-top: 12px; }
        .dl-fine { font-size: 12.5px; color: var(--text-3); line-height: 1.5; margin-top: 14px; }
        .dl-fine b { color: var(--text-2); font-weight: 700; }

        @media (max-width: 940px) {
          .demo-launch { grid-template-columns: 1fr; gap: 22px; padding: 24px; }
          .dl-p { max-width: none; }
        }

        .demo-live { padding: 18px 22px 0; overflow: hidden; }
        .dlv-body { display: flex; align-items: baseline; justify-content: space-between; gap: 14px; flex-wrap: wrap; margin: 6px 0 14px; }
        .dlv-p { font-size: 14px; color: var(--text-2); }
        .dlv-p b { color: var(--text); font-weight: 700; }
        .dlv-speed { font-size: 12px; color: var(--text-3); white-space: nowrap; }
        /* Flush with the card's edges: the bar is the run's own progress, not a
           control sitting inside the card. */
        .dlv-bar { height: 3px; margin: 0 -22px; background: var(--surface-3); }
        .dlv-bar span { display: block; height: 100%; background: var(--blue); transition: width .25s linear; }
        @media (prefers-reduced-motion: reduce) { .dlv-bar span { transition: none; } }

        /* Marker colour is the only thing that separates the states: blue while
           the demo is on offer, green once it has a result, grey when the runs
           are spent. Shape, size and position never move. */
        .dl-badge.is-done { color: var(--green); background: #e6f4ea; border-color: #ceead6; }
        .dl-badge.is-done i { background: var(--green); box-shadow: 0 0 0 3px rgba(30,142,62,.18); }
        .dl-badge.is-spent { color: var(--text-3); background: var(--surface-2); border-color: var(--line-soft); }
        .dl-badge.is-spent i { background: var(--text-3); box-shadow: none; }
        .dl-gain { color: var(--green); font-weight: 700; }

        .dl-result { display: flex; align-items: baseline; gap: 10px; margin-top: 10px; }
        .dl-result-v { font-size: 34px; font-weight: 700; letter-spacing: -.02em; color: var(--green); }
        .dl-result-k { font-size: 14px; color: var(--text-3); }
        .dl-result-split {
          display: flex; gap: 10px; margin-top: 14px; padding-top: 14px;
          border-top: 1px solid var(--line-soft);
        }
        .dl-result-split > div { flex: 1; display: flex; flex-direction: column; gap: 4px; min-width: 0; }
        .dl-mini-k { font-size: 11px; font-weight: 600; letter-spacing: .05em; text-transform: uppercase; color: var(--text-3); }
        .dl-mini-v { font-size: 16px; font-weight: 700; color: var(--text); }
        .dl-mini-v.pos { color: var(--green); }

        /* Spent tiles are shown, not hidden: they are what the amounts meant, and
           the reader has just watched one of them run. */
        .dl-stakes.is-spent { opacity: .45; pointer-events: none; }

        .dl-alert {
          display: flex; align-items: flex-start; gap: 9px; margin-top: 16px;
          padding: 11px 13px; border-radius: 12px;
          background: rgba(217,48,37,.08); border: 1px solid rgba(217,48,37,.22);
          font-size: 13px; color: var(--text-2);
        }
        .dl-alert-ic { color: var(--red); font-weight: 800; line-height: 1.3; flex-shrink: 0; }

        .dh-demo {
          margin-left: 8px; font-size: 10.5px; font-weight: 500; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--text-3);
        }
        .console-live.is-demo { font-size: 11px; font-weight: 500; letter-spacing: 0.04em; color: var(--text-3); }
        .console-live.is-demo .live-dot { background: var(--text-3); }

        @media (max-width: 620px) {
          .demo-launch { padding: 20px 18px; }

          .demo-live { padding: 16px 20px 0; }
          .dlv-bar { margin: 0 -20px; }
          .dl-t { font-size: 21px; }
          .dl-right { padding: 16px; }
          .dl-actions { flex-direction: column; gap: 10px; }
          .dl-cta, .dl-skip { width: 100%; }
          .dl-stakes { gap: 8px; }
          .dl-chip { padding: 11px 4px 9px; }
          .dl-chip-amt { font-size: 15px; }
          .dl-result-v { font-size: 28px; }
          .dl-chip-tier { font-size: 10px; white-space: nowrap; }
        }

        .dash-hero { padding: 28px; }

        /* ---- Trade reaction ----
           The card acknowledges each trade as it lands: a brief tint of its
           border and a glow rising from the chart, plus a small bump on the
           balance. Deliberately restrained — this fires every couple of seconds
           during a demo replay, and anything louder becomes wallpaper by the
           third trade. Colour is the same green/red the numbers already use, so
           it reads as the product speaking rather than as decoration. */
        /* The glow is an ::after pinned to the card, so the card owns the
           positioning context. .card itself is static. */
        .dash-hero { position: relative; transition: border-color .25s ease, box-shadow .25s ease; }
        .dash-hero.is-win { border-color: rgba(30,142,62,.42); box-shadow: 0 0 40px rgba(30,142,62,.13); }
        .dash-hero.is-loss { border-color: rgba(217,48,37,.34); box-shadow: 0 0 36px rgba(217,48,37,.10); }
        .dash-hero.is-win::after, .dash-hero.is-loss::after {
          content: ""; position: absolute; inset: 0; border-radius: inherit;
          pointer-events: none; animation: dh-flash .62s ease-out;
        }
        .dash-hero.is-win::after { background: radial-gradient(120% 90% at 40% 100%, rgba(30,142,62,.13), transparent 62%); }
        .dash-hero.is-loss::after { background: radial-gradient(120% 90% at 40% 100%, rgba(217,48,37,.10), transparent 62%); }
        @keyframes dh-flash { 0% { opacity: 0; } 25% { opacity: 1; } 100% { opacity: 0; } }
        .dh-bal.is-bump { animation: dh-bump .5s cubic-bezier(.2,1.4,.3,1); }
        @keyframes dh-bump { 0% { transform: scale(1); } 35% { transform: scale(1.055); } 100% { transform: scale(1); } }
        @media (prefers-reduced-motion: reduce) {
          .dash-hero.is-win::after, .dash-hero.is-loss::after { animation: none; opacity: 0; }
          .dh-bal.is-bump { animation: none; }
        }
        .dh-top {
          display: flex; align-items: flex-start; justify-content: space-between;
          gap: 16px; margin-bottom: 22px;
        }
        .dh-label { font-size: 13px; font-weight: 500; color: var(--text-3); }
        .dh-bal { font-size: 46px; font-weight: 700; letter-spacing: -0.03em; line-height: 1.05; margin: 4px 0 6px; }
        .dh-pot { margin: 10px 0 12px; max-width: 340px; }
        .dh-pot-line { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
        .dh-pot-k { font-size: 12.5px; color: var(--text-3); }
        .dh-pot-v { font-size: 13.5px; font-weight: 700; color: var(--text-2); }
        /* Heavier than the strip's bars: this one is a headline figure sitting under
           the balance, not a detail inside a cell. */
        .dh-pot-bar {
          display: block; height: 9px; margin-top: 7px; border-radius: 999px;
          background: var(--surface-3); overflow: hidden;
        }
        .dh-pot-bar i { display: block; height: 100%; border-radius: 999px; background: var(--blue); }
        .dh-clear-pause {
          display: block; max-width: 420px; margin: 12px auto 0;
          font-size: 13px; line-height: 1.5; color: var(--text-3); text-align: center;
        }
        .dh-clear-pause:hover { color: var(--blue); }
        .dh-sub { font-size: 11.5px; color: var(--text-3); margin-top: 1px; }
        .dh-delta { display: inline-flex; align-items: center; gap: 6px; font-size: 15px; font-weight: 600; }
        .dh-tier {
          text-align: right; display: flex; flex-direction: column; gap: 2px;
          padding: 10px 16px; background: var(--blue-soft); border-radius: 14px;
        }
        .dh-tier-nm { font-size: 15px; font-weight: 700; color: var(--blue-strong); }
        .dh-tier-sub { font-size: 12px; color: var(--blue); }

        .dh-of { font-style: normal; font-size: 12px; font-weight: 500; color: var(--text-3); }
        .dh-strip {
          display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px;
          margin-top: 22px; padding-top: 22px; border-top: 1px solid var(--line-soft);
        }
        /* Label, value, then an optional bar. The bar is pushed to the bottom of the
           cell so that the two cells which have one line up with each other rather
           than each floating under its own text. */
        .dh-cell { display: flex; flex-direction: column; gap: 5px; }
        .dh-k {
          font-size: 11px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;
          color: var(--text-3); display: flex; align-items: center; gap: 7px; min-height: 16px;
        }
        .dh-v { font-size: 18px; font-weight: 700; color: var(--text); line-height: 1.2; }
        .dh-v-bar {
          height: 6px; border-radius: 999px; background: var(--surface-3);
          overflow: hidden; margin-top: auto;
        }
        .dh-v-bar i { display: block; height: 100%; background: var(--blue); border-radius: 999px; }

        /* Row 2 */
        .dash-row { display: grid; grid-template-columns: 1fr 380px; gap: 20px; align-items: start; }
        /* min-width: 0 — a grid item defaults to min-content width, so one long
           unbreakable line inside the console stretched this column past the
           viewport and took the whole page into horizontal scroll. */
        .dash-col-main { display: flex; flex-direction: column; gap: 20px; min-width: 0; }

        /* Console */
        .console { padding: 20px 22px; }
        .console-bar { display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; margin-bottom: 16px; }
        .console-title { font-size: 15px; font-weight: 700; color: var(--text); }
        .console-live { display: inline-flex; align-items: center; gap: 7px; font-size: 12px; font-weight: 700; color: var(--green); }
        .console-feed { display: flex; flex-direction: column; }
        .cf-line {
          display: flex; align-items: center; gap: 12px;
          padding: 10px 0; border-top: 1px solid var(--line-soft); font-size: 13px;
        }
        .cf-line:first-child { border-top: none; }
        .cf-t { color: var(--text-3); font-size: 12px; flex-shrink: 0; }
        .cf-tag {
          font-size: 10px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;
          padding: 3px 8px; border-radius: 6px; flex-shrink: 0;
        }
        .t-trade { color: var(--blue); background: var(--blue-soft); }
        .t-session { color: var(--text-2); background: var(--surface-2); }
        .t-payout { color: var(--green); background: #e6f4ea; }
        .t-loss { color: var(--red); background: #fce8e6; }
        .t-fail { color: #b06000; background: #fef7e0; }
        .t-scan { color: var(--text-3); background: var(--surface-2); }
        .t-found { color: #6b4fd8; background: #ede9fe; }
        .t-rebal { color: var(--blue-strong); background: var(--blue-soft); }
        .t-info { color: var(--text-3); background: var(--surface-2); }
        .cf-msg { flex: 1; color: var(--text-2); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .cf-val { font-size: 13px; font-weight: 700; flex-shrink: 0; }
        .cf-scan { color: var(--text-3); font-style: normal; }
        .cf-cursor { width: 8px; height: 15px; background: var(--blue); border-radius: 2px; animation: cf-blink 1s steps(2) infinite; }
        @keyframes cf-blink { 0%,50% { opacity: 1; } 50.1%,100% { opacity: 0; } }
        @media (prefers-reduced-motion: reduce) { .cf-cursor { animation: none; } }

        /* Recent */
        .recent { padding: 20px 22px; }
        .recent-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 12px; }
        .recent-sub { font-size: 12px; font-weight: 600; color: var(--blue); }
        .recent-sub:hover { text-decoration: underline; }
        .recent-empty { padding: 16px 0 8px; }
        .recent-empty p { font-size: 13px; color: var(--text-3); line-height: 1.5; }
        .console-idle { font-size: 12px; font-weight: 700; color: var(--text-3); }
        .dh-cool { display: inline-flex; align-items: center; gap: 6px; color: var(--text-2); }
        .dh-head-right { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; justify-content: flex-end; }
        .dh-start { height: 44px; padding: 0 20px; font-size: 14px; white-space: nowrap; }
        .dh-start:disabled { opacity: .45; cursor: not-allowed; }
        .dh-chart-empty {
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;
          height: 300px; margin: 4px 0; padding: 20px; text-align: center;
          border: 1px dashed var(--line); border-radius: 14px; background: var(--surface-1);
        }
        .dce-ic {
          display: grid; place-items: center; width: 52px; height: 52px; margin-bottom: 6px;
          border-radius: 50%; background: #fff; border: 1px solid var(--line-soft); box-shadow: var(--shadow-sm);
        }
        .dce-ic .material-symbols-rounded { color: var(--blue); }
        .dce-title { font-size: 19px; font-weight: 700; letter-spacing: -0.02em; color: var(--text); }
        .dce-sub { font-size: 13.5px; color: var(--text-3); max-width: 360px; line-height: 1.5; }
        .dce-cta { margin-top: 14px; }
        .dce-cta:disabled { opacity: .5; cursor: not-allowed; }
        .dh-chart-link { margin-top: 10px; font-size: 13px; font-weight: 600; color: var(--blue); }
        .dh-chart-link:hover { text-decoration: underline; }
        .recent-cta { display: inline-flex; align-items: center; gap: 3px; margin-top: 10px; font-size: 13.5px; font-weight: 600; color: var(--blue); }
        .recent-cta:hover { text-decoration: underline; }
        .rt-head, .rt-row {
          display: grid; grid-template-columns: 1.6fr 0.9fr 1.2fr; gap: 10px; align-items: center;
        }
        .rt-head { padding: 8px 0; font-size: 11px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; color: var(--text-3); }
        .rt-row { padding: 13px 0; border-top: 1px solid var(--line-soft); font-size: 14px; color: var(--text-2); }
        .rt-date { display: inline-flex; align-items: center; gap: 8px; font-weight: 600; color: var(--text); }
        .rt-badge { font-size: 10px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: var(--blue); background: var(--blue-soft); padding: 2px 7px; border-radius: 6px; }
        .rt-dur { color: var(--text-3); }
        .rt-earned { font-weight: 700; }
        .rt-earned small { font-weight: 600; color: var(--text-3); }
        .ta-r { text-align: right; justify-self: end; }

        /* Tier band */
        .tier-band { padding: 26px 28px 30px; }
        /* 48px, not 30: the knob's price tag stands about 35px above the track, and
           at a low deposit the knob sits under the left-hand text — so the tag was
           landing on the last line of it. The gap has to clear the tag, not the
           track. */
        .tb-head { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 48px; }
        .tb-title { font-size: 17px; font-weight: 700; color: var(--text); }
        .tb-note { font-size: 14.5px; line-height: 1.5; color: var(--text-3); margin-top: 5px; }
        .tb-note b { color: var(--text); }
        .tb-top { display: inline-flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 600; color: var(--green); }
        .tb-top .material-symbols-rounded { color: var(--green); }
        .tb-track { position: relative; height: 10px; border-radius: 999px; background: var(--surface-3); }
        .tb-fill { position: absolute; left: 0; top: 0; bottom: 0; border-radius: 999px; background: var(--blue); }
        .tb-tick { position: absolute; top: 50%; width: 2px; height: 14px; transform: translate(-50%, -50%); background: #fff; }
        .tb-knob {
          position: absolute; top: 50%; width: 22px; height: 22px; transform: translate(-50%, -50%);
          background: #fff; border: 3px solid var(--blue); border-radius: 50%; box-shadow: var(--shadow-sm);
        }
        .tb-tip {
          position: absolute; bottom: calc(100% + 9px); left: 50%; transform: translateX(-50%);
          font-size: 12px; font-weight: 700; color: #fff; background: var(--text);
          padding: 4px 9px; border-radius: 7px; white-space: nowrap; letter-spacing: -.01em;
        }
        .tb-tip::after { content: ""; position: absolute; top: 100%; left: 50%; transform: translateX(-50%); border: 4px solid transparent; border-top-color: var(--text); }
        /* At either end of the track the tag would hang past the card's edge (the
           top plan sits at 100%), so it aligns inward and only its arrow stays centred. */
        .tb-tip.end { left: auto; right: -8px; transform: none; }
        .tb-tip.end::after { left: auto; right: 15px; transform: none; }
        .tb-tip.start { left: -8px; transform: none; }
        .tb-tip.start::after { left: 15px; transform: none; }
        /* Labels sit ON their stops rather than spreading themselves evenly:
           the middle two have to line up with the ticks, and flex spacing only
           lines them up when every label happens to be the same width. */
        .tb-labels { position: relative; height: 38px; margin-top: 18px; }
        .tb-lbl {
          position: absolute; top: 0; transform: translateX(-50%);
          display: flex; flex-direction: column; gap: 2px; align-items: center;
          font-size: 12px; color: var(--text-3); white-space: nowrap;
        }
        .tb-lbl.first { transform: none; align-items: flex-start; }
        .tb-lbl.last { transform: translateX(-100%); align-items: flex-end; }
        .tb-lbl b { font-size: 14px; font-weight: 700; color: var(--text-3); }
        .tb-lbl.on b { color: var(--text); }
        .tb-lbl.on { color: var(--text-2); }
        @media (max-width: 560px) {
          .tb-lbl { font-size: 11px; }
          .tb-lbl b { font-size: 12.5px; }
          /* Six stops on a phone-wide track leave ~55px per step — "Elite" and
             "Sovereign" ran into each other. Every other label drops to a second
             row, so neighbours never share a line, whatever the ladder's length. */
          .tb-labels { height: 76px; }
          .tb-lbl.alt { top: 38px; }
          .tb-lbl.minor { display: none; }
        }
        /* The upgrade button ("Upgrade to Sovereign \xb7 +$7,000") is too long to sit
           beside the text on a phone; it pushed the page sideways. Below it there. */
        @media (max-width: 620px) {
          .tb-head { flex-direction: column; align-items: stretch; }
          .tb-head .btn { white-space: normal; text-align: center; }
        }

        @media (max-width: 940px) {
          .dash-row { grid-template-columns: 1fr; }
          .dh-strip { grid-template-columns: repeat(2, 1fr); gap: 18px; }
          .dh-bal { font-size: 38px; }
        }
        @media (max-width: 560px) {
          .dash-hero { padding: 20px; }
          .dh-top { flex-direction: column; }
          .dh-tier { text-align: left; align-items: flex-start; }
          .rt-head { display: none; }
          .rt-row { grid-template-columns: 1fr 1fr; row-gap: 4px; }
        }
      `})]})}],27671)}]);