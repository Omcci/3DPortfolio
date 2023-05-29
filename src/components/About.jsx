/* eslint-disable react-refresh/only-export-components */
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full transform">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.5)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card transform"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px]  min-h-[200px] flex justify-evenly items-center flex-col transform"
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
        progrès avec vous. Après avoir travaillé comme coach et professeur
        d'éducation physique pendant plusieurs années, j'ai réalisé que ma
        véritable passion se trouve dans le monde de la technologie. J'ai
        toujours été attiré par l'idée de créer quelque chose à partir de rien
        et de le voir prendre vie, et c'est ce qui m'a poussé à me lancer dans
        cette nouvelle aventure.
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
