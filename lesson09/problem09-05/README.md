### レッスン内容
- MVCモデルの基礎概念理解
- Express.jsの導入

<br>

### 課題内容
- `GET`メソッド
    - `localhost:3000/items/{hoge}`でhogeパラメータを取得し、リクエストページを返す。

- `POST`メソッド
    - `localhost:3000`でリクエストのbodyとqueryを取得し、コンソールに出力
    - `localhost:3000/sign_up/{user}`でuserパラメータを取得し、対応するページを返す。

<br>

### Usage

```
$ npm init
$ npm install express@4.16.3 --save
$ node main.js

# localhost:3000/items/hoge にアクセスすると指定した対応するリクエストページが返ってくる。
# This is the page for hoge

# POSTメソッドの処理確認
$ curl --data "name=hoge&sex=fuga&hobby=baseball" localhost:3000
<< COMMENTOUT
request made to: /
[Object: null prototype] {
  name: 'hoge',
  sex: 'fuga',
  hobby: 'baseball'
}
{}
COMMENTOUT

$ curl -X POST http://localhost:3000/sign_up/xxxxxxxxxx
<< COMMENTOUT
request made to: /sign_up/xxxxxxxxxx
xxxxxxxxxx signed up.
COMMENTOUT
```