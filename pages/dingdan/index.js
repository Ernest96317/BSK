//index.js
//获取应用实例
// var app = getApp()
Page({
  data: {
    items:[]
  },
  //事件处理函数

  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/59082eb57a878d73716e5b73/aa/list',
      method: 'get',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function(res) {
        console.log(res.data.items);
        // console.log(item);
        that.setData({
          items: res.data.items
        });
      }
    })
  }
})
