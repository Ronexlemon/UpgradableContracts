// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract BoxV2 {
    uint private number;
    event ValueChanged(uint value);

    function store(uint _num) public {
        number = _num;
        emit ValueChanged(number);
    }

    function retrieve() public view returns (uint) {
        return number;
    }

    function increment() public {
        number = number + 1;
    }
}
