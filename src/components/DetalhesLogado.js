import React, { Component } from 'react'
import {ConsumidorServico, ProvedorServico} from '../contexto.js';
import {Link} from 'react-router-dom';
import {ButtonServicos, ButtonFavorito} from './Button.js';
import '../App.css'
import { servicos, detalheServico} from '../data.js';
import NavBarLogado from './NavBarLogado.js';
import Axios from "axios";

export default class Detalhes extends Component {

    state = {
        classificacao:0
    }


    updateClassificacao(event){
        let classificacao = event.target.value
        this.setState({classificacao});
        console.log(this.state.classificacao);
    }

    newClassificao(id){
        let classificacao = {classificacao: parseInt(this.state.classificacao)};
        console.log(classificacao);
        Axios.post("http://localhost:3001/updateAnuncio/novaClassificacao/"+id,classificacao).then(res=>{
            console.log(classificacao);
            alert("Classificao enviada");
        }).catch(error => alert("Não foi possivel enviar a classificação"));
    }


    render() {
        return (
            <ConsumidorServico>
                {valor=>{
                    const {id, nome, img, info, preco, titulo, cidade, horario,classificacao} = valor.detalheServico;
                    return (
                        <React.Fragment>
                        <NavBarLogado />
                        <div className="container py-5">
                            <div className="row">
                                <div className="text-title-trabalho col-10 mx-auto text-center text-slanted my-5">
                                    <h2>{titulo}</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 ">
                                    <img id="imag" src={img} className="img-fluid" alt="servico"/> 
                                    <br/>
                                    <a href = 'http://localhost:3002/'>
                                            <ButtonServicos>
                                                <span className="mr-2"> 
                                                    <i class="fas fa-comments"></i>
                                                </span>
                                                Conversar
                                            </ButtonServicos>
                                    </a>
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
                                        </p>
                                        <p id="cidade">Cidade: {cidade} 
                                            &emsp;&emsp;
                                        </p>
                                        <p id="horario">Horario: {horario}
                                            &emsp;&emsp;
                                        </p>
                                        <p id ="classificao">Classificação: {classificacao}
                                        &emsp;&emsp;
                                        </p>
                                    </h4>
                                    <h4 id="informacao">DESCRIÇÃO SOBRE O SERVIÇO</h4>
                                    <p className="text-muted lead">{info}</p>
                                    <div class = "classificacao">
                                    <p>Classifique de 1 a 5 esse anuncio </p>
                                    <input type = "number" id = "valor" name = "valor"  min = "1" max = "5"  onChange ={e => this.updateClassificacao(e)} />
                                    <br/>
                                    </div>
                                    <div class = "classificacao">
                                    <button onClick = {e => this.newClassificao(id)}>Enviar nova Classificação</button>
                                    </div>
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
