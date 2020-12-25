// MongoDBモジュールをロード
const MongoDB = require('mongodb').MongoClient,
  dbURL = "mongodb://localhost:27017",
  dbName = "sales_management_db",
  collectionName = "ice_cream_flavors";

// ローカルDBサーバーへの接続を設定
MongoDB.connect(dbURL, (error, client) => {
  if (error) throw error;
  // management_dbを新規作成（既に同名のDBが存在していた場合、作成ではなく取得の処理になる）
  let db = client.db(dbName);
  db.collection(collectionName)
    .insert({
      color: 'white',
      flavor: 'banila',
      size: 'middle'
    }, (error, db) => {
      if (error) throw error;
      // 保存したアイテムをロギング
      console.log(db);
    });
});