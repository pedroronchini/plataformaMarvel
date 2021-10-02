import React, { useState } from 'react';

import Navbar from '../components/Navbar/Navbar';
import { Disable } from '../components/Disable/Disable';

import thor from '../assets/Thor-hq.png';
import silverSurfer from '../assets/Surfista-hq.png';
import wolverine from '../assets/Wolverine-hq.png';
import thorDetails from '../assets/Thor-hq-detalhes.png';
import arrow from '../assets/arrow.png';

import '../styles/pages/home.css';

function Hq() {

  const [count, setCount] = useState(0);

  return(
      <div className="containerHome">
        <Navbar />

        <div className="images">
          <img src={thor} alt="Thor: Vikings" onClick={() => setCount(count + 1)} />
          <img src={silverSurfer} alt="Surfista Prateado: Parábola" />
          <img src={wolverine} alt="Wolverine: Origens" />
          <button className="arrow"><img src={arrow} alt="Arrow" /></button>
        </div>
        <div>
          <Disable src={thorDetails} alt="Detalhes Thor: Vikings" />
        </div>
      </div>
  );
}

export default Hq;
