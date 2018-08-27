const fs = require('fs');
const path = require('path');

let _addDir = (dirname) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(dirname, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

let _readF = (dirname) => {
  return new Promise((resolve, reject) => {
    fs.readFile(dirname, (err, data) => {
      if (err) reject(err);
      return resolve(data);
    });
  });
};

let _writeF = (dirname, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(dirname, data, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

let _addFolder = async (dirname) => {
  try {
    await _addDir(dirname);
  } catch (err) {
    console.log(err);
  }
};

let _writeImg = async (dirname, localBase, nameFile) => {
  try {
    let data = await _readF(localBase);
    await _writeF(path.join(dirname, nameFile), data);
    console.log(path.join(dirname, nameFile));
  } catch (err) {
    console.log(err);
    throw err;
  }
};

let checkFolder = (dirname, localBase, nameFile) => {
  if (!fs.existsSync(dirname)) {
    _addFolder(dirname);
  } else {
    _writeImg(dirname, localBase, nameFile);
  }
  return 0;
};

module.exports = checkFolder;
