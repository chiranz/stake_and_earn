import "@nomiclabs/hardhat-ethers";
import hardhat, { ethers } from "hardhat";
import { networkName } from "../helpers/hardhat_helper";
import { saveDeployedAddress } from "./utils";

async function main() {
  await hardhat.run("compile");

  // DEPLOY CHI TOKEN
  const ChiToken = await ethers.getContractFactory("ERC20");
  const chiToken = await ChiToken.deploy("CHI Token", "CHI", 1000000);

  await chiToken.deployed();
  console.log("CHI token deployed to address : " + chiToken.address);
  let { chainId } = chiToken.deployTransaction;
  console.log("Network: " + networkName[chainId]);
  let contractName = "chiToken";

  saveDeployedAddress({ contractName, contract: chiToken });
  console.log(`${contractName} deployed details saved successfully.`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
