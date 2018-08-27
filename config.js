const path = require('path');

const filename = 'img';
const base = path.join(__dirname, filename);
const filename2 = filename + 'Copy';
const base2 = path.join(__dirname, filename2);

module.exports = {
  base: base,
  base2: base2
};
