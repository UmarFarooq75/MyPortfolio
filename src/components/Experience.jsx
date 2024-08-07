import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import ai from "../assets/ai.png";
import graph from "../assets/graphql.png";
import node from "../assets/node.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 2,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: python,
      title: "Python",
      style: "shadow-green-500",
    },
    {
      id: 5,
      src: ai,
      title: "AI",
      style: "shadow-purple-500",
    },
    {
      id: 6,
      src: graph,
      title: "GraphQL",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: node,
      title: "Node JS",
      style: "shadow-indigo-500",
    },
    {
      id: 8,
      src: html,
      title: "HTML",
      style: "shadow-pink-500",
    },
    {
      id: 9,
      src: css,
      title: "CSS",
      style: "shadow-red-500",
    },
    {
      id: 10,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-teal-500",
    },
    {
      id: 11,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
