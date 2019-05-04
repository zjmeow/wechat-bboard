const call = require("../../utils/requests.js")
Page({
  data: {
    songDetail: "",
    rankText: "",
    singers: "",
    songId:""
  },
  onItemTap: function(e) {
    wx.navigateTo({
      url: "../singer/singer?singerId=" + e.currentTarget.dataset.id
    });
  },
  onButtonTap: function() {
    wx.navigateTo({
      url: "../chart/chart?songId=" + this.data.songId
    });

  },

  onLoad: function(options) {
    call.get("songs/" + options.songId, this.getSuccess);
    this.setData(
      {songId : options.songId}
    );
  },
  getSuccess: function(data) {
    let that = this;
    let rank = [];
    let rankText = "";
    data.data.billboards.forEach(function(e) {
      rank.push(e.rank);
      rankText += e.rank + "-";
    });
    that.setData({
      songDetail: data.data,
      rankText: rankText,
      singers: data.data.singers
    });
  }

})