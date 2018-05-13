// pages/arive_time/arive_time.js
var bmap = require('../../libs/bmap-wx.js');
var wxMarkerData = [];
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    placeData: {}, 
    maxtime: "",
    isHiddenLoading: true,
    isHiddenToast: true,
    dataList: {},
    countDownMinute: '',
    countDownSecond: '',
  },
  makertap: function (e) {
    var that = this;
    var id = e.markerId;
    that.showSearchInfo(wxMarkerData, id);
    that.changeMarkerColor(wxMarkerData, id);
  },
  onLoad: function () {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: '6G6rEXuoYLHhIEnYib64TB4BNT0YUxKO'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      wxMarkerData = data.wxMarkerData;
      that.setData({
        markers: wxMarkerData
      });
      that.setData({
        latitude: wxMarkerData[0].latitude
      });
      that.setData({
        longitude: wxMarkerData[0].longitude
      });
    }

    wx.setNavigationBarTitle({
      title: '当前距离最近的地铁站'
    });
    // 发起POI检索请求 
    BMap.search({
      "query": '地铁站',
      fail: fail,
      success: success,
      // 此处需要在相应路径放置图片文件 
      iconPath: '../../img/marker_red.png',
      // 此处需要在相应路径放置图片文件 
      iconTapPath: '../../img/marker_red.png'
    });
    this.getLocation();
  },

  getLocation: function () {
    var page = this
    wx.getLocation({
      type: 'wgs84',   //<span class="comment" style="margin:0px;padding:0px;border:none;">默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标</span><span style="margin:0px;padding:0px;border:none;"> </span>  
      success: function (res) {
        // success    
        var longitude = res.longitude
        var latitude = res.latitude
        page.loadCity(longitude, latitude)
      }
    })
  },
  loadCity: function (longitude, latitude) {
    var page = this
    wx.request({
      url: 'https://api.map.baidu.com/geocoder/v2/?ak=6G6rEXuoYLHhIEnYib64TB4BNT0YUxKO&location=' + latitude + ',' + longitude + '&output=json',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // success    
        console.log(res);
        var city = res.data.result.business;
        wx.showModal({
          title: '当前位置',
          content: city,
        })
      },
      fail: function () {
        wx.showModal({
          title: '错误',
          content: '附近没有地铁站哦',
        })
      },

    })
  },

  showSearchInfo: function (data, i) {
    var that = this;
    var totalSecond = 357;

    var interval = setInterval(function () {
      // 秒数  
      var second = totalSecond;

      // 天数位  
      var day = Math.floor(second / 3600 / 24);
      var dayStr = day.toString();
      if (dayStr.length == 1) dayStr = '0' + dayStr;

      // 小时位  
      var hr = Math.floor((second - day * 3600 * 24) / 3600);
      var hrStr = hr.toString();
      if (hrStr.length == 1) hrStr = '0' + hrStr;

      // 分钟位  
      var min = Math.floor((second - day * 3600 * 24 - hr * 3600) / 60);
      var minStr = min.toString();
      if (minStr.length == 1) minStr = minStr;

      // 秒位  
      var sec = second - day * 3600 * 24 - hr * 3600 - min * 60;
      var secStr = sec.toString();
      if (secStr.length == 1) secStr = '0' + secStr;

      this.setData({
        countDownDay: dayStr,
        countDownHour: hrStr,
        countDownMinute: minStr+'分',
        countDownSecond: secStr+'秒',
      });
      totalSecond--;
      if (totalSecond < 0) {
        clearInterval(interval);
        wx.showToast({
          title: '活动已结束',
        });
        this.setData({
          countDownMinute: '00',
          countDownSecond: '00',
        });
      }
    }.bind(this), 1000);
    that.setData({
      placeData: {
        title: '名称：' + data[i].title + '\n',
        address: '地址：' + data[i].address + '\n',
        direction_up: '开往开福区政府方向：'+'\n',
        direction_down: '开往尚双塘方向：' + '\n'
      }
    });
  },
  changeMarkerColor: function (data, i) {
    var that = this;
    var markers = [];
    for (var j = 0; j < data.length; j++) {
      if (j == i) {
        // 此处需要在相应路径放置图片文件 
        data[j].iconPath = "../../img/marker_yellow.png";
      } else {
        // 此处需要在相应路径放置图片文件 
        data[j].iconPath = "../../img/marker_red.png";
      }
      markers[j](data[j]);
    }
    that.setData({
      markers: markers
    });
  },
})