
const hre = require("hardhat");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");

async function main() {

  const Lock = await hre.ethers.getContractFactory("VikashPR");
  const lock = await Lock.deploy();
  // console.log(lock);
  await lock.deployed();
  console.log(lock.address);

 
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
