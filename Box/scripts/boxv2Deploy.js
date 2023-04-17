const {ethers , upgrades} = require("hardhat");
async function main(){
    //get the contract
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Upgrading ....");
    await upgrades.upgradeProxy('0x8e8e921b7509A2C5178AF78a2D12D6d52A01Ed61',BoxV2);
   
    console.log("Upgraded ****");
//0x8e8e921b7509A2C5178AF78a2D12D6d52A01Ed61
}
main().then(()=>process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
})