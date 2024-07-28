import { useSelector, useDispatch } from 'react-redux';
import { removetodo } from '../redux/Todo/TodoSlice';
// import { addtodo } from '../redux/Todo/TodoSlice';

// eslint-disable-next-line react/prop-types
function Todo({ setTodoid }) {
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);
  const dispatch = useDispatch();
  const handelupdate = (id) => {
    setTodoid(id);
    // dispatch(removetodo(id));
  };
  return (
    <>
      <div>
        {todos.map((currelem) => (
          <li key={currelem.id}>
            {currelem.text}
            <button onClick={() => dispatch(removetodo(currelem.id))}>Remove🤷‍♀️</button>
            <button onClick={() => handelupdate(currelem.id)}>Update❤️💕</button>
          </li>
        ))}
      </div>
    </>
  );
}

export default Todo;
