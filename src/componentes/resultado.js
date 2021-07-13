import React from 'react';

class Resultado extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        return (
            <div className={"resultado "+this.props.bg} >
                <h1>{this.props.pantalla}</h1>
            </div>
        );
    }
}
 
export default Resultado;