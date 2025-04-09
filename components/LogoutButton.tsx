// Import the signOut method from next-auth/react
"use client";

import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}  // Redirect to home page after logout
      className="bg-red-500 text-white p-3 rounded-md"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
