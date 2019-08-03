// pages/index/index.js
import {request} from '../../request/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[],
    navList:[],
    goodsList:[]
  },

  onLoad: function (options) {
    this.getswiperList() 
    this.getnavItems() 
    this.getproList()    
  },
  getswiperList(){
    request({url:'/home/swiperdata'})
      .then(res=>{
        var swiperList = res.data.message
        this.setData({
          swiperList
        })
      }) 
  },
  getnavItems(){
    request({url:'/home/catitems'})
    .then(res=>{
      var navList = res.data.message
    
      this.setData({
        navList
      })
    }) 
  },
  getproList(){
    request({url:'/home/floordata'})
    .then(res=>{
      var goodsList = res.data.message
    
      this.setData({
        goodsList
      })
    }) 
  },
  
  onReady: function () {

  },


  onShow: function () {

  },

  
  onHide: function () {

  },


  onUnload: function () {

  },


  onPullDownRefresh: function () {

  },

  
  onReachBottom: function () {

  },


  onShareAppMessage: function () {

  }
})