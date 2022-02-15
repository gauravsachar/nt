import React from 'react'
import './TextForm.css'
import {useState} from 'react'
//import userEvent from '@testing-library/user-event';
export default function About() {

    // let mystyle={
    //     color : 'white', 
    //     backgroundColor : 'black'        
    // }

    let [mystyle,setmystyle] = useState({
        color : 'white', 
        backgroundColor : 'black',        
        borderBottom: '2px solid white'
    });

    let [textld,settextld]= useState("Enable Light Mode");

    const toggledark=()=>{

        if (mystyle.color==='white'){
            setmystyle({
                color : 'black', 
                backgroundColor : 'white',
                borderBottom: '2px solid black',
            });
        settextld("Enable Dark Mode");
        }
        else{setmystyle({
        color : 'white', 
        backgroundColor : 'black',
        borderBottom: '2px solid white'        
            }); 

        settextld("Enable Light Mode");
        }
    }

  return (

  <div className='container abt my-5' style={mystyle}>
      <h2 className="text-primary">Hey About me</h2>
            <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header" id="flush-headingOne">
            <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            My Personal portfolio
            </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">

            Here is some information about my background.
I have completed my graduation from Delhi University in Bsc. Mathematical Sciences.
Currently working as QA-Product Engineer at Crownit and have more than 2 years of experience in Research and Analytics.

I am aware of the challenges that come with each of the roles that one has to deal with in the professional journey. In my past experience I have handled global and domestic clients doing end-to-end work.

            <code> https://gauravsachar123.github.io/sachar-gaurav.github.io/index.html</code>


            </div>
        </div>
        </div>
        <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header" id="flush-headingTwo">
            <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Netflix -Simulation (Clone)
            </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">

                Created a Neflix clone simulation for front end, including profile set ups and movies as per selected profile. <code>https://gauravsachar123.github.io/netflix-clone.github.io/home.html </code> 
            </div>
        </div>
        </div>
        <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header" id="flush-headingThree">
            <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Python Code for Language Translator
            </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body"> 
                        
            
            Used python modules for making a project on language translator which returns the translated text into written format as well an audio file for better pronunciations. <code> https://github.com/gauravsachar123/pywhatkit_work</code> 
                        
            </div>
        </div>
        </div>
    </div>
    <button className="btn btn-primary my-3" onClick={toggledark}>{textld}</button>
  </div>

  
  )
}
