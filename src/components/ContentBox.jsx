import PropTypes from "prop-types";

ContentBox.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingBottom: PropTypes.string,
};

export default function ContentBox({
  children,
  padding = "p-4",
  paddingTop = "",
  paddingBottom = "",
}) {
  const p = `${padding} ${paddingTop} ${paddingBottom}`;
  return <div className={`$ rounded-lg bg-gray ${p}`}>{children} </div>;
}
