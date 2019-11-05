const { insertAlbum, getAlbums } = require('../db/databaseUtils.js')


exports.getAlbums = (req, res) => {
    
    getAlbums()
        .then(r => {
            res.send(r)
        })
}

exports.postAlbums = (req, res) => {

    const {name, genre} = req.body

    console.log(`postAlbums`);
    
    insertAlbum(name, genre)
        .then(r => {
            console.log(`postAlbums` + r);
            res.send()
        })
        .catch(err => {
            console.log(`postAlbums` + err);
        })

}
