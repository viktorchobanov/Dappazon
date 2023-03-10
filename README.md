# Dappazon

## Technology Stack & Tools

- Solidity
- Javascript
- [Hardhat](https://hardhat.org/) 
- [Ethers.js](https://docs.ethers.io/v5/) 
- [React.js](https://reactjs.org/) 

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
`$ npm install`

### 3. Run tests
`$ npx hardhat test`

### 4. Start Hardhat node
`$ npx hardhat node`

### 5. Run deployment script
In a separate terminal execute:
`$ npx hardhat run ./scripts/deploy.js --network localhost`

### 6. Start frontend
`$ npm run start`

### Common Problems:

1. `If your transaction fails - You could reset your MetaMask account and try again. This happens when you have already run the project once and bought something`
2. `If the main page appears empty - make sure you had run the 5th step correctly`