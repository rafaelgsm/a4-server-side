const { insertSong, getSongs } = require('../db/databaseUtils.js')

exports.getSongs = (req, res) => {
    getSongs()
        .then(songs => {
            res.send(songs)
        })
}

exports.getAlbumSongs = (req, res) => {
    res.send('get album songs!');
}

exports.postSongs = (req, res) => {

    const { name, album_id } = req.body

    insertSong(name, album_id)
        .then(r => {
            res.send(r)
        })
}