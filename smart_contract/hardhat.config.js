require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/5SrDSnIypaFZJMYI4kzOyb3UCzz8Xn3i",
      accounts: [
        "bd974678f54ea8942875c8c8c319802f0e54f96eb18f9b3d016768dde0014dec",
      ],
    },
  },
};
