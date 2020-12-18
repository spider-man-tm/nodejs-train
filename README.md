Repo Title: 『入門 Node.jsプログラミング』の練習問題を解いてみた
====

<br>

# 概要
 [『入門 Node.jsプログラミング 各種フレームワークのインストールからサイト公開まで』](https://www.shoeisha.co.jp/book/detail/9784798158624)にある練習問題（本書と著者GitHubに公開コードがないこと確認済み）を解いていくレポ

<br>

# Usage
- このレポはJavaScriptのコードと基本となる'package.json'しか共有していません。
- 各ディレクトリ（プロジェクト）に移動後、以下のコマンドを叩いてappの初期化を行ってください。

```
# Node.jsアプリの初期化
$ npm init

# 必要なパッケージのインストール
# 尚、追加で必要なパッケージがある場合、各ディレクトリ配下にその旨を記載してます。
$ npm install {packge name} --save
...
...

$ npm i http-status-codes --save-dev

# main file の実行
$ node main.js
```