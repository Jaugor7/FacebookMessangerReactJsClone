import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel} from '@material-ui/core';
import Message from './Message';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username:"kittu",text:"luv uuu"}, {username:"jaugor", text:"he hee."}]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Enter Your Username.'));
  }, [] )

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, {username: username, text:input}])
    setInput('');
  }

  return (
    <div className="App">
      <h1> Facebook Clone ReactApp</h1>
      <h2> Welcome {username}</h2>

      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} varient="contained" color="primary" type="submit" onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>
      {
        messages.map(message => (
          <Message text={message.text} username={message.username} />
        ))
      }
    </div>
  );
}

export default App;
