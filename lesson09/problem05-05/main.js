"use strict";

const port = 3000,
    express = require("express"),
    app = express(),
    homeController = require("./controllers/homeControllers");

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

app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
});

// vegetableパラメータを取得する経路を追加
app.get("/items/:vegetable", homeController.sendReqParam);

// userパラメータを取得する経路を追加
app.post("/sign_up/:user", homeController.userSignUpProcessor);

// 監視しているポートをログに出力
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});