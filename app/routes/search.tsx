import { users } from "~/routes/_auth/users";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";

type User = {
  name: string;
  age: number;
  hobby: string;
  email: string;
};

function getAllUsers(): User[] {
  return users;
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query") || "";
  const users = getAllUsers();
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase()),
  );
  return json({ users, filteredUsers });
}

export default function Search() {
  const userFetcher = useFetcher<User[]>();
  console.log(userFetcher.data);
  const [query, setQuery] = useState("");

  useEffect(() => {
    userFetcher.submit({ query }, { method: "GET", action: "/search" });
  }, [query]);

  if (userFetcher.state === "loading") {
    return <>Loading.........</>;
  }

  return (
    <>
      <div className={"h-screen w-full bg-slate-50"}>
        <userFetcher.Form>
          <input type="text" placeholder={"search..."} name={"query"} />
        </userFetcher.Form>
      </div>
    </>
  );
}
