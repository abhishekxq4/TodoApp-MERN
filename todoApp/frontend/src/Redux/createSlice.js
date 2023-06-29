import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodoSuccess: (state, action) => {
      state.push(action.payload);
    },
    removeTodoSuccess: (state, action) => {
      return state.filter((todo) => todo._id !== action.payload);
    },
    updateTodoSuccess: (state, action) => {
      const { id, text } = action.payload;
      const todoIndex = state.findIndex((todo) => todo._id === id);
      if (todoIndex !== -1) {
        state[todoIndex] = { ...state[todoIndex], text: text };
      }
    },
    getAllTodoSuccess: (state, action) => {
      return action.payload;
    },
  },
});

export const {
  addTodoSuccess,
  removeTodoSuccess,
  updateTodoSuccess,
  getAllTodoSuccess,
} = todoSlice.actions;
export default todoSlice.reducer;