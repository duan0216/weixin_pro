// pages/category/index.js
import { request } from "../../request/index";
Page({
  data: {
    cates_left: [],
    cates_right: [],
    scrolltop:0
  },
  index: 0,
  Cates: [],
  getCategory() {
    return request({ url: "/categories" }).then(res => {
      let cates = res.data.message;
      wx.setStorageSync("Cates", { time: Date.now(), cates: cates });
      return cates;
    });
  },
  // 点击触发的时间函数
  changeCate(e) {
    this.index = e.target.dataset.index;
    this.setCates(this.Cates, this.index);
  },
  // 封装设置左右页面数据源的函数
  setCates(cates, index) {
    let cates_left = this.Cates.map((e, i) => {
      return {cat_id: e.cat_id,cat_name: e.cat_name,isActive: i === this.index ? true : false}});
    let cates_right = this.Cates[this.index].children;
    this.setData({
      cates_left,
      cates_right,
      scrolltop:0
    
    });
  },
  // 页面加载时触发
  onLoad: function(options) {
    let storedata = wx.getStorageSync("Cates");
    if (!storedata || Date.now() - storedata.time > 1000 * 50) {
      this.getCategory().then(res=>{
        this.Cates = res
        this.setCates(this.Cates, this.index)
      });
    }else{
      this.Cates = storedata.cates
      this.setCates(this.Cates, this.index)
    }
   
  }
});
