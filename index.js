var Auth = require("./auth/auth.js");
var Feed = require("./feed/feed.js");

module.exports = Cdlc;

var target_url = "https://cremedelacreme.io";

function Cdlc (email, password) {
  this._email = email;
  this._password = password;
  this._cookie = "";
  this._auth = new Auth(target_url);
  this._feed = new Feed(target_url);
}

Cdlc.prototype.auth = function() {
  return this._auth.auth(this._email, this._password);
};

Cdlc.prototype.getFeed = function() {
  return this._feed.get(this._auth);
};
