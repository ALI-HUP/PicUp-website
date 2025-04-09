"use client";
import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-3xl mb-5">Welcome to Our Photography Site</h1>
      <p className="mb-10">This is the place where you can view amazing photos and galleries. Please log in to access more features.</p>
      <a 
        href="/login" 
        className="bg-blue-500 text-white p-3 rounded-md"
      >
        Login
      </a>
    </div>
  );
};

export default Home;
