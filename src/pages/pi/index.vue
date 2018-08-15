/*
* @Introduce:          新闻选项卡
* @Author:             HongqingCao
* @Date:               2018-08-10 17:37:22
* @Last Modified by:   HongqingCao
* @Last Modified time: 2018-08-10 17:37:22
*/
<template>
	<wapper>
		<description 
			 title="P1.新闻选项卡滑动"
			 introduce="鼠标经过新闻列表选项卡，内容滑动"
			 principle="让新闻内容区news-listbox的宽度300%（因为有三个选项），超出部分隐藏，这边标题选项只需要鼠标经过的时候带上index，计算margin-left多少，配合css3动画，寥寥几行ES6就实现了以上效果！"
			 >
			 <div class="news-wrapper" v-cloak>
		            <ul class="news-list">
		                <li v-for="(item,index) in list" :class=" {'active':index===activeTab}" @mouseenter="tebHover(index)"><a href="javascript://">{{item.newstitle}}</a></li>
		            </ul>
		            <div class="news-box">
		                <div class="news-listbox" :style="{'margin-left': marginleft+'%'}">
		                    <ul v-for="(item,index) in list">
		                        <li class="clearFix" v-for="(news, index) in item.datalist" v-if="index < 6">
		                            <a>
		                                <div class="news-date">
		                                    <div class="date-day">{{news.date.split("-")[2]}}</div>
		                                    <div class="date-year">{{news.date.split("-")[0]}}-{{news.date.split("-")[1]}}</div>
		                                </div>
		                                <div class="main-news">
		                                    <div class="newstxt-title">{{news.title}}</div>
		                                    <div class="news-text">
		                                        {{news.content}}
		                                    </div>
		                                </div>
		                                <div class="time">{{news.date}}</div>
		                            </a>
		                        </li>
		                        <li class="more"  v-if="item.datalist.length >= 6"><a>更多>></a></li>
		                    </ul>
		                </div>
		            </div>
		      </div>
		</description>
	   </wapper>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      list:{
      },
      activeTab:0,
      marginleft:0,
      day:"",
      year:""
    }
  },
  created(){
    this.newslist();
  },
  methods:{
    newslist(){
     //请求'newslist/data'接口
      axios.get('/newslist/data')
      .then(({data})=>{
        console.log(data);
        if(data.status === 0){
          this.list = data.newlist;
        }else{
          alert("新闻列表数据请求失败!")
        }
        
      });
    },
    tebHover(index){
    	this.activeTab = index;
    	//计算margin-left的百分比
    	this.marginleft = -1*(this.activeTab)*100
    }
  }
}
</script>
<style lang="scss">
 @import './index'
</style>