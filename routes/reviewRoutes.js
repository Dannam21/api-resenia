const express = require('express');
const { Review, Comment } = require('../models'); // Cambiado aquí

const router = express.Router();

router.get('/', async (req, res) => {
    const reviews = await Review.findAll({ include: Comment });
    res.json(reviews);
});

router.post('/', async (req, res) => {
    const review = await Review.create(req.body);
    res.status(201).json(review);
});

router.post('/:reviewId/comments', async (req, res) => {
    const comment = await Comment.create({ ...req.body, review_id: req.params.reviewId });
    res.status(201).json(comment);
});

module.exports = router; // Se simplifica el export
