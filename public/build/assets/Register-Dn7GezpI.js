import{W as c,j as e,Y as p,a as f}from"./app-D2wZBnOE.js";import{I as t}from"./InputError-Bg0RoMl7.js";import{I as m}from"./InputLabel-DwjgFm0P.js";import{P as x}from"./PrimaryButton-BYv9Y0in.js";import{T as i}from"./TextInput-BAGh6iRp.js";import{G as w}from"./GuestLayout-IbWZc9Gu.js";import"./ApplicationLogo-DceA_IAm.js";function b(){const{data:a,setData:r,post:n,processing:l,errors:o,reset:d}=c({name:"",email:"",password:"",password_confirmation:""}),u=s=>{s.preventDefault(),n(route("register"),{onFinish:()=>d("password","password_confirmation")})};return e.jsxs(w,{children:[e.jsx(p,{title:"Register"}),e.jsxs("form",{onSubmit:u,children:[e.jsxs("div",{children:[e.jsx(m,{htmlFor:"name",value:"Name"}),e.jsx(i,{id:"name",name:"name",value:a.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:s=>r("name",s.target.value),required:!0}),e.jsx(t,{message:o.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"email",value:"Email"}),e.jsx(i,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",onChange:s=>r("email",s.target.value),required:!0}),e.jsx(t,{message:o.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"password",value:"Password"}),e.jsx(i,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password",s.target.value),required:!0}),e.jsx(t,{message:o.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"password_confirmation",value:"Confirm Password"}),e.jsx(i,{id:"password_confirmation",type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password_confirmation",s.target.value),required:!0}),e.jsx(t,{message:o.password_confirmation,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-end",children:[e.jsx(f,{href:route("login"),className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Already registered?"}),e.jsx(x,{className:"ms-4",disabled:l,children:"Register"})]})]})]})}export{b as default};
