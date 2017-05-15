//index.js

Page({
  data: {},

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
        that.setData({
          items: res.data.items
        });
      }
    })
  },

})
