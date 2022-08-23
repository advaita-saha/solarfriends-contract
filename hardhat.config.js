require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks : {
    rinkeby : {
      url : process.env.RINKEBY,
      accounts : [process.env.PVT_KEY],
    },
    mumbai : {
      url : process.env.MUMBAI,
      accounts : [process.env.PVT_KEY],
    },
    kovan : {
      url : process.env.KOVAN,
      accounts : [process.env.PVT_KEY],
    }
  },
};
