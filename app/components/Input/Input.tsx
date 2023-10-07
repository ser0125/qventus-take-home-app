"use client";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import hidePassIcon from "../../assets/hide-pass.png";
import showPassIcon from "../../assets/show-pass.png";

const Input = ({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [type, setType] = useState("password");

  const toogleType = () => {
    if (type === "password") {
      setType("text");
      return;
    }
    setType("password");
  };
  return (
    <div className="flex border mx-5">
      <input
        className="h-7 border-current focus:outline-blue-500 focus:shadow-md"
        type={type}
        onChange={onChange}
        data-cy="password"
      />
      <button data-cy="button" className="px-2" onClick={toogleType}>
        <Image
          className="w-4 md:w-5 h-4 md:h-5"
          src={type === "password" ? showPassIcon : hidePassIcon}
          alt="pass-icon"
          data-cy={type === "password" ? "showPassword" : "hidePassword"}
        />
      </button>
    </div>
  );
};

export default Input;
