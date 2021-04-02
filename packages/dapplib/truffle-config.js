require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note place hole just kite slot gauge'; 
let testAccounts = [
"0x1fca568d5a5638f638b0304947d9ca77312814a04114ca7c0b2ce11e16ad4240",
"0x1242571975d8adf37f8168a1b6321199e866e67adc6278db1ca6011603359a57",
"0xddf7ba8bc5bc3093fa3518bb3da826147cf41d3a50356bdcd54a348f0ef4cf7e",
"0x7f893077a6a9a0532b10e1aefe73476f8d7e2754f02999c23d6d4c599da85502",
"0x4ced7341b90ffaae92c0057b9fa6e413ac62b4b4d71ecf6c2998bbfad275ff4b",
"0xd1ebb86e27940459602c222e3789b27be3565a63cda854620bc7692da8f112e4",
"0x1c4cda5b9f33a2d7aaf60cc7e78021690f01bf4accf8791a5456aa665e8dfcd3",
"0x74717c27a16fe633e6778547409add2ebc8666389e61a6e73577d785763a909d",
"0x1a1073fee1e3ee0072726df3a9d75010564e5a702bcf1cd5a6ad4b6ae38d0465",
"0x508caca3b6ad237d8c4c2873dfbf2a0f4d844960517be5d9202c01b5b50fe1de"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
