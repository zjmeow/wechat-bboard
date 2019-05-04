const call = require("../../utils/requests.js")
Page({

  data: {
    songs:'',
    title:''
  },
  userInputTitle:function(e) {
    this.setData({
      title:e.detail.value
    });
  },
  onItemTap: function(e) {
    wx.navigateTo({
      url: '../song/song?songId=' + e.currentTarget.dataset.id
    })

  },
  search:function(e) {
    call.get("search/songs/" + this.data.title, this.searchSuccess);
  },
  searchSuccess: function (data) {
    let that = this;
    that.setData({
      songs: data.data
    });
  }
})