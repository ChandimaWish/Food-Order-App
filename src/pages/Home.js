import React from 'react'
import backgroundImage from '../assests/food.jpeg';
import {Link} from "react-router-dom";
import  '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{backgroundImage : `url(${backgroundImage})`}}>
        <div className="headerContainer">
        <h1 style={{ fontWeight: "bold"}}> Food Corner </h1>
        <p> INDIAN FOOD AT A ClICK</p>
        <Link to="/menu">
        <button> ORDER NOW</button>
        </Link>
        
            
        </div>
    </div>
  )
}

export default Home

