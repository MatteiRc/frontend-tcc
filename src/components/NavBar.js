import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';

export default class Navbar extends Component{
    render(){
        return (<nav className = "navbar navbar-expand-sm navbar-dark px-sm-5" >
            
                    <Link to='/'>
                        <img src={logo} alt="principal" className="navbar-brand"/>        
                    </Link>    
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                Serviços
                            </Link>   
                        </li> 
                    </ul>
                    <Link to='/favoritos' className="ml-auto">
                        <button>
                             <i className="far fa-star" />
                             favoritos
                        </button>
                    </Link>
                </nav>);
    }
}