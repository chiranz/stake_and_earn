import { ethers } from "ethers";

export const getProvider = async () => {
  let provider: any;
  if (
    typeof window !== "undefined" &&
    typeof (window as any).ethereum !== "undefined"
  ) {
    provider = new ethers.providers.Web3Provider((window as any).ethereum);
  } else {
    provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_API);
  }
  return provider;
};
export const getSignerAddress = async () => {
  const provider = await getProvider();
  try {
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    return signerAddress;
  } catch (err) {
    console.log(err.message);
  }
};
