import { validations } from "@/app/validations/validations";
import checkmark from "@/public/checkmark.svg";
import xmark from "@/public/x-white.svg";
import Image from "next/image";

const CheckValidation = ({
  label,
  isValid,
}: {
  label: string;
  isValid: boolean;
}) => {
  return (
    <div className="flex items-center">
      <div
        className={`w-10 h-10 rounded-full mx-2.5 my-1 flex justify-center ${
          isValid ? "bg-lime-700" : "bg-red-700"
        }`}
      >
        {isValid ? (
          <Image className="w-5" src={checkmark} alt="check image" />
        ) : (
          <Image className="w-5" src={xmark} alt="check image" />
        )}
      </div>
      <label>{label}</label>
    </div>
  );
};

export default CheckValidation;
