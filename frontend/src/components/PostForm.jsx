import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../actions/postActions";

const PostForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state) => state.posts.error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      await dispatch(
        createPost({
          name: name.trim(),
          description: description.trim()
        })
      );

      if (!error) {
        setName("");
        setDescription("");
      }
    } catch (err) {
      console.error("Error al crear post:", err);
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Agregar Nuevo
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">
          Crear
        </button>
      </form>
    </div>
  );
};

export default PostForm;
