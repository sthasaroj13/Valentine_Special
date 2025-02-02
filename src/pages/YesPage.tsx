import love2 from "../assets/love2.gif";
import air from "../assets/air.png";
import air2 from "../assets/air2.png";
import { useEffect, useState } from "react";
const YesPage = () => {
  const [isimg, setisImg] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setisImg(true);
    }, 2000);
  }, []);
  return (
    <>
      <div className=" flex justify-center mt-[5rem]">
        <div>
          <div className="relative flex gap-1">
            <div>
              <div className="w-[5rem] h-[5rem]     bg-red-500 rounded-full shadow-lg animate-float"></div>

              <div className="absolute top-3 left-[1.5rem]">
                <div className="w-4 h-12 bg-slate-50 opacity-40 rounded-full"></div>
                <div className="w-10 h-3 bg-slate-50 opacity-40 rounded-full mt-[-12px] ml-[4px]"></div>
              </div>
              <svg
                className="w-12 h-16 -mt-1 ml-3 "
                viewBox="0 0 40 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 10 C25 40, 10 70, 20 100 C30 130, 15 150, 20 180"
                  stroke="#4A5568"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
            <div>
              <div className="w-[5rem] h-[5rem]     bg-red-500 rounded-full shadow-lg animate-float"></div>

              <div className="absolute top-4 left-[7rem] w-6 h-10 bg-white opacity-40 rounded-3xl"></div>

              <svg
                className="w-12 h-16 -mt-1 ml-3 "
                viewBox="0 0 40 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 10 C25 40, 10 70, 20 100 C30 130, 15 150, 20 180"
                  stroke="#4A5568"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
            <div>
              <div className="w-[5rem] h-[5rem]     bg-red-500 rounded-full shadow-lg animate-float"></div>

              <div className="absolute top-4 left-[12rem]">
                <div className="w-4 h-14 bg-slate-50 opacity-40 rounded-full mt-[2rwm] -rotate-[40deg]"></div>
                <div className="w-14 h-3 bg-slate-50 opacity-40 rounded-full mt-[-35px] ml-[4px] rotate-[120deg]"></div>
              </div>

              <svg
                className="w-12 h-16 -mt-1 ml-3 "
                viewBox="0 0 40 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 10 C25 40, 10 70, 20 100 C30 130, 15 150, 20 180"
                  stroke="#4A5568"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
            <div>
              <div className="w-[5rem] h-[5rem]     bg-red-500 rounded-full shadow-lg animate-float"></div>
              <div className="absolute top-3 left-[17rem]">
                <div className="w-4 h-12 bg-slate-50 opacity-40 rounded-full"></div>
                <div className="w-10 h-3 bg-slate-50 opacity-40 rounded-full mt-[-12px] ml-[4px]"></div>
                <div className="w-10 h-3 bg-slate-50 opacity-40 rounded-full mt-[-48px] ml-[4px]"></div>
                <div className="w-10 h-3 bg-slate-50 opacity-40 rounded-full mt-[4px] ml-[4px]"></div>
              </div>

              <svg
                className="w-12 h-16 -mt-1 ml-3 "
                viewBox="0 0 40 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 10 C25 40, 10 70, 20 100 C30 130, 15 150, 20 180"
                  stroke="#4A5568"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          <div className="  bg-white py-1  sm:px-2 md:px-7 rounded-md">
            <img src={love2} className=" w-20 ml-[9rem]" />
            <p className=" text-center   pt-4 text-[10px] sm:text-[14px] md:text-[14px] font-semibold font-serif">
              I'm really glad you said yes. It means a lot to me.
            </p>
            <p className=" text-center text-red-500   pt-4 text-[10px] sm:text-[14px] md:text-[14px] font-semibold font-serif">
              I Love You so Much
            </p>
          </div>
          {isimg && (
            <div>
              <div className=" flex justify-around">
                <svg
                  className="w-12 h-12 -mt-1 ml-3 "
                  viewBox="0 0 40 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10 C25 40, 10 70, 20 100 C30 130, 15 150, 20 180"
                    stroke="#4A5568"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
                <svg
                  className="w-12 h-12 -mt-1 ml-3 "
                  viewBox="0 0 40 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10 C25 40, 10 70, 20 100 C30 130, 15 150, 20 180"
                    stroke="#4A5568"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </div>
              <div className=" bg-white flex  justify-around sm:justify-between md:justify-between">
                <img src={air} className=" w-20 " />
                <img src={air2} className=" w-20 " />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default YesPage;
