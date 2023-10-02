"use client";
import { ChangeEvent, useState } from "react";

const Input = ({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return <input type="text" onChange={onChange} />;
};

export default Input;
