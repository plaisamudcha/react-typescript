import Button from "./ui/Button";
import Form from "./ui/Form";
import Input from "./ui/Input";

export default function SignUpForm() {
  return (
    <Form>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <Input placeholder="Enter Email" name="email" id="email" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <Input
          placeholder="Enter password"
          name="password"
          id="password"
          type="password"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="confirmPassword">Confirm password</label>
        <Input
          placeholder="Enter confirm password"
          name="confirmPassword"
          id="confirmPassword"
          type="password"
        />
      </div>
      <div className="mt-2">
        <Button>
          <span className="font-medium">Create account</span>
        </Button>
      </div>
    </Form>
  );
}
