import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


// import './TextForm.css'

import './App.css';
import { useState } from 'react';
//let url=""
function App() {

    // var z=document.querySelector('.mic');
    // z.addEventListener('click',()=>{
    //     document.querySelector('.speak').style.opacity=1;

    // });
    let Switchmodes=''

    const [mode,setmode] = useState('dark');




    

    let togglemode=()=>{

        if (mode==='light'){
            setmode('dark');
            document.getElementById('Switchmodes').style.color='white';
            document.body.style.backgroundColor='#447779';
            document.body.style.color='white';
            showalert("Dark mode has been Enabled!","success");
            document.title="Dark mode";
            
        }else{
            setmode('light');
            document.getElementById('Switchmodes').style.color='black';
            document.body.style.backgroundColor='#e3e2f9';
            document.body.style.color='black';
            showalert("Light mode has been Enabled!","success");
            document.title="Light mode";
            
        }

    };


    const [alert,setalert] = useState(null);

    let showalert=(message,type)=>{

       setalert( {msg : message,
        type : type})

        setTimeout(() => {

            //let z=document.getElementById("alertr").style.transform = "translate(0px,-2000px)";

            setalert(null)
            
        }, 2000);

    


    }
    let stylebtn ={
        backgroundColor : ""
    }

    let bodycolored = document.body.style.backgroundColor;

    if (bodycolored==='red'){
        document.querySelectorAll('.btn').backgroundColor='maroon';
    }
    else if (bodycolored==='blue'){
        stylebtn.backgroundColor='darkblue';
    }
    else if (bodycolored==='yellow'){
        stylebtn.backgroundColor='orange';
    }
    else if (bodycolored==='green'){
        stylebtn.backgroundColor='lightgreen';
    }



    
    return ( 

<>

        <Navbar sharma = "Text-Play by gaurav" url2 = 'https://reactjs.org/docs/components-and-props.html' mode={mode} togglemode={togglemode} Switchmodes={Switchmodes}/>

        <Alert alert={alert}/>


        <div className="container my-3">
                
                <TextForm headingText="Enter the TEXTT to analyse it."/>

                <About/>
            </div>







        {/* <Router>

        <Navbar sharma = "Text-Play by gaurav" url2 = 'https://reactjs.org/docs/components-and-props.html' mode={mode} togglemode={togglemode} Switchmodes={Switchmodes}/>

            <Alert alert={alert}/>

            

        <div className="container my-3">

        <Switch>

        <Route exact path="/"> <TextForm headingText="Enter the text to analyse it."/>  </Route>


          <Route exact path="/text"> <TextForm headingText="Enter the TEXTT to analyse it."/>  </Route>
          
          <Route exact path="/about"> <About/> </Route>
        </Switch>

        </div>
    


        </Router> */}






        {/* <div className="container my-3">
            


            <About/>
        
        </div> */}

</>
    );
}

export default App;