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
    marginLeft: 'auto',
    marginRight: 'auto',
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
            <div class="col-md-6" id= "capstoneCol">
                <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img src={arrow} alt="Capstone Project" style={img}/>
                      </div>
                      <div class="flip-card-back">
                        <h1>1st Place 2019 Western Mechanical Engineering Capstone</h1>
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
      <div class="container" style={capstoneCard}>
        <div class="overlay">
          <div class = "items"></div>
          <div class = "items head">
            <p>Flower Embroidery Hoop Art</p>
            <hr/>
          </div>
          <div class = "items price">
            <p class="old">$699</p>
            <p class="new">$345</p>
          </div>
          <div class="items cart">
            <i class="fa fa-shopping-cart"></i>
            <span>ADD TO CART</span>
          </div>
        </div>
      </div>

      </div>
        
        
    </div>
  );
}

export default DiscoverPage;