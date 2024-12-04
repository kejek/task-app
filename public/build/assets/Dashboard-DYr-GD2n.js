import{j as s,Y as m,a as n}from"./app-D2wZBnOE.js";import{A as h}from"./AuthenticatedLayout-DmdaauD0.js";import{T as o,a as p}from"./constants-C3SgNza5.js";import"./ApplicationLogo-DceA_IAm.js";import"./transition-nAKmWgMX.js";function u({auth:a,totalPendingTasks:t,myPendingTasks:r,totalProgressTasks:d,myProgressTasks:l,totalCompletedTasks:x,myCompletedTasks:i,activeTasks:c}){return s.jsxs(h,{user:a.user,header:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Dashboard"}),children:[s.jsx(m,{title:"Dashboard"}),s.jsxs("div",{className:"py-12",children:[s.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 gap-2",children:[s.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:s.jsxs("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:[s.jsx("h3",{className:"text-amber-500 text-2xl font-semibold",children:"Pending Tasks"}),s.jsxs("p",{className:"text-xl mt-4",children:[s.jsx("span",{className:"mr-2",children:r}),"/",s.jsx("span",{className:"ml-2",children:t})]})]})}),s.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:s.jsxs("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:[s.jsx("h3",{className:"text-blue-500 text-2xl font-semibold",children:"In Progress Tasks"}),s.jsxs("p",{className:"text-xl mt-4",children:[s.jsx("span",{className:"mr-2",children:l}),"/",s.jsx("span",{className:"ml-2",children:d})]})]})}),s.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:s.jsxs("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:[s.jsx("h3",{className:"text-green-500 text-2xl font-semibold",children:"Completed Tasks"}),s.jsxs("p",{className:"text-xl mt-4",children:[s.jsx("span",{className:"mr-2",children:i}),"/",s.jsx("span",{className:"ml-2",children:x})]})]})})]}),s.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4",children:s.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:s.jsxs("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:[s.jsx("h3",{className:"text-gray-200 text-xl font-semibold",children:"My Active Tasks"}),s.jsxs("table",{className:"mt-3 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[s.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500",children:s.jsxs("tr",{children:[s.jsx("th",{className:"px-3 py-3",children:"ID"}),s.jsx("th",{className:"px-3 py-3",children:"Name"}),s.jsx("th",{className:"px-3 py-3",children:"Status"}),s.jsx("th",{className:"px-3 py-3",children:"Due Date"})]})}),s.jsx("tbody",{children:c.data.map(e=>s.jsxs("tr",{children:[s.jsx("td",{className:"px-3 py-2",children:e.id}),s.jsx("td",{className:"px-3 py-2 text-white hover:underline",children:s.jsx(n,{href:route("task.show",e.id),children:e.name})}),s.jsx("td",{className:"px-3 py-2",children:s.jsx("span",{className:"px-2 py-1 rounded text-nowrap text-white "+o[e.status],children:p[e.status]})}),s.jsx("td",{className:"px-3 py-2 text-nowrap",children:e.due_date})]},e.id))})]})]})})})]})]})}export{u as default};
