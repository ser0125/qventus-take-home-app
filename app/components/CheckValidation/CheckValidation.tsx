import checkmark from "../../assets/checkmark.svg";
import xmark from "../../assets/x-white.svg";
import Image from "next/image";

const CheckValidation = ({
  label,
  isValid,
}: {
  label: string;
  isValid: boolean;
}) => {
  return (
    <div className="flex items-center my-2 md:my-1">
      <div
        className={`w-6 md:w-10 h-6 md:h-10 rounded-full mx-2.5 flex justify-center ${
          isValid ? "bg-lime-700" : "bg-red-700"
        }`}
      >
        {isValid ? (
          <Image
            className="w-4"
            src={checkmark}
            alt="check_mark"
            data-cy="checkmark"
          />
        ) : (
          <Image className="w-5" src={xmark} alt="x_mark" data-cy="xmark" />
        )}
      </div>
      <span data-cy="label">{label}</span>
    </div>
  );
};

export default CheckValidation;
