var call = require("../../utils/requests.js")
Page({

  data: {
    songs: 'asd'
  },

  onLoad: function(options) {
    call.get("itunes", this.getSuccess);
  },
  getSuccess: function(data) {
    var that = this;
    console.log(data);
    that.setData({
      songs: data.all_song
    });
  }
})