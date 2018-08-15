<template>
  <li
    :class="classes"
    @click.stop="clickHandler"
    :style="itemStyle"
  >
  <slot></slot>
  </li>
</template>

<script>
import {findParentComponents} from '../../utils'
import {emitter, menuMixin} from '../../mixins'
export default {
  name: 'VpMenuItem',
  mixins: [emitter, menuMixin],
  props: {
    name: {
      type: [Number, String],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      prefixClass: 'vp-menu-item',
      isActive: false
    }
  },
  computed: {
    classes() {
      return [
        this.prefixClass,
        {
          'is-active': this.isActive,
          'is-disabled': this.disabled
        }
      ]
    },
    itemStyle() {
      return this.mode !== 'horizon' ? {
        paddingLeft: `${40 + (~~ this.submenuParentNum - 1) * 20}px`
      } : {}
    }
  },
  mounted() {
    this.$on('updateActiveName', name => {
      if (this.name === name) {
        this.isActive = true
        let parents = findParentComponents(this, 'VpSubmenu')
        parents.forEach(parent => !parent.isOpen ? parent.isOpen = true : '')
      } else {
        this.isActive = false
      }
    })
  },
  methods: {
    clickHandler() {
      if (this.disabled) return
      this.dispatch('VpSubmenu', 'menuItemSelect', false)
      this.dispatch('VpMenu', 'menuItemSelect', this.name)
      if (this.menu.router) this.$router.push(this.name)
    }
  }
}
</script>
