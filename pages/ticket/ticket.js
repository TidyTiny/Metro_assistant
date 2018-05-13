let app = getApp();
Page({
  data: {
    img: ""
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: '没带现金还是不想排队？'
    });
  },
  scan() {
    wx.scanCode({
      success: (res) => {
        console.log("扫码结果");
        console.log(res);
        this.setData({
          img: res.result
        })
      },
      fail: (res) => {
        console.log(res);
      }
    })
  }
})