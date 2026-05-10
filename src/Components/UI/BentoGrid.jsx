import Lottie from "react-lottie";
import { useState } from "react";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import animationData from "../../assets/confetti.json";
import { BackgroundGradientAnimation } from "./GradientBg";
import PropTypes from "prop-types";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ${className}
      `}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  classNames,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText("vaidpatel11@gmail.com")
        .then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false); // Reset the copied state after 2 seconds
          }, 2000);
        })
        .catch((error) => {
          console.error("Copy failed", error);
        });
    } else {
      const fallbackInput = document.createElement("input");
      fallbackInput.value = "vaidu11@proton.me";
      document.body.appendChild(fallbackInput);
      fallbackInput.select();
      fallbackInput.setSelectionRange(0, 99999); // For mobile devices
      try {
        document.execCommand("copy");
        setCopied(true);
      } catch (error) {
        console.error("Fallback copy failed", error);
      } finally {
        document.body.removeChild(fallbackInput);
        setTimeout(() => {
          setCopied(false); // Reset the copied state after 2 seconds
        }, 2000);
      }
    }
  };

  return (
    <div
      className={`row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 ${classNames}`}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center "}  `}>
        <div className="w-full h-full md:h-auto  absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={`${imgClassName}, "object-cover, object-center`}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-fit opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation></BackgroundGradientAnimation>
        )}
        <div
          className={`
            ${titleClassName}
            group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col  justify-start px-5 p-5 lg:p-10 text-[#ffffff] `}
        >
          {/* <div> */}
          <div className="font-sans font-extralight md:max-w-34 xl:text-xl md:text-base sm:text-sm  z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>
          {/* </div> */}
          {id === 3 && (
            <div className="flex gap-3 absolute w-fit bottom-0 right-0 opacity-70">
              <div className="flex flex-col gap-3">
                {["React.js", "Next.js","Nest.js",].map((item) => (
                  <span
                    key={item}
                    className="lg:py-3 lg:px-2 py-3 px-2 text-xs lg:text-xs opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {["AI integration","WhatsApp Business","RAG"].map((item) => (
                  <span
                    key={item}
                    className="lg:py-3 lg:px-2 py-3 px-2 text-xs lg:text-xs opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {["Node.js","Express.js","SQL/NoSql"].map((item) => (
                  <span
                    key={item}
                    className="lg:py-3 lg:px-2 py-3 px-2 text-xs lg:text-xs opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0  `}>
                <Lottie
                  key={copied ? "copied" : "notCopied"}
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email Copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

BentoGrid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
BentoGridItem.propTypes = {
  classNames: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  id: PropTypes.number.isRequired,
  img: PropTypes.string,
  imgClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  spareImg: PropTypes.string,
};
