import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPosts } from "../actions/postActions";

const PostFilter = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(filterPosts(searchTerm));
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-4 mb-6">
      <input
        type="text"
        placeholder="Filtro de Nombre"
        value={searchTerm}
        onChange={handleFilterChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
        Buscar
      </button>
    </form>
  );
};

export default PostFilter;
