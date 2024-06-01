// import { Authenticator } from "remix-auth";
// import { FormStrategy } from "remix-auth-form";
// import { sessionStorage } from "~/services/session.sever";
//
// type User = {
//   id: string;
//   email: string;
//   password: string;
//   name: string;
// };
//
// export const authenticator = new Authenticator<User>(sessionStorage);
// export async function login(email: string, password: string) {
//   const response = await fetch("http://localhost:8080/login");
//   return await response.json();
// }
//
// authenticator.use(
//   new FormStrategy(async ({ form }) => {
//     const password = form.get("password");
//     const email = form.get("email");
//     return await login(email, password);
//   }),
//   "user-pass",
// );
