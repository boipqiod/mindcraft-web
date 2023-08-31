(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[344],{163:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login",function(){return n(6980)}])},6980:function(e,t,n){"use strict";n.r(t),n.d(t,{Login:function(){return j},default:function(){return T}});var s=n(5893),i=n(7294),r=n(7747),a=n(2757),o=n(1293),l=n(3090),u=n(5227),c=n(2495),d=n(6554),h=n(4548),p=n(3179),m=n(6914),g=n(5432),f=n(7052),[y,E]=(0,u.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),_=(0,d.G)(function(e,t){let n=(0,h.jC)("Input",e),{children:r,className:a,...o}=(0,p.Lr)(e),l=(0,g.cx)("chakra-input__group",a),u={},d=(0,c.W)(r),E=n.field;d.forEach(e=>{var t,s;n&&(E&&"InputLeftElement"===e.type.id&&(u.paddingStart=null!=(t=E.height)?t:E.h),E&&"InputRightElement"===e.type.id&&(u.paddingEnd=null!=(s=E.height)?s:E.h),"InputRightAddon"===e.type.id&&(u.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(u.borderStartRadius=0))});let _=d.map(t=>{var n,s;let r=(0,f.o)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(s=t.props)?void 0:s.variant)||e.variant});return"Input"!==t.type.id?(0,i.cloneElement)(t,r):(0,i.cloneElement)(t,Object.assign(r,u,t.props))});return(0,s.jsx)(m.m.div,{className:l,ref:t,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...n.group},"data-group":!0,...o,children:(0,s.jsx)(y,{value:n,children:_})})});_.displayName="InputGroup";var v=(0,m.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),x=(0,d.G)(function(e,t){var n,i;let{placement:r="left",...a}=e,o=E(),l=o.field,u={["left"===r?"insetStart":"insetEnd"]:"0",width:null!=(n=null==l?void 0:l.height)?n:null==l?void 0:l.h,height:null!=(i=null==l?void 0:l.height)?i:null==l?void 0:l.h,fontSize:null==l?void 0:l.fontSize,...o.element};return(0,s.jsx)(v,{ref:t,__css:u,...a})});x.id="InputElement",x.displayName="InputElement";var w=(0,d.G)(function(e,t){let{className:n,...i}=e,r=(0,g.cx)("chakra-input__left-element",n);return(0,s.jsx)(x,{ref:t,placement:"left",className:r,...i})});w.id="InputLeftElement",w.displayName="InputLeftElement";var C=(0,d.G)(function(e,t){let{className:n,...i}=e,r=(0,g.cx)("chakra-input__right-element",n);return(0,s.jsx)(x,{ref:t,placement:"right",className:r,...i})});C.id="InputRightElement",C.displayName="InputRightElement";var I=n(2916),S=n(3523),b=n(856),A=n(44);let R=()=>{let{auth:e,setAuth:t}=i.useContext(S.V),[n,s]=i.useState(!1),{toMain:r}=(0,b.q)();(0,i.useEffect)(()=>{e&&r()},[]);let a=async(e,n)=>{let s=await A.e.signIn(e,n);s.isSuccess?(t(!0),r()):alert("로그인이 실패하였습니다.\n".concat(s.message))};return{show:n,setShow:s,handleClick:()=>s(!n),signIn:a,signOut:()=>{}}},j=()=>{let e=R(),{toRegister:t}=(0,b.q)(),[n,u]=i.useState(""),[c,d]=i.useState("");return(0,s.jsxs)(r.xu,{maxW:"300px",width:"80%",mx:"auto",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,s.jsx)(a.X,{my:18,children:"로그인"}),(0,s.jsx)(o.x,{width:"100%",textAlign:"left",children:"이메일 "}),(0,s.jsx)(l.I,{fontSize:"1.2rem",placeholder:"mindcraft@example.com",mb:8,type:"email",value:n,onChange:e=>{u(e.target.value)}}),(0,s.jsx)(o.x,{width:"100%",textAlign:"left",children:"비밀번호 "}),(0,s.jsxs)(_,{size:"md",mb:8,children:[(0,s.jsx)(l.I,{fontSize:"1.2rem",pr:"4.5rem",type:e.show?"text":"password",placeholder:"Enter password",value:c,onChange:e=>{d(e.target.value)}}),(0,s.jsx)(C,{width:"4.5rem",children:(0,s.jsx)(I.z,{h:"1.75rem",size:"sm",onClick:e.handleClick,children:e.show?"Hide":"Show"})})]}),(0,s.jsx)(I.z,{onClick:()=>{e.signIn(n,c)},bg:"#F5C31F",width:"100%",mb:5,children:"로그인"}),(0,s.jsx)(I.z,{onClick:t,fontWeight:"normal",variant:"link",children:"회원가입"})]})};var T=j},44:function(e,t,n){"use strict";n.d(t,{e:function(){return f}});var s,i,r,a,o,l,u,c,d=n(6154);(s=l||(l={})).get="get",s.post="post",s.put="put",s.delete="delete",(i=u||(u={})).json="application/json",i.form="multipart/form-data",(a=(r=c||(c={})).auth||(r.auth={})).signIn={method:l.post,url:"/auth/sign-in"},a.register={method:l.post,url:"/auth/signup",contentType:u.form},a.requestCode={method:l.post,url:"/auth/email"},a.requestCodeSubmit={method:l.post,url:"/auth/email/verify"},(o=r.test||(r.test={})).getTestList={method:l.get,url:"/mindTestes"},o.getTestDetail={method:l.get,url:"/mindTestes/:id"},o.createTest={method:l.post,url:"/mindTest"};class h{constructor(e,t,n){this.statusCode=e,this.message=t,this.data=n,this.isSuccess=200===e,this.isError=200!==e,this.isTokenExpired=401===e||403===e}}var p=n(4121),m=n(3454);class g{static get instance(){return g._instance||(g._instance=new g),g._instance}constructor(){this.setConfig=(e,t)=>{let n=e.url;if(t)for(let[e,s]of Object.entries(t))n.includes(":".concat(e))&&(n=n.replace(":".concat(e),s),delete t[e]);let s={method:e.method,url:n};return e.method===l.get?s.params=t:e.contentType===u.form?s.data=this.transToFromData(t):s.data=t,s},this.request=async(e,t)=>{let n=this.setConfig(e,t);try{let e=await this.axios.request(n),s=new h(e.data.statusCode,e.data.message,e.data.data);return s.isError?this.failLog(n,t,e.data):this.successLog(n,t,s),s}catch(a){let n,s;let i=5050;a.response?(n=a.response,i=a.response.status,s="http 응답 실패"):a.request?(n=a.request,s="응답 없음"):(n=a.message,s="에러 메시지 확인",i=5051);let r=new h(i,s);return this.errorLog(e,t,n,r),r}},this.transToFromData=e=>{let t=new FormData;for(let n in e){let s=e[n];if("string"==typeof s||s instanceof Blob||s instanceof File)t.set(n,s);else if(Array.isArray(s))for(let e of s)("string"==typeof e||e instanceof Blob||e instanceof File)&&t.set(n,e);else null!=s&&t.set(n,String(s))}return console.log(t),t},this.errorLog=(e,t,n,s)=>{p.Z.error("\n====REQUEST====","\nBaseUrl\n",m.env.REACT_APP_API_BASE_URL,"\napiConfig\n",e,"\nbody\n",t,"\n\n=====ERROR=====","\ndata\n",s,"\nerror\n",n)},this.failLog=(e,t,n)=>{p.Z.warn("\n====REQUEST====","\nBaseUrl\n",m.env.REACT_APP_API_BASE_URL,"\napiConfig\n",e,"\nbody\n",t,"\n\n=====ERROR=====","\nResponse\n",n)},this.successLog=(e,t,n)=>{p.Z.log("\n====REQUEST====","\nBaseUrl\n",m.env.REACT_APP_API_BASE_URL,"\napiConfig\n",e,"\nbody\n",t,"\n\n====RESPONSE====\n",n)},this.axios=d.Z.create({baseURL:"".concat(m.env.REACT_APP_API_BASE_URL)})}}class f{static async register(e,t,n,s){return await g.instance.request(c.auth.register,{email:e,password:t,nickname:n,url:s})}static async signIn(e,t){return await g.instance.request(c.auth.signIn,{email:e,password:t})}static async requestCode(e){return await g.instance.request(c.auth.requestCode,{email:e})}static async requestCodeSubmit(e,t){return await g.instance.request(c.auth.requestCodeSubmit,{email:e,code:t})}}},4121:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});class s{static log(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.isDebug()&&console.log(...t)}static info(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.isDebug()&&console.info(...t)}static warn(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.isDebug()&&console.warn(...t)}static error(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.isDebug()&&console.error(...t)}}s.isDebug=()=>!1}},function(e){e.O(0,[949,18,774,888,179],function(){return e(e.s=163)}),_N_E=e.O()}]);