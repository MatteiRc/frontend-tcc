import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import {ButtonContainer, ButtonServicos, ButtonVoltar} from './Button.js';

export default class Navbar extends Component{
    render(){
        return (<NavWrapper className = "navbar navbar-expand-sm navbar-dark px-sm-5" >
            
                    <Link to='/usuariologado'>
                        <img src={logo} alt="principal" className="navbar-brand"/>        
                    </Link>    
                    <ul className="nav justify-content-end">
                        <li className="nav-item ml-5">
                        <Link to="/usuariologado">
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
                        <Link to='/favoritos'>
                            <ButtonContainer title="Serviços Favoritos">
                                <span className="mr-0">
                                    <i className="fas fa-star" />
                                </span>
                            </ButtonContainer>
                        </Link>      
                        </li>
                    </ul>
                    
                    <Link to='/'>
                            <ButtonVoltar title="Sair da Conta">
                                <span className="mr-0">
                                    <i class="fas fa-sign-out-alt"></i>
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
