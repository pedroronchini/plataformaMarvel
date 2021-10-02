import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../../assets/Componente.png';
import picture from '../../assets/profile-picture.png';

import { Span } from '../../components/Span/Span';
import { Text } from '../../components/Text/Text';

import '../../styles/pages/navbar.css';

class NavBar extends Component {
  render() {
    return(
      <div className="navbar">
        <div className="divLogo">
          <img src={logo} alt="Marvel" className="logo" />
        </div>
        <div className="links">
          <Text>
            <Link to="/home"><Span>Personagens</Span></Link>
          </Text>
          <Text>
            <Link to="/movies"><Span>Filmes</Span></Link>
          </Text>
          <Text>
            <Link to="/hq"><Span>HQs</Span></Link>
          </Text>
          <div>
            <img src={picture} alt="Foto" />
          </div>
          <Text>
            <Link to="/"><Span>Sair</Span></Link>
          </Text>
        </div>
      </div>
    );
  }
}

export default NavBar;