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

export default install
