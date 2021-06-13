import { eEthereumNetwork, ePolygonNetwork, iParamsPerNetwork } from "./types";

export const chainId: iParamsPerNetwork<number> = {
  [eEthereumNetwork.kovan]: 42,
  [eEthereumNetwork.ropsten]: 3,
  [eEthereumNetwork.main]: 1,
  [ePolygonNetwork.matic]: 137,
  [ePolygonNetwork.mumbai]: 80001,
};

export const networkName = {
  42: "kovan",
  3: "ropsten",
  1: "main",
  1337: "hardhat",
  137: "matic",
  80001: "mumbai",
};
