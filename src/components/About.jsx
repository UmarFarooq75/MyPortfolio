import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <span className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </span>
        </div>

        <span className="text-xl mt-6">
          <span className="text-4xl font-bold inline ">Education</span>
          <br />
          <span>
            <span className="font-semibold inline text-gray-200">Degree :</span>{" "}
            Software Engeenring
          </span>
          <br />
          <span>
            <span className="font-semibold inline text-gray-200">From :</span>{" "}
            <span className="text-gray-300">
              University of Central Punjab, Pakistan
            </span>
          </span>
          <br />
          <span>
            <span className="font-semibold inline text-gray-200 ">
              Duration :
            </span>{" "}
            <span className="text-gray-300">2019 - 2023 (4 years) </span>
          </span>
        </span>

        <br />

        <span className="text-xl">
          <span className="text-4xl font-bold inline ">Freelancer</span>
          <br />
          <span>
            <span className="font-semibold  inline text-gray-200 ">
              PlatForms :{" "}
            </span>
            <span className="text-gray-300">Freelancer,Fiver,Upwork</span>
          </span>
          <br />
          <span>
            <span className="font-semibold  inline text-gray-200">
              Startup :
            </span>{" "}
            <span className="text-gray-300">May - 2022 </span>
          </span>
          <br />
          <span>
            <span className="font-semibold  inline text-gray-200 ">
              Summary :{" "}
            </span>
            <span className="text-gray-300">
              Experienced web developer with a successful freelance career on
              Fiverr and Upwork. Specializing in responsive, visually appealing
              websites, I deliver high-quality projects, satisfying clients.
              Proficient in various languages and frameworks, I ensure
              efficient, innovative solutions that bring visions to life. I have
              delivered full-stack mobile, web, and AI applications. Reliable
              and skilled, I'll exceed expectations for your project.
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default About;
