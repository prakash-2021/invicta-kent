"use client";

import React from "react";

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  label: string;
  options: SelectOption[];
  required?: boolean;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const SelectInput: React.FC<SelectProps> = ({
  label,
  options,
  required = false,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label className="mb-1 ik-body--sm--500 text-blue-gray block">
        {label} {required && <span className="text-primary-light-blue">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border-b border-border outline-none h-12 ik-body--md--500 bg-transparent text-blue-gray"
      >
        <option value="" disabled>
          -- Select {label} --
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="text-blue-gray">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
