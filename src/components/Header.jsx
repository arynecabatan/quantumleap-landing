import { HeroSVG } from "./Logo";

export const Header = () => {
  return (
    <div className="flex-grow grid place-items-center px-5 lg:px-16">
      <header className="h-full w-full grid place-items-center bg-[url('/header.jpg')] bg-no-repeat bg-cover bg-center text-white">
        <div className="w-52 md:w-[430px]">
          <HeroSVG />
        </div>
      </header>
    </div>
  );
};
