"use client";

import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="bg-red-500 text-white p-3 rounded-md"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
