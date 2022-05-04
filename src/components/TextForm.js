import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }

  const handleOnChange=(event)=>{
    console.log("on Change");
    setText(event.target.value);
  }

  

  const [text,setText]=useState('Enter the text');
  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label">Example textarea</label>
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            <button className='btn btn-primary my-2 mx-2' onClick={handleUpClick}>Convert to Upper Case</button>
            <button className='btn btn-primary my-2 mx-2' onClick={handleLoClick}>Convert To Lower Case</button>
        </div>
      </div>
      <div className="contailer my-3">
        <h1>Your Text summary</h1>
        <p>{text.split(" ").length} words and {text.length} character.</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}

