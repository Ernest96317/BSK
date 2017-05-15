//index.js

Page({
  data: {},

  //事件处理函数

  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/591997909aba4141cf22f85d/fanshi/list',
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
