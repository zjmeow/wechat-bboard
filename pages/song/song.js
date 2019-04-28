var call = require("../../utils/requests.js")
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
    call.get("songs/" + options.songId, this.getSuccess);
  },
  getSuccess: function (data) {
    var that = this;
    console.log(data);
    that.setData({
      songDetail: data.data
    });
  }

})