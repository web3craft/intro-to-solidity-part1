//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract NumberStorage {
  uint256 private value;

  function storeValue(uint256 newValue) public {
    value = newValue;
  }

  function getValue() public view returns(uint256) {
    return value;
  }
}