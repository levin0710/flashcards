import './Guessform.css'

import {useState} from 'react';

const GuessForm = ({submitForm}) => {
  //state with the post form object
  const [inputValue, setInputValue] = useState('');

  const[correct, setCorrect] = useState(null);

  // handle change to update postForm
    const handleChange = (e) => {
     setInputValue(e.target.value);
     setCorrect(null)
  }
  
  const handleOnSubmit = (e) => {
    //all about event prevent default: https://www.w3schools.com/jsref/event_preventdefault.asp
    e.preventDefault()
    const value = submitForm(inputValue)
    setCorrect(value);
    setInputValue('');
}
  return(
    <div onLoad={() => setInputValue('')}>
    <form onSubmit={handleOnSubmit}>  
        <label>
            What do you think is this artists best song?
        </label>
        <input className={`box ${correct == null ? '' : correct ? 'correct' : 'wrong'}`} name="name" onChange={handleChange} placeholder="Guess the song here" value={inputValue}/>
        <input type="submit" value="Submit" className="action-button" />
    </form>
    </div>
  )
}

export default GuessForm
