import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [userName, setUserName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserName(inputValue)
    setInputValue("")
  };

  const handleChange = (e) => {
    setInputValue(e.target.value)
  };

  return (
    <div className='App'>
      <article>
        <h1>Welcome to the Guessing Game:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='inputValue'>Enter Name</label>
        <input
          type='text'
          id='inputValue'
          name='inputValue'
          value={inputValue}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
      </article>
      <article>
        <h1>{userName}</h1>
      </article>
    </div>
  );
}

export default App;
