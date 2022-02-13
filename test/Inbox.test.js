// contract test code will go here
const assert = require("assert");
const ganache = require("ganache-cli");
const { describe, it } = require("mocha");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

beforeEach(async () => {
  // Get a list of all accounts
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
});

describe("Inbox", () => {
  it("deploy a contract", () => {});
});
