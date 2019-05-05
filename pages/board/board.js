const call = require("../../utils/requests.js")
Page({
  onItemTap: function (e) {
    wx.navigateTo({
      url: "../song/song?songId=" + e.currentTarget.dataset.id
    })
  },

  data: {
    songs: "",
    title: ""
  },

  onLoad: function (options) {
    call.get("billboards", this.success);
  },

  success: function (data) {
    data.data.reverse();
    data.data.forEach(function (v, k) {
      v.singers.forEach(function (value, key) {
        if (key < v.singers.length - 1) {
          v.singers[key].name = value.name + "/";
        }
      });
    });
    this.setData({
      songs: data.data
    });
  }

})