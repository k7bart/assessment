import React from "react";

import "./input.css";
import { CloseIcon, Svg } from "../shared";

export interface InputProps {
  type?: "text" | "number" | "password";
  value: string;
  clearable?: boolean;
  onChange: (value: string) => void;
  onClear?: () => void;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  clearable = false,
  onChange,
  onClear,
}) => {
  const [localType, setLocalType] = React.useState(type);

  const togglePasswordVisibility = () => {
    setLocalType(localType === "password" ? "text" : "password");
  };

  return (
    <div className="input-wrapper">
      {clearable && (
        <button className="button" onClick={onClear}>
          <CloseIcon />
        </button>
      )}

      <input
        type={localType}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input"
      />

      {type === "password" && (
        <button className="button" onClick={togglePasswordVisibility}>
          <Svg>
            {localType === "password" ? (
              <>
                {/* https://lucide.dev/icons/eye */}
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                <circle cx="12" cy="12" r="3" />
              </>
            ) : (
              <>
                {/* https://lucide.dev/icons/eye-off */}
                <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                <path d="m2 2 20 20" />
              </>
            )}
          </Svg>
        </button>
      )}
    </div>
  );
};
