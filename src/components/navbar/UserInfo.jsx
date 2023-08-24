import React from "react";
import { useUserContext } from "../../context/UserContext";

export default function UserInfo() {
  const { user, isLogin } = useUserContext();
  return (
    <>
      {isLogin && (
        <div className="flex gap-1 items-center font-semibold">
          <img
            className="w-8 h-8 rounded-full"
            src={user.photoURL}
            alt={user.displayName}
          />
          <p>{user.displayName}</p>
        </div>
      )}
    </>
  );
}
