var rp = require('request-promise');
var tough = require('tough-cookie');

module.exports = Auth;

function Auth (target_url) {
  this._cookie = "";
  this._target_url = target_url;
  // return ;
}

Auth.prototype.auth = function(email, password) {
  let path = "/api/users/login";
  var credentials = {
    'Password': password,
    'Mail': email
    // "Domain":"",
    // "Img":"",
    // "MainSkills":[],
    // "SecondarySkills":[],
    // "Endpoint":[]
  };
  return rp.post({
    url: this._target_url + path,
    body: credentials,
    resolveWithFullResponse: true,
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36',
      "origin": "https://cremedelacreme.io"
    },
    json: true
  })
  .then((res) => {
    let cookie = res.headers['set-cookie'][0];
    let tmp = "user-session=";
    this._cookie = cookie.slice(tmp.length, cookie.indexOf(";"));
  });
};

Auth.prototype.add = function (options) {
  let cookie = new tough.Cookie({
      key: "user-session",
      value: this._cookie,
  });
  var cookiejar = rp.jar();
  cookiejar.setCookie(cookie, this._target_url);
  options.jar = cookiejar;
  return options;
};
