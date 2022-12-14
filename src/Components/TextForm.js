import React, {useState} from 'react'

export default function TextForm() {
    const handleupperClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handlelowerClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick=()=>{
        let newText = '';
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

   const [text, setText] = useState('')
  return (
    <div>
        <h1 className='my-3 text-light bg-dark'>TEXT CONVERTOR</h1>
        <div className='container'>
            <h3 className='align text-left mt-5'>Enter text to convert</h3>
            <textarea className='form-control p-3' rows={'10'} value={text} onChange={handleOnChange} 
              placeholder='Enter Text Here' ></textarea>
            <button className='btn btn-primary btn-large my-3 mx-2' onClick= 
             {handleupperClick}>Uppercase</button>
            <button className='btn btn-primary btn-large my-3 mx-2' onClick= 
             {handlelowerClick}>Lowercase</button>
            <button className='btn btn-primary btn-large my-3 mx-2' onClick={handleClearClick}>Clear 
             Text</button>
            <button className='btn btn-primary btn-large my-3 mx-2'>Copy Text</button>
        </div>
        <div className="container my-3">
            <h2 className='text-left mt-5'>Text Summery</h2>
            <p className='align text-left mt-2'>{text.split(' ').length} words</p>
            <p className='align text-left mt-1'>{text.length} characters</p>
            <h2 className='align text-left mt-3'>Preview</h2>
            <p className="text-primary text-left">{text}</p>
        </div>
    </div>
  );
}
