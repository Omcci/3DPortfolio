import { Link, useNavigate } from "react-router-dom";
import cv from "../assets/CVOmarMelloulchi.png";
import { StarsCanvas } from "../components";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";


function Dashboard() {
  const nav = useNavigate();

  const handleNav = () => {
    nav(-1);
  };

  return (
    <div className="flex flex-row flex-wrap items-center justify-center">
      {/* <div className="relative">
          <Link to="/" onClick={handleNav}>
            <img
              src={ba}
              alt="backarrow"
              className="w-16 hover:scale-150 ease-in duration-300"
            />
          </Link>
        </div> */}
      <div className="flex flex-row xl:flex-col w-full flex-wrap items-center justify-center">
        <div className="flex flex-row">
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

          <div className="green-pink-gradient mt-5 p-[1px] rounded-[20px] shadow-card">
            <div className="bg-tertiary  rounded-[20px] py-5 h-[40px] w-[150px] flex justify-evenly items-center flex-col">
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

        <StarsCanvas />

        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.5)}
          className="green-pink-gradient p-[1px] rounded-[20px] shadow-card m-5 sm:m-20"
        >
          <img src={cv} alt="CvOmar" className="xl:h-[700px] rounded-[20px]" />
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;
