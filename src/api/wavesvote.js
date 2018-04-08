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

    
    module.exports = function(app, express) {
    var api = express.Router();
    
    const WavesAPI = require('waves-api-dtx');

    const HACKNET_CONFIG = {
        minimumSeedLength: 1,
        networkByte: 'U'.charCodeAt(0),
        nodeAddress: 'http://nodes.unblock.wavesnodes.com:6869',
        matcherAddress: 'http://nodes.unblock.wavesnodes.com/matcher',
    }

    const DATA_ENTRY_TYPES = {
        INTEGER: 'integer',
        BOOLEAN: 'boolean',
        BINARY_ARRAY: 'binary'
    };    

    const Waves = WavesAPI.create(HACKNET_CONFIG);

    // const restoredPhrase = Waves.Seed.decryptSeedPhrase(encrypted, password);

    const seed = Waves.Seed.fromExistingPhrase('digitaloctoberhackathon2');

    const analyticsToken = "HBx8wyhHHR4rEqRuPgpGwMnE9JYNZtMWjPrw7xQN84VN";

    const address = "3NMQUG3BcDhjK4GbkrcZnU7eKqa75aXd8RW";

    const voteAddress = "3NY4qP3YucTvwY9c7n2EyAWc5sp1u3TqXz6";

    // START VOTING STARTS HERE

    // Waves.API.Node.v1.assets.distribution(analyticsToken).then((distributionMap) => {
    //     const listAddresses = distributionMap;
    //     console.log(listAddresses);

    //     const issueData = {

    //         name: "CustonToken555",
    //         description: "Token for voting on first vote campaign 555",
    
    //         // With given options you'll have 100000.00000 tokens
    //         quantity: 5,
    //         precision: 0,
    
    //         // This flag defines whether additional emission is possible
    //         reissuable: false,
    
    //         fee: 100000000,
    //         timestamp: Date.now()
    
    //     };
    
    //     Waves.API.Node.v1.assets.issue(issueData, seed.keyPair).then((responseData) => {
    //         var assetInfo = responseData.assetId;
    //         // console.log(assetInfo);

    //         for (i in distributionMap) {
    //             // console.log(i)

    //             const transferData = {
        
    //                 assetId: assetInfo,
    //                 recipient : i,
    //                 amount : 1,         
    //                 fee: 100000,
                
    //                 attachment: '',
                
    //                 timestamp: Date.now()
                
    //                 };

    //             const transferFunction = () => {Waves.API.Node.v1.assets.transfer(transferData, seed.keyPair).then((responseData) => {
    //                 console.log(responseData);
    //             })};

    //             setTimeout(transferFunction, 11000);
    //             };        
    //     });
    // });


    // DATA TRANSACTION STARTS HERE

    const dataTx = {

        sender: "3NMQUG3BcDhjK4GbkrcZnU7eKqa75aXd8RW",
        assetId: "AKRaxMyLrP1vyKTh5HBkkAawz2fPwuZfpkvuXCCw3A2V",
        amount: 1,
        data: [
            {key: 'name-front', value: 10, type: DATA_ENTRY_TYPES.INTEGER}
        ],
        fee: 100000,
        timestamp: Date.now()
    };

    Waves.API.Node.v1.transactions.dataBroadcast(dataTx, seed.keyPair).then((responseData) => {
        console.log(responseData);
    }) .catch((err) => {
        console.log(err);
    });

    Waves.API.Node.v1.addresses.data(address).then((responseData) => {
        console.log(responseData);
    });


    // Waves.API.Node.v1.transactions.getList(voteAddress).then((txList) => {
    //     console.log(txList);
    // });



    // const masstransferData = {
    //     sender: address,
    //     assetId: assetInfo,
    //     fee: 200000,
    //     amount: 1,
    //     transfers: [
    //         {
    //             recipient: "",
    //         }, {
    //             recipient: "",
    //         }],
    //     attachment: "",
    //     timestamp: Date.now()
    // }

    // MASSTRANSFER TRANSACTION STARTS HERE

    // Waves.API.Node.v1.assets.masstransfer(masstransferData, seed.keyPair).then((responseData) => {
    //     console.log(responseData);
    // }) .catch((err) => {
    //     console.log(err);
    // });


    // GET VOTING TRANSACTIONS


    api.post("/contracts", (req, res) => {
        console.log(req.body);
    db.insert(req.body);
    // const transferData = {

    //     recipient: req.body.dueDate,
    
    //     // ID of a token, or WAVES
    //     assetId: 'Ft8X1v1LTa1ABafufpaCWyVj8KkaxUWE6xBhW6sNFJck',
    
    //     // The real amount is the given number divided by 10^(precision of the token)
    //     amount: req.body.date,
    
    //     // The same rules for these two fields
    //     feeAssetId: 'WAVES',
    //     fee: 100000,
    
    //     // 140 bytes of data (it's allowed to use Uint8Array here)
    //     attachment: '',
    
    //     timestamp: Date.now()
    
    // };
    // console.log(transferData);
    // Waves.API.Node.v1.assets.transfer(transferData, seed.keyPair).then((responseData) => {
    //     console.log(responseData);
    // });
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