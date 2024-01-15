import { useReducer } from "react";
import { createContext } from "react";

const initialState = {
  todos: [],
  isDark: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "todos/add":
      return { ...state, todos: action.payload };
    case "todos/remove":
      return;
    case "todos/clear":
      return { ...state, todos: [] };
  }
}

const Context = createContext();

function ContextProvider({ children }) {
  const [{ todos, isDark }, dispatch] = useReducer(reducer, initialState);

  const addNewTodo = (newTodo) => {
    todos.push(newTodo);
    dispatch({ type: "todos/add", payload: todos });
  };
  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    dispatch({ type: "todos/remove", payload: updatedTodos });
  };

  return (
    <ContextProvider value={{ todos, isDark, addNewTodo, removeTodo }}>
      {children}
    </ContextProvider>
  );
}

export { Context, ContextProvider };
