// compile code will go here
const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, { encoding: "utf-8" });

module.exports = solc.solc.compile(source, 1);
