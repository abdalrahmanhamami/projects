// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

// const Schema = mongoose.Schema;

// const MamberSchema = new Schema({
//     name: {type: String, required: true, },
//     surname:  {type: String, required: true, },
//     address:  {type: String, required: true, },
//     eamil:  {type: String, required: true, unique: true},
//     phone: {type: String, required: true, unique: true},
//     tel: {type: String, required: false, unique: true},
//     occupation: {type: String, required: true, },
//     membership: {type: Boolean, required: true, },
//     membershipType: {type: Boolean, required: true, }, 
// })
// const LocationSchema = new Schema({
//     name: {type: String, required: true, unique: false},
//     address: {type: String, required: true, unique: false},
//     phone: {type: String, required: true, unique: false},
//     eamil: {type: String, required: true, unique: true},
//     vat: {type: Number, required: true, unique: false},
//     spaces: {type: Object, required: true, unique: false},
// })

// const MemberModel = mongoose.model("Member", MamberSchema);
// const LocationModel = mongoose.model("Location", LocationSchema);

// module.exports = {member: MemberModel, location: LocationModel}



/////-------------------connection
// const mongoose = require('mongoose');

// const dbname = "hell"
// const dbUrl = `mongodb://localhost:27017/${dbname}`
// mongoose.Promise = global.Promise;
// mongoose.connect(dbUrl);

// const Schema = mongoose.Schema;

// const testSchema = new Schema({
//     name: Object

// })
// const test = mongoose.model('test1' ,testSchema )
// data = ['zo1','zo2','zo3','zo4']

// data.map((v)=>{
//     let val = new test({ name: {name: v, greet: "goodmorning", age: 20}});
//     val.save()
//     .then(data => console.log(data))
    
    
// })






















