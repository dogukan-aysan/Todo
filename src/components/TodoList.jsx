import { useContext } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Context } from "../context/Context";
import Todo from "./Todo";

function TodoList() {
  const { todos, filter, dispatch } = useContext(Context);

  let filteredTodos = todos;
  if (filter !== "all") {
    filteredTodos = todos.filter(
      (todo) => todo.isCompleted === (filter === "active" ? false : true)
    );
  }

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) return; // prevent dropping an element on itself
    const oldIndex = todos.findIndex((todo) => todo.id === active.id); // element that we are dragging
    const newIndex = todos.findIndex((todo) => todo.id === over.id); // element that we are dragging into
    const updatedTodos = arrayMove(todos, oldIndex, newIndex);
    dispatch({ type: "todos/update", payload: updatedTodos });
  };

  return (
    <div className="todo-list">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={todos} strategy={verticalListSortingStrategy}>
          {filteredTodos.map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
export default TodoList;
