import Icon from './icon'
import Menu from './menu'
import Wapper from './wapper'
import Backtop from './backtop'
import Description from './description'
import Slider from './slider'
import Github from './github'
const components = {
  Icon,
  Wapper,
  Backtop,
  Description,
  Menu,
  Submenu: Menu.Submenu,
  MenuItem: Menu.MenuItem,
  Slider,
  Github
}

const install = (Vue, options = {}) => {
  if (install.installed) return
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name, components[component])
  })
  Vue.prototype.$notice = Notification
 // Vue.prototype.$message = Message
  install.installed = true
}
install.installed = false
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
  install.installed = true
}

const vportal = {
  ...components,
  install
}

export default vportal