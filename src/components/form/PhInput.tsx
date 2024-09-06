import { Input } from "antd";
import { Controller } from "react-hook-form";

const PhInput = ({ type, name, label }) => {
  return (
    <>
      <div>{label ? label : null}</div>
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </>
  );
};

export default PhInput;
