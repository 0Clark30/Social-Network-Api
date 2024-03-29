const { connect, connection } = require("mongoose");

// change db name when time comes
const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialNetDB";

connect(connectionString);

module.exports = connection;