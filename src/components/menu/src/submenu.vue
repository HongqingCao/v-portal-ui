<template>
  <li :class="classes">
    <div 
      :class="`${prefixClass}__title`"
      @click.stop="clickHandler"
      :style="subMenuTitleStyle"
    >
      <slot name="title"></slot>
      <vp-icon 
        :class="[`${prefixClass}__title-icon`, 'icon-less']"
      >
      </vp-icon>
    </div>
    <collapse-transition v-if="mode === 'vertical'">
      <ul
        :class="'vp-menu'"
        v-show="isOpen"
      >
        <slot></slot>
      </ul>
    </collapse-transition>
  </li>
</template>

<script>
import VpIcon from '../../icon/'
import {menuMixin, emitter, collapseTransition} from '../../mixins'
import {findParentComponent} from '../../utils'

const prefixClass = 'vp-submenu'
export default {
  name: 'VpSubmenu',
  components: {
    VpIcon
  },
  mixins: [menuMixin, emitter],
  components: {
    collapseTransition
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      isOpen: false,
      isActive: false,
      prefixClass: prefixClass
    }
  },
  computed: {
    classes() {
      return [
        `${prefixClass}`,
        {
          'is-open': this.isOpen,
          'is-active': this.isActive,
          'is-disabled': this.disabled
        }
      ]
    },
    subMenuTitleStyle() {
      return this.mode !== 'horizon' ? {
        paddingLeft: `${40 + (~~ this.submenuParentNum - 1) * 20}px`
      } : {}
    },
    uniqueOpen() {
      return this.menu.uniqueOpen
    }
  },
  mounted() {},
  methods: {
    clickHandler() {
      if (this.disabled || this.mode !== 'vertical') return
      if (this.uniqueOpen && !this.isOpen) {
        this.$parent.$children.forEach(children => {
          if (children.$options.name === 'VpSubmenu') children.isOpen = false
        })
      }
      this.isOpen = !this.isOpen
      this.menu.updateOpenName(this.name)
    }
  }
}
</script>

