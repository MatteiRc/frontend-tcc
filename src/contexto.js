import React, { Component } from 'react';
import {servicos, detalheServico} from './data.js';
const ServicoContexto = React.createContext();

class ProvedorServico extends Component {
    state ={
        servicos: [],
        detalheServico: detalheServico,
        favorito: []
    };
    componentDidMount(){
        this.setServicos();
    }
    setServicos = () => {
        let servic = [];
        servicos.forEach(item =>{
            const singleItem = {...item};
            servic = [...servic, singleItem];

        });
        this.setState(()=>{
            return {servicos:servic};
        });
    };
    handleDetalhe = (id) => {
        const servico = this.getItem(id);
        this.setState(()=>{
            return {detalheServico:servico}
        })
    };
    addToFavoritos = (id)=>{
        let tempProducts = [...this.state.servicos];
        const index = tempProducts.indexOf(this.getItem(id));
        const servico = tempProducts[index];
        servico.inCart = true;
        servico.cont = 1;
        const preco = servico.preco;
        servico.total = preco;
        this.setState(()=>{
            return { servico:tempProducts, favorito:[...this.state.favorito, servico] }; 
        }, ()=>{console.log(this.state)});
    };
    getItem = (id) =>{
        const product = this.state.servicos.find(item => item.id === id);
        return product;
    };
    removeItem = (id) =>{
        console.log('remove');
        let tempServicos = [...this.state.servicos];
        let tempFavorito = [...this.state.favorito];
        tempFavorito = tempFavorito.filter(item => item.id !== id);
        const index = tempServicos.indexOf(this.getItem(id));
        let removeServico = tempServicos[index];
        removeServico.inCart = false;
        this.setState(()=>{
            return {
                favorito: [...tempFavorito],
                servicos:[...tempServicos]
            }
        })
    };
    render() {
        return (
            <ServicoContexto.Provider value={{
                ...this.state,
                handleDetalhe: this.handleDetalhe,
                addToFavoritos: this.addToFavoritos,
                removeItem: this.removeItem
            }}>
                {this.props.children}
            </ServicoContexto.Provider>
        );
    }
}

const ConsumidorServico = ServicoContexto.Consumer;

export {ProvedorServico, ConsumidorServico}
