import React, {Component} from 'react'; 
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar.js';
import NavBarFav from './components/NavBarFav.js';
import NavBarServ from './components/NavBarServ.js';
import ListaProduto from './components/ListaProduto.js';
import Default from './components/Default.js';
import Detalhes from './components/Detalhes.js';
import Favoritos from './components/Favoritos/Favoritos.js';
import DetalhesFav from './components/DetalhesFav.js';
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={ListaProduto} />
        <Route path="/detalhes" component={Detalhes} />
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
