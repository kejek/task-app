import{W as h,j as e,Y as g,a as p}from"./app-D2wZBnOE.js";import{I as i}from"./InputError-Bg0RoMl7.js";import{I as l}from"./InputLabel-DwjgFm0P.js";import{S as m}from"./SelectInput-C9M-ieRm.js";import{T as j}from"./TextAreaInput-GdS1ZVvr.js";import{T as n}from"./TextInput-BAGh6iRp.js";import{A as v}from"./AuthenticatedLayout-DmdaauD0.js";import"./ApplicationLogo-DceA_IAm.js";import"./transition-nAKmWgMX.js";function I({auth:d,users:o}){const{data:r,setData:a,post:c,errors:t,reset:k}=h({image:"",name:"",status:"",description:"",due_date:""}),u=document.querySelector('meta[name="csrf-token"]').getAttribute("content"),x=s=>{s.preventDefault(),c(route("task.store"),{...r,_token:u})};return e.jsxs(v,{user:d.user,header:e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Create new Task"})}),children:[e.jsx(g,{title:"Tasks"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsxs("form",{onSubmit:x,className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:[e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"task_image_path",value:"Task Image"}),e.jsx(n,{id:"task_image_path",type:"file",name:"image",className:"mt-1 block w-full",onChange:s=>a("image",s.target.files[0])}),e.jsx(i,{message:t.image,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"task_name",value:"Task Name"}),e.jsx(n,{id:"task_name",type:"text",name:"name",value:r.name,className:"mt-1 block w-full",isFocused:!0,onChange:s=>a("name",s.target.value)}),e.jsx(i,{message:t.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"task_description",value:"Task Description"}),e.jsx(j,{id:"task_description",name:"description",value:r.description,className:"mt-1 block w-full",onChange:s=>a("description",s.target.value)}),e.jsx(i,{message:t.description,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"task_due_date",value:"Task Deadline"}),e.jsx(n,{id:"task_due_date",type:"date",name:"due_date",value:r.due_date,className:"mt-1 block w-full",onChange:s=>a("due_date",s.target.value)}),e.jsx(i,{message:t.due_date,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"task_status",value:"Task Status"}),e.jsxs(m,{name:"status",id:"task_status",className:"mt-1 block w-full",onChange:s=>a("status",s.target.value),children:[e.jsx("option",{value:"",children:"Select Status"}),e.jsx("option",{value:"pending",children:"Pending"}),e.jsx("option",{value:"in_progress",children:"In Progress"}),e.jsx("option",{value:"completed",children:"Completed"})]}),e.jsx(i,{message:t.task_status,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"task_priority",value:"Task Priority"}),e.jsxs(m,{name:"priority",id:"task_priority",className:"mt-1 block w-full",onChange:s=>a("priority",s.target.value),children:[e.jsx("option",{value:"",children:"Select Priority"}),e.jsx("option",{value:"low",children:"Low"}),e.jsx("option",{value:"medium",children:"Medium"}),e.jsx("option",{value:"high",children:"High"})]}),e.jsx(i,{message:t.priority,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"task_assigned_user",value:"Assigned User"}),e.jsxs(m,{name:"assigned_user_id",id:"task_assigned_user",className:"mt-1 block w-full",onChange:s=>a("assigned_user_id",s.target.value),children:[e.jsx("option",{value:"",children:"Select User"}),o.data.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]}),e.jsx(i,{message:t.assigned_user_id,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 text-right",children:[e.jsx(p,{href:route("task.index"),className:"bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2",children:"Cancel"}),e.jsx("button",{className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Submit"})]})]})})})})]})}export{I as default};
