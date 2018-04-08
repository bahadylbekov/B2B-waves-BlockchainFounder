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
    const address2 = "3NVT7aqKVPRBVefRKxnpBccucRbNTvmi2kS";
    const address3 = "3NTf7SvBvYPRz1Nv3dCvzbhDH8cCBNvhs3V";
    const address4 = "3NFcFrg2pq8n5tHqA8wbLQ1tnH6AMhwEeQn";
    const address5 = "3NNecY4fwnYxRQuwU8UkX9f9KHrpvbXjeQV";

    const seed2 = "parent project pupil mandate swing custom duck virus that skirt cushion boil cart version path";
    const seed3 = "blood coffee pledge enough daughter illness believe effort stairs library common gap awesome alien service";
    const seed4 = "grab volume soul derive fame intact ostrich spoon turkey drama industry beef reject bomb photo";
    const seed5 = "bird ivory side dance foot bridge hint margin pelican cruise eight list guide island glimpse";

    Waves.API.Node.v1.assets.balances(address).then((responseData) => {
        console.log(responseData);
    }).catch((err) => console.error(err.data.message));


    api.post("/new", (req, res) => {
        console.log(req.body);
    db.insert(req.body);


    const dataTx = {

        sender: address,

        data: [
            {key: req.body.key, value: 0, type: DATA_ENTRY_TYPES.INTEGER}
        ],
        fee: 100000,
        timestamp: Date.now()

    };

    var options = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        method: 'POST',
        body: JSON.stringify(processTx(dataTx, seed.keyPair))
    };
    
    fetch('http://nodes.unblock.wavesnodes.com:6869/transactions/broadcast', options)
        .then(res => res.text())
        .then(body => console.log(body));
    });



    api.post("/vote2", (req, res) => {
        console.log(req.body);
    db.insert(req.body);


    const dataTx = {

        sender: address2,

        data: [
            {key: req.body.key, value: req.body.value, type: DATA_ENTRY_TYPES.INTEGER}
        ],
        fee: 100000,
        timestamp: Date.now()

    };

    var options = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        method: 'POST',
        body: JSON.stringify(processTx(dataTx, seed2.keyPair))
    };
    
    fetch('http://nodes.unblock.wavesnodes.com:6869/transactions/broadcast', options)
        .then(res => res.text())
        .then(body => console.log(body));
    });




    api.post("/vote3", (req, res) => {
        console.log(req.body);
    db.insert(req.body);


    const dataTx = {

        sender: address3,

        data: [
            {key: req.body.key, value: req.body.value, type: DATA_ENTRY_TYPES.INTEGER}
        ],
        fee: 100000,
        timestamp: Date.now()

    };

    var options = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        method: 'POST',
        body: JSON.stringify(processTx(dataTx, seed3.keyPair))
    };
    
    fetch('http://nodes.unblock.wavesnodes.com:6869/transactions/broadcast', options)
        .then(res => res.text())
        .then(body => console.log(body));
    });




    api.post("/vote4", (req, res) => {
        console.log(req.body);
    db.insert(req.body);


    const dataTx = {

        sender: address4,

        data: [
            {key: req.body.key, value: req.body.value, type: DATA_ENTRY_TYPES.INTEGER}
        ],
        fee: 100000,
        timestamp: Date.now()

    };

    var options = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        method: 'POST',
        body: JSON.stringify(processTx(dataTx, seed4.keyPair))
    };
    
    fetch('http://nodes.unblock.wavesnodes.com:6869/transactions/broadcast', options)
        .then(res => res.text())
        .then(body => console.log(body));
    });




    api.post("/vote5", (req, res) => {
        console.log(req.body);
    db.insert(req.body);


    const dataTx = {

        sender: address5,

        data: [
            {key: req.body.key, value: req.body.value, type: DATA_ENTRY_TYPES.INTEGER}
        ],
        fee: 100000,
        timestamp: Date.now()

    };

    var options = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        method: 'POST',
        body: JSON.stringify(processTx(dataTx, seed5.keyPair))
    };
    
    fetch('http://nodes.unblock.wavesnodes.com:6869/transactions/broadcast', options)
        .then(res => res.text())
        .then(body => console.log(body));
    });

    api.get('/result', function(req, res) {

        fetch('http://nodes.unblock.wavesnodes.com:6869/addresses/data', address2)
            .then(res => res.text())
            .then(body => console.log(body));

        fetch('http://nodes.unblock.wavesnodes.com:6869/addresses/data', address3)
            .then(res => res.text())
            .then(body => console.log(body));

        fetch('http://nodes.unblock.wavesnodes.com:6869/addresses/data', address4)
            .then(res => res.text())
            .then(body => console.log(body));

        fetch('http://nodes.unblock.wavesnodes.com:6869/addresses/data', address5)
            .then(res => res.text())
            .then(body => console.log(body));
        
    });
    return api;
}
