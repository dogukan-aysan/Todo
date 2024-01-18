import CreateTodo from "./components/CreateTodo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <div className="app">
        <div className="app__header">
          <Header />
        </div>
        <div className="app__create-todo">
          <CreateTodo />
        </div>
        <TodoList />
        <div className="app__footer">
          <Footer />
        </div>
        <p className="app__drag-drop-message">Drag and drop to reorder list</p>
      </div>
    </ContextProvider>
  );
}

export default App;
