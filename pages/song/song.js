const call = require("../../utils/requests.js")
Page({
  data: {
    songDetail: "",
    rankText: "",
    singers: "",
    songId: ""
  },
  onItemTap: function (e) {
    wx.navigateTo({
      url: "../singer/singer?singerId=" + e.currentTarget.dataset.id
    });
  },
  onButtonTap: function () {
    wx.navigateTo({
      url: "../chart/chart?songId=" + this.data.songId
    });

  },

  onLoad: function (options) {
    call.get("songs/" + options.songId, this.getSuccess);
    this.setData(
      { songId: options.songId }
    );
  },
  getSuccess: function (data) {
    let that = this;
    let rank = [];
    let rankText = "";
    let rankTotal = data.data.billboards.length;
    let rankTen = 0;
    let rankFifty = 0;
    let rankFirst = 0;
    data.data.billboards.forEach(function (e) {
      if (e.rank <= 10) {
        rankTen += 1;
      }
      if (e.rank <= 50) {
        rankFifty += 1;
      }
      if (e.rank == 1) {
        rankFirst += 1;
      }
      rank.push(e.rank);
      rankText += e.rank + "-";
    });
    that.setData({
      songDetail: data.data,
      rankText: rankText,
      singers: data.data.singers,
      rankTotal: rankTotal,
      rankTen: rankTen,
      rankFifty: rankFifty,
      rankFirst: rankFirst
    });
  }

})