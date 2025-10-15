export default function TodoList() {
  return (
    <>
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow border-l-8 border-l-green-600">
        <h2>Completed</h2>
        <div className="flex gap-2">
          <button className="p-2 rounded-md cursor-pointer border border-gray-200 hover:bg-gray-50">
            Delete
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow border-l-8 border-l-red-600">
        <h2>Pending</h2>
        <div className="flex gap-2">
          <button className="p-2 rounded-md cursor-pointer border border-gray-200 hover:bg-gray-50">
            Done
          </button>
          <button className="p-2 rounded-md cursor-pointer border border-gray-200 hover:bg-gray-50">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
