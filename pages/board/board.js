const call = require("../../utils/requests.js")
Page({
  onItemTap: function (e) {
    wx.navigateTo({
      url: '../song/song?songId=' + e.currentTarget.dataset.id
    })
  },

  data: {
    songs: '',
    title: ''
  },

  onLoad: function (options) {
    call.get("billboards"  , this.success);
  },

  success: function (data) {
    data.data.reverse();
    this.setData({
      songs: data.data 
    });
  }

})