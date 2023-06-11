import { motion, useScroll } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, slideIn } from "../utils/motion";
import lkdn from "../assets/lkdn.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import mountain from "../assets/mountains-front.png";
// import { buttonHero } from "../constants";
// import { ComputersCanvas } from "./canvas";

const Hero = ({buttonHero}) => {
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollY.get();
      const parallaxElements = document.querySelectorAll(".parallax");

      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute("data-speed"));
        const translateY = -scrollTop * speed;
        element.style.transform = `translate3d(0, ${translateY}px, 0)`;
      });
    };

    handleScroll(); // Update on initial render

    const unsubscribeScroll = scrollY.onChange(handleScroll);

    return () => {
      unsubscribeScroll();
    };
  }, [scrollY]);

  return (
    <section className="mt-20 relative flex flex-col justify-start items-center w-full h-screen mx-auto">
       <div className="absolute bottom-0 lg:mt-[200px] w-full">
          <img classname="z-1" src={mountain} alt="mountain" />
      </div>

      <div
        className={`${styles.paddingX}  mt-10 inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#9F2042]" />
          <div className="w-1 sm:h-80 h-40 red-gradient" />
        </div> */}

        {/* <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey, moi c'est <span className="text-[#9F2042]"> Omar </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Je développe des applications web et je suis actuellement{" "}
            en formation au bootcamp de Wild Code School à Paris. Je suis en
            recherche active d'une alternance pour un poste de Développeur Web
            Frontend ou Fullstack à compter de Septembre 2023
          </p>
          <div className="flex mt-10 justify-center items-center">
            <div className=""></div>
          </div>
        </div> */}
        {/* <div
          className={`${styles.paddingX} mt-10 inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        > */}
          {/* <div className="w-5 h-5 rounded-full bg-[#9F2042] parallax" data-speed="0.3" />
        <div className="w-1 sm:h-80 h-40 red-gradient parallax" data-speed="0.5" /> */}

          <div className="" >
            <h1
              className={`${styles.heroHeadText} text-white parallax mb-10 lg:mx-[200px] xl:mx-[300px] `}
              data-speed="0.2"
            >
              Hey, moi c'est <span className="text-[#9F2042]">Omar</span>
            </h1>
            <p
              className={`   mt-2 xl:mx-[300px] lg:mx-[200px] xs:text-[16px]  sm:text-[16px] md:text-[24px] parallax`}
              data-speed="0.4"
            >
              Je développe des applications web et je suis actuellement en
              formation au bootcamp de Wild Code School à Paris. Je suis en
              recherche active d'une alternance pour un poste de Développeur Web
              Frontend ou Fullstack à compter de Septembre 2023.
            </p>
            
          </div>
        </div>
      {/* </div> */}
      {buttonHero.map((button, index) => {
        return (
        <div
        className="green-pink-gradient mt-5 p-[1px] rounded-[20px] shadow-card parallax"
        data-speed="0.6"
        key={`button-${index}`}
        index={index}
      >
        <div className="bg-tertiary  rounded-[20px] py-5 h-[40px] w-[140px] flex justify-evenly items-center flex-col">
          <h3 className="text-white text-[20px] font-bold text-center">
            <a
              href={button.url}
              className="cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              {button.title}
            </a>
          </h3>
        </div>
      </div>
        )
      })}

       {/* <div className="absolute z-0">
          <img src={mountain} alt="mountain" />
      </div> */}

      {/* <div
        className="green-pink-gradient p-[1px] rounded-[20px] shadow-card parallax"
        data-speed="0.6"
      >
        <div className="bg-tertiary rounded-[20px] py-5 h-[40px] w-[140px] flex justify-evenly items-center flex-col ">
          <h3 className="text-white text-[20px] font-bold text-center">
              <button
                type="submit"
                className="bg-tertiary  outline-none w-fit text-white font-bold shadow-md rounded-2xl shadow-primary"
              >
                Mon CV
              </button>
          </h3>
        </div>
      </div>
      <div
        className="green-pink-gradient mt-5 p-[1px] rounded-[20px] shadow-card parallax"
        data-speed="0.6"
      >
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
      <div
        className="green-pink-gradient mt-5 p-[1px] rounded-[20px] shadow-card parallax"
        data-speed="0.6"
      >
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
      </div> */}
     
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
