import React, {useState} from 'react';
import './App.css';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core'
import Message from './component/Message';

function App() {

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(['hello', 'whats upp'])

  const sendMessage = (event) =>{
    // all logic to send message

    event.preventDefault()  //to prvent refrash
    setMessages([...messages, input])
    setInput('')

  }

  return (
    <div className="App">
     <h1>CHAT iT !!</h1>

      <form>
      <FormControl>
        <InputLabel>Enter text</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
        <Button disabled={!input} type='submit' onClick={sendMessage} variant="contained" color="primary">Send Message</Button>
      </FormControl>
      </form>

      {
         messages.map((message,index) => (
           <Message key={index} message={message}/>
         ))
      }

    </div>
  );
}

export default App;
