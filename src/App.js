import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import FormContainer from './components/FormContainer'

class App extends Component {
  
  render() {
    return (
      <div className="container">
        <div className="columns">
        <div className="col-md-9 centered">
        <img src={logo} alt="logo" className="center-block" />
          <p>Auditoria LAB: preencha o formulário e pressione Enviar</p>
          </div>
          <div className="col-md-9 centered">
            <FormContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
