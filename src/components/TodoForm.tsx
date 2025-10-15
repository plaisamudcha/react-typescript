import type { FormEventHandler } from "react";
import Button from "./ui/Button";
import Form from "./ui/Form";
import Input from "./ui/Input";
import z from "zod";

type createTodoProps = {
  mode: "create";
};

type updateTodoProps = {
  mode: "update";
  todoId: string;
  title: string;
};

const createTodoFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
});

const updateTodoFormSchema = createTodoFormSchema.partial();

export default function TodoForm(props: createTodoProps | updateTodoProps) {
  const { mode } = props;

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (mode === "create") {
      const result = createTodoFormSchema.parse({
        title: (e.currentTarget.elements[0] as HTMLInputElement).value,
      });
      console.log("Creating todo:", result);
    } else {
      const result = updateTodoFormSchema.parse({
        title: (e.currentTarget.elements[0] as HTMLInputElement).value,
      });
      console.log("Updating todo:", result);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label htmlFor="">Title</label>
        <Input defaultValue={mode === "update" ? props.title : ""} />
      </div>
      <div className="mt-2">
        <Button className="w-full">
          <span className="font-medium">
            {mode === "create" ? "Create" : "Update"}
          </span>
        </Button>
      </div>
    </Form>
  );
}
