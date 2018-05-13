let app = getApp();
Page({
  data: {
    img: ""
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: '扫码购票'
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