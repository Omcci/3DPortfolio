import { Link, useNavigate } from "react-router-dom";


function HubertEats() {
    const nav = useNavigate();

    const handleNav = () => {
      nav(-1);
    };

  return (
    <>
    <div>
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
    <div>HubertEats</div></div>
    
    </>
  )
}

export default HubertEats