import Button from './ui/Button';
import Form from './ui/Form';
import Input from './ui/Input';

export default function TodoForm() {
  return (
    <Form>
      <div className="flex flex-col gap-1">
        <label htmlFor="">Title</label>
        <Input />
      </div>
      <div className="mt-2">
        <Button></Button>
      </div>
    </Form>
  );
}
