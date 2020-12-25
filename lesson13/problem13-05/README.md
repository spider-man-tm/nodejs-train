### レッスン内容
- MongoDBの基礎知識
- MongoDBのインストールと基本操作の理解
- コマンドからMongoDBを起動してDB、コレクションの作成、及びデータの挿入
- スクリプトファイルからDB、コレクションの作成、及びデータの挿入

<br>

### 課題内容
- アイスクリームの移動販売管理アプリを作る想定
- 適切な名前のDBを作成し、ice_cream_flavorsという名前のコレクションを新たに作成
- 統計分析に役立つようなフィールドをいくつか挿入

ちなみにRDBとMongoDBの呼称対応はこちら

| RDBでの呼称 | MongoDBでの呼称 |
|:-----------|:------------|
| database | database |
|table | collection |
|row | document |
|column | field |
|index | index |
|primary key | _id field |

<br>

### Usage
先にMongoDBのローカルサーバーを起動した状態で`node main.js`を実行

<br>

### 結果
![fig](https://github.com/spider-man-tm/readme_figure/blob/master/nodejs-train/13/13-01.png)