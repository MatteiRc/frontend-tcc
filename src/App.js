import React, {Component} from 'react'; 
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar.js';
import NavBarFav from './components/NavBarFav.js';
import NavBarServ from './components/NavBarServ.js';
import ListaProdutoLogado from './components/ListaProdutoLogado.js';
import Default from './components/Default.js';
import DetalhesNaoLogado from './components/DetalhesNaoLogado.js';
import Favoritos from './components/Favoritos/Favoritos.js';
import DetalhesFav from './components/DetalhesFav.js';
import LoginCadastro from './components/login/src/index.js';
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={ListaProdutoLogado} />
        <Route path="/detalhes" component={DetalhesNaoLogado} />
        <Route path="/login" component={LoginCadastro} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/detalhesfav" component={DetalhesFav} />
        <Route component={Default} />
        <Navbar />
        <NavBarFav />
        <NavBarServ />
      </Switch>
    </React.Fragment>
  );  
}

export default App;
