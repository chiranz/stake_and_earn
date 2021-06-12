import AERC20 from "../artifacts/contracts/ERC20.sol/ERC20.json";
import { ethers, Signer, providers } from "ethers";

export const ERC20Abi = AERC20.abi;
export const chiTokenDetails = {
  address: {
    rinkbey: "",
  },
  abi: AERC20.abi,
};
type Provider = providers.Web3Provider | providers.JsonRpcProvider;

export const getProvider = async () => {
  let provider: Provider;
  if (
    typeof window !== "undefined" &&
    typeof (window as any).ethereum !== "undefined"
  ) {
    console.log(process.env.INFURA_API);
    provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    ) as Provider;
  } else {
    provider = new ethers.providers.JsonRpcProvider(
      process.env.INFURA_API
    ) as Provider;
  }
  return provider;
};

export const getSigner = async () => {
  const provider = await getProvider();
  const signer = provider.getSigner();
  return signer;
};
