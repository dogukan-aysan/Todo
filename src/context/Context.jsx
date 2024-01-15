import { useReducer } from "react";
import { createContext } from "react";

const initialState = {
  todos: [],
  filter: "all",
  isDark: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "todos/update":
      return { ...state, todos: action.payload };
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
  const [{ todos, isDark, filter }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const addNewTodo = (newTodo) => {
    todos.push(newTodo);
    dispatch({ type: "todos/update", payload: todos });
  };
  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    dispatch({ type: "todos/update", payload: updatedTodos });
  };

  const toggleTodoComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    dispatch({ type: "todos/update", payload: updatedTodos });
  };

  return (
    <Context.Provider
      value={{
        todos,
        isDark,
        filter,
        addNewTodo,
        removeTodo,
        toggleTodoComplete,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
