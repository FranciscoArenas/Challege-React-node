import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, deletePost } from "../actions/postActions";

const PostList = () => {
  const { filteredPosts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="space-y-4">
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg border border-red-400">
          {error}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Nombre
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Descripción
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Acción
              </th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.length === 0 ? (
              <tr>
                <td
                  colSpan="3"
                  className="text-center py-4">
                  No hay posts disponibles
                </td>
              </tr>
            ) : (
              currentPosts.map((post) => (
                <tr
                  key={post.id}
                  className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {post.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {post.description}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
            {[...Array(6 - currentPosts.length)].map((_, index) => (
              <tr
                key={`empty-${index}`}
                className="h-10">
                <td className="border border-gray-300"></td>
                <td className="border border-gray-300"></td>
                <td className="border border-gray-300"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}>
            Anterior
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}>
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}>
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};

export default PostList;
