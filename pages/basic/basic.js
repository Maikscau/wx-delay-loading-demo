import DelayLoading from 'wx-delay-loading/utils'
const Loading = DelayLoading.getInstance()

Page({
  data: {
    isLoading: false
  },

  exampleRequest () {
    // 请求开始
    Loading.setDelayLoading(300) // 请求超过0.3秒没完成，显示 loading 组件
    wx.request({
      url: 'http://www.tianqiapi.com/api?version=v9&appid=45738265&appsecret=1v0FtBbZ',
      complete () {
        // 请求完成
        Loading.checkReqCountClear()
      }
    })
  }

})