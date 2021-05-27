import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './config/ScrollToTop';

import Home from './pages/Home';
import Fornecedores from './pages/Fornecedores';
import Produtos from './pages/Produtos';
import Sobre_Nos from './pages/Sobre_Nos';
import Contato from './pages/Contato';
import Lojas from './pages/Lojas';

import Hidraulica from './pages/products/Hidraulica';
import Eletrica from './pages/products/Eletrica';
import Epi from './pages/products/Epi';
import Ferragens from './pages/products/Ferragens';
import Ferramentas from './pages/products/Ferramentas';
import Pintura from './pages/products/Pintura';

import Nav from './components/Nav/Nav';
import TopHead from './components/TopHead/TopHead';
import MenuCategories from './components/MenuCategories/Categories';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <header id="desktop">
          <TopHead />
          <Nav />
          <MenuCategories />
        </header>
        <header id="mobile">
          <TopHead />
          <Nav />
          <MenuCategories />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Produtos" component={Produtos} />
          <Route path="/Fornecedores" component={Fornecedores} />
          <Route path="/Sobre_Nos" component={Sobre_Nos} />
          <Route path="/Contato" component={Contato} />
          <Route path="/Lojas" component={Lojas} />
        </Switch>
        <Switch>
          <Route path="/hidraulica" component={Hidraulica} />
          <Route path="/eletrica" component={Eletrica} />
          <Route path="/epi" component={Epi} />
          <Route path="/ferragens" component={Ferragens} />
          <Route path="/ferramentas" component={Ferramentas} />
          <Route path="/pintura" component={Pintura} />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
