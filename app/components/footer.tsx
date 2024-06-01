import footerPatter from "~/assets/images/footer.png";

export default function Footer() {
  return (
    <footer className={""}>
      <div className="mx-auto h-14 w-full justify-center px-4 lg:h-[11.625rem] lg:w-4/5">
        <img
          className={"w-full object-contain"}
          src={footerPatter}
          alt="Footer"
        />
      </div>
      <div></div>
    </footer>
  );
}
