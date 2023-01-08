// require("@nomicfoundation/hardhat-toolbox");

// * @type import('hardhat/config').HardhatUserConfig 
// module.exports = {
//   solidity: "0.8.17",

// };
require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork:"polygon",
  networks:{
    hardhat:{
    },
    polygon:{
      url :"https://polygon-mumbai.g.alchemy.com/v2/MeKFrDq5O-mlM8I0CzXpKg0pRvdNRjxF",
      accounts:["8de377277b10cfdb63f8030bf13a092dfba5e4b8b96bff9c5f95386e96115e5a"]
    }
  },
  paths:{
    sources:"./contracts",
    tests:"./test",
    cache:"./cache",
    artifacts:"./artifacts"
  },
};

