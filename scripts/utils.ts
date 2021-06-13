import { Contract } from "ethers";
import fs from "fs";
import path from "path";
import { networkName } from "../helpers/hardhat_helper";

type DeployedProps = {
  contractName: string;
  contract: Contract;
};

type DeployedAddressProps = {
  address: string;
  network: string;
};

type DeployedDetailsProps = [
  {
    name: string;
    deployedAddress: DeployedAddressProps[];
  }
];

export const saveDeployedAddress = ({
  contractName,
  contract,
}: DeployedProps) => {
  const { chainId } = contract.deployTransaction;
  const { address } = contract;
  const network = networkName[chainId];

  // Read JSON data
  const deployedAddressPath = path.resolve(__dirname, "deployedAddress.json");
  const data = fs.readFileSync(deployedAddressPath, "utf-8");
  const deployedContracts = JSON.parse(data) as DeployedDetailsProps;

  // Update the json data
  let saved = false;
  for (let contract of deployedContracts) {
    if (contract.name === contractName) {
      for (let detail of contract.deployedAddress) {
        if (detail.network === network) {
          detail.address = address;
          saved = true;
          break;
        }
      }
      // Push deployed details to contract's deployed address
      if (!saved) {
        contract.deployedAddress.push({
          network,
          address,
        });
        saved = true;
      }
    }
  }
  // Push Contract details along with deployed details to new Contract details
  if (!saved) {
    deployedContracts.push({
      name: contractName,
      deployedAddress: [{ network, address }],
    });
  }

  // Finally write updated object to JSON file
  fs.writeFileSync(deployedAddressPath, JSON.stringify(deployedContracts));
};
