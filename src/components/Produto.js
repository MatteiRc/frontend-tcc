import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ConsumidorServico} from '../contexto.js'; 
import {ButtonFavorito} from './Button.js';
import propTypes from 'prop-types';

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
                    <ButtonFavorito className="card-btn" disabled={inCart ? true : false} onClick={()=>{console.log('Adicionado aos favoritos')}}>
                    {inCart ? (
                        <i id="favoritado" className="fas fa-star"></i>
                    ) : (
                        <i className="fas fa-star"></i>
                    )}
                    </ButtonFavorito>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">
                    {title}
                    </p>
                    <h5 className="font-italic mb-0">
                        <span className="mr-1">$</span>
                        {price}
                    </h5>
                    </div>
                </div>                
            </ProductWrapper>
        );
    }
}
Produto.propTypes = {
    product:propTypes.shape({
        id:propTypes.number,
        img:propTypes.string,
        title:propTypes.string,
        price:propTypes.number,
        inCart:propTypes.bool 
    }).isRequired
};
const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition: all 0s linear;
}
#favoritado{
    color: var(--mainYellow);
} 
.card-footer{
    background:var(--mainColor);
    border-top:transparent;
    transition: all 0s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: var(--mainColor);
    }
}
.img-container{
    position: relative;
    overflow: hidden;
}
.card-img-top{
    transition: all 0.5s linear;
}   
.img-container:hover .card-img-top{
    transform: scale(1.2);
}
.card-btn {
    position: absolute;
    bottom:0;
    rigth:0;
    padding: 0.2rem 0.7rem;
    background: var(--mainColor);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
}
.img-container:hover .card-btn {
    transform: translate(0, 0);
}
`;
