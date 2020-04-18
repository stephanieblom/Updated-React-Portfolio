import React from 'react';
import arrow from './Assets-Images/Arrow.jpeg';
import capstone from './Assets-Images/Capstone.jpg';
import car from './Assets-Images/February2020.jpg';


function DiscoverPage() {
    const discoverStyle = {        
        alert: { display: 'none' }
    }

    const img = {
      width: '400px',
      height: 'auto'
    }

    
  return (
    <div>
        <div className = "hero">
    <div className="container">
        <div class="row">
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
        <div class="row">
            
        </div>
    </div>

          <nav class="navbar fixed-bottom">
            <a class="navbar-brand" href="#">Stephanie Blom - Portfolio</a>
        </nav>
</div>
        
        
    </div>
  );
}

export default DiscoverPage;