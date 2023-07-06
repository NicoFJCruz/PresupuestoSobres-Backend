const crypto = require('crypto');

const generateShortHash = (data) => {
  const hash = crypto.createHash('md5').update(data).digest('base64');
  return hash;
};

const timestamp = Date.now().toString();
const randomValue = "Cruz";

console.log("HASH", generateShortHash(timestamp + randomValue));
