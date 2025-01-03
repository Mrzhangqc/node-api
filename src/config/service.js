const { connectDB } = require('./db');

// 数据库操作
const insertOne = async (collectionName, document) => {
  const db = await connectDB();
  const result = await db.collection(collectionName).insertOne(document);
  return result;
};

const insertMany = async (collectionName, documents) => {
  const db = await connectDB();
  const result = await db.collection(collectionName).insertMany(documents);
  return result;
};

const find = async (collectionName, query = {}, options = {}) => {
  const db = await connectDB();
  const result = await db.collection(collectionName).find(query, options).toArray();
  return result;
};

const findOne = async (collectionName, query = {}, options = {}) => {
  const db = await connectDB();
  const result = await db.collection(collectionName).findOne(query, options);
  return result;
};

const updateOne = async (collectionName, filter, updateDoc, options = {}) => {
  const db = await connectDB();
  const result = await db.collection(collectionName).updateOne(filter, updateDoc, options);
  return result;
};

const updateMany = async (collectionName, filter, updateDoc, options = {}) => {
  const db = await connectDB();
  const result = await db.collection(collectionName).updateMany(filter, updateDoc, options);
  return result;
};

const deleteOne = async (collectionName, filter) => {
  const db = await connectDB();
  const result = await db.collection(collectionName).deleteOne(filter);
  return result;
};

const deleteMany = async (collectionName, filter) => {
  const db = await connectDB();
  const result = await db.collection(collectionName).deleteMany(filter);
  return result;
};

module.exports = {
  insertOne,
  insertMany,
  find,
  findOne,
  updateOne,
  updateMany,
  deleteOne,
  deleteMany,
};
