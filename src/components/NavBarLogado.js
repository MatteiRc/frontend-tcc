import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import {ButtonContainer, ButtonServicos, ButtonVoltar} from './Button.js';

export default class Navbar extends Component{

    clear = e => {
        window.localStorage.clear();
    }
    render(){
        return (<NavWrapper className = "navbar navbar-expand-sm navbar-dark px-sm-5" >
            
                    <Link to='/usuariologado'>
                        <img src={logo} alt="principal" className="navbar-brand"/>        
                    </Link>    
                    <ul className="nav justify-content-end">
                        <li className="nav-item ml-5">
                        <Link to="/servicos">
                                <ButtonServicos title="Criar Serviço">
                                    <span className="mr-0"> 
                                    <i class="fas fa-plus-circle"></i>
                                    </span>
                                </ButtonServicos>
                            </Link>    
                        </li> 
                    </ul>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                        <Link to="/usuariologado">
                                <ButtonServicos title="Seus Serviços">
                                    <span className="mr-0"> 
                                        <i class="fas fa-bars"></i>
                                    </span>
                                </ButtonServicos>
                            </Link>    
                        </li> 
                    </ul>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                        <Link to="/editarcadastro">
                                <ButtonServicos title="Editar Cadastro">
                                    <span className="mr-0"> 
                                        <i class="fas fa-edit"></i>
                                    </span>
                                </ButtonServicos>
                            </Link>
                              
                        </li> 
                    </ul>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                        <Link to="/chat">
                            <ButtonServicos title="Chat">
                                <span className="mr-0">
                                    <i class="fas fa-comments"></i>
                                </span>
                            </ButtonServicos>
                        </Link>      
                        </li>
                    </ul>
                    <Link to='/' onclick={this.clear}>
                            <ButtonVoltar title="Sair da Conta" onClickCapture = {this.clear}>
                                <span className="mr-0" >
                                    <i class="fas fa-sign-out-alt" onClickCapture={this.clear}></i>
                                </span>
                            </ButtonVoltar>
                        </Link> 
                </NavWrapper>
            );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainColor);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size:1.5rem;
        text-transform: capitalize;
    }
`;
