import React, { Component } from 'react'
import {ConsumidorServico} from '../contexto';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button.js';
import '../App.css'
export default class Detalhes extends Component {
    render() {
        return (
            <ConsumidorServico>
                {valor=>{
                    const {id, company, img, info, price, title, inCart} = valor.detalheServico;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="text-title-trabalho col-10 mx-auto text-center text-slanted my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 ">
                                    <img id="imag" src={img} className="img-fluid" alt="servico"/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h4 className="text-autor text-uppercase mt-3 mb-2">
                                        feito por: <span className="text-uppercase">
                                        {company}    
                                        </span>
                                    </h4>   
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ConsumidorServico>
        );
    }
}
