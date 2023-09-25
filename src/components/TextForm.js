import React, {useState} from 'react'

function TextForm(props) {

    const [Text, setText] = useState("Enter the Text here");

    let handleuppercase = () =>{
        let newtext = Text.toUpperCase();
        setText(newtext);
    }

    let handlelowercase = () =>{
        let newtext = Text.toLowerCase();
        setText(newtext);
    }

    let cleartext = () =>{
        let newtext = " ";
        setText(newtext);
    }

    let onChange = (event) => {
        setText(event.target.value)
    }

  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'#042743':'white'}}>
<div className="my-3">
  <h1>Enter the Text To Analyze</h1>
  <textarea className="form-control" value={Text} id="exampleFormControlTextarea1" rows="10" onChange={onChange} style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='light'?'#042743':'white'}} ></textarea>
</div>
<button className='btn btn-primary my-2 mx-2' onClick={handleuppercase}>Convert to UpperCase</button>

<button className='btn btn-primary my-2 mx-2' onClick={handlelowercase}>Convert to lowercase</button>

<button className='btn btn-primary my-2 mx-2' onClick={cleartext}>Clear Text</button>
    </div>
    <div className="container" style={{color:props.mode==='light'?'#042743':'white'}}>
        <h2>Your Summary</h2>
        <p>{Text.split(" ").length} words and {Text.length} characters</p>
    </div>
    </>
  )
}

export default TextForm
