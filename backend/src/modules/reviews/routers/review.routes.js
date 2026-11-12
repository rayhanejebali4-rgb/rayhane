const express = require("express");
const router = express.Router();

const reviewController = require("../controllers/review.controller");

// Create review
router.post("/", reviewController.create);

// Get all reviews
router.get("/", reviewController.showall);

// Get review by ID
router.get("/:id", reviewController.showbyId);

// Update review
router.put("/:id", reviewController.update);

// Delete review
router.delete("/:id", reviewController.delete);

module.exports = router;