//node -r dotenv/config ./db/setup.js

const { cp } = require('./connection.js')
const { query } = require('./promise-mysql.js')

const SQL_DROP =
    `DROP TABLE IF EXISTS song;
    DROP TABLE IF EXISTS album;`

const SQL_ALBUM =
    `   CREATE TABLE album (
        album_id int AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        genre varchar(255),
        
        PRIMARY KEY (album_id)
    );
`

const SQL_SONG =
    `   CREATE TABLE song (
        song_id int AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        album_id int NULL,
        
        PRIMARY KEY (song_id),
        FOREIGN KEY (album_id) REFERENCES album(album_id)
    );
`

//.....

////////////////////////////////////////////////
// songs_on_albums VIEW
////////////////////////////////////////////////
let SQL_VIEW_ALBUM_SONGS_DROP = `DROP VIEW IF EXISTS songs_on_albums;`

let SELECT_ALBUM_SONGS = `SELECT
    
    *
    
    FROM song    
    WHERE album_id IS NOT NULL
    `

const SQL_VIEW_ALBUM_SONGS =
    `   CREATE VIEW songs_on_albums AS ${SELECT_ALBUM_SONGS};
    `
////////////////////////////////////////////////    


// query(cp, SQL_DROP)
// .then(query(cp, SQL_ALBUM))
// .then(query(cp, SQL_SONG))

query(cp,
    SQL_VIEW_ALBUM_SONGS_DROP +

    SQL_DROP +
    SQL_ALBUM +
    SQL_SONG +

    SQL_VIEW_ALBUM_SONGS
)
    .then(r => {
        console.log(`DONE!`);

    })