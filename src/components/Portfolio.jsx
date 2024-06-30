import React from "react";
import ai from "../assets/portfolio/ai.jpg";
import mobile from "../assets/portfolio/mobile.jpg";
import method from "../assets/portfolio/methid.png";
import mobilescreens from "../assets/portfolio/mobilescreens.png";
import hybride from "../assets/portfolio/hybride.jpg";
import fullstack from "../assets/portfolio/fullstack.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ai,
    },
    {
      id: 2,
      src: fullstack,
    },
    {
      id: 3,
      src: mobile,
    },
    {
      id: 4,
      src: method,
    },
    {
      id: 5,
      src: mobilescreens,
    },
    {
      id: 6,
      src: hybride,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-125"
              />
              <div className="flex items-center justify-center">
                <button
                  disabled
                  className="w-1/2 px-6 py-3 m-4 duration-200 disabled:opacity-50"
                >
                  Demo
                </button>
                <a
                  className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-125"
                  href="https://github.com/UmarFarooq75"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
