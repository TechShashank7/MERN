const crypto = require("crypto");

const password = "mypassword";

const hash = crypto.createHash("sha256")
    .update(password)
    .digest("binary");

console.log(hash);