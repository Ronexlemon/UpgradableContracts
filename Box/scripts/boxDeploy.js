const {ethers , upgrades} = require("hardhat");
async function main(){
    //get the contract
    const BoxContract = await ethers.getContractFactory("Box");
    const BoxContractDeploy = await upgrades.deployProxy(BoxContract,[42],{initializer: 'store'});
    await BoxContractDeploy.deployed();
    console.log("BoxContractAddress:",BoxContractDeploy.address);
//0x8e8e921b7509A2C5178AF78a2D12D6d52A01Ed61
}
main().then(()=>process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
})