import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_POSTS_FAILURE", payload: error.message });
  }
};

export const createPost = (postData) => async (dispatch) => {
  try {
    const posts = await axios.get(API_URL);
    const isDuplicate = posts.data.some(
      (post) =>
        post.name.toLowerCase().trim() === postData.name.toLowerCase().trim() &&
        (post.description || "").toLowerCase().trim() ===
          (postData.description || "").toLowerCase().trim()
    );

    if (isDuplicate) {
      dispatch({
        type: "CREATE_POST_FAILURE",
        payload: "Ya existe un post con el mismo nombre y descripción"
      });
      return;
    }

    const response = await axios.post(API_URL, {
      name: postData.name.trim(),
      description: postData.description.trim()
    });

    dispatch({ type: "CREATE_POST_SUCCESS", payload: response.data });

    const updatedPosts = await axios.get(API_URL);
    dispatch({ type: "FETCH_POSTS_SUCCESS", payload: updatedPosts.data });
  } catch (error) {
    dispatch({
      type: "CREATE_POST_FAILURE",
      payload: error.response?.data?.error || "Error al crear el post"
    });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({ type: "DELETE_POST_SUCCESS", payload: id });
  } catch (error) {
    console.error("Error deleting post:", error);
    dispatch({ type: "DELETE_POST_FAILURE", payload: error.message });
  }
};

export const filterPosts = (searchTerm) => ({
  type: "FILTER_POSTS",
  payload: searchTerm
});
