import { useState } from "react";
import { Logo } from "./Logo";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavigationMobileMenu } from "./NavigationMobileMenu";
import { config } from "../libs/config";
import { TbMinus, TbPlus } from "react-icons/tb";
import { NavigationExtendedMenu } from "./NavigationExtendedMenu";

export const Navigation = () => {
  const [mobileMenuState, setMobileMenuState] = useState(false);

  const handleClick = () => {
    setMobileMenuState(!mobileMenuState);
  };

  return (
    <nav className=" bg-white w-full flex flex-col relative ">
      <div
        id="main-nav"
        className={`flex desktop:px-10 px-5 z-50 border-b-2 lg:text-black flex-col ${
          !mobileMenuState
            ? "border-b-[#F3F3F3] text-black"
            : "border-b-transparent lg:border-b-[#F3F3F3] text-white"
        }`}
      >
        <div className="flex w-full h-[70px] items-center justify-between">
          <div className="flex desktop:gap-10 gap-5 items-center">
            <Logo width="60" />
            <div className="hidden lg:flex desktop:gap-10 gap-5 desktop:text-lg font-medium">
              {config.menuItem.map((item) => {
                return (
                  <h4 key={item.name}>
                    <a href={item.path}>{item.name}</a>
                  </h4>
                );
              })}
              <button
                className="text-[#FF764D] flex items-center gap-2"
                onClick={handleClick}
              >
                <h4>More</h4>
                {!mobileMenuState ? <TbPlus /> : <TbMinus />}
              </button>
            </div>
            <button
              className="flex items-center gap-2 lg:hidden"
              onClick={handleClick}
            >
              <p className="font-medium text-xl">Menu</p>
              <IoMdArrowDropdown
                className={`transition-transform ${
                  !mobileMenuState ? "rotate-0" : "rotate-180"
                }`}
              />
            </button>
          </div>
          <ul className="desktop:text-lg text-sm lg:flex desktop:gap-10 gap-5 hidden">
            <li className="text-[#FF764D] font-medium">Try Live for free</li>
            <li>Log in or register</li>
          </ul>
        </div>

        <NavigationExtendedMenu mobileMenuState={mobileMenuState} />
      </div>

      <NavigationMobileMenu mobileMenuState={mobileMenuState} />
      <div
        id="sub-nav"
        className="flex px-5 desktop:px-10 text-sm py-4 gap-5 md:gap-10 font-medium"
      >
        <p className="text-[#FF764D]">About</p>
        <p>Jobs</p>
        <p>Apprenticeship</p>
      </div>
    </nav>
  );
};
