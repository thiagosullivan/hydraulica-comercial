import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Fornecedores from './pages/Fornecedores';
import Produtos from './pages/Produtos';
import Sobre_Nos from './pages/Sobre_Nos';
import Contato from './pages/Contato';
import Lojas from './pages/Lojas';

import Hidraulica from './pages/Hidraulica';
import Eletrica from './pages/Eletrica';
import Epi from './pages/Epi';
import Ferragens from './pages/Ferragens';
import Ferramentas from './pages/Ferramentas';
import Pintura from './pages/Pintura';

import Nav from './components/Nav/Nav';
import TopHead from './components/TopHeade/TopHead';
import MenuCategories from './components/MenuCategories/Categories';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
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
