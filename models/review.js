const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Review = sequelize.define('Review', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Review.associate = (models) => {
        Review.hasMany(models.Comment, { foreignKey: 'review_id' });
    };

    return Review;
};
