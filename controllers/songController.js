const { insertSong, getSongs, albumSongs } = require('../db/databaseUtils.js')

exports.getSongs = (req, res) => {
    getSongs()
        .then(songs => {
            res.send(songs)
        })
}

exports.getAlbumSongs = (req, res) => {
    albumSongs()
        .then(r => {
            res.send(r);
         })
}

exports.postSongs = (req, res) => {

    const { name, album_id } = req.body

    insertSong(name, album_id)
        .then(r => {
            res.send(r)
        })
}