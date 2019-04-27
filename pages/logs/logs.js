//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: wx.request({
        url: 'http://bboard.zjmeow.info/v1/itunes'
      })
    })
  }
})
