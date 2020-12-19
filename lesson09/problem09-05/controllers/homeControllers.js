"use strict";

exports.sendReqParam = (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};

exports.userSignUpProcessor = (req, res) => {
  let user = req.params.user;
  console.log(`${user} signed up.`)
  res.send(`This is the page for ${user}`);
};