// From https://github.com/ElemeFE/element/blob/dev/src/transitions/collapse-transition.js, Thanks!

import {addClass, removeClass} from '../utils'
const Transition =  {
  beforeEnter(el) {
    addClass(el, 'collapse-transition');
    if (!el.dataset) el.dataset = {}
    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    el.style.height = '0'
    el.style.paddingTop = '0'
    el.style.paddingBottom = '0'
  },
  enter(el, done) {
    el.dataset.oldOverflow = el.style.oldOverflow
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
    } else {
      el.style.height = ''
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddin  = el.dataset.oldPaddingBottom
    }
    el.style.overflow = 'hidden'
  },
  afterEnter(el) {
    removeClass(el, 'collapse-transition')
    el.style.height = ''
    el.style.overflow = el.dataset.oldOverflow
  },

  beforeLeave(el) {
    if (!el.dataset) el.dataset = {}
    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    el.dataset.oldOverflow = el.style.overflow
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  leave(el, done) {
    if (el.scrollHeight !== 0) {
      addClass(el, 'collapse-transition')
      el.style.height = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    }
  },
  afterLeave(el) {
    removeClass(el, 'collapse-transition')
    el.style.height = ''
    el.style.overflow = el.dataset.oldOverflow
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom
  }
}
export default {
  name: 'CollapseTransition',
  functional: true,
  render(h, { children }) {
    const data = {
      on: Transition
    }
    return h('transition', data, children)
  }
}