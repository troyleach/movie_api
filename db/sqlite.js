// .verbose() to get extra info for debugging.
// const sqlite3 = require('sqlite3').verbose();

// const path = require('path');
// const dbPath = path.resolve(__dirname, 'movies.db');
// console.log('path do my db', dbPath)


// there are three opening modes:
// sqlite3.OPEN_READONLY: open the database for read-only.
// sqlite3.OPEN_READWRITE : open the database for reading and writing.
// sqlite3.OPEN_CREATE: open the database, if the database does not exist, create a new database.

// let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log('Connected to the movies database.');
// });


// db.serialize(() => {
//   db.each(`SELECT title as t FROM movies`, (err, row) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log(`Movie title ${row}`)
//   })
// })

// db.close((err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });



// module.exports = { db }
