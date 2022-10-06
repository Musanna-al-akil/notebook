import{b as d,a as e,j as s,I as r}from"./app.7eea670b.js";import{A as i}from"./AuthenticatedLayout.d046c10f.js";import"./ApplicationLogo.0343b1b9.js";const x=a=>{const{posts:l}=d().props,c=l;return e(i,{auth:a.auth,errors:a.errors,children:e("div",{children:s("div",{className:"container mx-auto mt-6",children:[e("h1",{className:"mb-8 text-3xl font-bold text-center",children:"Post"}),e("div",{className:"flex items-center justify-between mb-6",children:e(r,{className:"px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none",href:route("posts.create"),children:"Create Post"})}),e("div",{className:"overflow-x-auto bg-white rounded shadow",children:s("table",{className:"w-full whitespace-nowrap",children:[e("thead",{className:"text-white bg-gray-600",children:s("tr",{className:"font-bold text-left",children:[e("th",{className:"px-6 pt-5 pb-4",children:"#"}),e("th",{className:"px-6 pt-5 pb-4",children:"Title"}),e("th",{className:"px-6 pt-5 pb-4",children:"Description"}),e("th",{className:"px-6 pt-5 pb-4",children:"Action"})]})}),s("tbody",{children:[c.map(({id:t,title:n,description:o})=>s("tr",{className:"",children:[e("td",{className:"border-t",children:e(r,{href:route("posts.edit",t),className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:t})}),e("td",{className:"border-t",children:e(r,{href:route("posts.edit",t),className:"flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none",children:n})}),e("td",{className:"border-t",children:e(r,{tabIndex:"1",className:"flex items-center px-6 py-4",href:route("posts.edit",t),children:o})}),e("td",{className:"border-t",children:e(r,{tabIndex:"1",className:"px-4 py-2 text-sm text-white bg-blue-500 rounded",href:route("posts.edit",t),children:"Edit"})})]},t)),c.length===0&&e("tr",{children:e("td",{className:"px-6 py-4 border-t",colSpan:"4",children:"No contacts found."})})]})]})})]})})})};export{x as default};
