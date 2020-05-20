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
    anuncio:{cidade:"",
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
         const anuncio = this.state.anuncio;
         const url = baseUrl + "/" + this.state.idUsuario;
         Axios.post(url,anuncio)
         .then(res=>{
             console.log(res.data);
         })
     }

     updateField(event){
         const anuncio = {...this.state.anuncio};
         let isEmpty = false;
         anuncio[event.target.name] = event.target.value;
         if(anuncio.cidade == "" || anuncio.descricao == "" || anuncio.horarios == "" || anuncio.valor == "")
             isEmpty = true;
             this.setState({anuncio,isEmpty});
             console.log(this.state.isEmpty);
        }

     displayImg(event){
         let img = document.getElementById("foto");
         img.src = URL.createObjectURL(event.target.files[0]);

     }

     fileSelect(event){
         const anuncio = {... this.state.anuncio};
         anuncio[event.target.name] = event.target.files[0].name;
         console.log(event.target.files[0].name);
         this.setState({anuncio});
         this.displayImg(event);;
     }

     renderForm(){
         return(
            <form method = "POST" onSubmit = {e => this.save(e)}>
                <div class = "form">
                <div class = "input area">
                <label for = "cidade">Cidade</label>
                <br/>
                <input type = "text" name = "cidade" id="cidade" onChange = {e =>this.updateField(e)}/>
                </div>
                <div class = "input area">
                <br/>
                <label for = "descricao">Descrição</label>
                <br/>
                <input type = "text" name = "descricao" id = "descricao" onChange = {e => this.updateField(e)}/>
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