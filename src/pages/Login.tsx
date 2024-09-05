import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PhForm from "../components/form/PhForm";
import PhInput from "../components/form/PhInput";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });
  const [login] = useLoginMutation();

  const onsubmit = async (data: FieldValues) => {
    console.log(data);
    // const toastId = toast.loading("Logging IN", { duration: 3000 });
    // try {
    //   const userInfo = {
    //     id: data.id,
    //     password: data.password,
    //   };
    //   const res = await login(userInfo).unwrap();
    //   const user = verifyToken(res.data.accessToken) as TUser;
    //   dispatch(setUser({ user: user, token: res.data.accessToken }));
    //   navigate(`/${user.role}/dashboard`);
    //   toast.success("User Login Successful", { duration: 3000, id: toastId });
    // } catch (err) {
    //   toast.error("User Login Failed", { duration: 3000, id: toastId });
    // }
  };
  return (
    <div
      style={{ backgroundColor: "black", color: "aliceblue", height: "100vh" }}
    >
      <h1>Login Please</h1>
      <div>
        <PhForm onSubmit={onsubmit}>
          <div>
            <PhInput type={"id"} name={"id"} label={"Id"} />
          </div>
          <div>
            <PhInput type={"text"} name={"password"} label={"Password"} />
          </div>
          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </div>
    </div>
  );
};

export default Login;
