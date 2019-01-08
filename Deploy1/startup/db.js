// const mongoose = require('mongoose');
// const config = require('config');

// module.exports = function () {
//     const db = config.get('db');
//     mongoose.connect(db)
//         .then(() => console.log(`Connected to ${db}`))
//         .catch((err) => console.log(err));
// }


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


   
    const url = "mongodb://hello:123.hello@ds255455.mlab.com:55455/cube";
    const dbname = 'cube';

    MongoClient.connect(url, (err, client)=>{
        assert.equal(err,null); 
        console.log('Connected correctly to server'); 
        const db = client.db(dbname);
         const collection = db.collection("cl");

         collection.find({}).toArray((err, docs) => {
            assert.equal(err,null);
            
            console.log("Found:\n");
            console.log(docs);})
            client.close;
    })


// const mongoose = require('mongoose');

// mongoose.connect('mongodb://hello:123.hello@ds255455.mlab.com:55455/cube')
// .then(()=>{
//     console.log('connected')
// })