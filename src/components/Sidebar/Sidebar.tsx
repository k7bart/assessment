import React from "react";
import { motion, type Transition } from "motion/react";
import { useClickAway } from "@uidotdev/usehooks";

import { Svg } from "../";
import type { Item } from "./types";

import "./sidebar.css";

interface SidebarItemProps {
  label: string;
  items?: Item[];
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, items }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const toggle = () => setIsCollapsed((state) => !state);

  const hasChilden = Array.isArray(items) && items.length;

  return (
    <div>
      <button className="button sidebar-item" onClick={toggle}>
        {hasChilden ? (
          <motion.div
            className="chevron"
            animate={{ rotate: isCollapsed ? -90 : 0 }}
          >
            <Svg>
              <path d="m6 9 6 6 6-6" />
            </Svg>
          </motion.div>
        ) : (
          <div className="offset" />
        )}

        {label}
      </button>

      {hasChilden && (
        <motion.div
          className="nested"
          animate={{ height: isCollapsed ? 0 : "auto" }}
        >
          {items.map((item) => (
            <SidebarItem {...item} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

const transition: Transition = {
  duration: 0.5,
  ease: [0.87, 0, 0.13, 1],
};

interface SidebarProps {
  menu: Item[];
  isOpen: boolean;
  onToggle: (isOpen?: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ menu, isOpen, onToggle }) => {
  const ref = useClickAway<HTMLDivElement>(() => onToggle(false));

  return (
    <>
      <button
        className="button button__square sidebar-trigger"
        onClick={() => onToggle()}
      >
        <Svg>
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </Svg>
      </button>
      <motion.div
        ref={ref}
        className="sidebar"
        animate={{ left: isOpen ? 0 : -320 }}
        transition={transition}
      >
        {menu.map((item) => (
          <SidebarItem {...item} />
        ))}
      </motion.div>
    </>
  );
};
