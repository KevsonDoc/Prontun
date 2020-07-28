import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './Pages/Home/index.js';
import CadastroVideo from './Pages/Cadastro/Video';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Pagina404 = () => <h1>Página 404</h1>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/cadastro" component={CadastroVideo}/>
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);