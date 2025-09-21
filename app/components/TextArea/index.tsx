"use client";

import React from "react";

type TextareaProps = {
  label: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
};

export const TextareaInput: React.FC<TextareaProps> = ({
  label,
  placeholder = "",
  required = false,
  name,
  value,
  onChange,
  rows = 4,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label className="mb-1 ik-body--sm--500 text-blue-gray block">
        {label} {required && <span className="text-primary-light-blue">*</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full border-b border-border placeholder-inactive-gray outline-none resize-none py-2"
      />
    </div>
  );
};
