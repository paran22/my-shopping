import React from "react";
import { useUserContext } from "../../context/UserContext";

export default function UserInfo() {
  const { user, isLogin } = useUserContext();
  return (
    <>
      {isLogin && (
        <div className="flex gap-1 items-center">
          <img
            className="w-8 h-8 shrink-0 rounded-full"
            src={user.photoURL}
            alt={user.displayName}
          />
          <p className="hidden sm:block font-semibold">{user.displayName}</p>
        </div>
      )}
    </>
  );
}
