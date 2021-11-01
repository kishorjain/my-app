import React, { useState } from 'react';


export default function Form(props) {
    const [text, setText] = useState("");
    const uppercase = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnchange = (event)=>{
        setText(event.target.value)
    }
    const handleClear = ()=>{
        setText("")
    }
    return (
        <>
        <div className="container" >
            <div className="mb-3" >
                <label htmlFor="exampleInputEmail1" className="form-label">{props.heading}</label>
                <textarea className="form-control" value={text} onChange={handleOnchange} name="data" style = {{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'light':'darks'}} rows="8"/>
            </div>
                <button type="submit" className="btn btn-primary mx-2" onClick={uppercase}>Convert To Uppercase</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
        </div>
        <div className="container my-3"style = {{color:props.mode === 'dark'?'light':'darks'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words entered {text.length} characters in text </p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Enter text in Text area to see preview'}</p>
        </div>
        </>
    )
}
