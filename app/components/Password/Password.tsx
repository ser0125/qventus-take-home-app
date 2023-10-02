"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Input from "../Input/Input";
import CheckValidation from "../CheckValidation/CheckValidation";

const Password = ({ passwordReqs }: { passwordReqs: any }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Input onChange={handleChange} />
      {passwordReqs.map((req: any) => (
        <CheckValidation
          key={req.id}
          label={req.label}
          value={value}
          validation={req.validation}
        />
      ))}
    </div>
  );
};

export default Password;
