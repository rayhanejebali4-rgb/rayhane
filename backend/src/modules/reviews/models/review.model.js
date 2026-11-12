const { DataTypes } = require("sequelize");
const { bd } = require("../../../config/bd");

const Review = bd.define("Review", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    reviewerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    reviewedUserId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    reviewType: {
        type: DataTypes.ENUM("CLIENT", "FREELANCER"),
        allowNull: false,
        defaultValue: "CLIENT"
    },

    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    comment: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

module.exports = Review;