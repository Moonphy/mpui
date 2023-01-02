import MpMsg from './MpMsg/index.vue'
import MpWrap from './MpWrap'
// import { VueConstructor, ComponentCustomProps } from "vue";


const components: any[] = [
  MpMsg,
  MpWrap
]

const install = (Vue: any) => {
  components.map((component: any) => {
    Vue.component(component.options.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue)
}

export default install
