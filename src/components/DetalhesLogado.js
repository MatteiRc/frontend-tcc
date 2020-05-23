import React, { Component } from 'react'
import {ConsumidorServico, ProvedorServico} from '../contexto.js';
import {Link} from 'react-router-dom';
import {ButtonServicos, ButtonFavorito} from './Button.js';
import '../App.css'
import { servicos, detalheServico} from '../data.js';
import NavbarServLogado from './NavBarServLogado.js';
export default class Detalhes extends Component {
    render() {
        return (
            <ConsumidorServico>
                {valor=>{
                    const {id, nome, img, info, preco, titulo, favorito} = valor.detalheServico;
                    return (
                        <React.Fragment>
                        <NavbarServLogado/>
                        <div className="container py-5">
                            <div className="row">
                                <div className="text-title-trabalho col-10 mx-auto text-center text-slanted my-5">
                                    <h2>{titulo}</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 ">
                                    <img id="imag" src={img} className="img-fluid" alt="servico"/>
                                    <Link to='/chat'>
                                            <ButtonServicos>
                                                <span className="mr-2"> 
                                                    <i class="fas fa-comments"></i>
                                                </span>
                                                Conversar
                                            </ButtonServicos>
                                    </Link>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h4 className="text-autor text-uppercase mt-3 mb-2">
                                        feito por: <span className="text-uppercase">
                                        {nome}    
                                        </span>
                                    </h4>
                                    <h4>
                                        <p id="preco">Preço: R${preco} 
                                            &emsp;&emsp;
                                            <ButtonFavorito className="card-btn" onClick={()=>{
                                            if(favorito == false)
                                                valor.addToFavoritos(id);
                                            else
                                                valor.removeItem(id);
                                            }}> Favorito -> 
                                            {favorito ? (
                                                <i id="favoritado" className="fas fa-star"></i>
                                            ) : (
                                                <i className="fas fa-star"></i>
                                            )}
                                    </ButtonFavorito>
                                        </p>
                                    </h4>
                                    <h4 id="informacao">DESCRIÇÃO SOBRE O SERVIÇO</h4>
                                    <p className="text-muted lead">{info}</p>
                                    <div>
                                        <Link to='/usuariologado'>
                                            <ButtonServicos>
                                                <span className="mr-2"> 
                                                    <i className="fas fa-arrow-left"></i>
                                                </span>
                                                Voltar para Serviços
                                            </ButtonServicos>
                                        </Link>
                                    </div>   
                                </div>
                            </div>
                        </div>
                        </React.Fragment>
                    );
                }}
            </ConsumidorServico>
        );
    }
}