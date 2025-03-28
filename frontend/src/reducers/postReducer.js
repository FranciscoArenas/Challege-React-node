const initialState = {
  posts: [],
  filteredPosts: [],
  error: null,
  lastSearch: ""
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_SUCCESS":
      const uniquePosts = action.payload.reduce((acc, post) => {
        if (!acc.find((p) => p.id === post.id)) {
          acc.push(post);
        }
        return acc;
      }, []);
      return {
        ...state,
        posts: uniquePosts,
        filteredPosts: uniquePosts,
        error: null
      };

    case "CREATE_POST_SUCCESS":
      const isDuplicate = state.posts.some(
        (p) =>
          p.name.toLowerCase().trim() ===
            action.payload.name.toLowerCase().trim() &&
          (p.description || "").toLowerCase().trim() ===
            (action.payload.description || "").toLowerCase().trim()
      );

      if (isDuplicate) {
        return {
          ...state,
          error: "Ya existe un post con el mismo nombre y descripción"
        };
      }

      return {
        ...state,
        posts: [...state.posts, action.payload],
        filteredPosts: [...state.posts, action.payload],
        error: null
      };

    case "DELETE_POST_SUCCESS":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
        filteredPosts: state.filteredPosts.filter(
          (post) => post.id !== action.payload
        ),
        error: null
      };

    case "FILTER_POSTS":
      const searchTerm = action.payload.toLowerCase().trim();

      if (!searchTerm) {
        return {
          ...state,
          filteredPosts: state.posts,
          lastSearch: ""
        };
      }

      return {
        ...state,
        filteredPosts: state.posts.filter((post) => {
          const name = post.name?.toLowerCase() || "";
          const description = post.description?.toLowerCase() || "";
          return name.includes(searchTerm) || description.includes(searchTerm);
        }),
        lastSearch: searchTerm
      };

    case "FETCH_POSTS_FAILURE":
    case "CREATE_POST_FAILURE":
    case "DELETE_POST_FAILURE":
      return {
        ...state,
        error: action.payload,

        posts: state.posts,
        filteredPosts: state.filteredPosts
      };

    default:
      return state;
  }
};

export default postReducer;
