// components/Tab/Tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods:{
      type:Array,
      value:[]
    }
  },

  data: {
    TitleList:[
      {title:"综合",isActive:true,id:0},
      {title:"销量",isActive:false,id:1},
      {title:"价格",isActive:false,id:2}
    ],
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemChange(e){
      let index = e.target.dataset.index
      let TitleList = this.data.TitleList.map((v,i)=>{
        return{title:v.title,isActive:i===index?true:false,id:v.id}
      })
      let currentIndex = index
      this.setData({
        TitleList,
        currentIndex
      })
    }
  },
  
})
