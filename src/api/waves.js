const WavesAPI = require('waves-api');
const Waves = WavesAPI.create(WavesAPI.TESTNET_CONFIG);

module.exports = function(app, express) {
    var api = express.Router();
    var newConfig = {
        networkByte: Waves.constants.TESTNET_BYTE,
        nodeAddress: 'https://testnode2.wavesnodes.com',
        matcherAddress: 'https://testnode2.wavesnodes.com/matcher',
        minimumSeedLength: 10
    };
    Waves.config.set(newConfig);
    // const restoredPhrase = Waves.Seed.decryptSeedPhrase(encrypted, password);
    const seed = Waves.Seed.fromExistingPhrase('nominee desk hedgehog cruel shield census green rail unknown hire organ bird base ceiling panda');

    const issueData = {
        name: 'Your token name',
        description: 'Some words about it',
        quantity: 10000000000,
        precision: 5,
        reissuable: false,
        fee: 10000000000,
        timestamp: Date.now()
    };

    // Waves.API.Node.v1.assets.issue(issueData, seed.keyPair).then((responseData) => {
    //     console.log(responseData);
    // }).catch((err) => console.error(err.data.message));

    // Waves.API.Node.v1.assets.balance(seed.address).then((responseData) => {
    //     console.log(responseData);
    // }).catch((err) => console.error(err.data.message));

    // Waves.API.Node.v1.transactions.getList(seed.address).then((txList) => {
    //     console.log(txList);
    // });

    api.get('/ContractsTable', function(req, res) {

        var cotracts = [{
            number: "14-201",
            logo: "logo-coca-cola",
            supplier: "The Coca-Cola Company",
            item: "Aluminium can",
            qty: 10,
            date: "15/04/2018",
            totalPrice: 47.8,
            status: 1,
            id: 1,
        }];
        res.json(cotracts);

    });
    api.get('/DifferenceTable', function(req, res) {

        var differences = [
            { key: "April", value: 90 },
            { key: "May", value: 50 },
            { key: "June", value: 130 },
            { key: "July", value: 190 },
            { key: "August", value: 90 },
            { key: "September", value: 60 }
        ];
        res.json(differences);

    });
    api.get('/Statements', function(req, res) {

        var statements = [{
            account: "Income",
            month: "450.94",
            year: "4500.43934",
            id: 1
        }];
        res.json(statements);

    });

    return api;
}