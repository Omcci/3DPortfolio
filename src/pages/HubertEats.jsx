import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { hbetsmp4, hbetswebm } from "../assets";

function HubertEats() {
  const nav = useNavigate();

  const handleNav = () => {
    nav(-1);
  };

  return (
    <>
      <div className="w-full h-full">
        <Link to="/" onClick={handleNav}>
          {/* <div className="green-pink-gradient mr-10 mt-5 p-[1px] rounded-[20px] shadow-card"> */}
            {/* <div className="bg-tertiary  rounded-[20px]  h-[40px] w-[40px] flex justify-evenly items-center flex-col"> */}
              <h3 className="text-white text-[20px] font-bold ">
                Back
              </h3>
            {/* </div> */}
          {/* </div> */}
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
        <div className="w-[100vw] h-full lg:w-[850px] lg:h-[500px] bg-white rounded-lg ">
          <video
            autoPlay
            loop
            muted
            controls={""}
            playsInline
            className="w-[100%] h-[100%] object-cover rounded-2xl texttransform"
          >
            <source src={hbetswebm} type="video/webm" />
            <source src={hbetsmp4} type="video/mp4" />
          </video>
        </div>
        <p
          className={`${styles.sectionSubText} my-10 text-white-100 mx-[50px]  lg:mx-[350px] border rounded-lg px-10 py-10`}
        >
          "Ce projet est réalisé dans le cadre d'un test technique pour une
          entreprise. La contrainte de temps imposée fut de 5jours.
          L'application permet d'afficher des recettes, d'en ajouter à un menu
          personnalisé. Il est également possible de réorganiser ses menus dans
          une page dédiée. Ce projet est réalisé en bi-repo avec React en front
          et Node en back."
        </p>
      </div>
    </>
  );
}

export default HubertEats;
