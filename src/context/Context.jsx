import { useReducer } from "react";
import { createContext } from "react";

const initialState = {
  todos: [],
  filter: "all",
  isDark: false,
  leftoverCount: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "todos/update":
      return {
        ...state,
        todos: action.payload,
        leftoverCount: action.payload.filter((todo) => !todo?.isCompleted)
          .length,
      };
    case "todos/clear":
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.isCompleted),
      };
    case "toggleTheme":
      return { ...state, isDark: !state.isDark };
    case "filterChange":
      return { ...state, filter: action.payload };
    case "updateLeftoverCount":
      return { ...state, leftoverCount: action.payload };
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const Context = createContext();

function ContextProvider({ children }) {
  const [{ todos, isDark, filter, leftoverCount }, dispatch] = useReducer(
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
        leftoverCount,
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
