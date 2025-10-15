import Button from "./ui/Button";
import Form from "./ui/Form";
import Input from "./ui/Input";

export default function SignInForm() {
  return (
    <Form>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <Input placeholder="Enter email" name="email" id="email" type="text" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <Input
          placeholder="Enter Password"
          name="password"
          id="password"
          type="password"
        />
      </div>
      <div className="mt-2">
        <Button></Button>
      </div>
    </Form>
  );
}
