require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.2',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/tQoBPdgp_ruOlpiRHhHxcgKa58pGP46B',
      accounts: [
        'a041bd86b965ab6234b3fc4de12973b96b2a5374a407c368017019bcb3f1663a',
      ],
    },
  },
}
