const hre = require ("hardhat");

async function main () {
    const Tracking = await hre.ethers.getContractFactory ("Tracking");
    const tracking =await Tracking.deploy();

  //  const Traking =await hre.ethers.deployContract( "Tracking");
    //await tracking.waitForDeployment();
    
    
    console.log("Tracking deployed to:", tracking.target);
    console.log (`Tracking deployed to ${tracking.target}`);
}

main().catch ((error) => {
    console.error(error);
    process.exitCode = 1;
});

 