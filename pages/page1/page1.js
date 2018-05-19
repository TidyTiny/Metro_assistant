// pages/page1.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    infoMess:"",
    site:"",
    Height: 0,
    scale: 16,
    latitude: "",
    longitude: "",
    address: "",
    cityInfo:{},
    markers: [],
    controls: [{
      id: 1,
      iconPath: "/img/minus.png",
      position: {
        left: 300,
        top: 100 - 50,
        width: 30,
        height: 30
      },
      clickable: true
    },
    {
      id: 2,
      iconPath: "/img/add.png",
      position: {
        left: 340,
        top: 100 - 50,
        width: 30,
        height: 30
      },
      clickable: true
    }
    ],
    circles: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;

    wx.setNavigationBarTitle({
      title: '我是谁？我在哪？',
    })
    wx.getSystemInfo({
      success: function (res) {
        //设置map高度，根据当前设备宽高满屏显示
        _this.setData({
          view: {
            Height: res.windowHeight
          }
        })
      }
    })

    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            id: "1",
            latitude: res.latitude,
            longitude: res.longitude,
            width: 50,
            height: 50,
            title: "哪里"

          }],
          circles: [{
            latitude: res.latitude,
            longitude: res.longitude,
            color: '#7cb5ec88',
            fillColor: '#7cb5ec88',
            radius: 300,
            strokeWidth: 1
          }]

        })
      }

    })

  },

  search: function () {
    wx.navigateTo({
      url: '../../pages/site/site?title=请选择站点',
    })
  },

  //定义查询位置的函数：
  openLocation: function (e) {
    var value = e.detail.value.address
    console.log("location:" + value);
    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          name: '长沙',
          address: String(value),
          latitude: latitude,
          longitude: longitude,
          scale: 15
        })
      }
    })
  },

  regionchange(e) {
    console.log("regionchange===" + e.type)
  },

  //点击merkers
  markertap(e) {
    console.log(e.markerId)

    wx.showActionSheet({
      itemList: ["A"],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },

  //点击缩放按钮动态请求数据
  controltap(e) {
    var that = this;
    console.log("scale===" + this.data.scale)
    if (e.controlId === 1) {
      // if (this.data.scale === 13) {
      that.setData({
        scale: --this.data.scale
      })
      // }
    } else {
      //  if (this.data.scale !== 13) {
      that.setData({
        scale: ++this.data.scale
      })
      // }
    }
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