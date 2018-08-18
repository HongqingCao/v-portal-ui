/*
* @Introduce:          爱心点赞
* @Author:             HongqingCao
* @Date:               2018-08-11 17:37:22
* @Last Modified by:   HongqingCao
* @Last Modified time: 2018-08-11 17:37:22
*/

<template>
	<wapper>
		<div>
			<description
				title="P6.粒子动效"
				introduce="背景实现粒子动效果"
				principle="此处引用vue-particles组件实现">
		        <vue-particles
					color="#6495ED"
			        :particleOpacity="0.8"
			        :particlesNumber="60"
			        shapeType="circle"
			        :particleSize="4"
			        linesColor="#6495ED"
			        :linesWidth="1"
			        :lineLinked="true"
			        :lineOpacity="0.6"
			        :linesDistance="150"
			        :moveSpeed="3"
			        :hoverEffect="true"
			        hoverMode="grab"
			        :clickEffect="true"
			        clickMode="push"
					>
				</vue-particles>
			</description>
		</div>
	</wapper>
</template>

<script>
import Vue from 'vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
export default {
  data(){
    return {
      list:{}
    }
  },
  created(){
  },
  methods:{
  }
}
</script>

<style lang="scss">
#particles-js {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 99%;
}
</style>