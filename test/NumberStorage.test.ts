import { ethers } from "hardhat";
import { expect } from "chai";

describe("NumberStorage tests", () => {
  it("should store a new value successfully", async () => {
    const Contract = await ethers.getContractFactory("NumberStorage");
    const numberStorage = await Contract.deploy();

    await numberStorage.deployed();

    const storeValueTx = await numberStorage.storeValue(42);
    await storeValueTx.wait();

    expect(await numberStorage.getValue()).to.equal(42);
  });
});