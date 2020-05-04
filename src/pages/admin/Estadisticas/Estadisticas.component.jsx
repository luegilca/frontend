import React from 'react';
import SideBar from "../../../components/side-bar/SideBar";

class Estadisticas extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        const data = [
            {
                name: "Juan",
                rol: "Operario",
                lugar: "Bogota"
            },
            {
                name: "Jack",
                rol: "Transportador",
                lugar: "Ibague"
            },
            {
                name: "Gru",
                rol: "Operario",
                lugar: "Cali"
            },
            {
                name: "Kathe",
                rol: "Transportador",
                lugar: "Barranquilla"
            },
            {
                name: "Juliana",
                rol: "Operario",
                lugar: "Pereira"
            },

        ]
        this.setState({
            data: data
        })
    }


    render(){
        return(
            <div className="ScreenAdmin">
                <SideBar handler={this.props.handlerNav} data={this.props.sideBarData}/>
                <div className={"mt-4"} style={{marginLeft:"70px"}}>
                    <h1>Estadisticas</h1>
                </div>

            </div>

        );
    }
}

export default Estadisticas;