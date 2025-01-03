const { MongoClient } = require('mongodb');
const createCollection = require('./collection');

const getConnectUri = () => {
  const isDev = process.env.NODE_ENV === 'development';
  return isDev ? 'mongodb://127.0.0.1:27017' : 'mongodb://127.0.0.1:27017';
};

const uri = getConnectUri();
const dbName = 'mongodb-data';

let client;
let db;

const connectDB = async () => {
  if (db) return db;
  try {
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('成功连接到 MongoDB');
    db = client.db(dbName);

    // 创建集合
    await createCollection(db);
    return db;
  } catch (error) {
    console.error('连接 MongoDB 出错:', error);
    throw error;
  }
};

const closeConnection = async () => {
  if (client) {
    await client.close();
    console.log('MongoDB 连接已关闭');
  }
};

module.exports = {
  connectDB,
  closeConnection,
};
