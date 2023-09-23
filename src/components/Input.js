import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInputValue } from '../features/inputSlice';

function Input() {
  const input = useSelector((store) => store.input.value);

  const dispatch = useDispatch();

  const handleInputValue = (e) => {
    const inputValue = e.target.value;
    dispatch(setInputValue(inputValue));
  };

  const handleSubmit = (e) => {
	e.preventDefault()

  }

  return (
    <>
	<h1>{input}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your Name:
          <input
            type='text'
            value={input}
            onChange={handleInputValue}
          ></input>
        </label>
      </form>
    </>
  );
}

export default Input;
