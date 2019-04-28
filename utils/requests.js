module.exports.post = post;
module.exports.get = get;
const app = getApp()

function post(url, postData, success, fail) {
  wx.request({
    url: app.globalData.url + "itunes",
    success: function (res) { 
      console.log(res.data); 
      that.setData({
        songs: res.data.all_song
      });
      console.log(that.data.songs);
    },
    fail: function (res) { 
    }
  })
}

function get(url, doSuccess, doFail) {
  wx.request({
    url: app.globalData.url + url,
    header: {
      "content-type": "application/json;charset=UTF-8"
    },
    method: 'GET',
    success: function (res) {
      console.log(res.data);
      doSuccess(res.data);
    },
    fail: function (res) {
      doFail();
      console.log(res);
    },
  })
}
