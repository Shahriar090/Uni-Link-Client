import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken); //current token was exported from auth slice.

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
