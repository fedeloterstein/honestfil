# HonestFIL 🕵️
Project built in the ETHGlobal FVM SPACE WARP Hackathon

## 👤 Author
- Federico Loterstein ([@fedeloters](https://twitter.com/fedeloters))
- Juanma Espejel ([@espejeljuanma](https://twitter.com/espejeljuanma))

## 🌈 About

HonestFIL a real-time reserve tracking dashboard for maximum transparency, trust and ease to audit protocols, exchanges or dapps on Filecoin.

HonestFIL is a dashboard for protocols and dapps built on the Filecoin blockchain, offering real-time tracking and alerts for potential issues or hacks to ensure secure reserves.

Our platform offers auditing services and rewards auditors for verifying reserves, giving users peace of mind and confidence in their investments.

## 🏗 Get Started
### Clone the project
```bash
  git clone https://github.com/fedeloterstein/honestfil.git
```
### Install node modules
```bash
  cd honestfil
  yarn install
```

### Update the private key
Add your deployment account private key in hardhat config file.

### Compile the Smart Contracts
```bash
  npx hardhat compile
```
### Fund deployment account
Go to the [Hyperspace testnet faucet](https://hyperspace.yoga/#faucet), and paste in the Ethereum address from the previous step. This will send some hyperspace testnet FIL to the account.


### Deploy the Smart Contracts on Wallaby Testnet
```bash
  npx hardhat deploy
```

> Note the contract address and locate the contract ABI under deployments folder and replace it inside the contants file under client folder.

### Install node modules inside client folder
```bash
  cd client
  yarn install
```

### To deploy this project run

```bash
  yarn dev
```

## ✅ Contributing 
PRs and issues are always welcome. Feel free to submit any issues or ideas you have at the [issues page](https://github.com/fedeloterstein/honestfil/issues).