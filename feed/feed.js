var rp = require('request-promise');
module.exports = Feed;

function Feed (target_url) {
  this._cookie = "";
  this._target_url = target_url;
  // return ;
}

Feed.prototype.get = function (Auth) {
  let options = {
      uri: 'https://cremedelacreme.io/api/objects/feed/first',
  };
  options = Auth.add(options);
  return rp(options)
  .then((res) => {
    return new Promise((resolve, reject) => {
      list = JSON.parse(res);
      resolve(res);
    });
  });
};
