import React, { useEffect } from "react";
import {
  AnimatePresence,
  motion,
  type HTMLMotionProps,
  type Transition,
} from "motion/react";

import { CloseIcon } from "../";

import "./toast.css";

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

const transition: Transition = {
  duration: 1,
  ease: [0.87, 0, 0.13, 1],
};

export interface ToastProps {
  timeout: number;
  transitionType: "fade" | "slide";
}

export const Toast: React.FC<ToastProps> = ({ timeout, transitionType }) => {
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
          {...(transitionType === "fade" ? fadeTransition : slideTransition)}
          transition={transition}
          className="toast"
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
