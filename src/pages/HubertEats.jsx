import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";

function HubertEats() {
  const nav = useNavigate();

  const handleNav = () => {
    nav(-1);
  };

  return (
    <>
      <div className="w-full h-full">
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
                  Back
                </a>
              </h3>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center mt-20">
        <h1
          className={`${styles.heroHeadText} text-white parallax mb-10 lg:mx-[200px] xl:mx-[300px] `}
          data-speed="0.2"
        >
          Hubert Eats
        </h1>
        {/* <span className=" text-blue-500 opacity-60 text-5xl font-extrabold">Dev' Web</span>
          <span className=" text-blue-500 opacity-60 text-5xl font-extrabold">Full-stack</span> */}
      </div>
      <div className="flex flex-col justify-center items-center ">
        {" "}
        <div className="w-[700px] h-[500px] bg-white">
            <video src=""></video>
        </div>
      </div>
    </>
  );
}

export default HubertEats;
