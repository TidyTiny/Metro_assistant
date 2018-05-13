var amapFile = require('../../libs/amap-wx.js');
var markersData = [];
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    textData: {},
  },
  makertap: function (e) {
    var id = e.markerId;
    var that = this;
    that.showMarkerInfo(markersData, id);
    that.changeMarkerColor(markersData, id);
  },
  onLoad: function () {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: '9445c99a4bdad3227690a8f361a2af85' });
    myAmapFun.getPoiAround({
      iconPathSelected: '..­/..­/img/marker_red.png', 
      iconPath: '..­/..­/img/marker_yellow.png', 
      success: function (data) {
        markersData = data.markers;
        that.setData({
          markers: markersData
        });
        that.setData({
          latitude: markersData[0].latitude
        });
        that.setData({
          longitude: markersData[0].longitude
        });
        that.showMarkerInfo(markersData, 0);
      },
      fail: function (info) {
        wx.showModal({ title: info.errMsg })
      }
    });
    wx.setNavigationBarTitle({
      title: '嘿嘿嘿上哪去吃呢',
    })
  },

  showMarkerInfo: function (data, i) {
    var that = this;
    that.setData({
      textData: {
        name: data[i].name,
        desc: data[i].address
      }
    });
  },

  changeMarkerColor: function (data, i) {
    var that = this;
    var markers = [];
    for (var j = 0; j < data.length; j++) {
      if (j == i) {
        data[j].iconPath = "..­/..­/img/marker_red.png"; 
      } else {
        data[j].iconPath = "..­/..­/img/marker_yellow.png"; 
      }
      markers.push(data[j]);
    }
    that.setData({
      markers: markers
    });
  }

})