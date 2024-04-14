import PropTypes from "prop-types";
import { createContext } from "react";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
  return <UserContext.Provider value={null}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
