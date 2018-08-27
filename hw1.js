const fs = require('fs');
const path = require('path');
const addfolder = require('./checkfolder');
const con = require('./config');

if (!fs.existsSync(con.base2)) fs.mkdirSync(con.base2);

const readDir = (base) => {
  const files = fs.readdirSync(base);

  files.forEach(item => {
    let localBase = path.join(base, item);
    let state = fs.statSync(localBase);

    if (state.isDirectory()) {
      readDir(localBase);
    } else {
      addfolder(path.join(con.base2, item[0].toUpperCase()), localBase, item);
    }
  });
};

readDir(con.base, 0);
