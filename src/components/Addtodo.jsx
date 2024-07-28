import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addtodo, updatetodo } from '../redux/Todo/TodoSlice';

function Addtodo({ todoid, setTodoid }) {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const inputRef = useRef();

  console.log(todos);

  useEffect(() => {
    inputRef.current.focus();

    if (todoid) {
      console.log('humm');
      const updatevalue = todos.find((todo) => todo.id === todoid);
      console.log(updatevalue);
      if (updatevalue) {
        setInput(updatevalue.text);
        inputRef.current.focus();
      }
    }
  }, [todoid, todos]);

  const handelsubmit = (e) => {
    e.preventDefault();
    if (input === '') return;
    if (todoid) {
      dispatch(updatetodo({ id: todoid, text: input }));
      setTodoid(null);
    } else {
      dispatch(addtodo({ id: nanoid(), text: input }));
    }
    setInput('');
  };
  return (
    <form onSubmit={handelsubmit}>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={todoid ? 'Update the todo ..' : 'Enter the todos ...'}
      />
      <button type="submit">{todoid ? 'Update' : 'Submit'}</button>
    </form>
  );
}

export default Addtodo;
