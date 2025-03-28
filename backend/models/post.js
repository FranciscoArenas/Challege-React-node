const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Post = sequelize.define(
  "Post",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    }
  },
  {
    tableName: "posts",
    timestamps: true,
    underscored: true
  }
);

module.exports = Post;
