import{j as s,Y as d}from"./app-D2wZBnOE.js";import{A as i}from"./AuthenticatedLayout-DmdaauD0.js";import c from"./TasksTable-DTNsPryM.js";import"./ApplicationLogo-DceA_IAm.js";import"./transition-nAKmWgMX.js";import"./TableHeading-D-7JQba5.js";import"./SelectInput-C9M-ieRm.js";import"./TextInput-BAGh6iRp.js";import"./constants-C3SgNza5.js";function g({auth:a,user:e,tasks:l,queryParams:t}){return s.jsxs(i,{user:a.user,header:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:`User "${e.name}"`}),children:[s.jsx(d,{title:`User "${e.name}"`}),s.jsx("div",{className:"py-12",children:s.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:s.jsxs("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:[s.jsx("div",{children:s.jsx("img",{src:e.image_path,alt:"",className:"w-full h-64 object-cover"})}),s.jsxs("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:[s.jsxs("div",{className:"grid gap-1 grid-cols-2 mt-2",children:[s.jsxs("div",{children:[s.jsxs("div",{children:[s.jsx("label",{className:"font-bold text-lg",children:"User ID"}),s.jsx("p",{className:"mt-1",children:e.id})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("label",{className:"font-bold text-lg",children:"User Name"}),s.jsx("p",{className:"mt-1",children:e.name})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("label",{className:"font-bold text-lg",children:"User Status"}),s.jsx("p",{className:"mt-1",children:s.jsx("span",{className:"px-2 py-1 rounded text-white "+e.status,children:e.status})})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("label",{className:"font-bold text-lg",children:"Created By"}),s.jsx("p",{className:"mt-1",children:e.createdBy.name})]})]}),s.jsxs("div",{children:[s.jsxs("div",{children:[s.jsx("label",{className:"font-bold text-lg",children:"Due Date"}),s.jsx("p",{className:"mt-1",children:e.due_date})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("label",{className:"font-bold text-lg",children:"Create Date"}),s.jsx("p",{className:"mt-1",children:e.created_at})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("label",{className:"font-bold text-lg",children:"Updated By"}),s.jsx("p",{className:"mt-1",children:e.updatedBy.name})]})]})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx("label",{className:"font-bold text-lg",children:"User Description"}),s.jsx("p",{className:"mt-1",children:e.description})]})]})]})})}),s.jsx("div",{className:"pb-12",children:s.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:s.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:s.jsx("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:s.jsx(c,{tasks:l,queryParams:t,hideUserColumn:!0})})})})})]})}export{g as default};
