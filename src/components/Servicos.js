import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ConsumidorServico} from '../contexto.js'; 
import {ButtonFavorito} from './Button.js';
import propTypes from 'prop-types';
import "../styles/servicos.css"
import Axios from 'axios';

const baseUrl = "http://localhost:3001/fazeranuncio";
const InitialState ={
    anuncio:{titulo:"",
    cidade:"",
    descricao:"",
    horarios:"",
    valor:"",
    imagem:"",
    classificacao:0},
    idUsuario:"",
    isInvalid: false,
    saved: false,
    isEmpty:true
}

const usuario = {email:"henriquegarcia@teste.com",senha:"senha"};// feito para armarzenar 
                                                                 //no banco sem ter feito o login proprio, apenas para testes

export default class Servico extends Component{
     state = {...InitialState};
       
     componentWillMount(){
         Axios.post("http://localhost:3001/loginUsuario",usuario)
         .then(res=>{
              this.setState({idUsuario: res.data.id});
              console.log(this.state.idUsuario);
         })
     }

     save(event){
         event.preventDefault();
         const url = baseUrl + "/" + this.state.idUsuario;
         const data = new FormData();
         data.append("file",this.state.anuncio.imagem);
         data.append("cidade",this.state.anuncio.cidade);
         data.append("descricao",this.state.anuncio.descricao);
         data.append("horarios",this.state.anuncio.horarios);
         data.append("valor",this.state.anuncio.valor);
         data.append("titulo",this.state.anuncio.titulo);
         Axios.post(url,data).then(res=>{
             console.log(res);
         })

     }

     updateField(event){
         const anuncio = {...this.state.anuncio};
         let isEmpty = false;
         anuncio[event.target.name] = event.target.value;
         if(anuncio.cidade == "" || anuncio.descricao == "" || anuncio.horarios == "" || anuncio.valor == "" || anuncio.titulo == "")
             isEmpty = true;
             this.setState({anuncio,isEmpty});

        }

     displayImg(event){
         let img = document.getElementById("foto");
         img.src = URL.createObjectURL(event.target.files[0]);

     }

     fileSelect(event){
         const anuncio = {... this.state.anuncio};
         anuncio[event.target.name] = event.target.files[0];
         this.setState({anuncio});
         this.displayImg(event);
         console.log(anuncio.imagem);
     }

     renderForm(){
         return(
            <form method = "POST" onSubmit = {e => this.save(e)}>
                <div class = "form">
                <div class = "input area">
                <label for = "titulo">Titulo do Serviço</label>
                <br/>
                <input type = "text" name = "titulo" id = "titulo" onChange ={e => this.updateField(e)}/>
                </div>
                <div class = "input area">
                <label for = "cidade">Cidade</label>
                <br/>
                <input type = "text" name = "cidade" id="cidade" onChange = {e =>this.updateField(e)}/>
                </div>
                <div class = "input area">
                <br/>
                <label for = "descricao">Descrição</label>
                <br/>
                <textarea type = "text" name = "descricao" id = "descricao" onChange = {e => this.updateField(e)}/>
                </div>
                <div class = "input area">
                <br/>
                <label for = "horarios">Horários disponíveis</label>
                <br/>
                <input type = "text" name = "horarios" id = "horarios" onChange = {e => this.updateField(e)}/>
                </div>
                <div class = "Number area">
                <br/>
                <label for = "valor">Valor do serviço</label>
                <br/>
                <input type = "number" id = "valor" name = "valor" min = "0" max = "100000"  step = "0.01" onChange ={e => this.updateField(e)}/>
                </div>
                <div class = "File">
                <br/>
                <label for = "imagem">Escolha uma imagem do Serviço para cadastrar</label>
                <input type = "file" name="imagem" id="imagem" accept = "imagem/*" onChange ={ e => this.fileSelect(e) }/>
                <br/>
                <img id="foto" width = "100"/>
                <br/>
                </div>
                <div class = "Button area">
                <button id = "cadastrarservico" type = "submit" disabled = {this.state.isEmpty}>Cadastrar Serviço</button>
                </div>
            </div>
             </form>
         )
     }
    
    
    
    
    
    
    render(){
         return(
             <div class = "wrapper">
                <div class= "form-wrapper">
                {this.renderForm()}
                </div>
            </div>            
         )
     }


}