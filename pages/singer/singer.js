const call = require("../../utils/requests.js")
Page({
  data: {
    singer: "",
    avatar:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2365325918,1593856678&fm=26&gp=0.jpg"
  },
  onItemTap: function (e) {
    wx.navigateTo({
      url: "../song/song?songId=" + e.currentTarget.dataset.id
    })

  },
  onLoad: function(options) {
    call.get("singers/" + options.singerId, this.getSuccess);
  },
  getSuccess: function(data) {
    let that = this;
    that.setData({
      singer: data.data,
      avatar: data.data.image == null ? data.avatar : data.data.image
    });
  }
})