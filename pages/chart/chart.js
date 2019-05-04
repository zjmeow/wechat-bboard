const call = require("../../utils/requests.js")
import * as echarts from "../../ec-canvas/echarts";

Page({

  data: {
    ec: {
      lazyLoad: true
    },
    songDetail: "",
    rankText: "",
    singers: ""
  },
  onItemTap: function (e) {
    wx.navigateTo({
      url: "../singer/singer?singerId=" + e.currentTarget.dataset.id
    })
  },
  onReady: function () {
    // 获取组件
    this.ecComponent = this.selectComponent("#mychart-dom-bar");
  },

  setOption: function (chart, rank) {
    let option = {
      title: {
        text: "走势",
        left: "center"
      },
      color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
      legend: {
        data: [""],
        top: 50,
        left: "center",
        backgroundColor: "red",
        z: 100
      },
      grid: {
        containLabel: true
      },
      tooltip: {
        show: true,
        trigger: "axis"
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: rank,
        // show: false
      },
      yAxis: {
        x: "center",
        type: "value",
        splitLine: {
          lineStyle: {
            type: "dashed"
          }
        }
        // show: false
      },
      series: [{
        name: "A",
        type: "line",
        smooth: true,
        data: rank
      }]
    };
    chart.setOption(option);
  },

  // 点击按钮后初始化图表
  init: function (data) {
    this.ecComponent.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      this.setOption(chart, data);
      this.chart = chart;

      this.setData({
        isLoaded: true,
        isDisposed: false
      });
      return chart;
    });
  },


  onLoad: function (options) {
    call.get("songs/" + options.songId, this.getSuccess);
  },
  getSuccess: function (data) {
    let that = this;
    let rank = [];
    let rankText = "";
    data.data.billboards.forEach(function (e) {
      rank.push(e.rank);
      rankText += e.rank + "-";
    });
    this.init(rank);
    that.setData({
      songDetail: data.data,
      rankText: rankText,
      singers: data.data.singers
    });
  }

})