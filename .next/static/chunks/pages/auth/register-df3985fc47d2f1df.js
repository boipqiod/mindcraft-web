(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{6659:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/register",function(){return n(4)}])},4:function(e,t,n){"use strict";n.r(t),n.d(t,{Register:function(){return R},default:function(){return q}});var s=n(5893),a=n(8020),i=n(6529),r=n(3090),c=n(3108),l=n(5281),o=n(4292),u=n(7431),h=n(5460),d=n(1293),g=n(6859),m=n(829),p=n(4285),f=n(2497),x=n(9381),C=n(2503),j=n(2757),w=n(7294),k=n(6824);class S{static get instance(){return S._instance||(S._instance=new S),S._instance}checkEmail(e){return/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e)}checkPassword(e){return/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e)}checkNickname(e){return!(e.length<2||e.length>10||/^\d+$/.test(e)||/[^가-힣a-zA-Z0-9]/.test(e))}checkNumber(e){return/^[0-9]*$/.test(e)}constructor(){}}var y=n(856),E=n(44),v=n(4121);let _=[{description:"이메일 인증"},{description:"인증 번호 입력"},{description:"기타 정보 입력"}],b=()=>{let{activeStep:e,setActiveStep:t}=(0,k.h)({index:0,count:_.length}),{toMain:n}=(0,y.q)(),[s,a]=(0,w.useState)(""),[i,r]=(0,w.useState)(""),[c,l]=(0,w.useState)(""),[o,u]=(0,w.useState)(""),[h,d]=(0,w.useState)(""),[g,m]=(0,w.useState)(""),[p,f]=(0,w.useState)(!1),[x,C]=(0,w.useState)(!1),[j,b]=(0,w.useState)(!1),A=()=>{t(e=>e+1)},R=async()=>{let e=S.instance.checkPassword(c);if(!e){alert("비밀번호 형식이 올바르지 않습니다.");return}if(c!==o){alert("비밀번호가 일치하지 않습니다.");return}let t=S.instance.checkNickname(h),a=S.instance.checkNickname("nickname"),r=S.instance.checkNickname("1234"),l=S.instance.checkNickname("닉네임"),u=S.instance.checkNickname("닉네임112");if(v.Z.info(t,a,r,l,u),!t){alert("닉네임 형식이 올바르지 않습니다. (2~10자)");return}b(!0);let d=await E.e.requestCode(s);b(!1),d.isSuccess?(v.Z.info(s,i,c,h,g),n()):alert("회원가입 실패: ".concat(d.message))};return{email:s,emailCode:i,activeStep:e,setActiveStep:t,steps:_,nickname:h,image:g,password:c,passwordCheck:o,requestCodeSend:()=>{let e=S.instance.checkEmail(s);if(!e){alert("이메일 형식이 올바르지 않습니다.");return}f(!0),A(),b(!1)},requestCodeSubmit:e=>{C(!0),v.Z.info(e),A(),C(!1)},handleEmailChange:e=>{a(e.target.value)},handleEmailCodeChange:e=>{r(e.target.value)},handlePasswordChange:e=>{l(e.target.value)},requestRegister:R,handlePasswordCheckChange:e=>{u(e.target.value)},handleNicknameChange:e=>{d(e.target.value)},handleImageChange:e=>{m(e.target.value)},loadingEmailCode:p,loadingEmailCodeSubmit:x,loadingRegister:j}};var A=n(3484);function R(){let e=b(),t=e.steps[e.activeStep].description;return(0,s.jsxs)(l.K,{maxW:"400px",mx:"auto",my:"8vh",direction:"column",alignItems:"center",children:[(0,s.jsxs)(l.K,{width:"100%",children:[(0,s.jsx)(d.x,{width:"100%",textAlign:"center",children:t}),(0,s.jsx)(g.v,{size:"sm",index:e.activeStep,gap:"1",children:e.steps.map((e,t)=>(0,s.jsxs)(m.h,{children:[(0,s.jsx)(p.O,{children:(0,s.jsx)(f.k,{complete:(0,s.jsx)(x.Z,{})})}),(0,s.jsx)(C.F,{})]},t))})]}),(0,s.jsx)(j.X,{width:"full",textAlign:"center",my:30,children:"회원 가입"}),0===e.activeStep?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(a.NI,{isRequired:!0,width:"80%",children:[(0,s.jsx)(i.l,{children:"이메일"}),(0,s.jsx)(r.I,{placeholder:"mindcraft@example.com",mb:3,type:"email",value:e.email,onChange:e.handleEmailChange}),(0,s.jsx)(c.z,{width:"100%",color:"white",bg:A.O.key,onClick:e.requestCodeSend,isLoading:e.loadingEmailCode,children:"인증 메일 발송"})]})}):1===e.activeStep?(0,s.jsx)(l.K,{children:(0,s.jsxs)(a.NI,{display:"flex",flexDirection:"column",justifyContent:"center",isRequired:!0,children:[(0,s.jsx)(i.l,{children:"인증 번호"}),(0,s.jsx)(o.U,{children:(0,s.jsxs)(u.E,{onComplete:e.requestCodeSubmit,isDisabled:e.loadingEmailCodeSubmit,children:[(0,s.jsx)(u.x,{}),(0,s.jsx)(u.x,{}),(0,s.jsx)(u.x,{}),(0,s.jsx)(u.x,{})]})})]})}):2===e.activeStep?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.U,{width:"full",justifyContent:"space-between",children:[(0,s.jsx)(l.K,{width:"55%",display:"flex",alignItems:"center",children:(0,s.jsxs)(a.NI,{isRequired:!0,children:[(0,s.jsx)(i.l,{children:"비밀번호"}),(0,s.jsx)(r.I,{placeholder:"비밀번호",mb:3,type:"password",value:e.password,onChange:e.handlePasswordChange}),(0,s.jsx)(r.I,{placeholder:"비밀번호 확인",mb:3,type:"password",value:e.passwordCheck,onChange:e.handlePasswordCheckChange}),(0,s.jsx)(i.l,{children:"닉네임"}),(0,s.jsx)(r.I,{placeholder:"닉네임",mb:3,type:"text",value:e.nickname,onChange:e.handleNicknameChange})]})}),(0,s.jsx)(l.K,{width:"40%",display:"flex",alignItems:"center",height:"full",children:(0,s.jsxs)(a.NI,{children:[(0,s.jsxs)(i.l,{boxSize:"full",children:["프로필 이미지",(0,s.jsx)(h.E,{src:"gibbresh.png",fallbackSrc:"https://via.placeholder.com/150"})]}),(0,s.jsx)(r.I,{hidden:!0,type:"file",accept:"image/*",value:e.image,onChange:e.handleImageChange})]})})]}),(0,s.jsx)(c.z,{width:"100%",color:"white",bg:A.O.key,onClick:e.requestRegister,isLoading:e.loadingRegister,children:"회원 가입 요청"})]}):null]})}var q=R},44:function(e,t,n){"use strict";n.d(t,{e:function(){return f}});var s,a,i,r,c,l,o,u,h=n(6154);(s=l||(l={})).get="get",s.post="post",s.put="put",s.delete="delete",(a=o||(o={})).json="application/json",a.form="multipart/form-data",(r=(i=u||(u={})).auth||(i.auth={})).signIn={method:l.post,url:"/auth/sign-in"},r.register={method:l.post,url:"/auth/signup",contentType:o.form},r.requestCode={method:l.post,url:"/auth/email"},r.requestCodeSubmit={method:l.post,url:"/auth/email/verify"},(c=i.test||(i.test={})).getTestList={method:l.get,url:"/mindTestes"},c.getTestDetail={method:l.get,url:"/mindTestes/:id"},c.createTest={method:l.post,url:"/mindTest"};class d{constructor(e,t,n){this.statusCode=e,this.message=t,this.data=n,this.isSuccess=200===e,this.isError=200!==e,this.isTokenExpired=401===e||403===e}}var g=n(4121),m=n(3454);class p{static get instance(){return p._instance||(p._instance=new p),p._instance}constructor(){this.setConfig=(e,t)=>{let n=e.url;if(t)for(let[e,s]of Object.entries(t))n.includes(":".concat(e))&&(n=n.replace(":".concat(e),s),delete t[e]);let s={method:e.method,url:n};return e.method===l.get?s.params=t:e.contentType===o.form?s.data=this.transToFromData(t):s.data=t,s},this.request=async(e,t)=>{let n=this.setConfig(e,t);try{let e=await this.axios.request(n),s=new d(e.data.statusCode,e.data.message,e.data.data);return s.isError?this.failLog(n,t,e.data):this.successLog(n,t,s),s}catch(r){let n,s;let a=5050;r.response?(n=r.response,a=r.response.status,s="http 응답 실패"):r.request?(n=r.request,s="응답 없음"):(n=r.message,s="에러 메시지 확인",a=5051);let i=new d(a,s);return this.errorLog(e,t,n,i),i}},this.transToFromData=e=>{let t=new FormData;for(let n in e){let s=e[n];if("string"==typeof s||s instanceof Blob||s instanceof File)t.set(n,s);else if(Array.isArray(s))for(let e of s)("string"==typeof e||e instanceof Blob||e instanceof File)&&t.set(n,e);else null!=s&&t.set(n,String(s))}return console.log(t),t},this.errorLog=(e,t,n,s)=>{g.Z.error("\n====REQUEST====","\nBaseUrl\n",m.env.REACT_APP_API_BASE_URL,"\napiConfig\n",e,"\nbody\n",t,"\n\n=====ERROR=====","\ndata\n",s,"\nerror\n",n)},this.failLog=(e,t,n)=>{g.Z.warn("\n====REQUEST====","\nBaseUrl\n",m.env.REACT_APP_API_BASE_URL,"\napiConfig\n",e,"\nbody\n",t,"\n\n=====ERROR=====","\nResponse\n",n)},this.successLog=(e,t,n)=>{g.Z.log("\n====REQUEST====","\nBaseUrl\n",m.env.REACT_APP_API_BASE_URL,"\napiConfig\n",e,"\nbody\n",t,"\n\n====RESPONSE====\n",n)},this.axios=h.Z.create({baseURL:"".concat(m.env.REACT_APP_API_BASE_URL)})}}class f{static async register(e,t,n,s){return await p.instance.request(u.auth.register,{email:e,password:t,nickname:n,url:s})}static async signIn(e,t){return await p.instance.request(u.auth.signIn,{email:e,password:t})}static async requestCode(e){return await p.instance.request(u.auth.requestCode,{email:e})}static async requestCodeSubmit(e,t){return await p.instance.request(u.auth.requestCodeSubmit,{email:e,code:t})}}},4121:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});class s{static log(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.isDebug()&&console.log(...t)}static info(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.isDebug()&&console.info(...t)}static warn(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.isDebug()&&console.warn(...t)}static error(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.isDebug()&&console.error(...t)}}s.isDebug=()=>!1}},function(e){e.O(0,[876,730,702,774,888,179],function(){return e(e.s=6659)}),_N_E=e.O()}]);