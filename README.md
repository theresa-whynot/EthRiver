# EthRiver

EthRiver is a test ether faucet that users can collect ether from and donate ether to.

## MLH's Web3 Global Hack Week Hackathon

I created this project for [Major League Hacking's Web3 Global Hack Week Hackathon](https://devpost.com/software/ethriver)! The challenge was to hack with Web3 APIs. This project uses the below Web3 APIs:

1. **Infura API:** interacts with the faucet smart contract on the ethereum testnet so users can execute transactions with their ether wallets
2. **Etherscan API:** interacts with live ether price, gas, and smart contract so users can observe live blockchain metrics they may be interested in


## Getting Started

Follow these steps to set up and run EthRiver on your local machine. You can also visit [EthRiver](https://ethriver.netlify.app/) on the live web!

### Prerequsites

Before you begin, ensure you have the following installed on your computer:

1. IMPORTANT!!! This project requires the three environment variables below to be generated in order to run locally!!!
   
   #### REACT_APP_ETHERSCAN_API_KEY
   1. Go to the Etherscan website at [https://etherscan.io/](https://etherscan.io/)
   2. Sign up for an Etherscan account by clicking "Create Account" or "Sign Up."
   3. Provide the necessary information and complete the registration process.
   4. After logging in, go to the Etherscan Dashboard.
   5. Find the "API-KEYs" section in the dashboard or navigate to https://etherscan.io/myapikey.
   6. Click the "Create" button to generate a new API key.
   7. You may need to provide additional information or agree to their terms of use. Follow the on-screen instructions.
   8. Once generated, your Etherscan API key will be displayed.Copy and securely store this API key.

   #### REACT_APP_INFURA_API
   1. Go to the Infura website at [https://infura.io/](https://infura.io/)
   2. Sign up for an Infura account by clicking the "Get Started for Free" or "Sign Up" button.
   3. Provide the required information and follow the registration process.
   4. Once you've registered and logged in, go to the Infura Dashboard.
   5. Create a new Ethereum project by clicking the "Create New Project" button.
   6.Give your project a name and *select the 'Sepolia' Ethereum network* to generate the URL from.
   7. Your Infura API key will be generated. Copy and securely store this API key.

   #### Install MetaMask and retrieve REACT_APP_METAMASK_MNEMONIC
   1. Go to the MetaMask website at [https://metamask.io/](https://metamask.io/)
   2. Click on the "Get Chrome Extension" or "Get Firefox Extension" button, depending on your browser.
   3. Follow the on-screen instructions to add the MetaMask extension to your browser. You may need to confirm the installation.
   4. After installation, you'll see the MetaMask icon in your browser's extensions bar. Click on it.
   5. Click the "Get Started" button to begin setting up your wallet.
   6. Choose the option to "Create a Wallet."
   7. Enter a strong and secure password for your MetaMask wallet. Confirm the password.
   8. You will be presented with a 12-word mnemonic phrase. These words are crucial for accessing your wallet and funds. Write down these words in the exact      	order provided. Ensure you store them securely and offline. Do not share them with anyone.
   9. MetaMask will ask you to confirm your mnemonic phrase by selecting the words in the correct order. This step ensures that you've recorded the phrase 	accurately.
   10. Once you've confirmed the mnemonic phrase, your MetaMask wallet setup is complete.
   11. To access your wallet in the future, simply click the MetaMask icon in your browser, enter your password, and you'll be able to manage your Ethereum 	assets.


2. Node.js: [Download and install Node.JS](https://nodejs.org/)


### Installation

1. Download the project repository by either [downloading the zip file](https://github.com/theresa-whynot/ethriver/archive/main.zip) or using Git to [clone the repository](https://github.com/theresa-whynot/ethriver.git) (green "<>Code" button > Clone with HTTPS, SSH or GitHub CLI) 
   
2. Enter the Infura API key, Etherscan API key and MetaMask 12 word MetaMask mnemonic to the suggested.env file:
   1. Enter the keys into the suggested.env file in the root folder of the ethriver-main directory.
   2. Save and rename the suggested.env file from "suggested.env" to ".env" only. 
   
3. Navigate to the project directory in your terminal: **cd ethriver-main** 
   
4. Install the project dependencies: **npm install**
   
### Running the App

1. After installing the dependencies, start the app: **npm start** 
   
2. Open your web browser and go to: [http://localhost:3000](http://localhost:3000)

---

Collect and donate from the EthRiver faucet! Review critical ethereum mainnet metrics!
