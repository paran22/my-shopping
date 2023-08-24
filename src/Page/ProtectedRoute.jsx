import React from "react";
import { Navigate } from "react-router";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children, requiredAdmin = false }) {
  const { isLogin, isAdmin } = useAuthContext();
  if (!isLogin || isAdmin !== requiredAdmin) {
    return <Navigate to="/" replace />;
  }
  return children;
}
