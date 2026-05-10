import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./UI/Spotlight";
import { TextGenerateEffect } from "./UI/TextGenerateEffect";
import MagicButton from "./UI/MagicButton";

const Hero = () => {
  return (
    <div className="pb-20 pt-20 h-screen" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen "
          fill="white"
        />
        <Spotlight
          className="top-10 left-full  h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80  h-[80vh] w-[50vw] " fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  flex items-center justify-center absolute top-0 left-0 ">
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw]  md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-base text-center dark:text-blue-100 text-black-100 max-w-90 ">
            INNOVATE. EXECUTE. SCALE
          </h2>
          <TextGenerateEffect
            className="text-center text-[30px] sm:text-5xl md:text-6xl lg:text-6xl"
            words="Taking Your Vision from Sketch to Scale"
          />
          <p className="text-center md:trcking-wider mb-4 text-sm md:text-lg lg:text-2xl text-blue-100">
            I&apos;m Vaidik - your partner in modern tech
          </p>
          <a href="#about">
            <MagicButton
              title="Discover More"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
