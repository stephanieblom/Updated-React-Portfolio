import React from 'react';
import arrow from './Assets-Images/Arrow.jpeg';
import capstone from './Assets-Images/Capstone.jpg';
import car from './Assets-Images/February2020.jpg';
import { Link, useLocation } from "react-router-dom";
import "./portfolio.css";


function DiscoverPage() {

  const capstoneCard ={
    backgroundImage: `url(${capstone})`,
    display: 'block',
    margin: '10px',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    backgroundPosition: '50% 0%',
  }

  const arrowCard ={
    backgroundImage: `url(${arrow})`,
    display: 'block',
    margin: '10px',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    backgroundPosition: '50% 0%',
  }


    
  return (
    <div>
        <div className = "hero">
          <div className="header">
              <div className="row">
                  <div className="col-12">
                  <Link to="/" className="navbar-brand">SB</Link>
                  </div>
              </div>
          </div>
    {/* <div className="container"> */}
        {/* <div class="row">
            <div class="col-md-6" id= "arrowCol">
                <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img src={capstone} alt="Office IoT System" style={img} />
                      </div>
                      <div class="flip-card-back">
                        <h1>Office IoT System Designed and Fabricated</h1>
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-md-6">
                <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img src={car} alt="Western Formula Racing Car" style={img}/>
                      </div>
                      <div class="flip-card-back">
                        <h1>Western Formula Racing 2014-2019</h1>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <br/>
      </div> */}
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="container" style={capstoneCard}>
          <div className="overlay">
            <div className = "items"></div>
            <div className = "items head">
              <p>1st Place 2019 Western Mechanical Engineering Capstone</p>
              <hr/>
            </div>
            <div className="items">
              <i className="fa fa-2x fa-cogs"></i>
            </div>
            </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="container" style={arrowCard}>
          <div className="overlay">
            <div className = "items"></div>
            <div className = "items head">
              <p>Office IoT System Designed and Fabricated</p>
              <hr/>
            </div>
            <div className ="items">
              <i className ="fa fa-2x fa-microchip"></i>
            </div>
          </div>
        </div>
        </div>
      </div>

        </div>

      </div>
        
        
    </div>
  );
}

export default DiscoverPage;