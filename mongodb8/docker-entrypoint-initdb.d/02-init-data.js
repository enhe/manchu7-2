// 02-init-data.js

db = db.getSiblingDB('manchu7_development');

db.languages.updateOne(
  { code: 'mnc' },
  { $set: { name: 'Manchu', enabled: true } },
  { upsert: true }
);

db.languages.updateOne(
  { code: 'zh' },
  { $set: { name: 'Chinese', enabled: true } },
  { upsert: true }
);
