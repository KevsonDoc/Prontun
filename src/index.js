import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './Pages/Home/index.js';
import CadastroCategoria from './Pages/Cadastro/Categoria';
import Err from './Pages/Err';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={Err}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);