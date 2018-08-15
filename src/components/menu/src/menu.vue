<template>
  <ul :class="classes">
    <slot></slot>
  </ul>
</template>

<script>
import {emitter} from '../../mixins'
import {findChildrenComponents, findSiblingComponents} from '../../utils'
const prefixClass = 'vp-menu'

export default {
  name: 'VpMenu',
  mixins: [emitter],
  props: {
    theme: {
      type: String,
      default: 'light'
    },
    mode: {
      type: String,
      default: 'vertical'
    },
    uniqueOpen: {
      type: Boolean,
      default: true
    },
    activeName: {
      type: [Number, String],
      default: ''
    },
    openName: {
      type: Array,
      default() {
        return []
      }
    },
    collapse: Boolean,
    router: Boolean
  },
  data() {
    return {
      currentActiveName: this.activeName,
      submenus: []
    }
  },
  computed: {
    classes() {
      return [
        `${prefixClass}`,
        `${prefixClass}--${this.theme}`,
        `${prefixClass}--${this.mode}`
      ]
    }
  },
  mounted() {
    this.submenus = findChildrenComponents(this, 'VpSubmenu')
    this.updateActiveName()
    this.updateOpened()
    this.$on('menuItemSelect', name => {
      this.currentActiveName = name
      this.$emit('select', name)
    })
  },
  methods: {
    updateActiveName() {
      if (this.currentActiveName === undefined) return
      this.broadcast('VpMenuItem', 'updateActiveName', this.currentActiveName)
    },
    updateOpenName(name) {
      let index = this.openName.indexOf(name)
      if (index > -1) this.openName.splice(index, 1)
      else {
        this.openName.push(name)
        if (this.uniqueOpen) {
          let openSubmenu = {}
          this.submenus.forEach(item => item.name === name ? openSubmenu = item : '')
          findSiblingComponents(openSubmenu, 'VpSubmenu').forEach(item => {
            let index = this.openName.indexOf(item.name)
            this.openName.splice(index, index >= 0 ? 1 : 0)
          })
        }
      }
    },
    updateOpened() {
      if (this.submenus && this.submenus.length) {
        this.submenus.forEach(item => this.openName.includes(item.name) ? item.isOpen = true : '')
      }
    }
  },
  watch: {
    currentActiveName() {
      this.updateActiveName()
    },
    activeName(val) {
      this.currentActiveName = val
    }
  }
}
</script>
<style lang="scss">
</style>