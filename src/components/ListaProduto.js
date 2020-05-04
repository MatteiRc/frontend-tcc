import React, { Component } from 'react';
import Produto from './Produto.js';
import Titulo from './Titulo.js';
import {ConsumidorServico} from '../contexto.js';
import NavBar from './NavBar.js';

export default class ListaProduto extends Component {
    
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="py-5">
                    <div className="container">
                        <Titulo nome="Nossos" titulo="Serviços"></Titulo>
                        
                        <div className="row">
                        <ConsumidorServico>
                            {valor=>{
                                return valor.servicos.map(servico => {
                                    return <Produto key={servico.id} product={servico}/>;
                                });
                            }}
                        </ConsumidorServico>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
