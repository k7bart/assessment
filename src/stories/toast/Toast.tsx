import React, { useEffect } from "react";
import { AnimatePresence, motion, type HTMLMotionProps } from "motion/react";

import "./toast.css";
import { CloseIcon } from "../shared";

export interface ToastProps {
  timeout: number;
  transition: "fade" | "slide";
}

const slideTransition: HTMLMotionProps<"div"> = {
  initial: { right: -300 },
  animate: { right: 32 },
  exit: { right: -300 },
};

const fadeTransition: HTMLMotionProps<"div"> = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const Toast: React.FC<ToastProps> = ({ timeout, transition }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => setIsVisible(false), timeout);

    return () => clearTimeout(timerId);
  }, [timeout]);

  const cancel = () => setIsVisible(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          {...(transition === "fade" ? fadeTransition : slideTransition)}
          transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
          className="toast"
          onAnimationEnd={() => console.log("test")}
        >
          Important message!
          <button className="button button__square" onClick={cancel}>
            <CloseIcon />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
