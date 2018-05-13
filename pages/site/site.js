// pages/site/site.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
  },

  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
  },

  //开福区政府地理位置
  line_1_1: function () {
    wx.openLocation({
      name: '长沙',
      address: '开福区政府【地铁站】',
      latitude: 28.261984,
      longitude: 112.985325,
      scale: 15
    })
  },

  //马厂地理位置
  line_1_2: function () {
    wx.openLocation({
      name: '长沙',
      address: '马厂【地铁站】',
      latitude: 28.251106,
      longitude: 112.988895,
      scale: 15
    })
  },

  //北辰三角洲地理位置
  line_1_3: function () {
    wx.openLocation({
      name: '长沙',
      address: '北辰三角洲【地铁站】',
      latitude: 28.235643,
      longitude: 112.983229,
      scale: 15
    })
  },

  //开福寺地理位置
  line_1_4: function () {
    wx.openLocation({
      name: '长沙',
      address: '开福寺【地铁站】',
      latitude: 28.222390,
      longitude: 112.979698,
      scale: 15
    })
  },

  //文昌阁地理位置
  line_1_5: function () {
    wx.openLocation({
      name: '长沙',
      address: '文昌阁【地铁站】',
      latitude: 28.212605,
      longitude: 112.978175,
      scale: 15
    })
  },

  //培元桥地理位置
  line_1_6: function () {
    wx.openLocation({
      name: '长沙',
      address: '培元桥【地铁站】',
      latitude: 28.206193,
      longitude: 112.976455,
      scale: 15
    })
  },

  //五一广场地理位置
  line_1_7: function () {
    wx.openLocation({
      name: '长沙',
      address: '五一广场【地铁站】',
      latitude: 28.195299,
      longitude: 112.976456,
      scale: 15
    })
  },

  //黄兴广场地理位置
  line_1_8: function () {
    wx.openLocation({
      name: '长沙',
      address: '黄兴广场【地铁站】',
      latitude: 28.189436,
      longitude: 112.976371,
      scale: 15
    })
  },

  //南门口地理位置
  line_1_9: function () {
    wx.openLocation({
      name: '长沙',
      address: '南门口【地铁站】',
      latitude: 28.183624,
      longitude: 112.976179,
      scale: 15
    })
  },

  //侯家塘地理位置
  line_1_10: function () {
    wx.openLocation({
      name: '长沙',
      address: '侯家塘【地铁站】',
      latitude: 28.173706,
      longitude: 112.982416,
      scale: 15
    })
  },

  //南湖路地理位置
  line_1_11: function () {
    wx.openLocation({
      name: '长沙',
      address: '南湖路【地铁站】',
      latitude: 28.165997,
      longitude: 112.985543,
      scale: 15
    })
  },

  //黄土岭地理位置
  line_1_12: function () {
    wx.openLocation({
      name: '长沙',
      address: '黄土岭【地铁站】',
      latitude: 28.160224,
      longitude: 112.985547,
      scale: 15
    })
  },

  //徐家冲地理位置
  line_1_13: function () {
    wx.openLocation({
      name: '长沙',
      address: '徐家冲【地铁站】',
      latitude: 28.153199,
      longitude: 112.984662,
      scale: 15
    })
  },

  //铁道学院地理位置
  line_1_14: function () {
    wx.openLocation({
      name: '长沙',
      address: '铁道学院【地铁站】',
      latitude: 28.136236,
      longitude: 112.987204,
      scale: 15
    })
  },

  //友谊路地理位置
  line_1_15: function () {
    wx.openLocation({
      name: '长沙',
      address: '友谊路【地铁站】',
      latitude: 28.123803,
      longitude: 112.986817,
      scale: 15
    })
  },

  //省政府地理位置
  line_1_16: function () {
    wx.openLocation({
      name: '长沙',
      address: '省政府【地铁站】',
      latitude: 28.111274,
      longitude: 112.987501,
      scale: 15
    })
  },

  //桂花坪地理位置
  line_1_17: function () {
    wx.openLocation({
      name: '长沙',
      address: '桂花坪【地铁站】',
      latitude: 28.099195,
      longitude: 112.988329,
      scale: 15
    })
  },

  //大托地理位置
  line_1_18: function () {
    wx.openLocation({
      name: '长沙',
      address: '大托【地铁站】',
      latitude: 28.082625,
      longitude: 112.989223,
      scale: 15
    })
  },

  //中信广场地理位置
  line_1_19: function () {
    wx.openLocation({
      name: '长沙',
      address: '中信广场【地铁站】',
      latitude: 28.073689,
      longitude: 112.989729,
      scale: 15
    })
  },

  //尚双塘地理位置
  line_1_20: function () {
    wx.openLocation({
      name: '长沙',
      address: '尚双塘【地铁站】',
      latitude: 28.062289,
      longitude: 112.992345,
      scale: 15
    })
  },

  //麓云路地理位置
  line_2_1: function () {
    wx.openLocation({
      name: '长沙',
      address: '麓云路【地铁站】',
      latitude: 28.190744,
      longitude: 112.892211,
      scale: 15
    })
  },

  //文化艺术中心地理位置
  line_2_2: function () {
    wx.openLocation({
      name: '长沙',
      address: '文化艺术中心【地铁站】',
      latitude: 28.196644,
      longitude: 112.900330,
      scale: 15
    })
  },

  //梅溪湖西地理位置
  line_2_3: function () {
    wx.openLocation({
      name: '长沙',
      address: '梅溪湖西【地铁站】',
      latitude: 28.185774,
      longitude: 112.881828,
      scale: 15
    })
  },

  //望城坡地理位置
  line_2_4: function () {
    wx.openLocation({
      name: '长沙',
      address: '望城坡【地铁站】',
      latitude: 28.207479,
      longitude: 112.914824,
      scale: 15
    })
  },

  //金星路地理位置
  line_2_5: function () {
    wx.openLocation({
      name: '长沙',
      address: '金星路【地铁站】',
      latitude: 28.206031,
      longitude: 112.928476,
      scale: 15
    })
  },

  //西湖公园地理位置
  line_2_6: function () {
    wx.openLocation({
      name: '长沙',
      address: '西湖公园【地铁站】',
      latitude: 28.202551,
      longitude: 112.940163,
      scale: 15
    })
  },

  //溁湾镇地理位置
  line_2_7: function () {
    wx.openLocation({
      name: '长沙',
      address: '溁湾镇【地铁站】',
      latitude: 28.197628,
      longitude: 112.951420,
      scale: 15
    })
  },

  //橘子洲地理位置
  line_2_8: function () {
    wx.openLocation({
      name: '长沙',
      address: '橘子洲【地铁站】',
      latitude: 28.195696,
      longitude: 112.962543,
      scale: 15
    })
  },

  //湘江中路地理位置
  line_2_9: function () {
    wx.openLocation({
      name: '长沙',
      address: '湘江中路【地铁站】',
      latitude: 28.195252,
      longitude: 112.969347,
      scale: 15
    })
  },

  //五一广场地理位置
  line_2_10: function () {
    wx.openLocation({
      name: '长沙',
      address: '五一广场【地铁站】',
      latitude: 28.195299,
      longitude: 112.976456,
      scale: 15
    })
  },

  //芙蓉广场地理位置
  line_2_11: function () {
    wx.openLocation({
      name: '长沙',
      address: '芙蓉广场【地铁站】',
      latitude: 28.194968,
      longitude: 112.984631,
      scale: 15
    })
  },

  //迎宾路口地理位置
  line_2_12: function () {
    wx.openLocation({
      name: '长沙',
      address: '迎宾路口【地铁站】',
      latitude: 28.194826,
      longitude: 112.992092,
      scale: 15
    })
  },

  //袁家岭地理位置
  line_2_13: function () {
    wx.openLocation({
      name: '长沙',
      address: '袁家岭【地铁站】',
      latitude: 28.194489,
      longitude: 112.000682,
      scale: 15
    })
  },

  //长沙火车站地理位置
  line_2_14: function () {
    wx.openLocation({
      name: '长沙',
      address: '长沙火车站【地铁站】',
      latitude: 28.193723,
      longitude: 112.010917,
      scale: 15
    })
  },

  //锦泰广场地理位置
  line_2_15: function () {
    wx.openLocation({
      name: '长沙',
      address: '锦泰广场【地铁站】',
      latitude: 28.191957,
      longitude: 112.017600,
      scale: 15
    })
  },

  //万家丽广场地理位置
  line_2_16: function () {
    wx.openLocation({
      name: '长沙',
      address: '万家丽广场【地铁站】',
      latitude: 28.191522,
      longitude: 112.030457,
      scale: 15
    })
  },

  //人民东路地理位置
  line_2_17: function () {
    wx.openLocation({
      name: '长沙',
      address: '人民东路【地铁站】',
      latitude: 28.184234,
      longitude: 112.038747,
      scale: 15
    })
  },

  //长沙大道地理位置
  line_2_18: function () {
    wx.openLocation({
      name: '长沙',
      address: '长沙大道【地铁站】',
      latitude: 28.168147,
      longitude: 113.044423,
      scale: 15
    })
  },

  //沙湾公园地理位置
  line_2_19: function () {
    wx.openLocation({
      name: '长沙',
      address: '沙湾公园【地铁站】',
      latitude: 28.157683,
      longitude: 113.044847,
      scale: 15
    })
  },

  //杜花路地理位置
  line_2_20: function () {
    wx.openLocation({
      name: '长沙',
      address: '杜花路【地铁站】',
      latitude: 28.146389,
      longitude: 113.056862,
      scale: 15
    })
  },

  //长沙火车南站地理位置
  line_2_21: function () {
    wx.openLocation({
      name: '长沙',
      address: '长沙火车南站【地铁站】',
      latitude: 28.147177,
      longitude: 113.065220,
      scale: 15
    })
  },

  //光达地理位置
  line_2_22: function () {
    wx.openLocation({
      name: '长沙',
      address: '光达【地铁站】',
      latitude: 28.148050,
      longitude: 113.085470,
      scale: 15
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})