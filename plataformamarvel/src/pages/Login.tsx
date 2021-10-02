import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/Componente.png';
import vingadores from '../assets/Vingadores.png';

import { Img } from '../components/Imagem/Img';
import { Span } from '../components/Span/Span';
import { Title } from '../components/Title/Title';

import '../styles/pages/login.css';

function Login() {

  const [formData, setFormData] = useState({
    user: '',
    password: '',
  })

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value});
  }

  return (
    <div className="container">
      <div className="containerLogo">
        <img src={logo} alt="Marvel" />
      </div>

      <div className="containerLogin">
        <Title>Bem-vindo(a) de volta!</Title>
        <span className="subtitle">Acesse sua conta:</span>
        
        <input type="text" className="input" placeholder="Usuário" onChange={handleInputChange} />
        <input type="password" className="input" placeholder="Senha" onChange={handleInputChange} />
        
        <div className="containerRadio">
          <input type="radio" name="radio" className="radio" />
          <Span className="text">Salvar login</Span>
        </div>
        
        <Link to='#' className="textButtonPassword">Esqueci a senha</Link>
        <Link to="/home" ><button className="button" >Entrar</button></Link>
        
        <Span className="text">Ainda não tem o login?
         <Link to="#" className="textButtonRegister">Cadastre-se</Link>
        </Span>
      </div>

      <Img src={vingadores}></Img>
    </div>
  )
};

export default Login;
