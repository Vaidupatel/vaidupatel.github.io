import PropTypes from "prop-types";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { FaHome } from "react-icons/fa";
import { useState } from "react";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={`flex max-w-fit  fixed top-10 inset-x-0 mx-auto  rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-5  items-center justify-center space-x-4 border  border-white[0.2] bg-black-100 ${className}`}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={`relative dark:text-neutral-50 items-center flex space-x-1 text-white-100 dark:hover:text-neutral-300 hover:text-white-200`}
          >
            <span className="sm:text-sm text-[10px] !cursor-pointer">
              {navItem.icon}
            </span>
            <span className="sm:text-sm text-[10px] !cursor-pointer">
              {navItem.name === "Home" ? <FaHome /> : navItem.name}
            </span>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNav;
FloatingNav.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      icon: PropTypes.node,
    })
  ).isRequired,
  className: PropTypes.object,
};
