var call = require("../../utils/requests.js")
Page({
  data: {
    singer: ''
  },

  onLoad: function(options) {
    call.get("singers/" + options.singerId, this.getSuccess);
  },
  getSuccess: function(data) {
    var that = this;
    console.log(data);
    that.setData({
      singer: data.data
    });
  }
})