import { Link, useNavigate } from "react-router-dom";
import cv from "../assets/CVOmarMelloulchi.png";
import { StarsCanvas } from "../components";
import { pfolioimg } from "../assets";
import Draggable from "react-draggable";
import { useState } from "react";
import { motion } from "framer-motion";

function Dashboard() {
  // const [currentPosition, setCurrentPosition] = useState({
  //   xRate: 150,
  //   yRate: 150,
  // });

  // const onDrag = (e, data) => {
  //   setCurrentPosition({ xRate: data.lastX, yRate: data.lastY });
  // };

  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const nav = useNavigate();

  const handleNav = () => {
    nav(-1);
  };

  return (
    <div className="container mx-auto">
      {" "}
      <StarsCanvas />
      <div className="flex flex-row flex-wrap items-center justify-center">
        <div className="flex flex-row xl:flex-col w-full flex-wrap items-center justify-center ">
          <div className="flex flex-row ">
            <Link to="/" onClick={handleNav}>
              <div className="green-pink-gradient mr-10 mt-5 p-[1px] rounded-[20px] shadow-card">
                <div className="bg-tertiary  rounded-[20px]  h-[40px] w-[40px] flex justify-evenly items-center flex-col">
                  <h3 className="text-white text-[20px] font-bold text-center">
                    <a
                      href="https://github.com/Omcci"
                      className="cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ⬅
                    </a>
                  </h3>
                </div>
              </div>
            </Link>

            <div className="green-pink-gradient mt-5 p-[1px] rounded-[20px] shadow-card ">
              <div className="bg-tertiary  rounded-[20px] py-5 h-[40px] w-[150px] flex justify-evenly items-center flex-col ">
                <h3 className="text-white text-[20px] font-bold text-center">
                  <a
                    href={`cv/CVOmarMelloulchi.pdf`}
                    className="cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Télécharger
                  </a>
                </h3>
              </div>
            </div>
          </div>

          {/* <div className="flex justify-center items-center m-12 ">
        </div> */}

          <div className="flex flex-col md:flex-row bg-gradient-to-br w-[800px] h-[1000px] rounded-3xl mt-20 ">
            <div className="flex flex-col md:flex-row w-[700px] h-[900px] rounded-xl sm:m-20 backdrop-blur-sm ">
              <div className="flex flex-col w-full justify-center items-center   ">
                {/* <Draggable
                  position={{
                    x: currentPosition.xRate,
                    y: currentPosition.yRate,
                  }}
                  onDrag={onDrag}
                > */}
                <div className=" my-10 w-[320px] h-[200px] bg-opacity-5 rounded bg-clip-padding backdrop-filter handle md:my-10">
                  <img className="rounded-xl " src={pfolioimg} alt="" />
                </div>
                {/* </Draggable>
                <Draggable
                  position={{
                    x: currentPosition.xRate,
                    y: currentPosition.yRate,
                  }}
                  onDrag={onDrag}
                > */}
                <motion.div
                  
                  initial="offscreen"
                  animate="onscreen"
                  transition={{
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8,
                  }}
                  className="w-[320px] my-10 rounded-xl md:h-[650px] bg-opacity-5 bg-clip-padding backdrop-filter  bg-blue-500
                     "
                >
                  <motion.div className="card" variants={cardVariants}>


                  <p class="mt-4 mx-10 text-md font-extrabold "> LANGUES </p>
                  <p class="m-4  ">
                    <ul>
                      <li>Français - Langue maternelle </li>
                      <li>Anglais - C2</li>
                    </ul>{" "}
                  </p>
                  <p class="mx-10 text-md font-extrabold "> COMPETENCES</p>
                  <p class="m-4  ">
                    <ul>
                      <li>React</li>
                      <li>Javascript</li>
                      <li>NodeJS</li>
                      <li>Express</li>
                      <li>MySQL</li>
                      <li>HTML / CSS</li>
                      <li>Scrum/Agile</li>
                    </ul>
                  </p>
                  </motion.div>
                  <p class="mx-10 text-md font-extrabold "> SOFT SKILLS </p>
                  <p class="m-4  ">
                    <ul>
                      <li>Maîtrise de soi</li>
                      <li>Esprit d'équipe</li>
                      <li>Autonomie</li>
                    </ul>
                  </p>
                  <p class="mx-10 text-md font-extrabold "> HOBBIES </p>
                  <p class="m-4  ">
                    <ul>
                      <li>Sports</li>
                      <li>Jeux-vidéo</li>
                      <li>Cinéphile</li>
                      <li>Caféphile</li>
                    </ul>
                  </p>
                </motion.div>
                {/* </Draggable> */}
              </div>
              <div className="flex flex-col w-full justify-center items-center md:mx-10 ">
                <div className=" w-[320px] md:w-[400px] h-[660px] md:h-[590px]  bg-blue-500 bg-opacity-5 backdrop-blur-xl rounded-xl bg-clip-padding backdrop-filter ">
                  <h1 class="m-3 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
                    PROJET - EXPERIENCES PRO
                  </h1>
                  <p class="mx-10 text-2xl font-extrabold md:text-xl lg:text-1xl">
                    {" "}
                    WILD CODE SCHOOL - 2023
                  </p>
                  <p class="m-4  ">
                    <span className="font-extrabold">Projet perso :</span>{" "}
                    Création d'un portfolio en REACT/ TailwindCSS et ThreeJS{" "}
                  </p>
                  <p class="m-4  ">
                    <span className="font-extrabold">Projet spécial :</span>{" "}
                    Développement d'une Food Recipe App en Full-Stack avec React
                    et NodeJS. Ce projet est réalisé en 5 jours dans le cadre
                    d'un test technique pour une entreprise.{" "}
                  </p>
                  <p class="m-4  ">
                    <span className="font-extrabold">Projet 2 :</span> Création
                    d'une app de Fitness via REACT et consommation d'API. Team
                    leader du projet - Travail en méthode AGILE (Outil Trello)
                  </p>{" "}
                  <p class="m-4  ">
                    <span className="font-extrabold">Projet 1 :</span> Création
                    d'un site CV via HTML / CSS / JS
                  </p>
                </div>
                <div className=" w-[320px] md:w-[400px]  md:h-[360px] mt-10  rounded-xl  bg-blue-500 bg-opacity-5">
                  {" "}
                  <h1 class="m-3 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
                    FORMATION
                  </h1>
                  <p class="mx-10 text-md font-extrabold "> DEVELOPPEMENT WEB - WILD CODE SCHOOL</p>
                  <p class="m-4  ">
                    Formation développeur web Fullstack pour le titre RNCP 5 Développeur Web et Web mobile (2023){" "}
                  </p>
                  <p class="mx-10 text-md font-extrabold ">
                    {" "}
                    LICENCE STAPS - UNIVERSITE PARIS DESCARTES
                  </p>
                  <p class="m-4  ">
                    Obtention d'une licence en science et technique des
                    activités physiques et sportives (2011 - 2014){" "}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="green-pink-gradient p-[1px] rounded-[20px] shadow-card m-5 sm:m-20">
            <img
              src={cv}
              alt="CvOmar"
              className="xl:h-[700px] rounded-[20px]"
            />
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
