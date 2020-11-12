const { db } = require('../db/sqlite');

class Model {
  constructor(table) {
    this.data = undefined;
    this.table = table;
  }

  // async select(columns, clause) {
  //   let data;
  //   let sql = `SELECT ${columns} FROM ${this.table} `
  //   if (clause) sql += clause;
  //   // db.serialize(() => {
  //   db.all(sql, (err, row) => {
  //     if (err) {
  //       console.error(err.message);
  //     }
  //     // console.log(`Movie title ${row.t}`)
  //     return row;
  //     // console.log('in model', this.data);
  //   });
  //   // });
  // };

  async select(columns, clause) {
    let data;
    let sql = `SELECT ${columns} FROM ${this.table} `
    if (clause) sql += clause;
    return new Promise((resolve, reject) => {
      db.all(sql, (err, row) => {
        if (err) {
          console.log(error(err.message))
          console.log(err)
          reject(err);
        } else {
          resolve(row)
        }
      })
    })
  };
};

// export default Model;
module.exports = Model;