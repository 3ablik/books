(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{7969:(e,n,t)=>{Promise.resolve().then(t.bind(t,554))},7601:(e,n,t)=>{"use strict";t.d(n,{A:()=>o,O:()=>s});var i=t(5155),r=t(2115);let l=(0,r.createContext)({isAuthenticated:!1,auth:()=>{},userAuth:{},setIsAuthenticated:()=>{}}),s=e=>{let{children:n}=e;console.log("AuthProvider");let[t,s]=(0,r.useState)(!1),[o,d]=(0,r.useState)({});return(0,r.useEffect)(()=>{console.log(t)},[t]),(0,i.jsx)(l.Provider,{value:{isAuthenticated:t,auth:e=>{s(!0),d(e)},userAuth:o,setIsAuthenticated:s},children:n})};function o(){return(0,r.useContext)(l)}},6740:(e,n,t)=>{"use strict";t.d(n,{L:()=>o,T:()=>s});var i=t(5155),r=t(2115);let l=(0,r.createContext)(),s=e=>{let{children:n}=e,[t,s]=(0,r.useState)([{login:"admin",email:"admin@admin.admin",password:"admin123",id:0}]),[o,d]=(0,r.useState)({});return(0,i.jsx)(l.Provider,{value:{accounts:t,addAccount:(e,n,t)=>{s(i=>{let r={login:e,email:n,password:t,id:i.length};return d(r),[...i,r]})},userReg:o},children:n})},o=()=>(0,r.useContext)(l)},554:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>u});var i=t(698),r=t(5155);t(2115);var l=t(6740),s=t(7601),o=t(8173),d=t.n(o);function a(){let e=(0,i._)(["\n  display: inline-block;\n  line-height: 42px;\n  margin: 0;\n  text-align: center;\n  background-color: #ffffff;\n  color: #171717;\n  border: 3px solid #171717;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: backgroundColor 0.3s;\n  width: 120px;\n  font-size: 15px;\n  font-weight: 300;\n"]);return a=function(){return e},e}let c=(0,t(5285).Ay)(d())(a()),u=()=>{let{userReg:e}=(0,l.L)(),{isAuthenticated:n,userAuth:t,setIsAuthenticated:i}=(0,s.A)();return t?console.log(t.login):console.log(e.name),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Profile"}),n?(0,r.jsxs)("div",{children:[t?(0,r.jsxs)("div",{children:[(0,r.jsxs)("h3",{children:["Login: ",t.login]}),(0,r.jsxs)("h3",{children:["Email: ",t.email]})]}):(0,r.jsxs)("div",{children:[(0,r.jsxs)("h3",{children:["Login: ",e.login]}),(0,r.jsxs)("h3",{children:["Email: ",e.email]})]}),(0,r.jsx)("button",{onClick:()=>{i(!1)},style:{backgroundColor:"red"},children:"Exit"})]}):(0,r.jsx)("div",{children:(0,r.jsx)(c,{href:"/login",children:"Maybe sign in?"})})]})}}},e=>{var n=n=>e(e.s=n);e.O(0,[173,654,441,517,358],()=>n(7969)),_N_E=e.O()}]);