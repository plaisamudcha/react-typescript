import {
  useState,
  type ChangeEventHandler,
  type FormEventHandler,
} from "react";
import Button from "./ui/Button";
import Form from "./ui/Form";
import Input from "./ui/Input";
import z from "zod";
import axios from "../config/axios";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const signUpSchema = z
  .object({
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// type FormInput = {
//   email: string;
//   password: string;
//   confirmPassword: string;
// };

type FormInput = z.infer<typeof signUpSchema>;

const initialInput: FormInput = {
  email: "",
  password: "",
  confirmPassword: "",
};

// {email?: string[], password?: string[], confirmPassword?: string[]}
type FormInputError = Partial<Record<keyof FormInput, string[]>>;

export default function SignUpForm() {
  //   const [loading, setLoading] = useState<boolean>(false);
  const [formInput, setFormInput] = useState<FormInput>(initialInput);
  const [formError, setFormError] = useState<FormInputError>({});

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormError({});
    const { name, value } = e.target;
    if (name) {
      setFormInput((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const { success, data, error } = signUpSchema.safeParse(formInput);

    if (!success) {
      setFormError(z.flattenError(error).fieldErrors);
      return;
    }

    try {
      await axios.post("/auth/signup", data);
      toast.success("Account created successfully");
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message);
        return;
      }
      toast.error("Internal server error");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <Input
          placeholder="Enter email"
          name="email"
          id="email"
          onChange={handleChange}
        />
        {formError.email && (
          <>
            <p className="text-red-500 text-sm">{formError.email[0]}</p>
          </>
        )}
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
        {formError.password && (
          <>
            <p className="text-red-500 text-sm">{formError.password[0]}</p>
          </>
        )}
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
        {formError.confirmPassword && (
          <>
            <p className="text-red-500 text-sm">
              {formError.confirmPassword.join(", ")}
            </p>
          </>
        )}
      </div>
      <div className="mt-2">
        <Button className="w-full">
          <span className="font-medium">Create account</span>
        </Button>
      </div>
    </Form>
  );
}
