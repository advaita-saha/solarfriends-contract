const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const SolarFriendsFactory = await hre.ethers.getContractFactory("SolarFriends");
  const SolarFriendsContract = await SolarFriendsFactory.deploy(
    "SolarFriends",
    "SLRF",
    "ipfs://QjiYhkWkbUKd/"
  );


  await SolarFriendsContract.deployed();

  console.log("Contract deployed to:", SolarFriendsContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
