import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <span className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </span>
        </div>

        <span className="text-xl mt-20">
          <span className="text-4xl font-bold inline ">Education</span>
          <br />
          <span>
            <span className="font-semibold inline ">Degree :</span> Software
            Engeenring
          </span>
          <br />
          <span>
            <span className="font-semibold inline ">From :</span> University of
            Central Punjab, Pakistan
          </span>
          <br />
          <span>
            <span className="font-semibold inline ">Duration :</span> 2019 -
            2023 (4 years)
          </span>
        </span>

        <br />

        <span className="text-xl">
          <span className="text-4xl font-bold inline ">Freelancer</span>
          <br />
          <span>
            <span className="font-semibold inline ">PlatForms : </span>
            Freelancer,Fiver,Upwork
          </span>
          <br />
          <span>
            <span className="font-semibold inline ">Startup :</span> May - 2022
          </span>
          <br />
          <span>
            <span className="font-semibold inline ">Summary : </span>
            Experienced web developer with a successful freelance career on
            Fiverr & Upwork. Specializing in responsive, visually appealing
            websites, I deliver high-quality projects, satisfying clients.
            Proficient in various languages & frameworks, I ensure efficient,
            innovative solutions that bring visions to life. Reliable & skilled,
            I'll exceed expectations for your project.
          </span>
        </span>
      </div>
    </div>
  );
};

export default About;
