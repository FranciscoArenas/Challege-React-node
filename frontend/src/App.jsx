import React from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-between mb-6 border-b pb-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://www.tcit.cl/wp-content/uploads/2023/03/logo-tcit_1-1.svg"
              alt="TCIT Logo"
              className="h-12"
            />
            <h1 className="text-2xl font-bold text-gray-800">Challenge TCIT</h1>
          </div>
        </div>
        <PostFilter />
        <PostList />
        <PostForm />
      </div>
    </div>
  );
};

export default App;
