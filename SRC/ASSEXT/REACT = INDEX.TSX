import React from 'react';

import logoimg from'../../assets/logo.svg';
import landingimg from'../../assets/landing.svg';

import studyIcon from'../../assets/icons/study.svg';
import giveClassesicon from'../../assets/icons/give-classes.svg';
import purpleHeartIcon from'../../assets/icons/purpleHeartIcon-classes.svg';


import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
        <div id="page-landing-content"
         className="container">
<div className="logo-container">
<img src={logoimg} alt="Proffy"/>
<h2>Sua plataforma de estudos online.</h2>
       </div> 

       <img src={landingimg} alt="Plataforma de estudos"
        className="hero-img"
        />
  <div className="buttons-container">
<a href="" className="study">
<img src={studyIcon} alt="Estudar"/>
Estudar
</a>

<a href="" className="give-classes">
<img src={giveClassesicon} alt="Estudar"/>
Estudar
</a>

       </div>

       <span className="total-connections"></span>
       Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração"/>
       </div>
       </div>
    )  
}

export default Landing;
