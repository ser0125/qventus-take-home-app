"use client";
import { ChangeEvent, useState } from "react";

const Input = ({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      className="h-7 border border-current focus:outline-blue-500 focus:shadow-md"
      type="text"
      onChange={onChange}
    />
  );
};

export default Input;
