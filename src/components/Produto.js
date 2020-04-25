import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ConsumidorServico} from '../contexto.js'; 

export default class Produto extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">

                <div className="card">
                <div className="img-container p-5" onClick={()=> console.log('Voce me clicou no canto da imagem')}> 
                <Link to="/detalhes">
                  <img src={img} alt="product" className="card-img-top" />  
                </Link>
                </div>
                </div>                
            </ProductWrapper>
        );
    }
}
const ProductWrapper = styled.div`

`
