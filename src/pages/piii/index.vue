/*
* @Introduce:          轮播图
* @Author:             HongqingCao
* @Date:               2018-08-10 17:37:22
* @Last Modified by:   HongqingCao
* @Last Modified time: 2018-08-10 17:37:22
*/
<template>
	<wapper>
		<description 
			title="P3.轮播图" 
			introduce="1、支持浏览器任意放缩，兼容移动端，2、支持自动切换，鼠标经过停止切换，分页/任意页点击切换，左右切换，3、支持文字介绍"
			principle="未编辑"
			>
		   <div class="slider-wapper">
		   	<slider :slides="slides" :inv="invTime" v-if="slides.length > 0"></slider>
		   </div>
		</description>
	   </wapper>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      invTime: 2000,
      slides:{}
    }
  },
  created(){
    this.sliderlist();
  },
  methods:{
    sliderlist(){
     //请求'sliderlist/data'接口
      axios.get('/sliderlist/data')
      .then(({data})=>{
        console.log(data);
        if(data.status === 0){
          this.slides = data.list.datalist;
        }else{
          alert("轮播图列表数据请求失败!")
        }
        
      });
    }
  }
}
</script>
<style lang="scss">
.slider-wapper{
	margin: 0 auto;
	width: 400px;
	height: 250px;
}
</style>