import React, { useState } from 'react';

import Navbar from '../components/Navbar/Navbar';

import thor from '../assets/Thor-hq.png';
import silverSurfer from '../assets/Surfista-hq.png';
import wolverine from '../assets/Wolverine-hq.png';
import thorDetails from '../assets/Thor-hq-detalhes.png';
import arrow from '../assets/arrow.png';

import '../styles/pages/home.css';

function Hq() {
  let [count, setCount] = useState('0')


  return(
      <div className="containerHome">

        <Navbar />

        <div className="images">

          <button 
            className={count.includes('1') ? 'selected' : 'disable'} 
            onClick={() => setCount(count = '0')}
          >
            
            <img 
              src={thorDetails} 
              alt="Detalhes Thor: Vikings" 
            />

          </button>

          <button 
            className="buttonStyle" 
            onClick={() => setCount(count = '1')}
          >

            <img 
              src={thor} 
              alt="Thor: Vikings"
            />

          </button>

          <img 
            className={count.includes('0') ? 'selected' : 'disable'} 
            src={silverSurfer} 
            alt="Surfista Prateado: Parábola" 
          />

          <img 
            className={count.includes('0') ? 'selected' : 'disable'} 
            src={wolverine} 
            alt="Wolverine: Origens"
          />

          <button className="arrow"><img src={arrow} alt="Arrow" /></button>
        </div> 
      </div>
  );
}

export default Hq;
