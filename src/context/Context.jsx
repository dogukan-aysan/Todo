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
    case "toggleTheme":
      return { ...state, isDark: !state.isDark };
    default: {
      throw Error("Unknown action: " + action.type);
    }
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
    <Context.Provider
      value={{ todos, isDark, addNewTodo, removeTodo, dispatch }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
