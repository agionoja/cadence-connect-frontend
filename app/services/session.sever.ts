import { createCookieSessionStorage } from "@remix-run/node";

type SessionData = {
  token: string;
};

type SessionFlashData = {
  error: string;
};

const sessionStorage = createCookieSessionStorage<
  SessionData,
  SessionFlashData
>({
  cookie: {
    name: "__session",
    httpOnly: true,
    maxAge: 60 * 60,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret1"],
    secure: process.env.NODE_ENV === "production",
  },
});

export const { getSession, commitSession, destroySession } = sessionStorage;
