(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[344],{163:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login",function(){return n(6980)}])},6980:function(e,t,n){"use strict";n.r(t),n.d(t,{Login:function(){return k},default:function(){return P}});var s=n(5893),i=n(7294),a=n(7747),r=n(2757),o=n(1293),l=n(3090),u=n(5227),d=n(2495),c=n(6554),h=n(4548),p=n(3179),m=n(6914),g=n(5432),f=n(7052),[w,y]=(0,u.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),E=(0,c.G)(function(e,t){let n=(0,h.jC)("Input",e),{children:a,className:r,...o}=(0,p.Lr)(e),l=(0,g.cx)("chakra-input__group",r),u={},c=(0,d.W)(a),y=n.field;c.forEach(e=>{var t,s;n&&(y&&"InputLeftElement"===e.type.id&&(u.paddingStart=null!=(t=y.height)?t:y.h),y&&"InputRightElement"===e.type.id&&(u.paddingEnd=null!=(s=y.height)?s:y.h),"InputRightAddon"===e.type.id&&(u.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(u.borderStartRadius=0))});let E=c.map(t=>{var n,s;let a=(0,f.o)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(s=t.props)?void 0:s.variant)||e.variant});return"Input"!==t.type.id?(0,i.cloneElement)(t,a):(0,i.cloneElement)(t,Object.assign(a,u,t.props))});return(0,s.jsx)(m.m.div,{className:l,ref:t,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...n.group},"data-group":!0,...o,children:(0,s.jsx)(w,{value:n,children:E})})});E.displayName="InputGroup";var _=(0,m.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),x=(0,c.G)(function(e,t){var n,i;let{placement:a="left",...r}=e,o=y(),l=o.field,u={["left"===a?"insetStart":"insetEnd"]:"0",width:null!=(n=null==l?void 0:l.height)?n:null==l?void 0:l.h,height:null!=(i=null==l?void 0:l.height)?i:null==l?void 0:l.h,fontSize:null==l?void 0:l.fontSize,...o.element};return(0,s.jsx)(_,{ref:t,__css:u,...r})});x.id="InputElement",x.displayName="InputElement";var v=(0,c.G)(function(e,t){let{className:n,...i}=e,a=(0,g.cx)("chakra-input__left-element",n);return(0,s.jsx)(x,{ref:t,placement:"left",className:a,...i})});v.id="InputLeftElement",v.displayName="InputLeftElement";var I=(0,c.G)(function(e,t){let{className:n,...i}=e,a=(0,g.cx)("chakra-input__right-element",n);return(0,s.jsx)(x,{ref:t,placement:"right",className:a,...i})});I.id="InputRightElement",I.displayName="InputRightElement";var C=n(3108),S=n(856),A=n(44),b=n(1649),R=n(9593);let j=()=>{let e=(0,b.I0)(),t=(0,b.v9)(e=>e.auth.isAuthenticated),[n,s]=i.useState(!1),{toMain:a}=(0,S.q)(),[r,o]=i.useState({email:"",password:""}),l=async()=>{let t=await A.e.signIn(r.email,r.password);if(t.isSuccess&&t.data){let n={email:r.email,id:t.data.id,nickname:t.data.nickname,imageUrl:t.data.imageUrl};e((0,R.x)(n)),await a()}else alert("아이디와 비밀번호를 확인해주세요.")};return{showPassword:n,isAuthenticated:t,handleInputChange:e=>{let{name:t,value:n}=e.target;o({...r,[t]:n})},handleClickShowPassword:()=>s(!n),signIn:l,signOut:()=>{e((0,R.k)()),a().then()}}};var T=n(3484);let k=()=>{let e=j(),{toRegister:t,toMain:n}=(0,S.q)();return(0,i.useEffect)(()=>{e.isAuthenticated&&n().then()},[e.isAuthenticated,n]),(0,s.jsxs)(a.xu,{maxW:"300px",mx:"auto",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,s.jsx)(r.X,{my:18,children:"로그인"}),(0,s.jsx)(o.x,{width:"100%",textAlign:"left",children:"이메일"}),(0,s.jsx)(l.I,{fontSize:"1.2rem",placeholder:"mindcraft@example.com",mb:8,type:"email",name:"email",onChange:e.handleInputChange}),(0,s.jsx)(o.x,{width:"100%",textAlign:"left",children:"비밀번호"}),(0,s.jsxs)(E,{size:"md",mb:8,children:[(0,s.jsx)(l.I,{fontSize:"1.2rem",pr:"4.5rem",type:e.showPassword?"text":"password",placeholder:"Enter password",name:"password",onChange:e.handleInputChange}),(0,s.jsx)(I,{width:"4.5rem",children:(0,s.jsx)(C.z,{h:"1.75rem",size:"sm",onClick:e.handleClickShowPassword,children:e.showPassword?"Hide":"Show"})})]}),(0,s.jsx)(C.z,{onClick:e.signIn,bg:T.O.primary,width:"100%",mb:5,children:"로그인"}),(0,s.jsx)(C.z,{onClick:t,fontWeight:"normal",variant:"link",children:"회원가입"})]})};var P=k},44:function(e,t,n){"use strict";n.d(t,{e:function(){return f}});var s,i,a,r,o,l,u,d,c=n(6154);(s=l||(l={})).get="get",s.post="post",s.put="put",s.delete="delete",(i=u||(u={})).json="application/json",i.form="multipart/form-data",(r=(a=d||(d={})).auth||(a.auth={})).signIn={method:l.post,url:"/auth/sign-in"},r.register={method:l.post,url:"/auth/signup",contentType:u.form},r.requestCode={method:l.post,url:"/auth/email"},r.requestCodeSubmit={method:l.post,url:"/auth/email/verify"},(o=a.test||(a.test={})).getTestList={method:l.get,url:"/mindTestes"},o.getTestDetail={method:l.get,url:"/mindTestes/:id"},o.createTest={method:l.post,url:"/mindTest"};class h{constructor(e,t,n){this.statusCode=e,this.message=t,this.data=n,this.isSuccess=200===e,this.isError=200!==e,this.isTokenExpired=401===e||403===e}}var p=n(4121),m=n(3454);class g{static get instance(){return g._instance||(g._instance=new g),g._instance}constructor(){this.setConfig=(e,t)=>{let n=e.url;if(t)for(let[e,s]of Object.entries(t))n.includes(":".concat(e))&&(n=n.replace(":".concat(e),s),delete t[e]);let s={method:e.method,url:n};return e.method===l.get?s.params=t:e.contentType===u.form?s.data=this.transToFromData(t):s.data=t,s},this.request=async(e,t)=>{let n=this.setConfig(e,t);try{let e=await this.axios.request(n),s=new h(e.data.statusCode,e.data.message,e.data.data);return s.isError?this.failLog(n,t,e.data):this.successLog(n,t,s),s}catch(r){let n,s;let i=5050;r.response?(n=r.response,i=r.response.status,s="http 응답 실패"):r.request?(n=r.request,s="응답 없음"):(n=r.message,s="에러 메시지 확인",i=5051);let a=new h(i,s);return this.errorLog(e,t,n,a),a}},this.transToFromData=e=>{let t=new FormData;for(let n in e){let s=e[n];if("string"==typeof s||s instanceof Blob||s instanceof File)t.set(n,s);else if(Array.isArray(s))for(let e of s)("string"==typeof e||e instanceof Blob||e instanceof File)&&t.set(n,e);else null!=s&&t.set(n,String(s))}return console.log(t),t},this.errorLog=(e,t,n,s)=>{p.Z.error("\n====REQUEST====","\nBaseUrl\n",m.env.REACT_APP_API_BASE_URL,"\napiConfig\n",e,"\nbody\n",t,"\n\n=====ERROR=====","\ndata\n",s,"\nerror\n",n)},this.failLog=(e,t,n)=>{p.Z.warn("\n====REQUEST====","\nBaseUrl\n",m.env.REACT_APP_API_BASE_URL,"\napiConfig\n",e,"\nbody\n",t,"\n\n=====ERROR=====","\nResponse\n",n)},this.successLog=(e,t,n)=>{p.Z.log("\n====REQUEST====","\nBaseUrl\n",m.env.REACT_APP_API_BASE_URL,"\napiConfig\n",e,"\nbody\n",t,"\n\n====RESPONSE====\n",n)},this.axios=c.Z.create({baseURL:"".concat(m.env.REACT_APP_API_BASE_URL)})}}class f{static async register(e,t,n,s){return await g.instance.request(d.auth.register,{email:e,password:t,nickname:n,url:s})}static async signIn(e,t){return await g.instance.request(d.auth.signIn,{email:e,password:t})}static async requestCode(e){return await g.instance.request(d.auth.requestCode,{email:e})}static async requestCodeSubmit(e,t){return await g.instance.request(d.auth.requestCodeSubmit,{email:e,code:t})}}},4121:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});class s{static log(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.isDebug()&&console.log(...t)}static info(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.isDebug()&&console.info(...t)}static warn(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.isDebug()&&console.warn(...t)}static error(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.isDebug()&&console.error(...t)}}s.isDebug=()=>!1}},function(e){e.O(0,[876,730,774,888,179],function(){return e(e.s=163)}),_N_E=e.O()}]);