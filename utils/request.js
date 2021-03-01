import DelayLoading from 'wx-delay-loading/utils'
const Loading = DelayLoading.getInstance()

const request = (options) => {
  return new Promise ((resolve, reject) => {
    // 请求开始前调用设置延时
    Loading.setDelayLoading()
    wx.request({
      ...options,
      success (res) {
        // 请求成功后的各种处理操作...
        resolve(res.data)
      },
      fail (err) {
        // 请求失败后的各种处理操作...
        reject(err)
      },
      complete () {
        // 请求完成
        Loading.checkReqCountClear()
      }
    })
  })
}
export default request