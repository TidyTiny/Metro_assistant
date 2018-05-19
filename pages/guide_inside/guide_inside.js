// pages/guide_inside/guide_inside.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiArray: [['1号线', '2号线'], ['开福区政府', '马厂', '北辰三角洲', '开福寺', '文昌阁', '培元桥', '五一广场', '黄兴广场', '南门口', '侯家塘', '南湖路', '黄土岭', '徐家冲', '铁道学院', '友谊路', '省政府', '桂花坪', '大托', '中信广场', '尚双塘']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '1号线'
        },
        {
          id: 1,
          name: '2号线'
        }
      ], [
        {
          id: 0,
          name: '开福区政府'
        },
        {
          id: 1,
          name: '马厂'
        },
        {
          id: 2,
          name: '北辰三角洲'
        },
        {
          id: 3,
          name: '开福寺'
        },
        {
          id: 4,
          name: '文昌阁'
        }
      ]
    ],
    multiIndex: [0, 0],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '咋又找不到路了？',
    })
  },

  //多列选择器
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  //多列选择器，某一列的值改变时触发事件
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['开福区政府', '马厂', '北辰三角洲', '开福寺', '文昌阁', '培元桥', '五一广场', '黄兴广场', '南门口', '侯家塘', '南湖路',  '黄土岭', '徐家冲', '铁道学院', '友谊路', '省政府', '桂花坪', '大托', '中信广场', '尚双塘'];
            break;
          case 1:
            data.multiArray[1] = ['麓云路', '文化艺术中心', '梅溪湖西', '望城坡', '金星路', '西湖公园', '溁湾镇', '橘子洲', '湘江中路', '五一广场', '芙蓉广场', '迎宾路口', '袁家岭', '长沙火车站', '锦泰广场', '万家丽广场', '人民东路', '长沙大道', '沙湾公园', '杜花路', '长沙火车南站', '光达'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0://当第一列的选择为1号线时
            switch (data.multiIndex[1]) {
              case 0:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526692424x-1404764607.jpg']//开福区政府的网址
                })
                break;
              case 1:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526692821x-1404764607.jpg']//马厂的网址
                })
                break;
              case 2:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526692858x-1404764607.jpg']//北辰三角洲的网址
                })
                break;
              case 3:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526692904x-1404764607.jpg']//开福寺的网址
                })
                break;
              case 4:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526692936x-1404764607.jpg']//文昌阁的网址
                })
                break;
              case 5:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526693620x-1404764607.jpg']//培元桥的网址
                })
                break;
              case 6:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526693539x-1404764607.jpg']//五一广场的网址
                })
                break;
              case 7:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526693649x-1404764607.png']//黄兴广场的网址
                })
                break;
              case 8:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526693675x-1404764607.png']//南门口的网址
                })
                break;
              case 9:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526693694x-1404764607.png']//侯家塘的网址
                })
                break;
              case 10:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526693714x-1404764607.png']//南湖路的网址
                })
                break;
              case 11:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526693734x-1404764607.png']//黄土岭的网址
                })
                break;
              case 12:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526693759x-1404764607.png']//徐家冲的网址
                })
                break;
              case 13:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526693803x-1404764607.png']//铁道学院的网址
                })
                break;
              case 14:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526693825x-1404764607.png']//友谊路的网址
                })
                break;
              case 15:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526693843x-1404764607.png']//省政府的网址
                })
                break;
              case 16:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526693864x-1404764607.png']//桂花坪的网址
                })
                break;
              case 17:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526693884x-1404764607.png']//大托的网址
                })
                break;
              case 18:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526693965x-1404764607.png']//中信广场的网址
                })
                break;
              case 19:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526693990x-1404764607.png']//尚双塘的网址
                })
                break;
            }
            break;
          case 1://当选择为2号线时：
            switch (data.multiIndex[1]) {
              case 0:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526693011x-1404764607.jpg']//麓云路的网址
                })
                break;
              case 1:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526693036x-1404764607.jpg']//文化艺术中心的网址
                })
                break;
              case 2:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526693083x-1404764607.jpg']//梅溪湖西的网址
                })
                break;
              case 3:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526694171x-1404764607.jpg']//望城坡的网址
                })
                break;
              case 4:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526694194x-1404764607.jpg']//金星路的网址
                })
                break;
              case 5:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526694219x-1404764607.jpg']//西湖公园的网址
                })
                break;
              case 6:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526694241x-1404764607.jpg']//溁湾镇的网址
                })
                break;
              case 7:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526694261x-1404764607.jpg']//橘子洲的网址
                })
                break;
              case 8:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526694292x-1404764607.jpg']//湘江中路的网址
                })
                break;
              case 9:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526693539x-1404764607.jpg']//五一广场的网址
                })
                break;
              case 10:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526694341x-1404764607.jpg']//芙蓉广场的网址
                })
                break;
              case 11:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526694375x-1404764607.jpg']//迎宾路口的网址
                })
                break;
              case 12:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526694422x-1404764607.jpg']//袁家岭的网址
                })
                break;
              case 13:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526695287x-1404764607.jpg']//长沙火车站的网址
                })
                break;
              case 14:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526695309x-1404764607.jpg']//锦泰广场的网址
                })
                break;
              case 15:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526695331x-1404764607.jpg']//万家丽广场的网址
                })
                break;
              case 16:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526695350x-1404764607.jpg']//人民东路的网址
                })
                break;
              case 17:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526695368x-1404764607.jpg']//长沙大道的网址
                })
                break;
              case 18:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526695390x-1404764607.jpg']//沙湾公园的网址
                })
                break;
              case 19:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526695410x-1404764607.jpg']//杜花路的网址
                })
                break;
              case 20:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526695426x-1404764607.jpg']//长沙火车南站的网址
                })
                break;
              case 21:
                wx.previewImage({
                  urls: ['http://chuantu.biz/t6/314/1526695724x-1566657848.jpg']//光达的网址
                })
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }
    this.setData(data);
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