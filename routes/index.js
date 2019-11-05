const express = require('express');
const router = express.Router();

const {songRouter} = require('./songs.js');
const {albumRouter} = require('./albums.js');

router.use('/songs', songRouter);
router.use('/albums', albumRouter);

module.exports = router;