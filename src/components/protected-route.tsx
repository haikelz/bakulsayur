import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  isLoggedIn,
  children,
}: {
  isLoggedIn: string;
  children: ReactNode;
}) {
  return (
    <>{isLoggedIn === "true" ? children : <Navigate to="/auth/login" />}</>
  );
}
