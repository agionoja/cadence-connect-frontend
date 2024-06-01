import MainHeader from "~/components/main-header";

export default function Header() {
  return (
    <MainHeader bgClass={"bg-header-bg"}>
      <div className="flex flex-col gap-4">
        <h1
          className={
            "text-xl font-semibold sm:text-2xl md:text-3xl lg:text-5xl"
          }
        >
          Discover Your Dream Event, From Concept to Reality Welcome to Cadence
          Connect!
        </h1>
        <h2 className={"font-medium sm:text-lg md:text-xl lg:text-2xl"}>
          Your Vision, Our Expertise, Let's Create Unforgettable Moments
          Together.
        </h2>
      </div>
    </MainHeader>
  );
}
