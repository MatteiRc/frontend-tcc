import React, { Component } from 'react';
import {servicos, detalheServico} from './data.js';
const ServicoContexto = React.createContext();

class ProvedorServico extends Component {
    state ={
        servicos,
        detalheServico    
    }
    handleDetalhe = () => {
        console.log('Ola detalhe');
    }
    addToFavoritos = ()=>{
        console.log('Ola favorito');
    }
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
