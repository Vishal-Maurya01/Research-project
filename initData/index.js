const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const initData = require('./data');
const Items = require("../models/items.js");

const MONGO_URL = 'mongodb://127.0.0.1:27017/quickbuy';

main().then(() => {
    console.log("Connected to DB")
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDb = async ()=>{
    await Items.deleteMany({});
    await Items.insertMany(initData.data);
    console.log("data was initialised");
}

initDb();