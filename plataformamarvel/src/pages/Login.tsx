import React from 'react';

import logo from '../assets/Componente.png';
import vingadores from '../assets/Vingadores.png';
import { Img } from '../components/Imagem/Img';
import { Span } from '../components/Span/Span';
import { Title } from '../components/Title/Title';

import '../styles/pages/login.css';

function Login() {
  return (
    <div className="container">
      <div className="containerLogo">
        <img src={logo} alt="Marvel" />
      </div>
      <div className="containerLogin">
        <Title>Bem-vindo(a) de volta!</Title>
        <span className="subtitle">Acesse sua conta:</span>
        <input type="text" className="input" placeholder="Usuário" />
        <input type="password" className="input" placeholder="Senha" />
        <div className="containerRadio">
          <input type="radio" name="radio" className="radio" />
          <Span className="text">Salvar login</Span>
        </div>
        <a href="home" className="textButtonPassword">Esqueci a senha</a>
        <button className="button" >Entrar</button>
        <Span className="text">Ainda não tem o login? <a className="textButtonRegister">Cadastre-se</a></Span>
      </div>

      <Img src={vingadores}></Img>
    </div>
  )
};

export default Login;
