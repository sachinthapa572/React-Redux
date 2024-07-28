import { useState } from 'react';
import Addtodo from '../components/Addtodo';
import Todo from '../components/Todo';

function TodoMain() {
  const [todoid, setTodoid] = useState(null);

  return (
    <>
      <Addtodo todoid={todoid} setTodoid={setTodoid} />

      <Todo setTodoid={setTodoid} />
    </>
  );
}

export default TodoMain;
