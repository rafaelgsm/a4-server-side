const express = require("express");
const router = express.Router();

const albumController = require('../controllers/albumController.js');

router.get('/', albumController.getAlbums)
router.post('/', albumController.postAlbums)

module.exports.albumRouter = router;