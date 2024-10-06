const { Sequelize } = require('sequelize');
const ReviewModel = require('./review');
const CommentModel = require('./comment');

const sequelize = new Sequelize('postgres://postgres:123456@localhost:5432/desserts', {
    dialect: 'postgres',
});


const Review = ReviewModel(sequelize);
const Comment = CommentModel(sequelize);

// Asociaciones
Review.associate({ Comment });

module.exports = { sequelize, Review, Comment };
