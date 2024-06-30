import React from "react";
import HeroImage from "../assets/HeroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-5xl font-bold text-white">
            Full-stack Web/Mobile Apps Developer Combined With AI Solutions
          </h2>
          <p className="text-gray-300 py-5 max-w-lg">
            Hello! I'm Umar, a passionate tech enthusiast and skilled software
            engineer with a Bachelor's degree in Software Engineering from the
            University of Central Punjab. I excel in front-end technologies like
            React Native, React.js, and Next.js, and back-end frameworks like
            Node.js, Express Server, and Python Django. My expertise also
            includes Generative AI, CrewaAI Framework, and programming languages
            such as TypeScript, JavaScript, Python, and C++. Additionally, I
            work with databases like Firebase, SQL, PostgreSQL, MongoDB, and
            FAISS. Let's collaborate to bring your ideas to life and achieve
            your goals in the digital realm!
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-70"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
