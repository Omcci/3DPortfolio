import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, slideIn } from "../utils/motion";
import lkdn from "../assets/lkdn.png";
import { Link } from "react-router-dom";
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center items-center w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} mt-10 inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#9F2042]" />
          <div className="w-1 sm:h-80 h-40 red-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey, moi c'est <span className="text-[#9F2042]"> Omar </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Je développe des applications web et je suis actuellement{" "}
            {/* <br className="sm:block hidden" /> */}
            en formation au bootcamp de Wild Code School à Paris. Je suis en
            recherche active d'une alternance pour un poste de Développeur Web
            Frontend ou Fullstack à compter de Septembre 2023
          </p>
          <div className="flex mt-10 justify-center items-center">
            <div className=""></div>
          </div>
        </div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 h-[40px] w-[140px] flex justify-evenly items-center flex-col"
        >
          <h3 className="text-white text-[20px] font-bold text-center">
            <Link to="/dashboard">
            <button
              type="submit"
              className="bg-tertiary  outline-none w-fit text-white font-bold shadow-md rounded-2xl shadow-primary"
            >
              Mon CV
            </button>
            </Link>
          </h3>
        </div>
      </motion.div>
      <div className="green-pink-gradient mt-5 p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary  rounded-[20px] py-5 h-[40px] w-[140px] flex justify-evenly items-center flex-col">
          <h3 className="text-white text-[20px] font-bold text-center">
            <a
              href="https://www.linkedin.com/in/omarmelloulchi/"
              className="cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </h3>
        </div>
      </div>
      <div className="green-pink-gradient mt-5 p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary  rounded-[20px] py-5 h-[40px] w-[140px] flex justify-evenly items-center flex-col">
          <h3 className="text-white text-[20px] font-bold text-center">
            <a
              href="https://github.com/Omcci"
              className="cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </h3>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
