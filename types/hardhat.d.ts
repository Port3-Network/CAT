/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Burnable__factory>;
    getContractFactory(
      name: "ERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Enumerable__factory>;
    getContractFactory(
      name: "ERC721URIStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721URIStorage__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "XBurnMintERC20Getters",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.XBurnMintERC20Getters__factory>;
    getContractFactory(
      name: "XBurnMintERC20Governance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.XBurnMintERC20Governance__factory>;
    getContractFactory(
      name: "XBurnMintERC20Setup",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.XBurnMintERC20Setup__factory>;
    getContractFactory(
      name: "XBurnMintERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.XBurnMintERC20__factory>;
    getContractFactory(
      name: "XBurnMintERC721Getters",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.XBurnMintERC721Getters__factory>;
    getContractFactory(
      name: "XBurnMintERC721Governance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.XBurnMintERC721Governance__factory>;
    getContractFactory(
      name: "XBurnMintERC721Setup",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.XBurnMintERC721Setup__factory>;
    getContractFactory(
      name: "XBurnMintERC721Events",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.XBurnMintERC721Events__factory>;
    getContractFactory(
      name: "XBurnMintERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.XBurnMintERC721__factory>;
    getContractFactory(
      name: "IWormhole",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWormhole__factory>;

    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Burnable>;
    getContractAt(
      name: "ERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Enumerable>;
    getContractAt(
      name: "ERC721URIStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721URIStorage>;
    getContractAt(
      name: "IERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "XBurnMintERC20Getters",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.XBurnMintERC20Getters>;
    getContractAt(
      name: "XBurnMintERC20Governance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.XBurnMintERC20Governance>;
    getContractAt(
      name: "XBurnMintERC20Setup",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.XBurnMintERC20Setup>;
    getContractAt(
      name: "XBurnMintERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.XBurnMintERC20>;
    getContractAt(
      name: "XBurnMintERC721Getters",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.XBurnMintERC721Getters>;
    getContractAt(
      name: "XBurnMintERC721Governance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.XBurnMintERC721Governance>;
    getContractAt(
      name: "XBurnMintERC721Setup",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.XBurnMintERC721Setup>;
    getContractAt(
      name: "XBurnMintERC721Events",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.XBurnMintERC721Events>;
    getContractAt(
      name: "XBurnMintERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.XBurnMintERC721>;
    getContractAt(
      name: "IWormhole",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWormhole>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
