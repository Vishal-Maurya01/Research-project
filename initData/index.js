const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const initData = require('./data');
const Items = require("../models/items.js");

// const MONGO_URL = 'mongodb://127.0.0.1:27017/quickbuy';

const MONGO_URL= process.env.MONGO_URI;

async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("✅ Connected to DB");

        await initDb();   // 👈 CALL AFTER CONNECTION

    } catch (err) {
        console.log(err);
    }
}

const initDb = async () => {
    await Items.deleteMany({});
    await Items.insertMany(initData.data);
    console.log("✅ Data was initialised");
};

main();