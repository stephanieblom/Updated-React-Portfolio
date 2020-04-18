import React, { useState } from 'react';
import ContactForm from './ContactForm';
import "./style.css";


function SearchPage() {

  return (
    <div className="hero container">

        <ContactForm />
  
        <nav className="navbar fixed-bottom">
            <a className="navbar-brand" href="#">Stephanie Blom - Contact Me</a>
        </nav>

        
    </div>

  );
}

export default SearchPage;