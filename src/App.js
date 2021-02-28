import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Enter Your Username.'));
  }, [] )

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id:doc.id, message: doc.data()})))
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      username:username,
      message:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() 
    });

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
      <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} message={message} username={username} />
        ))
      }
      </FlipMove>
    </div>
  );
}

export default App;
