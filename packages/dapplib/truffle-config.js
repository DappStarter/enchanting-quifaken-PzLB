require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss imitate prize flower seat'; 
let testAccounts = [
"0xe0602894ca1d9c200e74c43d4f0cedfd800ce3952e75e8e1586f333e9d1f2f6a",
"0xc9951a079bda43c5cfd16a5f2faedfe079536eb4be258614445d0ed141cabd03",
"0xf48c5e0f393ba717987a53b40816f17698feb65863c70f93da3bbd1b48038d38",
"0x22ca82bf867b8d8cf984c7d4fef2be57b9a744b6e92d8af6856af3be9ebdfd4c",
"0xc87b0ac4bf5a838186b76a4f05e85f7858747c39f142b23bfc181a2d00e8c796",
"0x124ed667b370d82b4910f2146c1d73d23dc227cb83fcd6ca713952503f7e5340",
"0x866a3e6cc7253d2879f5e2239e6fd97709bde5e6ecb0feb123cf9f388a1d102b",
"0x73f83bdf5aa2ec0af707dfe3ac2a99c8d67ad0a667b8b5cf1d51c4529fe8eaed",
"0x79ce01bf2395cc31d6ee0b2ce54b3dd26f628e431bd40351f55836fba3cabfd9",
"0xd9326e9d11446a570e6a050e942d4ef747aefff4addf34fee36a34bdf1a57b4d"
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
            version: '^0.8.0'
        }
    }
};

