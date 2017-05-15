//index.js

Page({
  data: {
    items:[],
    banners: [
      {
        id: 1,
        img: 'https://img.4008123123.com/resource/BannerP/Banner_1_2017_04_12_15_21_14.jpg',
      },
      {
        id: 2,
        img: 'https://img.4008123123.com/resource/BannerP/Banner_1_2017_04_12_15_40_55.jpg',
      },
      {
        id: 3,
        img: 'https://img.4008123123.com/resource/BannerP/Banner_1_2017_04_12_15_43_38.jpg',
      },
      {
        id: 4,
        img: 'https://img.4008123123.com/resource/BannerP/Banner_1_2017_04_12_15_46_28.jpg',
      }
    ]
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
        that.setData({
          items: res.data.items
        });
      }
    })
  },

})
