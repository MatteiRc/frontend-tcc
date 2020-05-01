import React, {Component} from 'react'; 
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar.js'
import ListaProduto from './components/ListaProduto.js';
import Default from './components/Default.js';
import Detalhes from './components/Detalhes.js';
import Favoritos from './components/Favoritos.js';
import Modal from './components/Modal.js';
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ListaProduto} />
        <Route path="/detalhes" component={Detalhes} />
        <Route path="/favoritos" component={Favoritos} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );  
}

export default App;
