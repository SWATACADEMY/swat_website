import { useState } from "react";
import { slideshowsPartner } from "../utils/slideshow";
import Navbar from "./Navbar";
import { PrimaryButton, SecondaryButton } from "./common/Button";
import ArrowDown from "./svgs/ArrowDown";

const HeroSection = () => {
  const [active, setActive] = useState(false);

  const handleEnter = (image) => {
    image.style.filter = "grayscale(0%)";
    image.style.transform = "scale(1.5)";
    setActive(true);
  };
  const handleLeave = (image) => {
    image.style.filter = "grayscale(100%)";
    image.style.transform = "scale(1)";
    setActive(false);
  };

  return (
    <div className="flex flex-col space-y-8  mb-20 lg:pb-[30px] w-screen  h-screen">
      <div className="flex  bg-hero_bg flex-col bg-black min-h-[100vh]  bg-no-repeat bg-cover bg-center items-center justify-between w-full ">
        <Navbar />
        <div />
        <div>
          <div className=" flex flex-col justify-center pb-[30px]">
            {/* Hero text */}
            <div className="text-white">
              <h1 className="text-4xl font-mutant text-center leading-[1] lg:text-[90px]">
                S.W.A.T <br />
                LEADERSHIP ACADEMY
              </h1>
              <h2 className="text-lg lg:text-2xl mt-2 mx-auto font-light max-w-[508px] text-center ">
                Empowering Tomorrow’s Leaders, Shaping the Society
              </h2>
            </div>
          </div>
          <div className="flex justify-center flex-wrap items-center gap-x-10 gap-4 lg:gap-x-8">
            <PrimaryButton>Become A sponsor</PrimaryButton>
            <SecondaryButton className="min-w-[205px]">Join Us</SecondaryButton>
          </div>
        </div>
        <div className="flex w-full items-center justify-center relative">
          <a href="#about" className="absolute -mt-60 2xl:-mt-80">
            <ArrowDown className="animate-pulse" />
          </a>
        </div>
      </div>

      {/* arrow */}

      <div className=" w-full max-w-[100%] z-[9999] gap-x-10  flex">
        <div
          className={`flex animate-slides_linear  items-center gap-x-10 ${
            active ? " paused " : ""
          }`}
        >
          {slideshowsPartner.map((data, index) => (
            <img
              className={` images block w-12 h-12`}
              onMouseEnter={(e) => handleEnter(e.target)}
              onMouseLeave={(e) => handleLeave(e.target)}
              key={index}
              src={data}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-[15px] text-center font-semibold text-[#CC3C39]">
          Partners Over the Years
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
