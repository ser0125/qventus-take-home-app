import { ChangeEvent, useState } from "react";
import { validations } from "../validations/validations";

const useValidation = (passwordReqs: any) => {
  const [arrayChecked, setArrayChecked] = useState<any[]>(passwordReqs);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    runValidations(e.target.value);
  };

  const runValidations = (value: string) => {
    const validationsChecked = passwordReqs.map((req: any) => {
      const regExp = validations[req.validation];
      console.log("value", value);
      console.log("regExp", regExp);
      const isValid = regExp.test(value);
      return isValid ? { ...req, isValid: true } : { ...req, isValid: false };
    });
    setArrayChecked(validationsChecked);
  };

  return { handleChange, arrayChecked };
};

export default useValidation;
