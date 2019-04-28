// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songs:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    wx.request({
      url: "http://bboard.zjmeow.info/v1/search/songs/as",
      success: function (res) { //请求成功
        console.log(res.data);//在调试器里打印网络请求到的json数据
        that.setData({
          songs: res.data.data
        });
        console.log(that.data.songs);
      },
      fail: function (res) { // 请求失败
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})