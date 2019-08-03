//Page Object
import {request} from '../../request/index'
Page({
  data: {
    goodsList:[]
  },
  total:0,
  searchParams:{
    cid:0,
    pagenum:1,
    pagesize:10
  },
  onLoad: function(options){
    this.searchParams.cid = options.cid
    this.getgoodsList()
  },
  onReachBottom(){   
    if((this.searchParams.pagenum+1)*this.searchParams.pagesize<=Math.ceil((this.total)/10)*10){
      this.searchParams.pagenum++
      this.getgoodsList()
    }else{
      wx.showToast({
        title: '没有更多商品了',
        icon: 'none',
        success: (result)=>{
        },
      });
    }
    
  },
  getgoodsList(){
    request({url:'/goods/search',data:this.searchParams})
    .then(res=>{
      let goodsList = res.data.message.goods
      console.log(res)
      this.total = res.data.message.total
      goodsList = [...this.data.goodsList,...goodsList]
      console.log(goodsList)
      this.setData({
        goodsList
      })
    })
  },
  onPullDownRefresh() {
    this.searchParams.pagenum = 1;
    this.setData({
      goodsList:[]
    })
    this.getgoodsList();

  }
});