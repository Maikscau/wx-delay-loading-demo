import request from '../../utils/request'

Page({
  data: {
    isLoading: false
  },

  // 仅为示例
  exampleRequest () {
    // 使用封装后的request
    request({
      url: 'http://www.tianqiapi.com/api?version=v9&appid=45738265&appsecret=1v0FtBbZ'
    }).then(res => {
      // 对返回数据的处理...
      console.log(res)
    })
  }
})