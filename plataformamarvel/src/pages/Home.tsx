import React, { useState } from 'react';

import Navbar from '../components/Navbar/Navbar';

import spiderMan from '../assets/Spider.png';
import wanda from '../assets/Wanda.png';
import thanos from '../assets/Thanos.png';
import hulk from '../assets/Hulk.png';
import wandaDetails from '../assets/Wanda-detalhes.png';
import thanosDetails from '../assets/Thanos-detalhes.png';
import hulkDetails from '../assets/Hulk-detalhes.png';
import arrow from '../assets/arrow.png';

import '../styles/pages/home.css';

function Home() {

  let [count, setCount] = useState('0');
  let [navigation, setNavigation] = useState('0')

  return(
      <div className="containerHome">
        <Navbar />

        <div className="images">
          
          <img 
            src={spiderMan} 
            alt="Homem-Aranha" 
            className={count.includes('0') ? 'selected' : 'disable'}
            id={navigation.includes('0') ? 'show' : 'hide'}
          />
          
          <button 
            className={count.includes('1') ? 'selected' : 'disable'} 
            onClick={() => setCount(count = '0')}
          >
            <img 
              src={wandaDetails} 
              alt="Detalhes Wanda" 
            />
          </button>

          <button 
            className="buttonStyle" 
            onClick={() => setCount(count = '1')}
          >
            <img 
              src={wanda} 
              alt="Wanda Maximoff" 
              className={count.includes('0') ? 'selected' : 'disable'}
            />
          </button>

          <button 
            className={count.includes('2') ? 'selected' : 'disable'} 
            onClick={() => setCount(count = '0')}
          >
            <img 
              src={thanosDetails} 
              alt="Detalhes Thanos" 
            />
          </button>

          <button 
            className="buttonStyle" 
            onClick={() => setCount(count = '2')}
          >
            <img 
              src={thanos} 
              alt="Thanos"
              className={count.includes('0') ? 'selected' : 'disable'}
            />
          </button>
          
          <button 
            className={count.includes('3') ? 'selected' : 'disable'} 
            onClick={() => setCount(count = '0')}
          >
            <img 
              src={hulkDetails} 
              alt="Detalhes Thanos" 

            />
          </button>

          <button
            className="buttonStyle" 
            onClick={() => setCount(count = '3')}
            id={navigation.includes('1') ? 'show' : 'hide'}
          >
            <img 
              src={hulk} 
              alt=" Hulk" 
            />
          </button>

          <button 
            className="arrow"
            onClick={() => setNavigation(navigation = '1')}
          >
              <img src={arrow} alt="Arrow" />
          </button>
        </div>     
      </div>
  );
}

export default Home;
