import React, { useState } from 'react';

import Navbar from '../components/Navbar/Navbar';
import { Disable } from '../components/Disable/Disable';

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

  const [count, setCount] = useState(0);

  return(
      <div className="containerHome">
        <Navbar />

        <div className="images">
          <img src={spiderMan} alt="Homem-Aranha" />
          <img src={wanda} alt="Wanda Maximoff" onClick={() => setCount(count + 1)} />
          <img src={thanos} alt="Thanos" onClick={() => setCount(count + 1)} />
          <Disable src={hulk} alt=" Hulk" className="hulk" />
          <button className="arrow"><img src={arrow} alt="Arrow" /></button>
        </div>
        <div>
          <Disable src={wandaDetails} alt="Detalhes Wanda" />
        </div>
        <div>
          <Disable src={thanosDetails} alt="Detalhes Thanos" />
        </div>
        <div>
          <Disable src={hulkDetails} alt="Detalhes Hulk" />
        </div>
      </div>
  );
}

export default Home;
