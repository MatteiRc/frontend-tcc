import React, { Component } from 'react';
import {servicos, detalheServico} from './data.js';
const ServicoContexto = React.createContext();

class ProvedorServico extends Component {
    state ={
        servicos: [],
        detalheServico    
    };
    componentDidMount(){
        this.setServicos();
    }
    setServicos = () => {
        let servic = [];
        servicos.forEach(item =>{
            const singleItem = {...item};
            servic = [...servic, singleItem];

        });
        this.setState(()=>{
            return {servicos:servic};
        });
    };
    handleDetalhe = () => {
        console.log('Ola detalhe');
    };
    addToFavoritos = ()=>{
        console.log('Ola favorito');
    };
    
    render() {
        return (
            <ServicoContexto.Provider value={{
                ...this.state,
                handleDetalhe: this.handleDetalhe,
                addToFavoritos: this.addToFavoritos

            }}>
                {this.props.children}
            </ServicoContexto.Provider>
        )
    }
}

const ConsumidorServico = ServicoContexto.Consumer;

export {ProvedorServico, ConsumidorServico}
