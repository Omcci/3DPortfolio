import { Link, useNavigate } from "react-router-dom";
import cv from "../assets/CVfin.png";
import ba from "../assets/backarrow.png";
import { StarsCanvas } from "../components";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function Dashboard() {
  const nav = useNavigate();

  const handleNav = () => {
    nav(-1);
  };

  return (
    <div>
      <div className=" w-full h-[100vh] flex justify-center items-center">
        <StarsCanvas />
        <div className="flex justify-end">
          <Link to="/" onClick={handleNav}>
            <img
              src={ba}
              alt="backarrow"
              className=" w-16 mr-10 "
            />
          </Link>
        </div>
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.5)}
          className=" green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <img src={cv} alt="CvOmar" className="bg-auto rounded-[20px]" />
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;
