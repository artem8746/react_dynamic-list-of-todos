(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(8),a=c.n(s),n=c(1),o=c.n(n),l=(c(14),c(15),c(3)),i=c.n(l),r=c(6),d=c(2);function j(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var u;!function(e){e.All="all",e.Completed="completed",e.Active="active"}(u||(u={}));var b=c(0),O=o.a.createContext({todos:[],filterOptions:{status:u.All,query:""},selectedTodo:{},filterByQuery:function(e){},selectTodo:function(e){},filterByStatus:function(e){}});function h(e,t){switch(t.type){case"selectTodo":return Object(d.a)(Object(d.a)({},e),{},{selectedTodo:t.selectedTodo});case"filterBy":return Object(d.a)(Object(d.a)({},e),{},{filterOptions:t.filterOptions});case"setTodos":return Object(d.a)(Object(d.a)({},e),{},{todos:t.todos});default:return e}}var f=function(e){var t=e.children,c=Object(n.useReducer)(h,{todos:[],filterOptions:{query:"",status:u.All},selectedTodo:null}),s=Object(r.a)(c,2),a=s[0],o=s[1];Object(n.useEffect)((function(){j("/todos").then((function(e){o({type:"setTodos",todos:e})}))}),[]);var l=Object(n.useMemo)((function(){return{todos:a.todos,filterOptions:a.filterOptions,selectedTodo:a.selectedTodo,filterByQuery:function(e){return o({type:"filterBy",filterOptions:Object(d.a)(Object(d.a)({},a.filterOptions),{},{query:e})})},filterByStatus:function(e){return o({type:"filterBy",filterOptions:Object(d.a)(Object(d.a)({},a.filterOptions),{},{status:e})})},selectTodo:function(e){return o({type:"selectTodo",selectedTodo:e})}}}),[a]);return Object(b.jsx)(O.Provider,{value:l,children:t})},m=function(e){var t=e.todo,c=Object(n.useContext)(O),s=c.selectTodo,a=c.selectedTodo,o=t.completed,l=t.title;return Object(b.jsxs)("tr",{"data-cy":"todo",children:[Object(b.jsx)("td",{className:"is-vcentered",children:t.id}),Object(b.jsx)("td",{className:"is-vcentered",children:o&&Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("td",{className:"is-vcentered",children:Object(b.jsx)("p",{className:i()({"has-text-danger":!o,"has-text-success":o}),children:l})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{onClick:function(){return s(t)},"data-cy":"selectButton",className:"button",type:"button",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:i()("far",{"fa-eye-slash":a&&a.id===t.id,"fa-eye":!a||a.id!==t.id})})})})})]})},x=o.a.memo((function(e){var t=e.todos;return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsx)(m,{todo:e},e.id)}))})]})})),p=function(){var e=Object(n.useContext)(O),t=e.filterOptions,c=t.query,s=t.status,a=e.filterByQuery,o=e.filterByStatus;return Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){e.target.value!==s&&o(e.target.value)},children:[Object(b.jsx)("option",{value:u.All,children:"All"}),Object(b.jsx)("option",{value:u.Active,children:"Active"}),Object(b.jsx)("option",{value:u.Completed,children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{value:c,onChange:function(e){e.target.value!==c&&a(e.target.value)},"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search..."}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),!!c&&Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(b.jsx)("button",{onClick:function(){a("")},"data-cy":"clearSearchButton",type:"button",className:"delete"})})]})]})},y=(c(17),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})}),v=function(){var e=Object(n.useContext)(O),t=e.selectedTodo,c=e.selectTodo,s=Object(n.useState)(null),a=Object(r.a)(s,2),o=a[0],l=a[1],d=t.title,u=t.completed,h=t.id;Object(n.useEffect)((function(){var e;(e=t.userId,j("/users/".concat(e))).then(l)}),[]);return Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),o?Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(h)}),Object(b.jsx)("button",{onClick:function(){c(null)},type:"button",className:"delete","data-cy":"modal-close"})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:d}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(b.jsx)("strong",{className:i()({"has-text-danger":!u,"has-text-success":u}),children:u?"Done":"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:".concat(o.email),children:o.name})]})]})]}):Object(b.jsx)(y,{})]})},N=c(9);var T=function(){var e=Object(n.useContext)(O),t=e.todos,c=e.filterOptions,s=c.query,a=c.status,o=e.selectedTodo,l=Object(n.useMemo)((function(){return function(e,t){var c=t.query,s=t.status,a=c.trim().toLowerCase(),n=c?e.filter((function(e){return e.title.toLowerCase().includes(a)})):Object(N.a)(e);switch(s){case u.Active:return n.filter((function(e){return!e.completed}));case u.Completed:return n.filter((function(e){return e.completed}));default:return n}}(t,{query:s,status:a})}),[t,s,a]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(p,{})}),Object(b.jsx)("div",{className:"block",children:t.length?Object(b.jsx)(x,{todos:l}):Object(b.jsx)(y,{})})]})})}),!!o&&Object(b.jsx)(v,{})]})},g=function(){return Object(b.jsx)(f,{children:Object(b.jsx)(T,{})})};a.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3d5c6128.chunk.js.map