const EthSwap = artifacts.require("EthSwap.sol");
const Token = artifacts.require("Token.sol");

module.exports = function(deployer) {
	//deploy EthSwap
  deployer.deploy(EthSwap);
  //deloy Token
  deployer.deploy(Token)
};
