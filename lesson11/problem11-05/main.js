"use strict";

const express = require("express"),
  app = express(),
  errorController = require("./controllers/errorController"),
  homeController = require("./controllers/homeController"),
  layouts = require("express-ejs-layouts");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(layouts);
// main.jsと同じレベルにあるpublicディレクトリから静的ファイルを供給する
app.use(express.static("public"));

// 本文の解析でURLエンコーディングとJSONパラメータの処理を行う
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});

// 以下、経路の設定
app.get("/name/:myName", homeController.respondWithName);
app.get("/items/:vegetable", homeController.sendReqParam);
app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});

// main.jsにミドルウェアで処理する行を追加する時は必ずルーティング定義より後の行に追加する
app.use(errorController.logErrors);
// respondNoResourceFoundはレスポンスがない時のエラーをキャッチする
app.use(errorController.respondNoResourceFound);
// 全てのエラーをキャッチしてしまうので、respondNoより後に書く必要あり
app.use(errorController.respondInternalError);

// port3000の監視を設定
app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});