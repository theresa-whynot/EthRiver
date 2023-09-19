

const path = require("path");
const fs = require("fs");
const solc = require("solc");

const contractPath = path.resolve(__dirname, "contracts", "ethrivercontract.sol");
const source = fs.readFileSync(contractPath, 'utf8');

const input = {
    language: "Solidity",
    sources: {
        "ethrivercontract.sol": {
            content: source,
        },
    },
    settings: {
        metadata: {
            useLiteralContent: true
        },
        outputSelection: {
            "*": {
                "*": ["*"]
            }
        }
    }
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

const contractABI = output.contracts['ethrivercontract.sol']['EthRiver'].abi;
console.log('Contract ABI:', JSON.stringify(contractABI, null, 4));
console.log('Contract successfully compiled');

module.exports = output.contracts["ethrivercontract.sol"].EthRiver;