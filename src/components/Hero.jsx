import { useScroll } from "framer-motion";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import mountain from "../assets/mountains-front.png";
import { moon } from "../assets";

const Hero = ({ buttonHero }) => {
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

    const unsubscribeScroll = scrollY.on("change", handleScroll);

    return () => {
      unsubscribeScroll();
    };
  }, [scrollY]);

  return (
    <section className="mt-20 relative flex flex-col justify-start items-center w-full h-screen xl:h-[140vh] mx-auto">
      <img
        src={moon}
        alt="moon"
        className=" h-[150px] md:h-[200px] lg:h-[300px] absolute top-[50%] right-[20%] parallax "
        data-speed="-0.2"
      />
      <div className="absolute bottom-0 lg:mt-[200px] mt-[200px] w-full 2xl:hidden ">
        <img classname="z-1 " src={mountain} alt="mountain" />
      </div>

      <div
        className={`${styles.paddingX}  mt-10 inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-20">
          <h1
            className={`${styles.heroHeadText} text-white parallax mb-10 lg:mx-[200px] xl:mx-[300px] `}
            data-speed="0.2"
          >
            Omci
          </h1>
          <span className=" text-blue-500 opacity-60 text-5xl font-extrabold">
            Dev' Web
          </span>
          <span className=" text-blue-500 opacity-60 text-5xl font-extrabold">
            Full-stack
          </span>
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
                {index === 0 ? (
                  <Link to="/dashboard">
                    <a
                      href={button.url}
                      className="cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {button.title}
                    </a>{" "}
                  </Link>
                ) : (
                  <a
                    href={button.url}
                    className="cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {button.title}
                  </a>
                )}
              </h3>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Hero;
