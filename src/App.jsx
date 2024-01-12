import CreateTodo from "./components/CreateTodo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__create-todo">
        <CreateTodo />
      </div>
      <div className="app__todo-list">
        <TodoList />
      </div>
      <div className="app__footer">
        <Footer />
      </div>
      <p className="app__drag-drop">Drag and drop to reorder list</p>
    </div>
  );
}

export default App;
