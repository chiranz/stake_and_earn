/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Erc20 } from "./Erc20";

export class Erc20Factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    totalSupply_: BigNumberish,
    overrides?: Overrides
  ): Promise<Erc20> {
    return super.deploy(
      name_,
      symbol_,
      totalSupply_,
      overrides || {}
    ) as Promise<Erc20>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    totalSupply_: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      totalSupply_,
      overrides || {}
    );
  }
  attach(address: string): Erc20 {
    return super.attach(address) as Erc20;
  }
  connect(signer: Signer): Erc20Factory {
    return super.connect(signer) as Erc20Factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Erc20 {
    return new Contract(address, _abi, signerOrProvider) as Erc20;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "totalSupply_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "substractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recepient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recepient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001a2238038062001a2283398181016040528101906200003791906200022a565b82600390805190602001906200004f929190620000f1565b50816004908051906020019062000068929190620000f1565b5062000079620000e860201b60201c565b600a6200008791906200036c565b81620000949190620004a9565b6002819055506002546000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050505062000688565b60006012905090565b828054620000ff9062000557565b90600052602060002090601f0160209004810192826200012357600085556200016f565b82601f106200013e57805160ff19168380011785556200016f565b828001600101855582156200016f579182015b828111156200016e57825182559160200191906001019062000151565b5b5090506200017e919062000182565b5090565b5b808211156200019d57600081600090555060010162000183565b5090565b6000620001b8620001b284620002db565b620002b2565b905082815260208101848484011115620001d157600080fd5b620001de84828562000521565b509392505050565b600082601f830112620001f857600080fd5b81516200020a848260208601620001a1565b91505092915050565b60008151905062000224816200066e565b92915050565b6000806000606084860312156200024057600080fd5b600084015167ffffffffffffffff8111156200025b57600080fd5b6200026986828701620001e6565b935050602084015167ffffffffffffffff8111156200028757600080fd5b6200029586828701620001e6565b9250506040620002a88682870162000213565b9150509250925092565b6000620002be620002d1565b9050620002cc82826200058d565b919050565b6000604051905090565b600067ffffffffffffffff821115620002f957620002f862000621565b5b620003048262000650565b9050602081019050919050565b6000808291508390505b600185111562000363578086048111156200033b576200033a620005c3565b5b60018516156200034b5780820291505b80810290506200035b8562000661565b94506200031b565b94509492505050565b600062000379826200050a565b9150620003868362000514565b9250620003b57fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620003bd565b905092915050565b600082620003cf5760019050620004a2565b81620003df5760009050620004a2565b8160018114620003f85760028114620004035762000439565b6001915050620004a2565b60ff841115620004185762000417620005c3565b5b8360020a915084821115620004325762000431620005c3565b5b50620004a2565b5060208310610133831016604e8410600b8410161715620004735782820a9050838111156200046d576200046c620005c3565b5b620004a2565b62000482848484600162000311565b925090508184048111156200049c576200049b620005c3565b5b81810290505b9392505050565b6000620004b6826200050a565b9150620004c3836200050a565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615620004ff57620004fe620005c3565b5b828202905092915050565b6000819050919050565b600060ff82169050919050565b60005b838110156200054157808201518184015260208101905062000524565b8381111562000551576000848401525b50505050565b600060028204905060018216806200057057607f821691505b60208210811415620005875762000586620005f2565b5b50919050565b620005988262000650565b810181811067ffffffffffffffff82111715620005ba57620005b962000621565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160011c9050919050565b62000679816200050a565b81146200068557600080fd5b50565b61138a80620006986000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610e2a565b60405180910390f35b6100e660048036038101906100e19190610c78565b610308565b6040516100f39190610e0f565b60405180910390f35b610104610326565b6040516101119190610f2c565b60405180910390f35b610134600480360381019061012f9190610c29565b610330565b6040516101419190610e0f565b60405180910390f35b610152610428565b60405161015f9190610f47565b60405180910390f35b610182600480360381019061017d9190610c78565b610431565b60405161018f9190610e0f565b60405180910390f35b6101b260048036038101906101ad9190610bc4565b6104e2565b6040516101bf9190610f2c565b60405180910390f35b6101d061052a565b6040516101dd9190610e2a565b60405180910390f35b61020060048036038101906101fb9190610c78565b6105bc565b60405161020d9190610e0f565b60405180910390f35b610230600480360381019061022b9190610c78565b6106a7565b60405161023d9190610e0f565b60405180910390f35b610260600480360381019061025b9190610bed565b6106c5565b60405161026d9190610f2c565b60405180910390f35b6060600380546102859061105c565b80601f01602080910402602001604051908101604052809291908181526020018280546102b19061105c565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b600061031c61031561074c565b8484610754565b6001905092915050565b6000600254905090565b600061033d84848461091f565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061038861074c565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610408576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ff90610eac565b60405180910390fd5b61041c8561041461074c565b858403610754565b60019150509392505050565b60006012905090565b6000806001600061044061074c565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506104d76104c561074c565b8585846104d29190610f7e565b610754565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546105399061105c565b80601f01602080910402602001604051908101604052809291908181526020018280546105659061105c565b80156105b25780601f10610587576101008083540402835291602001916105b2565b820191906000526020600020905b81548152906001019060200180831161059557829003601f168201915b5050505050905090565b600080600160006105cb61074c565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610688576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067f90610f0c565b60405180910390fd5b61069c61069361074c565b85858403610754565b600191505092915050565b60006106bb6106b461074c565b848461091f565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107bb90610eec565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610834576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082b90610e6c565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516109129190610f2c565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561098f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098690610ecc565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f690610e4c565b60405180910390fd5b610a0a838383610b95565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8790610e8c565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b239190610f7e565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b879190610f2c565b60405180910390a350505050565b505050565b600081359050610ba981611326565b92915050565b600081359050610bbe8161133d565b92915050565b600060208284031215610bd657600080fd5b6000610be484828501610b9a565b91505092915050565b60008060408385031215610c0057600080fd5b6000610c0e85828601610b9a565b9250506020610c1f85828601610b9a565b9150509250929050565b600080600060608486031215610c3e57600080fd5b6000610c4c86828701610b9a565b9350506020610c5d86828701610b9a565b9250506040610c6e86828701610baf565b9150509250925092565b60008060408385031215610c8b57600080fd5b6000610c9985828601610b9a565b9250506020610caa85828601610baf565b9150509250929050565b610cbd81610fe6565b82525050565b6000610cce82610f62565b610cd88185610f6d565b9350610ce8818560208601611029565b610cf1816110ec565b840191505092915050565b6000610d09602383610f6d565b9150610d14826110fd565b604082019050919050565b6000610d2c602283610f6d565b9150610d378261114c565b604082019050919050565b6000610d4f602683610f6d565b9150610d5a8261119b565b604082019050919050565b6000610d72602883610f6d565b9150610d7d826111ea565b604082019050919050565b6000610d95602583610f6d565b9150610da082611239565b604082019050919050565b6000610db8602483610f6d565b9150610dc382611288565b604082019050919050565b6000610ddb602583610f6d565b9150610de6826112d7565b604082019050919050565b610dfa81611012565b82525050565b610e098161101c565b82525050565b6000602082019050610e246000830184610cb4565b92915050565b60006020820190508181036000830152610e448184610cc3565b905092915050565b60006020820190508181036000830152610e6581610cfc565b9050919050565b60006020820190508181036000830152610e8581610d1f565b9050919050565b60006020820190508181036000830152610ea581610d42565b9050919050565b60006020820190508181036000830152610ec581610d65565b9050919050565b60006020820190508181036000830152610ee581610d88565b9050919050565b60006020820190508181036000830152610f0581610dab565b9050919050565b60006020820190508181036000830152610f2581610dce565b9050919050565b6000602082019050610f416000830184610df1565b92915050565b6000602082019050610f5c6000830184610e00565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610f8982611012565b9150610f9483611012565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610fc957610fc861108e565b5b828201905092915050565b6000610fdf82610ff2565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561104757808201518184015260208101905061102c565b83811115611056576000848401525b50505050565b6000600282049050600182168061107457607f821691505b60208210811415611088576110876110bd565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b61132f81610fd4565b811461133a57600080fd5b50565b61134681611012565b811461135157600080fd5b5056fea2646970667358221220834c5e192e7d03044ac298f75a28f38876b7c2b0872ae220be8d48dd9887038964736f6c63430008030033";
