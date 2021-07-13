import './App.css';
import Resultado from './componentes/resultado'
import Colortheme from './componentes/colortheme';
import Botones from './componentes/botones';
import React from 'react';


let temaAzul = {
  background: {
    body: 'body',
    pad_toggle: 'pad_toggle',
    resultado: 'resultado_azul',
  },
  buttons: {
    del_reset: 'del_reset',
    del_reset_shadow: 'del_reset_shadow',

    bg_numbers: 'bg_numbers',
    bg_numbers_shadow: 'bg_numbers_shadow',

    igual_toggle: 'igual_toggle',
    igual_toggle_shadow: 'igual_toggle_shadow'
  },
  text: {
    color_numbers: 'color_numbers',
    other_color: 'other_color',
    color_header: 'color_header'
  }

}
let temaBlanco = {
  background: {
    body: 'body_W',
    pad_toggle: 'pad_toggle_W',
    resultado: 'resultado_W',
  },
  buttons: {
    del_reset: 'del_reset_W',
    del_reset_shadow: 'del_reset_shadow_W',

    bg_numbers: 'bg_numbers_W',
    bg_numbers_shadow: 'bg_numbers_shadow_W',

    igual_toggle: 'igual_toggle_W',
    igual_toggle_shadow: 'igual_toggle_shadow_W'
  },
  text: {
    color_numbers: 'color_numbers_W',
    other_color: 'other_color_W',
    color_header: 'color_header_W'
  }
}
let temaVioleta = {
  background: {
    body: 'body_V',
    pad_toggle: 'pad_toggle_V',
    resultado: 'resultado_V',
  },
  buttons: {
    del_reset: 'del_reset_V',
    del_reset_shadow: 'del_reset_shadow_V',

    bg_numbers: 'bg_numbers_V',
    bg_numbers_shadow: 'bg_numbers_shadow_V',

    igual_toggle: 'igual_toggle_V',
    igual_toggle_shadow: 'igual_toggle_shadow_V'
  },
  text: {
    color_numbers: 'color_numbers_V',
    other_color: 'other_color_V',
    color_header: 'color_header_V'
  }
  
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: temaAzul,
      pantalla: '0',
      resultadoNuevo: '0',
      firstUse: true ,// con esto vamos a saber si vamos a eliminar el 0 del comienzo o dejarlo
      operador: '',
      resultadoAnterior: ''
    }
  }
  handlerclick = (cambio)=>{
    let clase_anterior;
    clase_anterior = document.body.attributes.class.value
    document.body.classList.remove(clase_anterior)
    switch (cambio) {
      case 1:
        this.setState({theme: temaAzul})
        document.body.classList.add(this.state.theme.background.body)
        break;
      case 2:
        this.setState({theme: temaBlanco})
        document.body.classList.add(this.state.theme.background.body)
        break;
      case 3:
        this.setState({theme: temaVioleta})
        document.body.classList.add(this.state.theme.background.body)
        break;
    }
  }
  handlerNumbers = (number) =>{
    let texto = String(number)
    if(this.state.firstUse){
      this.setState({
        pantalla: texto,
        firstUse: false,
        resultadoNuevo: texto,
      })
    } else {
      this.setState({
        pantalla: this.state.pantalla + texto,
        resultadoNuevo: this.state.resultadoNuevo + texto
      })
    }
    
  }

  handlerReset = () => {
    this.setState({
      pantalla: '0',
      firstUse: true,
      resultadoNuevo: '0',
      resultadoAnterior: ''
    })
  }
  handlerDelete = () => {
    let texto = (this.state.pantalla).slice(0,(this.state.pantalla.length -1));
    this.setState({
      pantalla: texto,
      resultadoNuevo: texto
    })
  }

  handlerPantalla = () => {
    if (this.state.operador.length === 0 || this.state.resultadoNuevo.length === 0){
      return
    }
    let formula;
    if (this.state.operador == '+'){
      formula = parseInt(this.state.resultadoAnterior)+ parseInt(this.state.resultadoNuevo);
    }
    else if (this.state.operador == '-'){
      formula = parseInt(this.state.resultadoAnterior)- parseInt(this.state.resultadoNuevo);
    } 
    else if (this.state.operador == 'x'){
      formula = parseInt(this.state.resultadoAnterior) * parseInt(this.state.resultadoNuevo);
    } 
    else if (this.state.operador == '/'){
      formula = parseInt(this.state.resultadoAnterior) / parseInt(this.state.resultadoNuevo);
    } 
    this.setState({
      pantalla: String(formula),
      resultadoAnterior: String(formula)
    })
  }

  handlerOperador = (operador) => {
    this.setState({
      resultadoAnterior: this.state.pantalla,
      operador: operador,
      pantalla: '',
      resultadoNuevo: ''
    })
  }


  render() {
    let data = this.state.theme
    document.body.classList.add(data.background.body)
    let handlers = {
      number: this.handlerNumbers,
      delete: this.handlerDelete,
      reset: this.handlerReset,
      pantalla: this.handlerPantalla,
      operador: this.handlerOperador
    }
    return (
      <div className="App">
        <header className={data.text.color_header}>
          <Colortheme onclick={this.handlerclick} bg={data.background.pad_toggle} color={data.buttons.igual_toggle}/>
          <Resultado bg={data.background.resultado} pantalla={this.state.pantalla}/>
        </header>
        <Botones data={data} handlers={handlers}/>
    </div>
    );
  }
}
 
export default App;
