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
        album_id int,
        
        PRIMARY KEY (song_id),
        FOREIGN KEY (album_id) REFERENCES album(album_id)
    );
`

// query(cp, SQL_DROP)
// .then(query(cp, SQL_ALBUM))
// .then(query(cp, SQL_SONG))

query(cp, SQL_DROP + SQL_ALBUM + SQL_SONG)