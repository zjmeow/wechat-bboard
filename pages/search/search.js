// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
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
    var that = this;
    wx.request({
      url: "http://bboard.zjmeow.info/v1/search/songs/" + that.data.title,
      success: function (res) { //请求成功
        console.log(res.data);//在调试器里打印网络请求到的json数据
        that.setData({
          songs: res.data.data
        });
        console.log(that.data.songs);
      },
      fail: function (res) { // 请求失败
      }
    });
  }

})