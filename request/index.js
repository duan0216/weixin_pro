 
const request = (params)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      url:`https://api.zbztb.cn/api/public/v1${params.url}`,
      success(res){
        resolve(res)
      }
    })
  })
}
export default request