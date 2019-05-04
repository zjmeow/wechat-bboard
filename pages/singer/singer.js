const call = require("../../utils/requests.js")
const ImgLoader = require('../../img-loader/img-loader.js')
Page({
  data: {
    singer: ''
  },
  onItemTap: function (e) {
    wx.navigateTo({
      url: '../song/song?songId=' + e.currentTarget.dataset.id
    })

  },
  onLoad: function(options) {
    call.get("singers/" + options.singerId, this.getSuccess);
  },
  getSuccess: function(data) {
    let that = this;
    console.log(data);
    that.setData({
      singer: data.data
    });
  }
})