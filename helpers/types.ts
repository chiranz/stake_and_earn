import { getInfuraKey, getMaticKey } from "./env_helper";

const INFURA_KEY = getInfuraKey();
const MATIC_KEY = getMaticKey();

export enum EthereumNetworkNames {
  kovan = "kovan",
  ropsten = "ropsten",
  rinkeby = "rinkeby",
  main = "main",
}
export enum eEthereumNetwork {
  kovan = "kovan",
  ropsten = "ropsten",
  rinkeby = "rinkeby",
  main = "main",
  hardhat = "hardhat",
}
export enum ePolygonNetwork {
  matic = "matic",
  mumbai = "mumbai",
}
export type eNetwork = eEthereumNetwork | ePolygonNetwork;

export type iParamsPerNetwork<T> =
  | iEthereumParamsPerNetwork<T>
  | iPolygonParamsPerNetwork<T>;

export interface iEthereumParamsPerNetwork<T> {
  [eEthereumNetwork.kovan]: T;
  [eEthereumNetwork.ropsten]: T;
  [eEthereumNetwork.rinkeby]: T;
  [eEthereumNetwork.main]: T;
  [eEthereumNetwork.hardhat]: T;
}

export interface iPolygonParamsPerNetwork<T> {
  [ePolygonNetwork.matic]: T;
  [ePolygonNetwork.mumbai]: T;
}

export const NETWORKS_RPC_URL: iParamsPerNetwork<string> = {
  [eEthereumNetwork.kovan]: `https://kovan.infura.io/v3/${INFURA_KEY}`,
  [eEthereumNetwork.ropsten]: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
  [eEthereumNetwork.main]: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  [eEthereumNetwork.rinkeby]: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
  [eEthereumNetwork.hardhat]: "http://localhost:8545",
  [ePolygonNetwork.mumbai]: `https://rpc-mumbai.maticvigil.com/v1/${MATIC_KEY}`,
  [ePolygonNetwork.matic]: `https://rpc-mainnet.matic.network/v1/${MATIC_KEY}`,
};
