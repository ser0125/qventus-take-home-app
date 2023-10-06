"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Input from "../Input/Input";
import CheckValidation from "../CheckValidation/CheckValidation";
import useValidation from "@/app/hooks/useValidation";
import { PasswordReq } from "@/app/interfaces/PasswordReq";

const Password = ({ passwordReqs }: { passwordReqs: PasswordReq[] }) => {
  const { handleChange, arrayChecked } = useValidation(passwordReqs);
  return (
    <div className="flex items-center pt-5">
      <Input onChange={handleChange} />
      <div className="flex flex-col">
        {arrayChecked &&
          arrayChecked.map((req: any) => (
            <CheckValidation
              key={req.id}
              label={req.label}
              isValid={req.isValid}
            />
          ))}
      </div>
    </div>
  );
};

export default Password;
