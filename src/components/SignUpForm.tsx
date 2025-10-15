import {
  useState,
  type ChangeEventHandler,
  type FormEventHandler,
} from "react";
import Button from "./ui/Button";
import Form from "./ui/Form";
import Input from "./ui/Input";

type FormInput = {
  email: string;
  password: string;
  confirmPassword: string;
};

const initialInput: FormInput = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  //   const [loading, setLoading] = useState<boolean>(false);
  const [formInput, setFormInput] = useState<FormInput>(initialInput);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    if (name) {
      setFormInput((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <Input
          placeholder="Enter Email"
          name="email"
          id="email"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <Input
          placeholder="Enter password"
          name="password"
          id="password"
          type="password"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="confirmPassword">Confirm password</label>
        <Input
          placeholder="Enter confirm password"
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          onChange={handleChange}
        />
      </div>
      <div className="mt-2">
        <Button className="w-full">
          <span className="font-medium">Create account</span>
        </Button>
      </div>
    </Form>
  );
}
