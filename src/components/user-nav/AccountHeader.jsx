import PropTypes from "prop-types";
import profile from "../../assets/images/profile.png";

AccountHeader.propTypes = {
  children: PropTypes.node.isRequired,
  profileImg: PropTypes.string,
};

export default function AccountHeader({ children, profileImg = profile }) {
  return (
    <div
      className={
        "border-b-2 border-lightGrey pb-4 md:h-full  md:min-h-full md:max-w-[6.4375rem] md:border-2 md:pb-0 md:pt-8"
      }
    >
      <header
        className={
          "flex items-center justify-between gap-6  md:flex-col md:items-center md:justify-center"
        }
      >
        <img
          className={
            "h-16 w-16 rounded-full bg-gray object-cover md:h-20 md:w-20"
          }
          src={String(profileImg)}
          alt=""
        />
        {children}
      </header>
    </div>
  );
}
