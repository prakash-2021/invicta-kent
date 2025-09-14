"use client";

import React from "react";

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
  return (
    <div className="flex flex-col w-full">
      <label className="mb-1 ik-body--sm--500 text-blue-gray block">
        {label} {required && <span className="text-primary-light-blue">*</span>}
      </label>
      <input
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        min={min}
        max={max}
        className="w-full border-b border-border placeholder-inactive-gray outline-none h-12 ik-body--md--500 bg-transparent text-blue-gray"
      />
    </div>
  );
};
