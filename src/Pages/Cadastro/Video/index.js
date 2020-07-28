import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function Cadastro() {
  return (
      <>
        <div>
          <PageDefault>
            <h1>Cdastro de Video</h1>
            <Link to="/cadastro">Cadastrar Categoria</Link>
          </PageDefault>
        </div>
      </>
  );
}

export default Cadastro;