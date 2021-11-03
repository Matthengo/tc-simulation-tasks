const { MongoClient } = require('mongodb');
require('dotenv').config();

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const MONGO_DB_URL = process.env.ATLAS_URI || 'mongodb://mongodb:27017/TCtasks';
const DB_NAME = 'TCtasks';

let db = null;

const connection = () => (db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db(DB_NAME);
    console.log('Connected to Atlas DB');
    return db;
    }));

module.exports = connection;