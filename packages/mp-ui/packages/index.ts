import Msg from './Msg/index.vue'
// import { VueConstructor, ComponentCustomProps } from "vue";


const components: any[] = [
  Msg
]

const install = (Vue: any) => {
  components.map((component: any) => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
