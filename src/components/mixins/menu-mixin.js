import {findParentComponent, findParentComponents, findChildrenComponents} from '../utils'

export default {
  data() {
    return {
      menu: findParentComponent(this, 'VpMenu')
    }
  },
  computed: {
    mode() {
      return this.menu.mode
    },
    hasSubmenuParent() {
      return !!findParentComponent(this, 'VpSubmenu')
    },
    submenuParentNum() {
      return findParentComponents(this, 'VpSubmenu').length
    }
  }
}