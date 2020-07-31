import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = { 
    nome: '',
    descricao: '',
    cor: ''
  };
  const [ categorias, setCategorias ] = useState(['']);
  const [ values, setValues ] = useState(valoresIniciais);
  
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value);
  }

  useEffect(() => {
    console.log('Ola Mundo');
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (response) => {
        const data = await response.json();
        setCategorias([
          ...data,
        ]);
      });
  }, []);

  

  return (
      <>
        <PageDefault>
          <h1>Cadastro de Categoria: { values.nome } </h1>
          <form onSubmit={function handleSubmit(event) {
            event.preventDefault();
            setCategorias([
              ...categorias,
              values
            ]);

            setValues(valoresIniciais)
          }}>
            
            <FormField
              label="Nome da Categoria"
              type="input"
              name="nome"
              value={values.nome}
              onChange={handleChange}
            />

            <FormField
              label="descrição"
              type="textarea"
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            />

            <FormField
              label="Cor"
              type="color"
              name="cor"
              value={values.cor}
              onChange={handleChange}
            />
            <Button>
              Cadastrar
            </Button>
          </form>

        <ul>
          {
            categorias.map((categoria, indice) => {
            return (
                <li key={`${categoria}${indice}`}>
                  {categoria.nome}
                </li>
              )
            })
          }
        </ul>

          <Link to="/">Ir Home</Link>
        </PageDefault>
      </>
  );
}

export default CadastroCategoria;