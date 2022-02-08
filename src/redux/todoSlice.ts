import { Action, createSlice, Dispatch, Reducer } from "@reduxjs/toolkit";
import axios from "axios";
import { ThunkAction } from "redux-thunk";

interface TodoType {
  getTodoData: Data[];
}

export interface Data {
  id: string;
  message: string;
  name: string;
}

const initialState: TodoType = {
  getTodoData: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state = action.payload;
    },

    listTodo: (state: TodoType, action) => {
      state.getTodoData = action.payload;
    },

    deleteTodo: (state, action) => {
      console.log(action.payload);
      state.getTodoData = action.payload;
    },
  },
});

export const { addTodo, listTodo, deleteTodo } = todoSlice.actions;

export const todoReducers: Reducer<TodoType> = todoSlice.reducer;

export const todoDatasSelector = (state: any) => state.todos.getTodoData;

export function addFunction(
  data: string
): ThunkAction<void, any, null, Action<string>> {
  return async (dispatch: Dispatch) => {
    axios
      .post("http://localhost:3001/todos", {
        name: data,
        message: data,
      })
      .then((response) => {
        dispatch(addTodo(response.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

export function getFunction(): ThunkAction<void, any, null, Action<string>> {
  return async (dispatch: Dispatch) => {
    axios
      .get("http://localhost:3001/todos")
      .then((response) => {
        dispatch(listTodo(response.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

export function deleteFunction(
  id: String
): ThunkAction<void, any, null, Action<string>> {
  return async (dispatch: Dispatch) => {
    axios
      .delete(`http://localhost:3001/todos/${id}`)
      .then((response) => {
        dispatch(deleteTodo(response.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
