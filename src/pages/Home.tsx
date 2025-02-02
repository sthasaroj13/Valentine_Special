import { useState } from "react";
import "../App.css";
import gif from "../assets/giphy.gif";
import eye from "../assets/eye.gif";
import { Link } from "react-router-dom";

const Home = () => {
  const [showMsg, setShowMsg] = useState<boolean>(false);
  const [moveNo, setmoveNo] = useState<boolean>(false);
  const handleShowMsg = () => {
    console.log("helmd");

    setShowMsg(!showMsg);
  };
  const handleNoHover = () => {
    setmoveNo(true);
  };
  const handleCLickNo = () => {
    console.log("nooooooooooo");
    setmoveNo(false);
  };
  return (
    <>
      <div className="flex justify-center mt-[10rem]">
        <div className="relative">
          {}

          {showMsg && (
            <div
              className="absolute -top-5 left-0 w-[19rem] sm:w-[20rem] md:w-[20rem] py-9 bg-white text-center z-20 text-[15px] font-semibold font-serif rounded-t-md"
              style={{
                opacity: showMsg ? 1 : 0,
                transition: "opacity 0.5s ease-in-out", // Smooth transition
              }}
            >
              {" "}
              Will you be my Valentine ?
              <div className=" flex gap-4 text-center justify-center">
                <Link to={"/yes"} className="text-green-500">
                  {" "}
                  YES
                </Link>
                <button
                  className={`transition-all duration-100 text-red-600 ${
                    moveNo ? "transform translate-x-20" : ""
                  }`}
                  onMouseEnter={handleNoHover}
                  onMouseLeave={handleCLickNo}
                >
                  NO
                </button>
              </div>
            </div>
          )}

          <div className="border w-[19rem] sm:w-[20rem] md:w-[20rem] rounded-md py-[4rem] bg-red-200 border-gray-500 cursor-pointer">
            <div className=" py-5 border-l-[155px] sm:border-l-[161px] md:border-l-[161px]  border-r-[155px] sm:border-r-[161px] md:border-r-[161px] border-t-[75px] border-t-red-300 rounded-md border-l-transparent border-r-transparent absolute top-0 left-1/2 transform -translate-x-1/2 "></div>

            {!showMsg ? (
              <div>
                <p className=" text-center   pt-4 text-[15px] font-semibold font-serif">
                  Click me for suprise
                </p>
                <img
                  src={gif}
                  className=" w-20 ml-[8rem]"
                  onClick={handleShowMsg}
                />
              </div>
            ) : (
              <div className=" py-[3.125rem]">
                <p className=" text-center   pt-4 text-[15px] font-semibold font-serif">
                  Click me to close
                </p>
                <img
                  src={eye}
                  className=" w-20 ml-[8rem] absolute "
                  onClick={handleShowMsg}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
