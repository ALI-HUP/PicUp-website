"use client";

import React from "react";
import { signIn } from "next-auth/react";

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-3xl font-bold">Welcome to the Site!</h1>
      <p className="mt-5">This is where you can learn more about us.</p>
      <button
        onClick={() => signIn("credentials", { callbackUrl: "/" })}
        className="mt-5 p-2 bg-blue-600 text-white rounded"
      >
        Login
      </button>
    </div>
  );
};

export default LandingPage;
