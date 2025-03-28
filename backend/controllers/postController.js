const Post = require("../models/post");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      order: [["createdAt", "DESC"]],
      attributes: ["id", "name", "description", "createdAt", "updatedAt"]
    });
    res.json(posts);
  } catch (error) {
    console.error("Error al obtener posts:", error);
    res.status(500).json({
      error: "Error al obtener posts",
      details: error.message
    });
  }
};

const createPost = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || name.trim().length < 3) {
      return res.status(400).json({
        error: "El nombre debe tener al menos 3 caracteres"
      });
    }

    const post = await Post.create({
      name: name.trim(),
      description: description ? description.trim() : null
    });

    const newPost = await Post.findByPk(post.id);
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error al crear post:", error);
    res.status(500).json({
      error: "Error al crear post",
      details: error.message
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        error: "ID inválido"
      });
    }

    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({
        error: "Post no encontrado"
      });
    }

    const deletedPost = { ...post.toJSON() };
    await post.destroy();

    res.json({
      message: "Post eliminado correctamente",
      deletedPost
    });
  } catch (error) {
    console.error("Error al eliminar post:", error);
    res.status(500).json({
      error: "Error al eliminar post",
      details: error.message
    });
  }
};

module.exports = {
  getAllPosts,
  createPost,
  deletePost
};
