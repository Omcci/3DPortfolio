/* eslint-disable react-refresh/only-export-components */
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className=" flex transform">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.5)}
        className="green-pink-gradient p-[1px] rounded-[20px] shadow-card transform w-[172px]"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] w-[170px]  min-h-[170px] flex justify-evenly items-center flex-col transform"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain texttransform"
          />
          <h3 className="text-white text-[20px] font-bold text-center texttransform">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>A propos.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Bienvenue sur mon Portfolio ! Je m'appelle Omar Melloulchi, alias Omcci.
        Je suis actuellement en train de vivre ma passion pour la technologie en
        tant que développeur web, et je suis ravi de pouvoir partager mes
        progrès avec vous. Voici les technologies sur lesquelles je suis opérationnel :
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
