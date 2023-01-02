import Antd from 'ant-design-vue'
import MpUi from '@packages/index.ts'
// import '@/assets/icons/components'
// import SvgIcon from 'vue-svgicon'

export default ({
  Vue,
}) => {
  Vue.use(Antd)
  Vue.use(MpUi)
  // Vue.use(SvgIcon, {
  //   tagName: 'svg-icon'
  // })
  // Vue.mixin({
  //   mounted () {
  //     import('@innovation/offline-gismap').then(function (m) {
  //       Vue.component('OfflineGisMap', m)
  //     })
  //   },
  // })
}
