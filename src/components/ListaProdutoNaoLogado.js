import React, { Component } from 'react';
import Produto from './Produto.js';
import Titulo from './Titulo.js';
import {ConsumidorServico} from '../contexto.js';
import {servicos} from '../data.js';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ButtonServicos, ButtonNome} from './Button.js';
import propTypes from 'prop-types';
import '../App.css';
import {
    Input
  } from "mdbreact";
import NavbarInicio from './NavbarInicio.js';
import axios from 'axios';

export default class ListaProduto extends Component {

  state = {
    search: "",
    servicos:[]
  };

 
 componentDidMount(){
  axios.get("http://localhost:3001/anuncios")
  .then(res =>{
    let arr = new Array();
    let data = JSON.parse(JSON.stringify(res.data));
    for(let i = 0; i < data.length; i++){
      let servico = {
        id: data[i].id,
        titulo: data[i].titulo,
        img: "http://localhost:3001/"+data[i].imagem,
        preco: data[i].valor+'/hora',
        nome: data[i].usuario,
        info: data[i].descricao,
        favorito: false
      }
      arr.push(servico);
    }
    this.setState({servicos:arr});
    console.log(this.state.servicos);
  })
 }
  renderservico = servico => {
    const { search } = this.state;
    var code = servico.id;
    return (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
            <ConsumidorServico>
                    {valor => (
                        <div className="img-container p-3" onClick={()=> valor.handleDetalhe(servico.id)}> 
                            <Link to="/detalhes">
                                <img src={servico.img} alt="product" className="card-img-top" />  
                            </Link>
                            <Link to='/chat'>
                                <ButtonServicos className="card-btn">
                                    <span className="mr-2">
                                      <i class="fas fa-comments"></i>
                                    </span>
                                      Conversar
                               </ButtonServicos>
                            </Link>
                        </div>
                    )}
            </ConsumidorServico>
            <ConsumidorServico>
            {valor => (
              <div className="card-footer d-flex justify-content-between" onClick={()=> valor.handleDetalhe(servico.id)}>
                <p className="align-self-center mb-0">
                    <Link id="link" to='/detalhes'>   
                        {servico.titulo}
                    </Link>
                    </p>
                    <h5 className="font-italic mb-0">
                        <span className="mr-1">R$</span>
                        {servico.preco}
                    </h5>
              </div>
            )}
            </ConsumidorServico>
        </div>                
    </ProductWrapper>
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredServicos = servicos.filter(servico => {
      return servico.titulo.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="flyout">
        <NavbarInicio/>  
        <main style={{ marginTop: "4rem" }}>
          <div className="container">
            <div className="row">
              <div className="col">
                <center>
                  <Titulo nome="Nossos" titulo="Serviços"></Titulo>
                  <p>
                  <span>
                    <i class="fas fa-search"></i>
                  </span>
                  <Input
                    type="text"
                    onChange={this.onchange}
                  />
                  </p>
                </center>
              </div>
            </div>
            <div className="row">
              {filteredServicos.map(servico => {
                return this.renderservico(servico);
              })}
            </div>
          </div>
        </main>
      </div>
    );
  }
}
Produto.propTypes = {
    product:propTypes.shape({
        id:propTypes.number,
        img:propTypes.string,
        titulo:propTypes.string,
        preco:propTypes.number,
        favorito:propTypes.bool 
    }).isRequired
};
const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 0s linear;
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
    left:0;
    padding: 0.2rem 0.7rem;
    background: var(--mainColor);
    border: none;
    color: var(--mainDark);
    font-size: 1.4rem;
    border-radius: 0 0.5rem 0 0;
    transform: translate(600%, 50%);
    transition: all 0.3s linear;
}
.img-container:hover .card-btn {
    transform: translate(0, 0);
}
`;

