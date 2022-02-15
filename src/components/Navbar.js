//import React from 'react';
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import {
//   Link
// } from "react-router-dom";
import './TextForm.css'

let url=""


export default function Navbar(bhavyaa) {



  let setblue=()=>{
    document.body.style.backgroundColor='#5050f2';
  
    }
  let setgreen=()=>{
    document.body.style.backgroundColor='green';
    document.getElementsByClassName('navbar')[0].style.backgroundColor='lightgreen !important';

    }
  let setred=()=>{
    document.body.style.backgroundColor='red';
    }
  let setyellow=()=>{
    document.body.style.backgroundColor='yellow';
    }

    

  return (

    <>
    
     
    <nav className={`navbar navbar-expand-lg navbar-${bhavyaa.mode} bg-${bhavyaa.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href={url}>{bhavyaa.sharma}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
          <li className="nav-item">
          
            <a className="nav-link active" aria-current="page" href="/">Text Utils</a>
            
          </li>
        
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/about">About</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href={url} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href={bhavyaa.url2}>Action</a></li>
              <li><a className="dropdown-item" href={url}>Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href={url}>Something else here</a></li>
            </ul>
          </li> */}
          <li className="nav-item">
            <a href="/" className="nav-link disabled">Disabled</a>
          </li>
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}

    <details>

        <summary>Body Color Applications</summary>


      <div className='morebuttons'>  
        <button type="button" onClick={setblue} className="btn btn-primary morebutton mx-1"></button>
        <button type="button" onClick={setgreen} className="btn btn-success morebutton mx-1"></button>
        <button type="button" onClick={setred} className="btn btn-danger morebutton mx-1"></button>
        <button type="button" onClick={setyellow} className="btn btn-warning morebutton mx-1"></button>
      </div>

      </details>

            <div className="form-check form-switch text-light mx-3 my-3">
              <input className="form-check-input" onClick={bhavyaa.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" id='Switchmodes' htmlFor="flexSwitchCheckDefault">{bhavyaa.mode==='light'?'Enable Dark Mode':'Enable Light Mode'}</label>
            </div>


      </div>


    </div>   
  </nav>

  {/* <div className="moremodes mx-3">


<details>

  <summary>More  Modes </summary>
      
      <div className='morebutton'>  
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
        <button type="button" className="btn btn-danger">Danger</button>
        <button type="button" className="btn btn-warning">Warning</button>
        <button type="button" className="btn btn-info">Info</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-dark">Dark</button>

        </div>

      </details>



</div>
 */}

  </>

    );
}

Navbar.propTypes ={
  sharma : PropTypes.string
};