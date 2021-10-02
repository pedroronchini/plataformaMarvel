import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import { Disable } from '../components/Disable/Disable';
import { DropDown } from '../components/DropDown/DropDown';

import ironMan from '../assets/Homem-de-ferro-1.png';
import iroMan2 from '../assets/Homem-de-ferro-2.png';
import thor from '../assets/Thor-1.png';
import captainAmerica from '../assets/Capitão-américa.png';
import captainMarvel from '../assets/Capitã-marvel.png';
import ironManDetails from '../assets/Homem-de-ferro-1-detalhes.png';
import captainAmericaDetails from '../assets/Capitão-américa-detalhes-1.png';
import captainMarvelDetails from '../assets/Capitã-marvel-detalhes.png';
import arrow from '../assets/arrow.png';

import '../styles/pages/movies.css';

function Movies() {
  return(
      <div className="containerHome">
        <Navbar />

        <DropDown className="dropDown">
          <DropDown.Toggle>Filtrar por</DropDown.Toggle>

          <DropDown.List>
            <DropDown.Item>Lançamento</DropDown.Item>
            <DropDown.Item>Cronologia</DropDown.Item>
          </DropDown.List>
        </DropDown>
        <div className="images">
          <img src={ironMan} alt="Homem de Ferro" />
          <img src={iroMan2} alt="Homem de ferro 2" />
          <img src={thor} alt="Thor" />
          <Disable src={captainAmerica} alt=" Capitão América" />
          <Disable src={captainMarvel} alt=" Capitã Marvel" />
          <button className="arrow"><img src={arrow} alt="Arrow" /></button>
        </div>
        <div>
          <Disable src={ironManDetails} alt="Detalhes Homem de Ferro" />
        </div>
        <div>
          <Disable src={captainAmericaDetails} alt="Detalhes Capitão América" />
        </div>
        <div>
          <Disable src={captainMarvelDetails} alt="Detalhes Capitã marvel" />
        </div>
      </div>
  );
}

export default Movies;
