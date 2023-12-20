import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  tittle: string;
}

export interface TodoState {
  todo: Todo;
  todos: Todo[];
}

const initialState: TodoState = {
  todo: {
    id: "",
    tittle: "",
  },
  todos: [],
};

export const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reduxAddTodo: (state, action: PayloadAction<Todo>) => {
      state.todo = action.payload;
    },
    reduxAddTodos: (state) => {
      state.todos = [...state.todos, state.todo];
      state.todo = {
        id: "",
        tittle: "",
      };
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id != action.payload);
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      console.log("payload" + action.payload.id);
      state.todos = [...state.todos].map((item) => {
        if (item.id == action.payload.id) {
          return {
            id: action.payload.id,
            tittle: action.payload.tittle,
          };
        }
        return item;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { reduxAddTodo, reduxAddTodos, deleteTodo, editTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
