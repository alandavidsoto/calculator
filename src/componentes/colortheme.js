import React from 'react';
var value;
setTimeout(()=>{
    
},1000)

class Colortheme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        var padre = document.querySelector(".colortheme")
        var hijos = padre.getElementsByTagName("span")
        hijos[0].classList.remove("desactived")
        for (let i=0;i < hijos.length;i++){
          let z = i+1
          hijos[i].addEventListener("click",(e)=>{
              let value = z;
              for (let x=0;x < hijos.length;x++){
                hijos[x].classList.add("desactived")
              }
              hijos[i].classList.remove("desactived")
              this.props.onclick(value)
          })
        }
    }
    render() {
        return (
            <div className="contenedor-parteSuperior">
                <span>calc</span>
                <div className="contenedor-colortheme">
                    <span>THEME</span>
                    <div className={"colortheme "+this.props.bg}>
                        <span style={{backgroundColor: "hsl(6, 63%, 50%)"}} className="desactived"></span>
                        <span style={{backgroundColor: "hsl(25, 98%, 40%)"}} className="desactived"></span>
                        <span style={{backgroundColor: "hsl(176, 100%, 44%)"}} className="desactived"></span>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Colortheme;