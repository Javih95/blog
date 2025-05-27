const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET /posts - obtener todos los posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /posts/:id - obtener un post por ID
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post no encontrado' });
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST /posts - crear nuevo post
router.post('/', async (req, res) => {
    const { title, content, coverImage, tags, author } = req.body;
    const newPost = new Post({ title, content, coverImage, tags, author });

    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT /posts/:id - actualizar un post
router.put('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedPost) return res.status(404).json({ message: 'Post no encontrado' });
        res.json(updatedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE /posts/:id - eliminar un post
router.delete('/:id', async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) return res.status(404).json({ message: 'Post no encontrado' });
        res.json({ message: 'Post eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
