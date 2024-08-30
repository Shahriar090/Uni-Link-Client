import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });
  const [login, { data, error }] = useLoginMutation();
  console.log("Data =>", data);
  console.log("Error =>", error);

  const onsubmit = (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    login(userInfo);
  };
  return (
    <div
      style={{ backgroundColor: "black", color: "aliceblue", height: "100vh" }}
    >
      <h1>Login Please</h1>
      <div>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div>
            <label htmlFor="id">ID:</label>
            <input type="text" id="id" {...register("id")} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" {...register("password")} />
          </div>
          <Button htmlType="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
