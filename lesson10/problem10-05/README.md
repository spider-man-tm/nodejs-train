### 課題内容
- Contact Page(http://localhost:3000/contact)ページの作成
- 上記ページは`views/layout.ejs(テンプレートエンジン)`を利用する
- `notificationBox.ejs`という通知ボックルをレンダリングするパーシャルを作成
- 上記パーシャルを`index.ejs`及び作成した`contact.ejs`のビューに追加

<br>

### Usage
```
$ npm init
$ npm install express@4.16.3 --save
$ npm install ejs --save
$ npm install express-ejs-layouts --save
$ node main.js
```

<br>

### 結果

- `index`ビュー
`http://localhost:3000/name/hoge-fuga`

![fig](https://github.com/spider-man-tm/readme_figure/blob/master/nodejs-train/10/10-01.png)

<br>

- `contact`ビュー
`http://localhost:3000/contact`

![fig](https://github.com/spider-man-tm/readme_figure/blob/master/nodejs-train/10/10-02.png)