(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74],{239:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/detail/[id]/play",function(){return n(6338)}])},6338:function(e,t,n){"use strict";n.r(t),n.d(t,{Process:function(){return N},default:function(){return I}});var r=n(5893),s=n(7294),i={src:"/_next/static/media/demo1.38a6969a.png"},l={src:"/_next/static/media/demo2.1fc1f7bd.png"},a={src:"/_next/static/media/demo3.0a09305b.png"},c={src:"/_next/static/media/demo4.3e1c3d01.png"},o={src:"/_next/static/media/demo5.91d340c5.png"},d={src:"/_next/static/media/demo6.89002ed9.png"},u={src:"/_next/static/media/demo7.f95edca2.png"},m={src:"/_next/static/media/demo8.eb4189c8.png"},x={src:"/_next/static/media/demo9.fb11d9ed.png"},f={src:"/_next/static/media/demo10.ffff2bfd.png"};c.src,l.src,x.src,a.src,o.src,a.src,m.src,i.src,u.src,f.src,l.src,d.src,x.src,c.src,l.src,d.src,f.src,o.src,m.src,a.src,x.src,i.src,c.src,u.src;let p=[{step:1,text:"당신이 밥을 먹을 때는?",answers:[{text:"급하게 먹는다.",resultIndex:0},{text:"천천히 먹는다.",resultIndex:1}]},{step:2,text:"주말에는 보통 무엇을 하시나요?",answers:[{text:"친구와 만나 놀기",resultIndex:0},{text:"집에서 쉬기",resultIndex:1}]},{step:3,text:"새로운 기술을 배울 때 나는?",answers:[{text:"빠르게 시도해보려 한다.",resultIndex:0},{text:"주변 지원을 받아가며 천천히 익힌다.",resultIndex:1}]},{step:4,text:"여행 가기 전에 나는?",answers:[{text:"세부 일정을 정확하게 짜놓는 편이다.",resultIndex:0},{text:"대략적인 계획만 세우고 자유롭게 다니는 편이다.",resultIndex:1}]},{step:5,text:"스트레스를 받았을 때 나의 해소 방법은?",answers:[{text:"운동하거나 외출하여 스트레스를 푼다.",resultIndex:0},{text:"독서나 명상을 통해 스트레스를 해소한다.",resultIndex:1}]}];var h=n(7793);let w=()=>{let[e,t]=(0,s.useState)(0),[n,r]=(0,s.useState)(p),[i,l]=(0,s.useState)([]),a=async r=>{l([...i,{step:e,index:r}]);let s=document.getElementById("query-list");s&&(await h.Z.smoothScroll(s,s.offsetWidth*(e+1),0,100),t(e+1),n.length===e+1&&console.log(i))};return{queryIndex:e,query:n,toNext:a}};var b=n(5281),g=n(6554),v=n(6914),_=(0,g.G)(function(e,t){let{direction:n,align:s,justify:i,wrap:l,basis:a,grow:c,shrink:o,...d}=e;return(0,r.jsx)(v.m.div,{ref:t,__css:{display:"flex",flexDirection:n,alignItems:s,justifyContent:i,flexWrap:l,flexBasis:a,flexGrow:c,flexShrink:o},...d})});_.displayName="Flex";var y=n(1293),j=n(3108),k=n(3484);let N=()=>{let e=w();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(b.K,{width:"full",overflow:"hidden",id:"query-list",children:[(0,r.jsxs)(b.K,{pos:"absolute",h:"10px",w:{base:"100vw",md:"720px"},m:"0 auto",left:{base:"calc(calc(100% - 100vw)/2)",md:"calc(calc(100% - 720px)/2)"},top:"25%",children:[(0,r.jsx)(b.K,{pos:"absolute",h:"100%",w:"100%",bg:"gray.200"}),(0,r.jsx)(b.K,{pos:"absolute",h:"100%",w:"calc(100% / ".concat(e.query.length," * ").concat(e.queryIndex,")"),bg:k.O.key,style:{transition:"width 0.1s ease-in-out"}})]}),(0,r.jsx)(b.K,{direction:"row",w:"calc(100% * ".concat(e.query.length,")"),alignItems:"flex-start",mb:{base:5,md:10},children:e.query.map((t,n)=>(0,r.jsxs)(b.K,{width:{base:"100vw",md:"720px"},direction:"column",h:"calc(100vh - 110px)",pos:"relative",children:[(0,r.jsx)(b.K,{h:"20%",textAlign:"center",children:(0,r.jsx)(_,{h:"100%",justifyContent:"center",alignItems:"center",children:(0,r.jsx)(y.x,{fontSize:{base:"2xl",md:"4xl"},fontWeight:"bold",children:t.text})})}),(0,r.jsx)(b.K,{h:"70%",pt:"20%",px:5,children:t.answers.map((t,n)=>(0,r.jsx)(j.z,{h:"25%",bg:k.O.primary,textAlign:"center",mb:2,onClick:()=>{e.toNext(t.resultIndex)},children:t.text},n))})]},n))})]})})};var I=N},7793:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});class r{}r.smoothScroll=(e,t,n,r)=>{if(!e)return Promise.resolve();if(t=Math.round(t),n=Math.round(n),0===(r=Math.round(r)))return e.scrollLeft=t,e.scrollTop=n,Promise.resolve();let s=Date.now(),i=s+r,l=e.scrollLeft,a=e.scrollTop,c=t-l,o=n-a,d=(e,t,n)=>{if(n<=e)return 0;if(n>=t)return 1;let r=(n-e)/(t-e);return r*r*(3-2*r)},u=e.scrollLeft,m=e.scrollTop;return new Promise(t=>{let n=()=>{let r=Date.now(),x=d(s,i,r),f=Math.round(l+c*x),p=Math.round(a+o*x);if(e.scrollLeft=f,e.scrollTop=p,r>=i||e.scrollLeft===u&&e.scrollTop===m&&(e.scrollLeft!==f||e.scrollTop!==p)){t();return}u=e.scrollLeft,m=e.scrollTop,requestAnimationFrame(n)};requestAnimationFrame(n)})},r.smoothScrollWindow=(e,t,n)=>{let r=window.scrollX,s=window.scrollY,i=e-r,l=t-s,a=performance.now();if(0===n)return window.scrollTo({left:r,top:s,behavior:"auto"}),Promise.resolve();let c=e=>{e.preventDefault()};return new Promise(e=>{let t=o=>{let d=(o-a)/n;d>1&&(d=1);let u=r+i*d,m=s+l*d;window.scrollTo({left:u,top:m,behavior:"auto"}),d<1?requestAnimationFrame(t):(window.removeEventListener("wheel",c),window.removeEventListener("touchstart",c),e())};window.addEventListener("wheel",c,{passive:!1}),window.addEventListener("touchstart",c,{passive:!1}),requestAnimationFrame(t)})}},3951:function(e,t,n){"use strict";n.d(t,{XQ:function(){return s}});var r=n(5432);function s(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):(0,r.Kn)(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):null!=e?t(e):null}Object.freeze(["base","sm","md","lg","xl","2xl"])},8522:function(e,t,n){"use strict";n.d(t,{D:function(){return r},i:function(){return s}});var[r,s]=(0,n(5227).k)({strict:!1,name:"ButtonGroupContext"})},3108:function(e,t,n){"use strict";n.d(t,{z:function(){return p}});var r=n(7294),s=n(8522),i=n(6914),l=n(5432),a=n(5893);function c(e){let{children:t,className:n,...s}=e,c=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,o=(0,l.cx)("chakra-button__icon",n);return(0,a.jsx)(i.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...s,className:o,children:c})}c.displayName="ButtonIcon";var o=n(1136);function d(e){let{label:t,placement:n,spacing:s="0.5rem",children:c=(0,a.jsx)(o.$,{color:"currentColor",width:"1em",height:"1em"}),className:d,__css:u,...m}=e,x=(0,l.cx)("chakra-button__spinner",d),f="start"===n?"marginEnd":"marginStart",p=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[f]:t?s:0,fontSize:"1em",lineHeight:"normal",...u}),[u,t,f,s]);return(0,a.jsx)(i.m.div,{className:x,...m,__css:p,children:c})}d.displayName="ButtonSpinner";var u=n(1103),m=n(6554),x=n(4548),f=n(3179),p=(0,m.G)((e,t)=>{let n=(0,s.i)(),c=(0,x.mq)("Button",{...n,...e}),{isDisabled:o=null==n?void 0:n.isDisabled,isLoading:m,isActive:p,children:w,leftIcon:b,rightIcon:g,loadingText:v,iconSpacing:_="0.5rem",type:y,spinner:j,spinnerPlacement:k="start",className:N,as:I,...S}=(0,f.Lr)(e),L=(0,r.useMemo)(()=>{let e={...null==c?void 0:c._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...c,...!!n&&{_focus:e}}},[c,n]),{ref:E,type:T}=function(e){let[t,n]=(0,r.useState)(!e),s=(0,r.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]);return{ref:s,type:t?"button":void 0}}(I),W={rightIcon:g,leftIcon:b,iconSpacing:_,children:w};return(0,a.jsxs)(i.m.button,{ref:(0,u.qq)(t,E),as:I,type:null!=y?y:T,"data-active":(0,l.PB)(p),"data-loading":(0,l.PB)(m),__css:L,className:(0,l.cx)("chakra-button",N),...S,disabled:o||m,children:[m&&"start"===k&&(0,a.jsx)(d,{className:"chakra-button__spinner--start",label:v,placement:"start",spacing:_,children:j}),m?v||(0,a.jsx)(i.m.span,{opacity:0,children:(0,a.jsx)(h,{...W})}):(0,a.jsx)(h,{...W}),m&&"end"===k&&(0,a.jsx)(d,{className:"chakra-button__spinner--end",label:v,placement:"end",spacing:_,children:j})]})});function h(e){let{leftIcon:t,rightIcon:n,children:r,iconSpacing:s}=e;return(0,a.jsxs)(a.Fragment,{children:[t&&(0,a.jsx)(c,{marginEnd:s,children:t}),r,n&&(0,a.jsx)(c,{marginStart:s,children:n})]})}p.displayName="Button"},1293:function(e,t,n){"use strict";n.d(t,{x:function(){return d}});var r=n(6554),s=n(4548),i=n(3179),l=n(6914),a=n(5432),c=n(7052),o=n(5893),d=(0,r.G)(function(e,t){let n=(0,s.mq)("Text",e),{className:r,align:d,decoration:u,casing:m,...x}=(0,i.Lr)(e),f=(0,c.o)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,o.jsx)(l.m.p,{ref:t,className:(0,a.cx)("chakra-text",e.className),...f,...x,__css:n})});d.displayName="Text"},5281:function(e,t,n){"use strict";n.d(t,{K:function(){return u}});var r=n(6914),s=n(5893),i=e=>(0,s.jsx)(r.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});i.displayName="StackItem";var l=n(3951),a=n(2495),c=n(5432),o=n(6554),d=n(7294),u=(0,o.G)((e,t)=>{let{isInline:n,direction:o,align:u,justify:m,spacing:x="0.5rem",wrap:f,children:p,divider:h,className:w,shouldWrapChildren:b,...g}=e,v=n?"row":null!=o?o:"column",_=(0,d.useMemo)(()=>(function(e){let{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,l.XQ)(n,e=>r[e])}})({spacing:x,direction:v}),[x,v]),y=!!h,j=!b&&!y,k=(0,d.useMemo)(()=>{let e=(0,a.W)(p);return j?e:e.map((t,n)=>{let r=void 0!==t.key?t.key:n,l=n+1===e.length,a=(0,s.jsx)(i,{children:t},r),c=b?a:t;if(!y)return c;let o=(0,d.cloneElement)(h,{__css:_});return(0,s.jsxs)(d.Fragment,{children:[c,l?null:o]},r)})},[h,_,y,j,b,p]),N=(0,c.cx)("chakra-stack",w);return(0,s.jsx)(r.m.div,{ref:t,display:"flex",alignItems:u,justifyContent:m,flexDirection:v,flexWrap:f,gap:y?void 0:x,className:N,...g,children:k})});u.displayName="Stack"},7052:function(e,t,n){"use strict";function r(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}n.d(t,{o:function(){return r}})},2495:function(e,t,n){"use strict";n.d(t,{W:function(){return s}});var r=n(7294);function s(e){return r.Children.toArray(e).filter(e=>(0,r.isValidElement)(e))}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=239)}),_N_E=e.O()}]);