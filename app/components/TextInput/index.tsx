"use client";

import React from "react";

type InputProps = {
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput: React.FC<InputProps> = ({
  label,
  placeholder = "",
  required = false,
  type = "text",
  name,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label className="mb-1 ik-body--sm--500 text-blue-gray block">
        {label} {required && <span className="text-primary-light-blue">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full border-b border-border placeholder-inactive-gray outline-none h-12 ik-body--md--500"
      />
    </div>
  );
};
