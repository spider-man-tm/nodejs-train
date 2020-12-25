"use strict";

const httpStatus = require("http-status-codes");

exports.logErrors = (error, req, res, next) => {
  console.error(error.stack);  // エラースタックをログ出力
  next(error);  // errorを次のミドルウェア関数に渡す
};

exports.respondNoResourceFound = (req, res) => {
  let errorCode = httpStatus.NOT_FOUND;
  res.status(errorCode);
  res.render("error");
};

exports.respondInternalError = (error, req, res, next) => {
  let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
  console.log(`ERROR occurred: ${error.stack}`);
  res.status(errorCode);
  res.send("<h1>500 内部エラー</h1>");
};