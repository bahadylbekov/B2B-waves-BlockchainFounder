var Datastore = require('nedb');
var db = new Datastore();
db.loadDatabase();
db.insert(
    [{
        number: "14-201",
        logo: "logo-coca-cola",
        supplier: "The Coca-Cola",
        item: "Aluminium can",
        qty: 10,
        date: "15.04.2018",
        totalPrice: 47.8,
        status: 1,
        id: 1,
    }, {
        number: "12-FB1",
        logo: "logo-sberbank",
        supplier: "Sberbank Company",
        item: "Mortage Credits",
        qty: 500,
        date: "19.03.2018",
        totalPrice: 124900,
        status: 2,
        id: 2,
    }, {
        number: "12-PC2",
        logo: "logo-pepsi",
        supplier: "Pepsi & Co",
        item: "Pepsi bottles",
        qty: 12,
        date: "03.03.2018",
        totalPrice: 32,
        status: 3,
        id: 3,
    }, {
        number: "13-LC2",
        logo: "",
        supplier: "Leica Company",
        item: "Professional Cameras",
        qty: 3,
        date: "19.02.2018",
        totalPrice: 6600,
        status: 1,
        id: 4,
    }]);


const WavesAPI = require('waves-api');
const Waves = WavesAPI.create(WavesAPI.MAINNET_CONFIG);

module.exports = function(app, express) {
    var api = express.Router();
    var newConfig = {
        networkByte: Waves.constants.TESTNET_BYTE,
        nodeAddress: 'https://testnode2.wavesnodes.com',
        matcherAddress: 'https://testnode2.wavesnodes.com/matcher',
        minimumSeedLength: 10
    };
    //Waves.config.set(newConfig);
    // const restoredPhrase = Waves.Seed.decryptSeedPhrase(encrypted, password);
<<<<<<< HEAD
    const seed = Waves.Seed.fromExistingPhrase('put your seed phrase here');
    const address = "3PJvHjb5rw87rRM7mJu8MDsp1CZiQnPLp5m"
=======
    const seed = Waves.Seed.fromExistingPhrase('seed been here before but i need to hold my money with me');
    const address = "3P58CPv9wCY3k1B1yzZ6W4wneLtEMtQtNeN"
>>>>>>> parent of 2b13499... adding destination to frontend
    // Waves.API.Node.v1.assets.issue(issueData, seed.keyPair).then((responseData) => {
    //     console.log(responseData);
    // }).catch((err) => console.error(err.data.message));

    Waves.API.Node.v1.assets.balances(address).then((responseData) => {
        console.log(responseData);
    }).catch((err) => console.error(err.data.message));

    Waves.API.Node.v1.transactions.getList(address).then((txList) => {
        console.log(txList);
    });

    api.post("/contracts", (req, res) => {
        console.log(req.body);
    db.insert(req.body);
    const transferData = {

        recipient: req.body.dueDate,
    
        // ID of a token, or WAVES
        assetId: 'Ft8X1v1LTa1ABafufpaCWyVj8KkaxUWE6xBhW6sNFJck',
    
        // The real amount is the given number divided by 10^(precision of the token)
        amount: req.body.date,
    
        // The same rules for these two fields
        feeAssetId: 'WAVES',
        fee: 100000,
    
        // 140 bytes of data (it's allowed to use Uint8Array here)
        attachment: '',
    
        timestamp: Date.now()
    
    };
    console.log(transferData);
    Waves.API.Node.v1.assets.transfer(transferData, seed.keyPair).then((responseData) => {
        console.log(responseData);
    });
 })
    

    // api.get('/ContractsTable', function(req, res) {

    //     var cotracts = [{
    //         number: "14-201",
    //         logo: "logo-coca-cola",
    //         supplier: "The Coca-Cola Company",
    //         item: "Aluminium can",
    //         qty: 10,
    //         date: "15/04/2018",
    //         totalPrice: 47.8,
    //         status: 1,
    //         id: 1,
    //     }];
    //     res.json(cotracts);

    // });
    // api.get('/DifferenceTable', function(req, res) {

    //     var differences = [
    //         { key: "April", value: 90 },
    //         { key: "May", value: 50 },
    //         { key: "June", value: 130 },
    //         { key: "July", value: 190 },
    //         { key: "August", value: 90 },
    //         { key: "September", value: 60 }
    //     ];
    //     res.json(differences);

    // });
    // api.get('/Statements', function(req, res) {

    //     var statements = [{
    //         account: "Income",
    //         month: "450.94",
    //         year: "4500.43934",
    //         id: 1
    //     }];
    //     res.json(statements);

    // });

    api.get('/contracts', function(req, res) {
        recs = db.getAllData();
        console.log(recs);
        res.json(recs);
    });

    return api;
}