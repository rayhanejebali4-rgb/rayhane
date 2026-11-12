const Review = require("../models/review.model");

const reviewController = {

    create: async (req, res) => {
        try {
            const { reviewerId, reviewedUserId, reviewType, rating, comment } = req.body;

            const review = await Review.create({
                reviewerId,
                reviewedUserId,
                reviewType,
                rating,
                comment
            });

            res.status(201).json(review);

        } catch (err) {
            console.error("Error creating review:", err);

            res.status(500).json({
                error: err.message || "Unknown error"
            });
        }
    },

    showall: async (req, res) => {
        try {
            const reviews = await Review.findAll();

            res.json(reviews);

        } catch (err) {
            console.error("Error getting reviews:", err.message);
            res.status(500).json({ error: err.message });
        }
    },

    showbyId: async (req, res) => {
        try {
            const id = req.params.id;

            const review = await Review.findByPk(id);

            if (!review) {
                return res.status(404).json({
                    message: "Review not found"
                });
            }

            res.json(review);

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id;

            const [updated] = await Review.update(req.body, {
                where: { id: id }
            });

            if (updated === 0) {
                return res.status(404).json({
                    message: "Review not found or no changes"
                });
            }

            const review = await Review.findByPk(id);

            res.json(review);

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const deleted = await Review.destroy({
                where: { id: id }
            });

            if (deleted === 0) {
                return res.status(404).json({
                    message: "Review not found"
                });
            }

            res.json({
                message: "Review deleted successfully"
            });

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};

module.exports = reviewController;