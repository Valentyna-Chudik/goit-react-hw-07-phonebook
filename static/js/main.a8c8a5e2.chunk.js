(this["webpackJsonpgoit-react-hw-07-phonebookk"]=this["webpackJsonpgoit-react-hw-07-phonebookk"]||[]).push([[0],{11:function(t,e,n){t.exports={contactsList:"ContactsList_contactsList__3-HGb",contactsItem:"ContactsList_contactsItem__3UGZR",contactName:"ContactsList_contactName__wCaHA",buttonDelete:"ContactsList_buttonDelete__2oy-P"}},16:function(t,e,n){t.exports={label:"Filter_label__1DhkN",labelName:"Filter_labelName__3iH-w",input:"Filter_input__3S9xA"}},32:function(t,e,n){t.exports={container:"Container_container__BDfV-"}},33:function(t,e,n){t.exports={title:"Section_title__33BAr"}},35:function(t,e,n){t.exports={loader:"Loader_loader__2CZ3d"}},36:function(t,e,n){t.exports={notification:"Notification_notification__3Ns3l"}},48:function(t,e,n){},8:function(t,e,n){t.exports={form:"Form_form__EHw6d",inputName:"Form_inputName__3URID",input:"Form_input__1LGGi",buttonAdd:"Form_buttonAdd__1cOeD"}},86:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),r=n.n(a),o=n(12),s=n.n(o),i=n(4),u=(n(47),n(48),n(32)),l=n.n(u);function b(t){var e=t.children;return Object(c.jsx)("div",{className:l.a.container,children:e})}var j=n(33),d=n.n(j);function O(t){var e=t.title,n=t.children;return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{className:d.a.title,children:e}),n]})}var f=n(21),m=n(10),h=n.n(m),p=n(2),x=Object(p.b)("contacts/fetchContactRequest"),_=Object(p.b)("contacts/fetchContactSuccess"),N=Object(p.b)("contacts/fetchContactError"),v=Object(p.b)("contacts/addContactRequest"),C=Object(p.b)("contacts/addContactSuccess"),g=Object(p.b)("contacts/addContactError"),y=Object(p.b)("contacts/deleteContactRequest"),F=Object(p.b)("contacts/deleteContactSuccess"),w=Object(p.b)("contacts/deleteContactError"),L=Object(p.b)("contacts/FilterChange");h.a.defaults.baseURL="http://localhost:4040";var k=n(13),S=function(t){return t.contacts.items},D=function(t){return t.contacts.filter},A=function(t){return t.contacts.loading},E=function(t){return t.contacts.error},R=Object(k.a)([S,D],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),I=n(34),B=n.n(I),G=n(35),H=n.n(G);function q(){return Object(c.jsx)("div",{className:H.a.loader,children:Object(c.jsx)(B.a,{type:"TailSpin",color:"#00BFFF",height:25,width:25})})}var P=n(8),U=n.n(P);function J(){var t=Object(i.c)(S),e=Object(i.c)(A),n=Object(i.b)(),r=function(t,e){return n(function(t,e){return function(n){var c={name:t,number:e};n(v()),h.a.post("/contacts",c).then((function(t){var e=t.data;return n(C(e))})).catch((function(t){return n(g(t))}))}}(t,e))},o=Object(a.useState)(""),s=Object(f.a)(o,2),u=s[0],l=s[1],b=Object(a.useState)(""),j=Object(f.a)(b,2),d=j[0],O=j[1],m=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":l(c);break;case"number":O(c);break;default:return}},p=function(){l(""),O("")};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{className:U.a.form,onSubmit:function(e){e.preventDefault(),""===u.trim()||""===d.trim()?alert("All fields must be completed."):t.find((function(t){return t.name===u}))?alert("".concat(u," is already in contacts.")):t.find((function(t){return t.number===d}))?alert("".concat(d," is already in contacts.")):Number.isNaN(+d)?alert("Phone number should consist only of digits."):r(u,d),p()},children:[Object(c.jsxs)("label",{className:U.a.label,children:[Object(c.jsx)("span",{className:U.a.inputName,children:"Name"}),Object(c.jsx)("input",{className:U.a.input,type:"text",name:"name",placeholder:"Name",value:u,onChange:m})]}),Object(c.jsxs)("label",{className:U.a.label,children:[Object(c.jsx)("span",{className:U.a.inputName,children:"Number"}),Object(c.jsx)("input",{className:U.a.input,type:"tel",name:"number",placeholder:"Number",value:d,onChange:m})]}),!e&&Object(c.jsx)("button",{className:U.a.buttonAdd,type:"submit",children:"Add contact"})]}),e&&Object(c.jsx)(q,{})]})}var T=n(16),Z=n.n(T);function M(){var t=Object(i.c)(S),e=Object(i.c)(D),n=Object(i.c)(E),a=Object(i.b)();return Object(c.jsx)(c.Fragment,{children:t.length>0&&!n&&Object(c.jsxs)("label",{className:Z.a.label,children:[Object(c.jsx)("span",{className:Z.a.labelName,children:"Find contacts by name"}),Object(c.jsx)("input",{className:Z.a.input,type:"text",placeholder:"Search...",value:e,onChange:function(t){return a(L(t.target.value))}})]})})}var V=n(36),z=n.n(V);function K(t){var e=t.message;return Object(c.jsxs)("p",{className:z.a.notification,children:[" ",e," "]})}var Q=n(11),W=n.n(Q);function X(){var t=Object(i.c)(R),e=Object(i.c)(E),n=Object(i.c)(A),r=Object(i.b)();Object(a.useEffect)((function(){r((function(t){t(x()),h.a.get("/contacts").then((function(e){var n=e.data;return t(_(n))})).catch((function(e){return t(N(e))}))}))}),[r]);var o=function(t){return r((e=t,function(t){t(y()),h.a.delete("/contacts/".concat(e)).then((function(){return t(F(e))})).catch((function(e){return t(w(e))}))}));var e};return Object(c.jsxs)(c.Fragment,{children:[t.length>0&&!e&&Object(c.jsx)("ul",{className:W.a.contactsList,children:t.map((function(t){var e=t.id,n=t.name,a=t.number;return Object(c.jsxs)("li",{className:W.a.contactsItem,children:[Object(c.jsxs)("p",{className:W.a.contactName,children:[n,": ",a]}),Object(c.jsx)("button",{className:W.a.buttonDelete,type:"button",onClick:function(){return o(e)},children:"Delete"})]},e)}))}),!t.length&&!e&&!n&&Object(c.jsx)(K,{message:"No records yet."}),e&&Object(c.jsx)("h2",{children:e.message})]})}function Y(){return Object(c.jsxs)(b,{children:[Object(c.jsx)(O,{title:"Phonebook",children:Object(c.jsx)(J,{})}),Object(c.jsxs)(O,{title:"Contacts",children:[Object(c.jsx)(M,{}),Object(c.jsx)(X,{})]})]})}var $,tt,et=n(15),nt=n(37),ct=n.n(nt),at=n(5),rt=n(7),ot=Object(p.c)([],($={},Object(at.a)($,_,(function(t,e){return e.payload})),Object(at.a)($,C,(function(t,e){var n=e.payload;return[].concat(Object(et.a)(t),[n])})),Object(at.a)($,F,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),$)),st=Object(p.c)("",Object(at.a)({},L,(function(t,e){return e.payload}))),it=Object(p.c)(!1,(tt={},Object(at.a)(tt,x,(function(){return!0})),Object(at.a)(tt,_,(function(){return!1})),Object(at.a)(tt,N,(function(){return!1})),Object(at.a)(tt,v,(function(){return!0})),Object(at.a)(tt,C,(function(){return!1})),Object(at.a)(tt,g,(function(){return!1})),Object(at.a)(tt,y,(function(){return!0})),Object(at.a)(tt,F,(function(){return!1})),Object(at.a)(tt,w,(function(){return!1})),tt)),ut=Object(p.c)(null,{}),lt=Object(rt.c)({items:ot,filter:st,loading:it,error:ut}),bt=[].concat(Object(et.a)(Object(p.d)()),[ct.a]),jt=Object(p.a)({reducer:{contacts:lt},middleware:bt,devTools:!1});s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(i.a,{store:jt,children:Object(c.jsx)(Y,{})})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.a8c8a5e2.chunk.js.map