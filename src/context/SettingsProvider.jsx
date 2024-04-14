import PropTypes from "prop-types";
import { createContext } from "react";

export const SettingsContext = createContext(null);

export default function SettingsProvider({ children }) {
  return (
    <SettingsContext.Provider value={null}>{children}</SettingsContext.Provider>
  );
}

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
