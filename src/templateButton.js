import React from 'react';

function TemplateButton(props){
    let data = props.data;
    let texto = props.elemento
    let elemento= ''
    if(texto == "DEL"){
        elemento = <div onClick={()=>{props.handlers.delete(texto)}} className={data.text.other_color+" "+data.buttons.del_reset+" "+data.buttons.del_reset_shadow}>{texto}</div>
    }
    else if(texto == "RESET"){
        elemento = <div onClick={()=>{props.handlers.reset(texto)}} className={"reset "+data.text.other_color+" "+data.buttons.del_reset+" "+data.buttons.del_reset_shadow}>{texto}</div>
    }
    else if(texto == "="){
        elemento = <div onClick={()=>{props.handlers.pantalla(texto)}} className={"igual "+data.text.other_color+" "+data.buttons.igual_toggle+" "+data.buttons.igual_toggle_shadow}>{texto}</div>
    }
    else if(texto == "+" || texto == "-" || texto == "x" || texto == "/"){
        elemento = <div style={{fontSize: "19px"}} onClick={()=>{props.handlers.operador(texto)}} className={data.text.color_numbers+" "+data.buttons.bg_numbers+" "+data.buttons.bg_numbers_shadow}>{texto}</div>
    }
    
    else {
        elemento = <div style={{fontSize: "21px"}} onClick={()=>{props.handlers.number(texto)}} className={data.text.color_numbers+" "+data.buttons.bg_numbers+" "+data.buttons.bg_numbers_shadow}>{texto}</div>
    }
    return elemento
}
export default TemplateButton;