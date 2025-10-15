import Button from './ui/Button';

export default function TodoItem() {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow border-l-8 border-l-green-600">
      <h2>Completed</h2>
      <div className="flex gap-2">
        <Button />
        <Button />
      </div>
    </div>
  );
}
