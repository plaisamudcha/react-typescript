import z, { ZodError } from "zod";
import Button from "./ui/Button";
import Form from "./ui/Form";
import Input from "./ui/Input";
import {
  useState,
  type ChangeEventHandler,
  type FormEventHandler,
} from "react";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import axios from "../config/axios";
import { setAccessToken } from "../utils/token";
import { useAuth } from "../stores/useAuth";

const signInSchema = z.object({
  email: z.string().min(1, "email is required"),
  password: z.string().min(1, "password is required"),
});

type SignInFormData = z.infer<typeof signInSchema>;

const initialInput: SignInFormData = {
  email: "",
  password: "",
};

const successResponseSchema = z.object({
  access_token: z.string(),
});

export default function SignInForm() {
  const [formInput, setFormInput] = useState<SignInFormData>(initialInput);
  const [formError, setFormError] = useState<
    Partial<Record<keyof SignInFormData, string[]>>
  >({});
  const { setIsLogged } = useAuth();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormError({});
    const { name, value } = e.target;
    setFormInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const { success, data, error } = signInSchema.safeParse(formInput);

    if (!success) {
      setFormError(z.flattenError(error).fieldErrors);
      return;
    }

    try {
      const res = await axios.post("/auth/signin", data);
      const result = successResponseSchema.parse(res.data);
      setAccessToken(result.access_token);
      toast.success("Signed in successfully");
      setIsLogged(true);
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message);
        return;
      }
      if (err instanceof ZodError) {
        toast.error("invalid response format");
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
          type="text"
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
          placeholder="Enter Password"
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
      <div className="mt-2">
        <Button className="w-full">
          <span className="font-medium">Sign In</span>
        </Button>
      </div>
    </Form>
  );
}
