import { useContext } from "react";
import { UserContext } from "./UserProvider.jsx";
import { SettingsContext } from "./SettingsProvider.jsx";
import { AuthContext } from "./AuthProvider.jsx";
import { SignFormContext } from "./SignFormProvider.jsx";

function checkContext(context, message) {
  if (!context) {
    throw new Error(message);
  }
  return context;
}

export function useUser() {
  return checkContext(
    useContext(UserContext),
    "SettingsContext was used outside the SettingsProvider",
  );
}

export function useSettings() {
  return checkContext(
    useContext(SettingsContext),
    "SettingsContext was used outside the SettingsProvider",
  );
}

export function useAuth() {
  return checkContext(
    useContext(AuthContext),
    "AuthContext was used outside the AuthProvider",
  );
}

export function useSignForm() {
  return checkContext(
    useContext(SignFormContext),
    "SignFormContext was used outside the SignFormProvider",
  );
}
