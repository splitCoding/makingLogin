const crypto = require('crypto');
const mysalt = 'makinglogin';

module.exports = (password) => {
  return crypto.createHash('sha512').update(password + mysalt).digest('base64');
}