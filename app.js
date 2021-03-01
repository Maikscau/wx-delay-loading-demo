import DelayLoading from 'wx-delay-loading/utils'

App({
  onLaunch() {
    const Loading = DelayLoading.getInstance()
    Loading.initComponent('isLoading')
  },
})
