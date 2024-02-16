const bcrypt = require("bcrypt");

const hashedPassword = (password) => {
  return new Promise((resolve, rejected) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        rejected(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          rejected(err);
        }
        resolve(hash);
      });
    });
  });
};

module.exports = {
  hashedPassword,
};
