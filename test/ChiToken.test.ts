import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import { solidity } from "ethereum-waffle";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import chai from "chai";
import { ethers } from "hardhat";
import { Erc20, Erc20Factory } from "../types/generated";
import { BigNumber } from "ethers";
chai.use(solidity);

const { expect, assert } = chai;

const CHI_CONSTANTS = {
  totalSupply: 1000000,
  name: "CHI Token",
  symbol: "CHI",
  vestingAmt: 100000,
  allowanceAmt: 1000,
};
export function ethToWei(number: number) {
  return ethers.constants.WeiPerEther.mul(number).toString();
}
export function weiToEth(number: number) {
  return ethers.utils.formatEther(number);
}
// Contract instances
let ChiContract: Erc20Factory;
let chiToken: Erc20;
let deployer: SignerWithAddress;
let investor: SignerWithAddress;
let signers: SignerWithAddress[];

beforeEach(async () => {
  [deployer, investor, ...signers] = await ethers.getSigners();

  ChiContract = (await ethers.getContractFactory(
    "ERC20",
    deployer
  )) as unknown as Erc20Factory;
  chiToken = await ChiContract.deploy(
    CHI_CONSTANTS.name,
    CHI_CONSTANTS.symbol,
    CHI_CONSTANTS.totalSupply
  );
  await chiToken.deployed();
});

describe("Chi Token", function () {
  it("should transfer total supply to deployer's address", async function () {
    let deployerBalance = await chiToken.balanceOf(deployer.address);
    expect(deployerBalance.toString()).to.equal(
      ethToWei(CHI_CONSTANTS.totalSupply)
    );
  });
  it("should transfer token to the investor", async function () {
    const transaction = await chiToken.transfer(
      investor.address,
      CHI_CONSTANTS.vestingAmt
    );
    await transaction.wait();
    let investorBalance = await chiToken.balanceOf(investor.address);
    expect(investorBalance).to.equal(BigNumber.from(CHI_CONSTANTS.vestingAmt));
  });
  it("should return totalSupply, name and symbol correctly", async () => {
    const name = await chiToken.name();
    expect(name).to.equal(CHI_CONSTANTS.name);
    const totalSupply = await chiToken.totalSupply();
    expect(totalSupply).to.equal(ethToWei(CHI_CONSTANTS.totalSupply));
    const symbol = await chiToken.symbol();
    expect(symbol).to.equal(CHI_CONSTANTS.symbol);
  });
  it("should delegate token right to another account", async () => {
    await chiToken.approve(
      signers[0].address,
      ethToWei(CHI_CONSTANTS.allowanceAmt)
    );
    const allowanceAmt = await chiToken.allowance(
      deployer.address,
      signers[0].address
    );
    expect(allowanceAmt).to.equal(ethToWei(CHI_CONSTANTS.allowanceAmt));
  });
  it("should transfer delegated token to another address", async () => {
    await chiToken.approve(
      signers[0].address,
      ethToWei(CHI_CONSTANTS.allowanceAmt)
    );
    await chiToken.allowance(deployer.address, signers[0].address);
    // Connect to contract using another signer
    const chiTokenWithSigner = chiToken.connect(signers[0]);

    await chiTokenWithSigner.transferFrom(
      deployer.address,
      signers[1].address,
      ethToWei(CHI_CONSTANTS.allowanceAmt)
    );
    const balance = await chiToken.balanceOf(signers[1].address);
    expect(balance.toString()).to.equal(ethToWei(CHI_CONSTANTS.allowanceAmt));
  });
  it("should fail if user tries to transfer more than delegated amount", async () => {
    await chiToken.approve(
      signers[0].address,
      ethToWei(CHI_CONSTANTS.allowanceAmt)
    );
    // Connect to contract using another signer
    const chiTokenWithSigner = chiToken.connect(signers[0]);

    try {
      await chiTokenWithSigner.transferFrom(
        deployer.address,
        signers[1].address,
        ethToWei(CHI_CONSTANTS.allowanceAmt + 1)
      );
    } catch {
      assert.isOk(true);
      return;
    }
    assert.isOk(false);
  });
  it("should increase allowance", async () => {
    await chiToken.approve(
      signers[0].address,
      ethToWei(CHI_CONSTANTS.allowanceAmt)
    );

    const bal_before_increasing = await chiToken.allowance(
      deployer.address,
      signers[0].address
    );
    await chiToken.increaseAllowance(
      signers[0].address,
      ethToWei(CHI_CONSTANTS.allowanceAmt)
    );

    const bal_after_increasing = await chiToken.allowance(
      deployer.address,
      signers[0].address
    );

    const diff = bal_after_increasing.sub(bal_before_increasing);
    // expect(diff.toString()).to.equal(ethToWei(CHI_CONSTANTS.allowanceAmt));
    expect(diff).to.equal(ethToWei(CHI_CONSTANTS.allowanceAmt));
  });
  it("should decrease allowance", async () => {
    await chiToken.approve(
      signers[0].address,
      ethToWei(CHI_CONSTANTS.allowanceAmt)
    );

    const bal_before_decreasing = await chiToken.allowance(
      deployer.address,
      signers[0].address
    );
    await chiToken.decreaseAllowance(
      signers[0].address,
      ethToWei(CHI_CONSTANTS.allowanceAmt)
    );

    const bal_after_decreasing = await chiToken.allowance(
      deployer.address,
      signers[0].address
    );

    const diff = bal_before_decreasing.sub(bal_after_decreasing);
    // expect(diff.toString()).to.equal(ethToWei(CHI_CONSTANTS.allowanceAmt));
    expect(diff).to.equal(ethToWei(CHI_CONSTANTS.allowanceAmt));
  });
});
