const mysql = require('mysql')
const { cp } = require('./connection.js')
const { query } = require('./promise-mysql.js')

///////////////////////////////////////////////////////////////
// Albums
///////////////////////////////////////////////////////////////

const insertAlbum = (name, genre) => {

    let sql = `INSERT INTO album (name, genre) 
            VALUES (${mysql.escape(name)}, ${mysql.escape(genre)});`

    return query(cp, sql)
}

const getAlbumsOnly = () => {
    let sql = `SELECT * FROM album;`

    return query(cp, sql)
}

const getAlbums = () => {

    return Promise.all([getAlbumsOnly(), getSongs()])
        .then(values => {

            let albums = values[0]
            let songs = values[1]

            albums.map(item => {

                item.songs = songs.filter(song => {
                    return song.album_id == item.album_id
                })

            })

            return albums
        })
}

exports.insertAlbum = insertAlbum
exports.getAlbums = getAlbums
///////////////////////////////////////////////////////////////
// Songs
///////////////////////////////////////////////////////////////

const getSongs = () => {
    let sql = `SELECT
    
    song.song_id AS song_id,
    song.name AS song_name,
    album.name AS album_name,
    album.genre AS album_genre,
    song.album_id AS album_id
    
    FROM song
    
    LEFT JOIN album
    ON album.album_id = song.album_id
    ;`

    return query(cp, sql)
}

const insertSong = (name, album_id) => {

    let x = 'NULL'
    if (album_id && album_id != 'undefined') {
        x = album_id
    }

    let sql = `INSERT INTO song (name, album_id) 
            VALUES (${mysql.escape(name)}, ${x});`

    return query(cp, sql)
}

exports.insertSong = insertSong
exports.getSongs = getSongs
///////////////////////////////////////////////////////////////
