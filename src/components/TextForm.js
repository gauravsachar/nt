import React, { useState } from 'react'
import './TextForm.css'


export default function TextForm(props) {



    // const jsonbeauty=(json)=>{


    //     setText(JSON.stringify(text));


    // }

    



 


    const handleupclick= ()=>{
        console.log("UpperCase was clicked");
        setText(text.toUpperCase());
    }
    const handleloclick= ()=>{
        console.log("Lower Case was clicked");
        setText(text.toLowerCase());
    }
    const changeHandle= (event)=>{
        console.log("It was changed");
        setText(event.target.value);
    }
    var texttospeech= ()=>{
        let voices = window.speechSynthesis.getVoices();
        var msg = new SpeechSynthesisUtterance();
        msg.voice=voices[10];
        msg.text = text;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(msg);
        
            
    }

    const [text, setText] = useState("");

    let wordLimit=0;

    if (text===''){
        console.log("should be null");
        wordLimit=0;
    }

    else if (text===' '){
        console.log("should be null");
        wordLimit=0;
    }
    else{
        let text2=text.replace(/\s+/g, ' ').trim()
        wordLimit=text2.split(" ").length;
    }

    

    //text= "gaurav" // incorrect way to change or update value
    //setText("gaurav") // Correct way to change or update value
  return (
    <>
    <div className='container my-5'>
         <div className="mb-3">
            <label htmlFor="myBox" className="form-label">{props.headingText}</label>
            <textarea className="form-control" value={text} onChange={changeHandle} id="myBox" rows="3"></textarea>
            
        </div>
            <button className="btn-primary btn my-3 mx-1" onClick={handleupclick}>upperCase</button>
            {/* <button className="btn-primary btn my-3 mx-1" onClick={jsonbeauty}>Json Beautifier</button> */}
            <button className="btn-primary btn my-3 mx-2" onClick={handleloclick}>Lower Case</button>
            <button className="btn-primary btn my-3 mx-2 gmic" onClick={texttospeech}>Text to speech 
                <img src="https://s3-ap-southeast-1.amazonaws.com/blogimages.crownit.in/1644546037_clipart2537840.png" alt="" className="gspeak" />
            </button>

    </div>

    <div className='container my-3'>
        <b>Brother</b> Your text summary
        <p id='nullify'>{wordLimit} words, {text.length} characters</p>
    
    </div>
    {/* <div className='container my-3 json'>
        <b>Json Parsed</b>
        <p id='nullify'> {JSON.stringify(text, undefined, 4)}</p>

    
    </div> */}
    </>
  )
}
