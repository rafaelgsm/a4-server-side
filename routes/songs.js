const express = require("express");
const router = express.Router();

const songController = require('../controllers/songController.js');

router.get('/', songController.getSongs)

router.post('/', songController.postSongs)

router.get('/album-songs', songController.getAlbumSongs)





module.exports.songRouter = router;