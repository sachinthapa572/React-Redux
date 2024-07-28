// TodoSlice (Slice is just the convention To denote that it is the reducer file )

import { createSlice, nanoid } from '@reduxjs/toolkit';
const initialState = {
  todos: [{ id: nanoid(), text: 'this is the best' }],
};

console.log(initialState);

export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addtodo: (state, action) => {
      // return {
      //   ...state,
      //   todos: [...state.todos, action.payload],
      // };
      state.todos.push(action.payload);
    },
    removetodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((currElem) => currElem.id !== action.payload),
      };
    },
    updatetodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((currElem) =>
          currElem.id === action.payload.id ? { ...currElem, text: action.payload.text } : currElem
        ),
      };
    },
  },
});

export const { addtodo, removetodo, updatetodo } = TodoSlice.actions;
export default TodoSlice.reducer;
