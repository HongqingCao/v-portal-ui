/*
* @Introduce:          图片功能
* @Author:             HongqingCao
* @Date:               2018-08-1 17:37:22
* @Last Modified by:   HongqingCao
* @Last Modified time: 2018-08-1 17:37:22
*/
<template>
	<div class="image-dialog">
        <button class="image-dialog-trigger" type="button" @click="showDialog"><img class="image-dialog-thumb" ref="thumb" :src="thumb" />
        </button>
        <transition name="dialog" @enter="enter" @leave="leave">
            <div class="image-dialog-background" v-show="appearedDialog" ref="dialog">
                <button class="image-dialog-close" type="button" @click="hideDialog" aria-label="Close"></button>
                <img class="image-dialog-animate" ref="animate" :class="{ loading: !loaded }" :src="loaded ? full : thumb" />
                <img class="image-dialog-full" ref="full" :src="appearedDialog &amp;&amp; full" :width="fullWidth" :height="fullHeight"
                @load="onLoadFull" />
            </div>
        </transition>
    </div>
</template>

<script>
export default {
  props: {
    thumb: String,
    full: String,
    fullWidth: Number,
    fullHeight: Number
  },
  data () {
    return {
      loaded: false,
      appearedDialog: false
    }
  },
  methods: {
    showDialog () {
      this.appearedDialog = true
    },
    
    hideDialog () {
      this.appearedDialog = false
    },    
    enter () {
      this.animateImage(
        this.$refs.thumb,
        this.$refs.full
      )
    },
    leave () {
      this.animateImage(
        this.$refs.full,
        this.$refs.thumb
      )
    },
    onLoadFull () {
      this.loaded = true
    }, 
    animateImage (startEl, destEl) {
      const start = this.getBoundForDialog(startEl)
      this.setStart(start)    
      this.$nextTick(() => {
        const dest = this.getBoundForDialog(destEl)
        this.setDestination(start, {
          top: dest.top,
          left: dest.left,
          width: dest.width || this.fullWidth,
          height: dest.height || this.fullHeight
        })
      })
    },
   getBoundForDialog (el) {
      const bound = el.getBoundingClientRect()
      const dialog = this.$refs.dialog
      return {
        top: bound.top + dialog.scrollTop,
        left: bound.left + dialog.scrollLeft,
        width: bound.width,
        height: bound.height
      }
    },
    setStart (start) {
      const el = this.$refs.animate
      el.style.left = start.left + 'px'
      el.style.top = start.top + 'px'
      el.style.width = start.width + 'px'
      el.style.height = start.height + 'px'
      el.style.transitionDuration = '0s'
      el.style.transform = ''
    },
    setDestination (start, dest) {
      const el = this.$refs.animate
      el.style.transitionDuration = '' 
      const translate = `translate(${dest.left - start.left}px, ${dest.top - start.top}px)`
      const scale = `scale(${dest.width / start.width}, ${dest.height / start.height})`
      el.style.transform = `${translate} ${scale}`
    }
  }
}
</script>


<style>
</style>