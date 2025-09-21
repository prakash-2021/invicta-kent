"use client";

import React, { useRef } from "react";

type DateInputProps = {
  label: string;
  required?: boolean;
  name?: string;
  value?: string; // ISO string (YYYY-MM-DD)
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: string; // YYYY-MM-DD
  max?: string; // YYYY-MM-DD
};

export const DateInput: React.FC<DateInputProps> = ({
  label,
  required = false,
  name,
  value,
  onChange,
  min,
  max,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker?.(); // Only works in modern browsers
    }
  };

  return (
    <div className="flex flex-col w-full">
      <label className="mb-1 ik-body--sm--500 text-blue-gray block">
        {label} {required && <span className="text-primary-light-blue">*</span>}
      </label>
      <input
        ref={inputRef}
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        min={min}
        max={max}
        onClick={handleClick}
        className="cursor-pointer w-full border-b border-border outline-none h-12 ik-body--md--500 bg-transparent text-blue-gray [color-scheme:light]"
      />
      <style jsx>{`
        /* Change calendar icon color */
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(13%) sepia(9%) saturate(2920%) hue-rotate(193deg)
            brightness(92%) contrast(97%);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
