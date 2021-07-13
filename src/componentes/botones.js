import React from 'react';
import TemplateButton from '../templateButton';

class Botones extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arreglo:[7,8,9,'DEL',4,5,6,'+',1,2,3,'-','.',0,'/','x','RESET','=']
        }
        console.log(this.props.handlers)
    }
    render() {
        let data = this.props.data
        return (
            <div className={"contenedor-botones "+data.background.pad_toggle}>
                {
                    this.state.arreglo.map((elemento)=>{
                        return <TemplateButton key={elemento} elemento={elemento} handlers={this.props.handlers} data={data}/>
                    })
                }
            </div>       
        );
    }
}
 
export default Botones;