(this["webpackJsonp25-5-clock"]=this["webpackJsonp25-5-clock"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c,r,o,s,i,u=n(0),a=n.n(u),d=n(7),b=n.n(d),l=n(2),j=n(3),p=n(5),m=n(4),O=n(6),f={minutes:25,seconds:0,brk:5,brkRch:20},y="MIN_INC",B="MIN_DEC",h="SEC_INC",I="SEC_DEC",k="BRK_INC",g="BRK_DEC",x="START",C="PAUSE",v="RESET",E=(document.getElementById("audio"),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(c=e.seconds,r=e.minutes,o=e.brk,t.type){case x:if(document.getElementById("minDec").disabled=!0,document.getElementById("minInc").disabled=!0,document.getElementById("secDec").disabled=!0,document.getElementById("secInc").disabled=!0,document.getElementById("brkDec").disabled=!0,document.getElementById("brkInc").disabled=!0,document.getElementById("pause").disabled=!1,document.getElementById("start").disabled=!0,r==e.brkRch&&!c){var n=setInterval((function(){s=document.getElementById("minutes").style.color,console.log(s),s="rgb(224, 75, 75)"==s?"#9fd4b8":"rgb(224, 75, 75)",document.getElementById("minutes").style.color=s,document.getElementById("seconds").style.color=s}),400);return setTimeout((function(){document.getElementById("minutes").style.color="#9fd4b8",document.getElementById("seconds").style.color="#9fd4b8",s="#9fd4b8",clearInterval(n)}),3200),Object.assign({},e,{brkRch:r-o})}return c?c--:(c=59,r--),Object.assign({},e,{seconds:c,minutes:r});case C:return clearInterval(t.countInt),document.getElementById("start").disabled=!1,document.getElementById("pause").disabled=!0,e;case v:return clearInterval(t.countInt),document.getElementById("minDec").disabled=!1,document.getElementById("minInc").disabled=!1,document.getElementById("secDec").disabled=!1,document.getElementById("secInc").disabled=!1,document.getElementById("brkDec").disabled=!1,document.getElementById("brkInc").disabled=!1,document.getElementById("pause").disabled=!0,document.getElementById("start").disabled=!1,f;case B:return r=r?r-1:r,Object.assign({},e,{minutes:r});case y:return r++,Object.assign({},e,{minutes:r});case I:return c=c?c-1:60,Object.assign({},e,{seconds:c});case h:return c=59==c?0:c+1,Object.assign({},e,{seconds:c});case g:return o=o-1?o-1:o,Object.assign({},e,{brk:o,brkRch:r-o});case k:return o++,Object.assign({},e,{brk:o,brkRch:r-o});default:return e}}),D=function(){return{type:B}},S=function(e){return{type:x,store:e}},R=function(e){return{type:C,countInt:e}},M=function(e){return{type:v,countInt:e}},N=function(){return{type:y}},_=function(){return{type:h}},w=function(){return{type:I}},P=function(){return{type:k}},T=function(){return{type:g}},A=n(11),J=(n(20),n(1)),K=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(j.a)(n,[{key:"render",value:function(){return Object(J.jsxs)("div",{children:[Object(J.jsx)("div",{className:"counter",id:this.props.name,children:String(this.props[this.props.name]).padStart(2,"0")}),Object(J.jsx)("div",{className:"count-label",children:"brk"==this.props.name?"break":this.props.name})]})}}]),n}(a.a.Component),z=(n(22),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(j.a)(n,[{key:"render",value:function(){return Object(J.jsx)("button",{className:"".concat(this.props.group," btn"),disabled:this.props.disabled,id:this.props.for,onClick:this.props.click,children:this.props.text})}}]),n}(a.a.Component)),U={SecIncBtn:function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(J.jsx)(z,{group:"incDec",for:"secInc",click:this.props.incSec,text:"\u2193"})}}]),n}(a.a.Component),SecDecBtn:function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(J.jsx)(z,{group:"incDec",for:"secDec",click:this.props.decSec,text:"\u2191"})}}]),n}(a.a.Component),MinIncBtn:function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(J.jsx)(z,{group:"incDec",for:"minInc",click:this.props.incMin,text:"\u2193"})}}]),n}(a.a.Component),MinDecBtn:function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(J.jsx)(z,{group:"incDec",for:"minDec",click:this.props.decMin,text:"\u2191"})}}]),n}(a.a.Component),BrkIncBtn:function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(J.jsx)(z,{group:"incDec",for:"brkInc",click:this.props.incBrk,text:"\u2193"})}}]),n}(a.a.Component),BrkDecBtn:function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(J.jsx)(z,{group:"incDec",for:"brkDec",click:this.props.decBrk,text:"\u2191"})}}]),n}(a.a.Component),StartBtn:function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(J.jsx)(z,{group:"control-btn",for:"start",text:Object(J.jsx)("i",{class:"fa fa-play"}),click:this.props.start})}}]),n}(a.a.Component),ResetBtn:function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(J.jsx)(z,{group:"control-btn",for:"reset",text:Object(J.jsx)("i",{class:"fa fa-refresh"}),click:this.props.reset})}}]),n}(a.a.Component),PauseBtn:function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(J.jsx)(z,{group:"control-btn",for:"pause",text:Object(J.jsx)("i",{class:"fa fa-pause"}),click:this.props.pause})}}]),n}(a.a.Component)},q=A.a(E),F=function(e){return{minutes:e.minutes,seconds:e.seconds,brkRch:e.brkRch,brk:e.brk}},G=(q.getState(),function(e){return{start:function(){i=setInterval((function(){e(S(q))}),200)},pause:function(){e(R(i))},reset:function(){e(M(i))},decMin:function(){e(D())},incMin:function(){e(N())},decSec:function(){e(w())},incSec:function(){e(_())},decBrk:function(){e(T())},incBrk:function(){e(P())}}}),H=Object(O.b)(F,G)(K),L=Object(O.b)(F,G)(U.SecIncBtn),Q=Object(O.b)(F,G)(U.SecDecBtn),V=Object(O.b)(F,G)(U.MinIncBtn),W=Object(O.b)(F,G)(U.MinDecBtn),X=Object(O.b)(F,G)(U.BrkIncBtn),Y=Object(O.b)(F,G)(U.BrkDecBtn),Z=Object(O.b)(F,G)(U.StartBtn),$=Object(O.b)(F,G)(U.ResetBtn),ee=Object(O.b)(F,G)(U.PauseBtn),te={store:q,CounterConnected:H,SecIncBtnConnected:L,SecDecBtnConnected:Q,MinIncBtnConnected:V,MinDecBtnConnected:W,BrkIncBtnConnected:X,BrkDecBtnConnected:Y,StartBtnConnected:Z,ResetBtnConnected:$,PauseBtnConnected:ee},ne=(n(23),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(J.jsxs)(O.a,{store:te.store,children:[Object(J.jsx)("header",{children:"timer"}),Object(J.jsx)("p",{id:"sub-head",children:"25+5"}),Object(J.jsxs)("div",{id:"clock",children:[Object(J.jsxs)("div",{className:"counters",children:[Object(J.jsx)(te.MinDecBtnConnected,{}),Object(J.jsx)(te.CounterConnected,{name:"minutes"}),Object(J.jsx)(te.MinIncBtnConnected,{})]}),Object(J.jsxs)("div",{className:"counters",children:[Object(J.jsx)(te.SecDecBtnConnected,{}),Object(J.jsx)(te.CounterConnected,{name:"seconds"}),Object(J.jsx)(te.SecIncBtnConnected,{})]}),Object(J.jsxs)("div",{className:"counters",id:"break",children:[Object(J.jsx)(te.BrkDecBtnConnected,{}),Object(J.jsx)(te.CounterConnected,{name:"brk"}),Object(J.jsx)(te.BrkIncBtnConnected,{})]})]}),Object(J.jsx)("div",{id:"controls",children:Object(J.jsxs)("div",{children:[Object(J.jsx)(te.StartBtnConnected,{}),Object(J.jsx)(te.ResetBtnConnected,{}),Object(J.jsx)(te.PauseBtnConnected,{})]})})]})}}]),n}(a.a.Component)),ce=(n(24),n(25),document.body.getBoundingClientRect()),re=ce.width;re>500?(document.getElementById("portrait").style.display="none",document.getElementById("root").style.display="block"):(document.getElementById("portrait").style.display="flex",document.getElementById("root").style.display="none"),b.a.render(Object(J.jsx)(ne,{}),document.getElementById("root")),document.body.onresize=function(){ce=document.body.getBoundingClientRect(),re=ce.width,console.log(re),re>500?(document.getElementById("portrait").style.display="none",document.getElementById("root").style.display="block"):(document.getElementById("portrait").style.display="flex",document.getElementById("root").style.display="none")}}},[[26,1,2]]]);
//# sourceMappingURL=main.e188d339.chunk.js.map