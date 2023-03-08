import './Guessform.css'

import {useState} from 'react';

const GuessForm = ({submitForm}) => {
  //state with the post form object
  const [postForm, setPostForm] = useState({name: '', description: ''})


  // handle change to update postForm
    const handleChange = (e) => {
    const newPostForm = {}
  // this is the value in <input /> and <textarea />
    const newValue = e.target.value

  // this is the name in <input /> and <textarea />
    const key = e.target.name
    newPostForm[key] = newValue
    setPostForm({...postForm, ...newPostForm})
  }
  
  const handleOnSubmit = (e) => {
    //all about event prevent default: https://www.w3schools.com/jsref/event_preventdefault.asp
    e.preventDefault()
    submitForm(postForm)
}
  return(
    <div>
    <form onSubmit={handleOnSubmit}>  
        <label>
            What do you think is this artists best song?
        </label>
        <input className='box' value={postForm.name} type="text" onChange={handleChange} name="name" placeholder="Guess the song here"/>
        <input type="submit" value="Submit" className="action-button" />
    </form>
    </div>
  )
}

export default GuessForm
