import { useActionData } from "@remix-run/react";
import { ActionFunctionArgs, json } from "@remix-run/node";

export function action({ request }: ActionFunctionArgs) {
  console.log(request.formData());
  return json({
    name: "Divine",
    stack: "Frontend",
    hobby: "Music",
  });
}

export default function AuthLayout() {
  const user = useActionData<typeof action>();
  return (
    <>
      <h1>This is the auth layout</h1>
    </>
  );
}
