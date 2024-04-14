import { createContext } from "react";
import PropTypes from "prop-types";

export const SignFormContext = createContext();

export default function SignFormProvider({ children }) {
  return (
    <SignFormContext.Provider value={null}>{children}</SignFormContext.Provider>
  );
}

SignFormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
