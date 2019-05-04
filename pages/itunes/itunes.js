const call = require("../../utils/requests.js")
Page({

  data: {
    songs: "asd"
  },

  onLoad: function(options) {
    call.get("itunes", this.getSuccess);
  },
  getSuccess: function(data) {
    let that = this;
    data.all_song.forEach(function(k,v) {
      data.all_song[v].now_point = data.all_song[v].now_point.toFixed(4);
    });

    that.setData({
      songs: data.all_song
    });
  }
})