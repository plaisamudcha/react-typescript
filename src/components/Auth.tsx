import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Auth() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="text-right">
        <button>Sign Out</button>
      </div>
      <TodoForm mode="update" todoId="1" title="Sample Todo" />
      <TodoList />
    </div>
  );
}
