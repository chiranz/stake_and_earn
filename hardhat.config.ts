import "@nomiclabs/hardhat-waffle";
import { HardhatUserConfig } from "hardhat/types";
import dotenv from "dotenv";
dotenv.config();

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async () => {
//   const accounts = await ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: "0.8.3", settings: {} }],
  },
  paths: { artifacts: "./src/artifacts" },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ropsten: {
      url: `${process.env.INFURA_API}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};

export default config;
