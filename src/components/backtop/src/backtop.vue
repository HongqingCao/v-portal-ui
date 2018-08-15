<template>
  <div :class="classes" :style="styles" @click="back">
    <slot>
     <div :class="innerClasses">
               回顶部
      </div>
    </slot>
  </div>
</template>

<script>
const prefixCls = "i-gotop";

export default {
  name: 'backtop',
  data() {
    return {
      gotop: false
    };
  },
  props: {
    right: {
      type: Number,
      default: 30
    },
    bottom: {
      type: Number,
      default: 30
    },
    height: {
      type: Number,
      default: 400
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, false);
    window.addEventListener("resize", this.handleScroll, false);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll, false);
    window.removeEventListener("resize", this.handleScroll, false);
  },
  computed: {
    // 组件类名
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-show`]: this.gotop
        }
      ];
    },
    // 组件style样式
    styles() {
      return {
        bottom: `${this.bottom}px`,
        right: `${this.right}px`
      };
    },
    // 默认插槽类名
    innerClasses() {
      return `${prefixCls}-inner`;
    }
  },
  methods: {
    //
    handleScroll() {
      this.gotop = window.pageYOffset >= this.height;
    },
    //
    scrollTop(el, from = 0, to, duration = 500) {
      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame =
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(callback) {
            return window.setTimeout(callback, 1000 / 60);
          };
      }
      const difference = Math.abs(from - to);
      const step = Math.ceil(difference / duration * 50);

      function scroll(start, end, step) {
        if (start === end) return;

        let d = start + step > end ? end : start + step;
        if (start > end) {
          d = start - step < end ? end : start - step;
        }

        if (el === window) {
          window.scrollTo(d, d);
        } else {
          el.scrollTop = d;
        }
        window.requestAnimationFrame(() => scroll(d, end, step));
      }
      scroll(from, to, step);
    },
    //
    back() {
      const sTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      this.scrollTop(window, sTop, 0, this.duration);
      this.$emit("on-click");
    }
  }
};
</script>

<style lang="css">
.i-gotop {
  position: fixed;
  display: none;
  cursor: pointer;
  z-index: 1000;
}
.i-gotop.i-gotop-show {
  display: block;
}
.i-gotop .i-gotop-inner {
  padding: 10px;
  border-radius: 2px;
  background-color: #41b663;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  color: #fff;
  transition: all 0.2s ease-in-out;
  text-align: center;
  line-height: 1.25;
  width: 36px;
  box-sizing: border-box;
}
</style>

