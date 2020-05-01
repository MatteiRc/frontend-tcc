import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ConsumidorServico } from '../contexto.js';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    static propTypes = {
        prop: PropTypes
    }
    render() {
        return (
            <ConsumidorServico>
                {valor =>{
                    const {modalOpen, closeModal} = valor;
                    const {img, title, price} = valor.modalServico;
                    if(!modalOpen){
                        return null;
                    }
                    else{
                        return(<ModalContainer>
                            <div className="container">
                            <div className="row">
                            <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                <h5>Item favoritado</h5>
                            </div>
                            </div>
                            </div>
                        </ModalContainer>);
                    }
                }}
            </ConsumidorServico>
        )
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
`;
