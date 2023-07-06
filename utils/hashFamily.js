const crypto = require("crypto");

const generateHash = (data) => {
  const timestamp = Date.now().toString();

  const hash = crypto
    .createHash("md5")
    .update(data + timestamp)
    .digest("hex");
  return hash.substring(0, 16);
};

module.exports = {
  generateHash,
};
