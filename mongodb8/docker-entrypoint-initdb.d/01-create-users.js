// 01-create-users.js

db = db.getSiblingDB('admin');

// 应用用户（Rails / Mongoid 使用）
db.createUser({
  user: 'manchu_user',
  pwd: 'manchu_password',
  roles: [
    { role: 'readWrite', db: 'manchu7_development' },
    { role: 'readWrite', db: 'manchu7_test' },
    { role: 'readWrite', db: 'manchu7_production' }
  ]
});
