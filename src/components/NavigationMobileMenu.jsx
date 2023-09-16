import { config } from "../libs/config";

export const NavigationMobileMenu = ({ mobileMenuState }) => {
  return (
    <div
      className={`${
        mobileMenuState == false ? "hidden" : "block"
      } absolute bg-[#231D35] w-full min-h-screen z-40 pt-[76px] text-white px-5 pb-6 lg:hidden`}
    >
      <ul className="flex flex-col gap-5 text-xl font-medium">
        {config.menuItem.map((item) => {
          return (
            <h4 key={item.name}>
              <a href={item.path}>{item.name}</a>
            </h4>
          );
        })}
        <h4>
          <a href="/">Try Free Trial</a>
        </h4>
        <li className="text-sm">
          <a href="/">Log in or register</a>
        </li>
        <h4>More on QuantumLeap.com:</h4>
        <div className="flex flex-col gap-5 text-sm font-base">
          <p>Blog</p>
          <p>QuantumLeap for the Classroom</p>
          <p>QuantumLeap for Colleges and Universities</p>
          <p>Certified Training</p>
          <p className="text-[#ff764d]">About QuantumLeap</p>
          <p>Jobs</p>
          <p>Apprenticeships</p>
        </div>
        <h4>More on QuantumLeap:</h4>
        <div className="grid overflow-x-scroll gap-5 w-full grid-flow-col relative horizontal-scroll">
          <div className="w-48">
            <h4 className="text-sm">Loop</h4>
            <p className="text-sm font-normal ">
              Watch Talks, Performances, and Features from QuantumLeap's Summit
              for Music Makers
            </p>
          </div>

          <div className="w-48">
            <h4 className="text-sm">Learning Music</h4>
            <p className="text-sm font-normal">
              Learn the fundamentals of music making right in your browser.
            </p>
          </div>

          <div className="w-48">
            <h4 className="text-sm">Learning Synths</h4>
            <p className="text-sm font-normal">
              Get started with synthesis using a web-based synth and
              accompanying lessons.
            </p>
          </div>

          <div className="w-48">
            <h4 className="text-sm">Making Music</h4>
            <p className="text-sm font-normal">
              Some tips from 74 Creative Strategies for Electronic Producers.
            </p>
          </div>
        </div>
      </ul>
    </div>
  );
};
