import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, mvid } from "../assets";
import { internet } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  vidmp4,
  source_code_link,
  deployedproject,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)}>
      <Tilt
        tiltMaxAngleX={25}
        tiltMaxAngleY={25}
        perspective={1500}
        scale={1.05}
        transitionSpeed={2000}
        gyroscope={true}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transform"
      >
        <div className="relative w-full h-[200px] transform ">
          {/* <img
            src={image}
            alt={name}
            className="w-[80%] h-[100%] object-cover rounded-2xl texttransform"
          /> */}
          <video
            autoPlay={true}
            loop
            muted
            controls = ''
            // playsInLine
            className="w-[80%] h-[100%] object-cover rounded-2xl texttransform"
          >
            <source src={image} type="video/webm" />
            <source
              src={vidmp4}
              type="video/mp4"
            />
          </video>

          {/* <source src="my-animation.mp4" type="video/mp4" /> */}

          <div className="absolute top-0 right-0 flex justify-end m-3 card-img_hover texttransform">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
          </div>
          <div className="absolute top-12 right-0 flex justify-end m-4 card-img_hover texttransform">
            <div
              onClick={() => window.open(deployedproject, "_blank")}
              className="bg-white w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={internet}
                alt="website"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          {/* <div className="mt-5 texttransform"> */}
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="text-secondary mt-2 text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mon travail</p>
        <h2 className={styles.sectionHeadText}>Projets.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Ici, j'ai selectionné les projets dont je suis le plus fier et qui
          attestent de ma progression dans le métier de dev'. N'hésites pas à
          jeter un coup d'oeil :)
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
