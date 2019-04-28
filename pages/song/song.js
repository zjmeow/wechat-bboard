// pages/song/song.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songDetail:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: "http://bboard.zjmeow.info/v1/songs/" + options.songId,
      success: function (res) { //请求成功
        console.log(res.data);//在调试器里打印网络请求到的json数据
        that.setData({
          songDetail: res.data.data
        });
        console.log(that.data.songDetail);
      },
      fail: function (res) { // 请求失败
      }
    });


  },

})