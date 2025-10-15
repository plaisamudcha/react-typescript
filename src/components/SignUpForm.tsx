import Button from './ui/Button';
import Form from './ui/Form';
import Input from './ui/Input';

export default function SignUpForm() {
  return (
    <Form>
      <div className="flex flex-col gap-1">
        <label htmlFor="">Email</label>
        <Input />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="">Password</label>
        <Input />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="">Confirm password</label>
        <Input />
      </div>
      <div className="mt-2">
        <Button></Button>
      </div>
    </Form>
  );
}
