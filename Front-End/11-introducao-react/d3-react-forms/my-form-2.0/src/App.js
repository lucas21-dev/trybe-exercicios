import './App.css';
import React from 'react';
import Select from './components/select'

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: '',
      type: '',
      resume: '',
      job: '',
      jobDescription: '',
    }
  }

//   HandleCheck = (e) => {

// }

  render() {
    return (
    <div className="App">
      <h1>Currículo Trybe</h1>
      <form>
        <fieldset className="personal-data">
          <label htmlFor="name">
            Nome: 
            <input type="text" name="name" id="name" maxLength="40" required style={{ textTransform: 'uppercase' }} />
          </label>
          <label htmlFor="email">
            Email: 
            <input type="email" name="email" id="email" maxLength="50" required />
          </label>
          <label htmlFor="cpf" >
            CPF: 
          <input type="text" name="cpf" id="cpf" maxLength="11" required />
          </label>
          <label htmlFor="adress">
            Endereço: 
          <input type="text" name="adress" id="adress" maxLength="200" required />
          </label>
          <label htmlFor="city">
            Cidade:
          <input type="text" name="city" id="city" maxLength="28" required />
          </label>
          <label>
            Estado:
            <Select />
          </label>
          <label >
            Moradia:
            <label htmlFor="mora">
              Casa: 
              <input type="radio" id="casa" name="mora" required />
            </label>
            <label htmlFor="apto">
              Apartamento:
              <input type="radio" id="apto" name="mora" required />
            </label>
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="resume">
            Resumo do Currículo:
            <textarea name="resume" id="resume" cols="50" rows="10" maxLength="1000" required/>
          </label>
          <label htmlFor="job">
            Cargo anterior:
            <textarea name="job" id="job" cols="50" rows="10" maxLength="40" required ></textarea>
          </label>
          <label htmlFor="job-description">
            Descrição do cargo:
            <input type="text" name="job-description" id="job-description" maxLength="500" required />
          </label>
        </fieldset>
        <button className="form-button" >Criar Currículo</button>
        <button className="form-button">Limpar</button>
      </form>
    </div>
    )
  }
}

export default App;
