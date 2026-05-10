import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./UI/MagicButton";
import { socialMedia } from "../assets/Data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 " id="footer">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] dark:text-white">
          Ready to take <span className="text-purple">Your </span> Digital
          Presence to the Next Level
        </h1>
        <p className="dark:text-white-200 md:mt-10 my-5 text-center">
          Reach out me today and lets&apos;s discuss how can I help you to
          achive your goals.
        </p>
        <a href="https://mailto:vaidpatel11@gmail.com" target="_blank">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-2">
        <p className="md:texyt-base text-sm md:font-normal font-light dark:text-white">
          Copyright &copy; 2026 Vaidik Ghelani
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <Link
              key={profile.id}
              to={profile.link}
              target="_blank"
              className="w-10 h-10 cursor-pointer flex items-center justify-center backdrop-filter saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={profile.img} alt={profile.id} width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
