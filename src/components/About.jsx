import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
          {/* Education */}
          <div className="md:w-1/2 space-y-2">
            <h3 className="text-4xl font-bold">Education</h3>
            <p>
              <span className="text-gray-200 font-semibold">Degree:</span>{" "}
              <span>Software Engineering</span>
            </p>
            <p>
              <span className="text-gray-200 font-semibold">From:</span>{" "}
              <span className="text-gray-300">
                University of Central Punjab, Pakistan
              </span>
            </p>
            <p>
              <span className="text-gray-200 font-semibold">Duration:</span>{" "}
              <span className="text-gray-300">2019 - 2023 (4 years)</span>
            </p>
          </div>

          {/* Freelancer */}
          <div className="md:w-1/2 space-y-2">
            <h3 className="text-4xl font-bold">Freelancer</h3>
            <p>
              <span className="text-gray-200 font-semibold">Platforms:</span>{" "}
              <span className="text-gray-300">Freelancer, Fiverr, Upwork</span>
            </p>
            <p>
              <span className="text-gray-200 font-semibold">Startup:</span>{" "}
              <span className="text-gray-300">May - 2022</span>
            </p>
            <p>
              <span className="text-gray-200 font-semibold">Summary:</span>{" "}
              <span className="text-gray-300">
                Experienced web developer with a successful freelance career on
                Fiverr and Upwork. Specializing in responsive, visually
                appealing websites, I deliver high-quality projects, satisfying
                clients. Proficient in various languages and frameworks, I
                ensure efficient, innovative solutions that bring visions to
                life. I have delivered full-stack mobile, web, and AI
                applications. Reliable and skilled, I'll exceed expectations for
                your project.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
