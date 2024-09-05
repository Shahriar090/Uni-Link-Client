import { useFormContext } from "react-hook-form";

const PhInput = ({ type, name, label }) => {
  const { register } = useFormContext();
  return (
    <>
      <div>{label ? label : null}</div>
      <input type={type} id={name} {...register(name)} />
    </>
  );
};

export default PhInput;
