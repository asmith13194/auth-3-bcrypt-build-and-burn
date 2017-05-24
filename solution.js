var bcrypt = require('bcrypt')
// console.log(bcrypt);
function hash(plaintext) {
  console.log(plaintext);
  return bcrypt.hashSync(plaintext,8)
}

function compare(plaintext, hash) {
  return bcrypt.compareSync(plaintext,hash)
}

module.exports = {
  hash, compare
};
