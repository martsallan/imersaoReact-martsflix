import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import {Link} from 'react-router-dom'

function CadastroCategoria(){
    const valoresIniciais= {
      nome: '',
      descricao: '',
      cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    //key: nome, descricao, cartao, etc
    function setValue(key, value){
      setValues({
        ...values,
        [key]: value, //nome: 'valor'
      })
    }

    function handleChange(infosDoEvento) {
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value
      );
    }
    
    return(
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais)
        }}>
          {/* State */}
          
          <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
          />

          <FormField
          label="Descrição:"
          type="????"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
          />
          {/* <div>
            <label>
              Descrição: 
              <textarea type="text" value={values.descricao} name="descricao"
              />
            </label>
          </div> */}
          <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
          />
          {/* <div>
            <label>
              Cor: 
              <input type="color" value={values.cor} name="cor" onChange={handleChange}
              />
            </label>
          </div> */}
          
          <button>
            Cadastrar
          </button>
        </form>  
        
        <ul>
          {categorias.map((categoria, indice) => {
            return(
            <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    )
}

export default CadastroCategoria;