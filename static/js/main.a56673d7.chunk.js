(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var s=a(1),o=a.n(s),r=a(7),n=a.n(r),l=(a(12),a(2)),d=a(3),c=a(5),u=a(4),i=(a(13),a(0)),b=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={},s}return Object(d.a)(a,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"resultado "+this.props.bg,children:Object(i.jsx)("h1",{children:this.props.pantalla})})}}]),a}(o.a.Component);setTimeout((function(){}),1e3);var _=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={},s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=document.querySelector(".colortheme").getElementsByTagName("span");t[0].classList.remove("desactived");for(var a=function(a){var s=a+1;t[a].addEventListener("click",(function(o){for(var r=s,n=0;n<t.length;n++)t[n].classList.add("desactived");t[a].classList.remove("desactived"),e.props.onclick(r)}))},s=0;s<t.length;s++)a(s)}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"contenedor-parteSuperior",children:[Object(i.jsx)("span",{children:"calc"}),Object(i.jsxs)("div",{className:"contenedor-colortheme",children:[Object(i.jsx)("span",{children:"THEME"}),Object(i.jsxs)("div",{className:"colortheme "+this.props.bg,children:[Object(i.jsx)("span",{style:{backgroundColor:"hsl(6, 63%, 50%)"},className:"desactived"}),Object(i.jsx)("span",{style:{backgroundColor:"hsl(25, 98%, 40%)"},className:"desactived"}),Object(i.jsx)("span",{style:{backgroundColor:"hsl(176, 100%, 44%)"},className:"desactived"})]})]})]})}}]),a}(o.a.Component);var h=function(e){var t=e.data,a=e.elemento;return"DEL"==a?Object(i.jsx)("div",{onClick:function(){e.handlers.delete(a)},className:t.text.other_color+" "+t.buttons.del_reset+" "+t.buttons.del_reset_shadow,children:a}):"RESET"==a?Object(i.jsx)("div",{onClick:function(){e.handlers.reset(a)},className:"reset "+t.text.other_color+" "+t.buttons.del_reset+" "+t.buttons.del_reset_shadow,children:a}):"="==a?Object(i.jsx)("div",{onClick:function(){e.handlers.pantalla(a)},className:"igual "+t.text.other_color+" "+t.buttons.igual_toggle+" "+t.buttons.igual_toggle_shadow,children:a}):"+"==a||"-"==a||"x"==a||"/"==a?Object(i.jsx)("div",{style:{fontSize:"19px"},onClick:function(){e.handlers.operador(a)},className:t.text.color_numbers+" "+t.buttons.bg_numbers+" "+t.buttons.bg_numbers_shadow,children:a}):Object(i.jsx)("div",{style:{fontSize:"21px"},onClick:function(){e.handlers.number(a)},className:t.text.color_numbers+" "+t.buttons.bg_numbers+" "+t.buttons.bg_numbers_shadow,children:a})},g=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={arreglo:[7,8,9,"DEL",4,5,6,"+",1,2,3,"-",".",0,"/","x","RESET","="]},console.log(s.props.handlers),s}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.data;return Object(i.jsx)("div",{className:"contenedor-botones "+t.background.pad_toggle,children:this.state.arreglo.map((function(a){return Object(i.jsx)(h,{elemento:a,handlers:e.props.handlers,data:t},a)}))})}}]),a}(o.a.Component),p={background:{body:"body",pad_toggle:"pad_toggle",resultado:"resultado_azul"},buttons:{del_reset:"del_reset",del_reset_shadow:"del_reset_shadow",bg_numbers:"bg_numbers",bg_numbers_shadow:"bg_numbers_shadow",igual_toggle:"igual_toggle",igual_toggle_shadow:"igual_toggle_shadow"},text:{color_numbers:"color_numbers",other_color:"other_color",color_header:"color_header"}},m={background:{body:"body_W",pad_toggle:"pad_toggle_W",resultado:"resultado_W"},buttons:{del_reset:"del_reset_W",del_reset_shadow:"del_reset_shadow_W",bg_numbers:"bg_numbers_W",bg_numbers_shadow:"bg_numbers_shadow_W",igual_toggle:"igual_toggle_W",igual_toggle_shadow:"igual_toggle_shadow_W"},text:{color_numbers:"color_numbers_W",other_color:"other_color_W",color_header:"color_header_W"}},j={background:{body:"body_V",pad_toggle:"pad_toggle_V",resultado:"resultado_V"},buttons:{del_reset:"del_reset_V",del_reset_shadow:"del_reset_shadow_V",bg_numbers:"bg_numbers_V",bg_numbers_shadow:"bg_numbers_shadow_V",igual_toggle:"igual_toggle_V",igual_toggle_shadow:"igual_toggle_shadow_V"},text:{color_numbers:"color_numbers_V",other_color:"other_color_V",color_header:"color_header_V"}},v=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handlerclick=function(e){var t;switch(t=document.body.attributes.class.value,document.body.classList.remove(t),e){case 1:s.setState({theme:p}),document.body.classList.add(s.state.theme.background.body);break;case 2:s.setState({theme:m}),document.body.classList.add(s.state.theme.background.body);break;case 3:s.setState({theme:j}),document.body.classList.add(s.state.theme.background.body)}},s.handlerNumbers=function(e){var t=String(e);s.state.firstUse?s.setState({pantalla:t,firstUse:!1,resultadoNuevo:t}):s.setState({pantalla:s.state.pantalla+t,resultadoNuevo:s.state.resultadoNuevo+t})},s.handlerReset=function(){s.setState({pantalla:"0",firstUse:!0,resultadoNuevo:"0",resultadoAnterior:""})},s.handlerDelete=function(){var e=s.state.pantalla.slice(0,s.state.pantalla.length-1);s.setState({pantalla:e,resultadoNuevo:e})},s.handlerPantalla=function(){var e;0!==s.state.operador.length&&0!==s.state.resultadoNuevo.length&&("+"==s.state.operador?e=parseInt(s.state.resultadoAnterior)+parseInt(s.state.resultadoNuevo):"-"==s.state.operador?e=parseInt(s.state.resultadoAnterior)-parseInt(s.state.resultadoNuevo):"x"==s.state.operador?e=parseInt(s.state.resultadoAnterior)*parseInt(s.state.resultadoNuevo):"/"==s.state.operador&&(e=parseInt(s.state.resultadoAnterior)/parseInt(s.state.resultadoNuevo)),s.setState({pantalla:String(e),resultadoAnterior:String(e)}))},s.handlerOperador=function(e){s.setState({resultadoAnterior:s.state.pantalla,operador:e,pantalla:"",resultadoNuevo:""})},s.state={theme:p,pantalla:"0",resultadoNuevo:"0",firstUse:!0,operador:"",resultadoAnterior:""},s}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.theme;document.body.classList.add(e.background.body);var t={number:this.handlerNumbers,delete:this.handlerDelete,reset:this.handlerReset,pantalla:this.handlerPantalla,operador:this.handlerOperador};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("header",{className:e.text.color_header,children:[Object(i.jsx)(_,{onclick:this.handlerclick,bg:e.background.pad_toggle,color:e.buttons.igual_toggle}),Object(i.jsx)(b,{bg:e.background.resultado,pantalla:this.state.pantalla})]}),Object(i.jsx)(g,{data:e,handlers:t})]})}}]),a}(o.a.Component),f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,s=t.getFID,o=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),s(e),o(e),r(e),n(e)}))};n.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.a56673d7.chunk.js.map