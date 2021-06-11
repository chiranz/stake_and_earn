import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import { ethers, waffle } from "hardhat";

import chai from "chai";
import { Wallet } from "ethers";

import ERC20Artifact from "../src/artifacts/contracts/ERC20.sol/ERC20.json";

const { deployContract } = waffle;
const { expect } = chai;

describe("ChiToken", () => {
  beforeEach(async () => {
    const signers = await ethers.getSigners();
  });
});
