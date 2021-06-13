import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";
import "@typechain/ethers-v5";
import { HardhatUserConfig } from "hardhat/types";
import dotenv from "dotenv";
import {
  eEthereumNetwork,
  eNetwork,
  ePolygonNetwork,
  NETWORKS_RPC_URL,
} from "./helpers/types";
import { chainId } from "./helpers/hardhat_helper";
import { getPrivateKey } from "./helpers/env_helper";
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
const getCommonNetworkConfig = (networkName: eNetwork) => ({
  url: NETWORKS_RPC_URL[networkName],
  chainId: chainId[networkName],
  accounts: [getPrivateKey()],
});

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: "0.8.3", settings: {} }],
  },
  paths: { artifacts: "./src/artifacts" },
  typechain: {
    outDir: "types/generated",
    target: "ethers-v5",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ropsten: getCommonNetworkConfig(eEthereumNetwork.ropsten),
    kovan: getCommonNetworkConfig(eEthereumNetwork.kovan),
    main: getCommonNetworkConfig(eEthereumNetwork.main),
    matic: getCommonNetworkConfig(ePolygonNetwork.matic),
    mumbai: getCommonNetworkConfig(ePolygonNetwork.mumbai),
  },
};

export default config;
