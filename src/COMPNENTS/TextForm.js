import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleLowClick = () => {
        // console.log("lower was clicked"+ text );
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lower case", "success");
    }
    const handleUpClick = () => {
        // console.log("lower was clicked"+ text );
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upper case", "success");
    }
    const clearText = () => {
        let newText = ""
        setText(newText);
        props.showAlert("text cleared", "success");
    }
    const handleExtraSpaces=()=> {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("extra spaces removed", "success");
    }

    const handleCopy= () => {
       let newText=document.getElementById("myBox");
       newText.select();
       navigator.clipboard.writeText(newText.value);
       props.showAlert("text copied", "success");
    }

    const handdleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");

    return (
        <>
            <div>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handdleOnChange} id="myBox" rows="8" placeholder='enter your text'></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}> Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}> Convert to lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
            </div>
            <div className='container my-2'>
                <h2>your text summary:</h2>
                <p>number of words {text.split(' ').filter(element=>{return element.length!==0}).length} number of characters {text.length}</p>
                <p>Time required to read:{0.008 * text.split(' ').length}</p>
                <h3>Preview</h3>
                <p>{text}</p>

            </div>
        </>
    )
}
