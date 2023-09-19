

const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require("./compile");


const provider = new HDWalletProvider(
    process.env.REACT_APP_METAMASK_MNEMONIC,
    process.env.REACT_APP_INFURA_API
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(abi)
        .deploy({ data: "0x" + evm.bytecode.object })
        .send({ value: '10000000000000000', gas: '10000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
};

deploy();

