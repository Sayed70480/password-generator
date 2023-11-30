import React, { useState, useCallback, useEffect , useRef} from 'react';
import History from './History.jsx';
import passwordGenerator from './passwordGenerator.css';
import Form from 'react-bootstrap/Form';
import { AiOutlineSync, AiOutlineArrowRight } from 'react-icons/ai';
import Strength from './Strength.jsx';
import { uppercase, lowercase, numbers, symboles } from './Characters.jsx';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [uppercaseAllowed, setUppercaseAllowed] = useState(true);
  const [lowercaseAllowed, setLowercaseAllowed] = useState(true);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [symbolesAllowed, setSymbolesAllowed] = useState(true);
  const [strength, setStrength] = useState(12);
  const [copypassword, setCopypassword] = useState({});
  const [count, setCount] = useState(4);
  const [lastcheck,setLastcheck] = useState(false)


//  for Checkbox
  const handcheck = (e) =>{
    setLastcheck((pre)=>!pre)

    const name = e.target.name;
    
    if(name === "upercase"){
      if(uppercaseAllowed && count > 1){
        setUppercaseAllowed(false)
        setCount((pre)=>pre-1)
      }
      else if(!uppercaseAllowed && count <=4){
        setUppercaseAllowed(true)
        setCount((pre)=>pre+1)
      }
     
    }
    if(name === "numbers"){
      if(numberAllowed && count > 1){
        setNumberAllowed(false)
        setCount((pre)=>pre-1)
      }
      else if(!numberAllowed && count <=4){
        setNumberAllowed(true)
        setCount((pre)=>pre+1)
      }
      
    }
    if(name === "lowercase"){
      if(lowercaseAllowed && count > 1){
        setLowercaseAllowed(false)
        setCount((pre)=>pre-1)
      }
      else if(!lowercaseAllowed && count <=4){
        setLowercaseAllowed(true)
        setCount((pre)=>pre+1)
      }
    }
    if(name === "symboles"){
      if(symbolesAllowed && count > 1){
        setSymbolesAllowed(false)
        setCount((pre)=>pre-1)
      }
      else if(!symbolesAllowed && count <=4){
        setSymbolesAllowed(true)
        setCount((pre)=>pre+1)
      }
      
    }
   
  }
  // For copy button
  const passwordRef = useRef(null);
  const copyPasswordToClipboard = useCallback((e) => {
    e.preventDefault();
    
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password); // Copy the password
    setCopypassword({"value":password}); // Update the copied password state

  }, [password]);

  // for password Generator
  const handlepasswordGenerator = useCallback(() => {
    let Characterslist = '';
    if (uppercaseAllowed) {
      Characterslist = Characterslist + uppercase;
    }
    if (lowercaseAllowed) {
      Characterslist = Characterslist + lowercase;
    }
    if (numberAllowed) {
      Characterslist = Characterslist + numbers;
    }
    if (symbolesAllowed) {
      Characterslist = Characterslist + symboles;
    }
    let randompassword = '';
    let passlength = Characterslist.length;
    for (let i = 0; i < strength; i++) {
      const passwordIndex = Math.round(Math.random() * passlength);
      randompassword = randompassword + Characterslist.charAt(passwordIndex);
    }
    setPassword(randompassword);
  }, [uppercaseAllowed, lowercaseAllowed, numberAllowed, symbolesAllowed,strength,lastcheck]);

  useEffect(() => {
    handlepasswordGenerator();
  }, [strength, uppercaseAllowed, lowercaseAllowed, numberAllowed, symbolesAllowed, handlepasswordGenerator,lastcheck]);





  return (
    <div className='password-form-section'>
      <Form className='form-section'>
          {/* passwordGenerator input feild */}
        <Form.Group className="mb-3 form-input">
          <Form.Control id="input"
            value={password}
            ref={passwordRef}
            readOnly
          />
          {/* strength and refresh icons */}
          <div className='input-icons'><Strength strength={strength} />
            <AiOutlineSync className='refresh' onClick={handlepasswordGenerator} />
            </div>
        </Form.Group>
        {/* copy button */}
        <button
          type='copy'
          className='copy-btn'
          onClick={copyPasswordToClipboard}>copy password_
          <AiOutlineArrowRight className='arrow-icon' />
        </button>
        {/* range field */}
        <input
          type='range'
          id="range"
          value={strength}
          min='1' max='30'
          onChange={(e) => { setStrength(e.target.value) }} 
        
          />
       
        {/* checkbox  field*/}
       <div className='check-box'>
    
       <Form.Group className="check-box-lift-side">
          <Form.Check
            type="checkbox"
            name = "upercase"
            checked={uppercaseAllowed}
            label="upercase latters"
            onClick={handcheck}
            readOnly
            className="check-box"
          />
         
            <Form.Check
            type="checkbox"
            name = "numbers"
            checked={numberAllowed}
            label="numbers"
            onClick={handcheck}
            className='numbers check-box'
            readOnly
          />
        </Form.Group>
        <Form.Group className="check-box-right-side">
        <Form.Check
            type="checkbox"
            name = "lowercase"
            checked={lowercaseAllowed}
            label="lowercase latters"
            onClick={handcheck}
            className="check-box"
            readOnly
          />
          <Form.Check
            type="checkbox"
            name = "symboles"
            checked={symbolesAllowed}
            label="symboles"
            className='symboles check-box'
            onClick={handcheck}
            readOnly
          />
        </Form.Group>
       </div>
      </Form>
      {/* History component */}
      <History copypassword={copypassword} />
    </div>
  )
}

export default PasswordGenerator
