import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import {ButtonContainer, ButtonServicos, ButtonVoltar} from './Button.js';
import './navBarstyle.css';

export default class Navbar extends Component{

    clear = e => {
        window.localStorage.clear();
    }
    render(){
        return (
            <div class="topnav">
                <div class="topnav-centered">
                <a href="http://localhost:3000/usuariologado">Serviços</a>
                </div>
                    <a href="http://localhost:3000/servicos">Criar Serviço</a>
                    <a href="http://localhost:3000/editarcadastro">Editar Cadastro</a>
                    <a href="http://localhost:3000/listaservicos" class="active">Seus Servicos</a>
                    <div class="topnav-right">
                    <a href="http://localhost:3002">Chat</a>
                    <a href="http://localhost:3000" onClick={this.clear}>Sair da Conta</a>
                </div>
            </div>
            );
    }
}