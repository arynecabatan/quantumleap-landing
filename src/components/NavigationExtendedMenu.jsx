export const NavigationExtendedMenu = ({ mobileMenuState }) => {
  return (
    <div
      className={`${
        mobileMenuState == false ? "hidden" : "hidden lg:flex"
      } flex-col gap-6 pt-3 pb-6 xl:pt-5 xl:pb-12`}
    >
      <div className="flex gap-2 flex-col xl:gap-4 w-fit">
        <h3 className="text-xl font-medium xl:text-3xl">
          More on QuantumLeap.com:
        </h3>
        <div className="flex flex-row gap-5 text-sm xl:text-lg xl:gap-10">
          <p>Blog</p>
          <p>QuantumLeap for the Classroom</p>
          <p>QuantumLeap for Colleges and Universities</p>
          <p>Certified Training</p>
          <p className="text-[#ff764d]">About QuantumLeap</p>
          <p>Jobs</p>
          <p>Apprenticeships</p>
        </div>
      </div>
      <div className="flex gap-2 flex-col">
        <h3 className="text-xl font-medium xl:text-3xl">
          More on QuantumLeap:
        </h3>
        <div className="grid grid-cols-4 gap-5 w-full">
          <div className="w-64 xl:w-[300px]">
            <h4 className="text-sm font-medium xl:text-lg">Loop</h4>
            <p className="text-sm font-normal xl:text-lg">
              Watch Talks, Performances, and Features from QuantumLeap's Summit
              for Music Makers
            </p>
          </div>

          <div className="w-64 xl:w-[300px]">
            <h4 className="text-sm font-medium xl:text-lg">Learning Music</h4>
            <p className="text-sm font-normal xl:text-lg">
              Learn the fundamentals of music making right in your browser.
            </p>
          </div>

          <div className="w-64 xl:w-[300px]">
            <h4 className="text-sm font-medium xl:text-lg">Learning Synths</h4>
            <p className="text-sm font-normal xl:text-lg">
              Get started with synthesis using a web-based synth and
              accompanying lessons.
            </p>
          </div>

          <div className="w-64 xl:w-[300px]">
            <h4 className="text-sm font-medium xl:text-lg">Making Music</h4>
            <p className="text-sm font-normal xl:text-lg">
              Some tips from 74 Creative Strategies for Electronic Producers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
