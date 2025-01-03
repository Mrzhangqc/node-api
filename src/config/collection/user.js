const USER_COLLECTION = {
  name: 'user',
  options: {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['name', 'age'],
        properties: {
          name: {
            bsonType: 'string',
            description: '必须是字符串，表示用户姓名',
          },
          email: {
            bsonType: 'string',
            description: '可选字段， 必须是字符串，表示用户邮箱',
          },
          age: {
            bsonType: 'int',
            description: '必须是整数',
            minimum: 0,
          },
        },
      },
    },
  },
};

module.exports = USER_COLLECTION;
