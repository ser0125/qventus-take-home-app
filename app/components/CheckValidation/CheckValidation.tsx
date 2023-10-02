import { validations } from "@/app/validations/validations";

const CheckValidation = ({
  label,
  value,
  validation,
}: {
  label: string;
  value: string;
  validation: string;
}) => {
  const regExp = validations[validation];
  const isValid = regExp.test(value);
  return (
    <div>
      {isValid ? <label>Es valido</label> : <label>No es valido</label>}
      <label>{label}</label>
    </div>
  );
};

export default CheckValidation;
