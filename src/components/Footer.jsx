import { Logo } from "./Logo";
import { SiFacebook, SiTwitter, SiYoutube, SiInstagram } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="max-w-[1600px] bg-white w-full border-t-2 border-[#F3F3F3] flex flex-col gap-6 lg:gap-12 p-5 md:p-12 lg:p-24">
      <h3 className="font-semibold text-4xl lg:text-6xl">QuantumLeap</h3>

      <div className="flex flex-col gap-4 lg:flex-row-reverse">
        <div className="flex flex-col lg:w-2/4">
          <p className="font-medium">Sign up to our newsletter</p>
          <p>
            Enter your email address to stay up to date with the latest offers,
            tutorials, downloads, surveys and more.
          </p>
          <form className="w-full flex py-4 ">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-[#f3f3f3] py-2 px-3 text-sm w-full flex-grow"
            />
            <input
              type="submit"
              value="Sign Up"
              className="bg-[#231D35] text-white text-sm font-medium w-fit px-6 py-2"
            />
          </form>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row flex-grow lg:w-2/4 items-start">
          <div className="flex text-sm flex-col gap-1 lg:w-1/2 ">
            <a>
              <p>Register</p>
            </a>
            <a>
              <p>About QuantumLeap</p>
            </a>
            <a>
              <p>Jobs</p>
            </a>
            <div className="flex text-2xl gap-2 py-2 md:text-3xl lg:w-1/2">
              <a className="h-8 w-8 md:h-10 md:w-10 bg-[#3477f2] text-white grid place-items-center aspect-square">
                <SiFacebook />
              </a>
              <a className="h-8 w-8 md:h-10 md:w-10 bg-[#1DA1F2] text-white grid place-items-center aspect-square">
                <SiTwitter />
              </a>
              <a className="h-8 w-8 md:h-10 md:w-10 bg-[#ff001d] text-white grid place-items-center aspect-square">
                <SiYoutube />
              </a>
              <a className="h-8 w-8 md:h-10 md:w-10 bg-[#F77737] text-white grid place-items-center aspect-square">
                <SiInstagram />
              </a>
            </div>
          </div>
          <div className="text-sm flex flex-col gap-1 py-3 lg:w-1/2 lg:py-0">
            <h4 className="font-medium">Education</h4>
            <a>
              <p>Offers for students and teachers</p>
            </a>
            <a>
              <p>QuantumLeap for the Classroom</p>
            </a>
            <a>
              <p>QuantumLeap for Colleges and Universities</p>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 lg:flex-row lg:items-start">
        <div className="text-sm flex flex-col gap-1 lg:w-1/4">
          <h4 className="font-medium">Community</h4>
          <a>
            <p>Find QuantumLeap User Groups</p>
          </a>
          <a>
            <p>Find Certified Training</p>
          </a>
          <a>
            <p>Become a Certified Trainer</p>
          </a>
        </div>
        <div className="text-sm flex flex-col gap-2 py-3 lg:py-0">
          <h4 className="font-medium">Language and Location</h4>
          <div className="flex flex-wrap gap-2 ">
            <select
              class="language"
              className="bg-[#f3f3f3] text-sm px-2 py-1 font-medium w-fit"
            >
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="fr">Français</option>
              <option value="ja">日本語</option>
              <option value="zh-cn">简体中文</option>
              <option value="es">Español</option>
            </select>
            <select
              name="location"
              className="bg-[#f3f3f3] text-sm px-2 py-1 font-medium w-fit"
            >
              <option value="volvo">United States</option>
              <option value="saab">United Kingdom</option>
              <option value="opel">France</option>
              <option value="audi">Germany</option>
              <option value="volvo">Canada</option>
              <option value="saab">China</option>
              <option value="opel">Australia</option>
              <option value="audi">Japan</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="text-sm flex flex-col gap-2 font-medium lg:flex-row lg:gap-6">
          <a>Contact Us</a>
          <a>Press Resources</a>
          <a>Legal Info</a>
          <a>Privacy Policy</a>
          <a>Cookie Settings</a>
          <a>Imprint</a>
        </div>
        <div className="flex gap-4 pt-8 lg:pt-0 lg:flex-row-reverse">
          <Logo width="45" />
          <p className="font-medium text-sm">QuantumLeap Technologies</p>
        </div>
      </div>
    </footer>
  );
};
