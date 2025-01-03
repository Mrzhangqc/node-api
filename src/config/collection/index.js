const fs = require('fs');
const path = require('path');

function loadModulesFromDir(dirPath) {
  const modules = {};
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (file !== 'index.js' && file.endsWith('.js')) {
      const moduleName = path.basename(file, '.js');
      modules[moduleName] = require(fullPath);
    }
  });
  return modules;
}

const createCollection = async (db) => {
  const collections = loadModulesFromDir(__dirname);
  const collectionPromise = Object.keys(collections).map(async (key) => {
    const { name, options } = collections[key];
    const existingCollections = await db.listCollections({ name }).toArray();

    if (existingCollections.length === 0) {
      await db.createCollection(name, options);
      console.log(`集合 "${name}" 创建成功`);
    }
  });
  await Promise.all(collectionPromise);
};

module.exports = createCollection;
