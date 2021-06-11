import "@nomiclabs/hardhat-ethers";
import hardhat, { ethers } from "hardhat";

async function main() {
  await hardhat.run("compile");

  // We get the contract to deploy
  const ChiToken = await ethers.getContractFactory("ERC20");
  const chiToken = await ChiToken.deploy("CHI Token", "CHI", 1000000);

  await chiToken.deployed();
  console.log("CHI token deployed to : " + chiToken.address);
  const DaiToken = await ethers.getContractFactory("ERC20");
  const daiToken = await ChiToken.deploy("Dai Token", "DAI", 1000000);

  await chiToken.deployed();
  console.log("CHI token deployed to : " + chiToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
