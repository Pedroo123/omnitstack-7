const express = require('express');
const PostController = require('./controllers/PostController');
const routes = new express.Router();
const multer = require('multer');
const uploadConfig = require('./config/upload');
const LikeController = require('./controllers/LikeController');

const upload = multer(uploadConfig);

//Middlewares de Post
routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);

//Middlewares de Likes
routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;
