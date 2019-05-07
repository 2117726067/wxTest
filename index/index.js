//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular:true,
    
    proList:[{
      proName : "富安娜(FUANNA)",
      proPrice : 468.03
    }, {
      proName: "张安娜(FUANNA)",
      proPrice: 46
    }, {
      proName: "李安娜(FUANNA)",
      proPrice: 573.1
    }, {
      proName: "赵安娜(FUANNA)",
      proPrice: 8.09
    },{
      proName: "孙安娜(FUANNA)",
      proPrice: 99.4
    },{
      proName: "钱安娜(FUANNA)",
      proPrice: 1000.0
    }]
  }
})
