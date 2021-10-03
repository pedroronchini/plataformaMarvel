import React, { useState } from 'react';

import Navbar from '../components/Navbar/Navbar';
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
  let [count, setCount] = useState('0');
  let [show, setShow] = useState('0');

  return(
      <div className="containerHome">
        <Navbar />

        <DropDown className="dropDown">
          <DropDown.Toggle >Filtrar por</DropDown.Toggle>

          <DropDown.List>
            <DropDown.Item 
              className="dropDownButton" 
              onClick={() => setCount(count = '0')}
            >
              Lançamento
            </DropDown.Item>
            <DropDown.Item 
              className="dropDownButton" 
              onClick={() => setCount(count = '1')}
            >
              Cronologia
            </DropDown.Item>
          </DropDown.List>
        </DropDown>

        <div className="images">

          <div className="images" id={count.includes('0') ? 'selected' : 'disable'} >
            <button
              className={show.includes('1') ? 'show' : 'hide'} 
              onClick={() => setShow(show = '0')}
            >
              <img 
                src={ironManDetails} 
                alt="Detalhes Homem de Ferro" 
              />
            </button>

            <button
              className="buttonStyle"
              onClick={() => setShow(show = '1')}
            >
              <img
                src={ironMan} 
                alt="Homem de Ferro"
              />
            </button>

            <img 
              src={iroMan2} 
              alt="Homem de ferro 2"
              className={show.includes('0') ? 'show' : 'hide'}
            />

            <img
              src={thor} 
              alt="Thor"
              className={show.includes('0') ? 'show' : 'hide'}
            />
          </div>

          <div className="images" id={count.includes('1') ? 'selected' : 'disable'}>
            <button 
              className={show.includes('1') ? 'show' : 'hide'} 
              onClick={() => setShow(show = '0')}
            >
              <img 
                src={captainAmericaDetails} 
                alt="Detalhes Capitão América" 
              />
            </button>

            <button 
              className="buttonStyle"
              onClick={() => setShow(show = '1')}
            >
              <img 
                src={captainAmerica} 
                alt=" Capitão América" 
                className={show.includes('0') ? 'show' : 'hide'}
              />
            </button>

            <button 
              className={show.includes('2') ? 'show' : 'hide'} 
              onClick={() => setShow(show = '0')}
            >
              <img 
                src={captainMarvelDetails} 
                alt="Detalhes Capitã marvel" 
              />
            </button>

            <button 
              className="buttonStyle"
              onClick={() => setShow(show = '2')}
            >
              <img 
                src={captainMarvel} 
                alt=" Capitã Marvel"
                className={show.includes('0') ? 'show' : 'hide'}
              />
            </button>

            <button 
              className={show.includes('3') ? 'selected' : 'disable'} 
              onClick={() => setShow(show = '0')}
            >
              <img 
                src={ironManDetails} 
                alt="Detalhes Homem de Ferro" 
              />
            </button>

            <button
              className="buttonStyle"
              onClick={() => setShow(show = '3')}
            >
              <img
                src={ironMan} 
                alt="Homem de Ferro"    
              />
            </button>
          </div>

          <button className="arrow">
            <img src={arrow} alt="Arrow" />
          </button>
        </div>
      </div>
  );
}

export default Movies;
