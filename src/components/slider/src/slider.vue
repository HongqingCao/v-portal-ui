<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].url">
        <transition name="slide-fade">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-fade-old">
          <img v-if="isShows" :src="slides[nowIndex].src">
        </transition>
      </a>
    </div>
    <div class="slide-title"><a>{{ slides[nowIndex].title }}</a></div>
  	<ul class="slide-pages">
      <li v-for="(item, index) in slides"
      @click="goto(index)"
      >
        <a :class="{on: index === nowIndex}"></a>
      </li>
   </ul>
   <a @click="goto(prevIndex)" class="callbacks-nav">＜</a>
   <a @click="goto(nextIndex)" class="callbacks-nav next">＞</a>
  </div>
</template>

<script>
export default {
  name: 'slider',
  props: {
    slides:{
    	type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      nowIndex: 1,
      isShow: true,
      isShows:false,
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      }
      else {
        return this.nowIndex - 1
      } 
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      }
      else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.nowIndex = index
        this.isShows = true
      }, 10)

    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.runInv();
  }
}
</script>

<style lang="scss">
.slide-show{
	margin-bottom:2px;
	position:relative;
	width:100%;
	height: 99%;
	text-align:center;
	.slide-img{
			position:relative;
			list-style:none;
			overflow:hidden;
			width:100%;
			padding:0;
			margin:0;
		    a{
					display: block;
					overflow: hidden;
					img {
					    display: block;
					    position: relative;
					    z-index: 1;
					    height: auto;
					    width: 100%;
					    border: 0;
					}
			}
  }
  .slide-title{
	    margin-top: -40px;
	 	  position: relative;
	    z-index: 99;
	    height: 40px;
	    margin-bottom: 20px;
	    background: #2C3E50;
	    opacity: .5;
	    a{
			width: 70%;
			line-height:40px;
			color:#fff;
			opacity: 1;
			display: block;
			float: left;
			text-align: left;
			background: #2C3E50;
			padding-left: 20px;
			text-overflow:ellipsis;
			white-space:nowrap;
			overflow:hidden; 
		}
		@media screen and (max-width:600px){
			 a{
				width: 40%;
			}
		}
	}
	.slide-pages{
		  text-align: right;
		  margin: -45px 20px 20px 0;
	    position: relative;
	    z-index: 100;
	    li {
		  	display: inline-block;
	      position: relative;
				a{
				  display: block;
				  width: 12px;
			    height: 12px;
			    margin-left: 5px;
			    border-radius:12px;
			    border: 1px solid #FFF;
			    cursor: pointer;
			    &.on{
			    width: 12px;
			    height: 12px;
			    margin-left: 5px;
			    border-radius: 12px;
			    position: relative;
			    background: #fff;
		  	}
			}
	  }
  }
    .callbacks-nav{
				position:absolute;
				-webkit-tap-highlight-color:rgba(0,0,0,0);
				top:50%;
				left:0;
				z-index:3;
				overflow:hidden;
				text-decoration:none;
				height:61px;
				width:38px;
				background: #2C3E50;
				color: #fff;
				opacity:0.4;
				text-align: center;
				line-height: 61px;
				margin-top:-30px;
				font-weight:bolder;
				display: none;
				cursor: pointer;
				&:active{opacity:1.0;}
				&:hover{
					opacity:0.7;
				}
				&.next{
					left:auto;
					right:0;
				}
			}
	&:hover{
		.callbacks-nav{display:block;}
	}
}

</style>
