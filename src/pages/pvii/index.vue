/*
* @Introduce:          滚动新闻
* @Author:             HongqingCao
* @Date:               2018-08-11 17:37:22
* @Last Modified by:   HongqingCao
* @Last Modified time: 2018-08-11 17:37:22
*/

<template>
	<wapper>
		<div>
			<description
				title="P5.滚动新闻"
				introduce="新闻列表自动滚动"
				principle="暂未编辑">
		        <div class="messege-container">
		        	<div class="messege-box">
						<div class="messege-content">
							<ul :style="{'margin-top': marginTop +'%'}">
								<li v-for="(item,index) in list">
									<a>
										{{index}}-{{item.title}}
									</a>
								</li>
							</ul>
						</div>
					</div>
		        </div>
			</description>
		</div>
	</wapper>
</template>

<script>
import axios from 'axios';
export default {
  data(){
  	return{
  		list:[],
  		activeIndex: 0
  	}
  },
  created(){
    this.messegelist();
  },
  methods:{
	 messegelist(){
     //请求'messegelist/data'接口
      axios.get('/messegelist/data')
      .then(({data})=>{
        if(data.status === 0){
          this.list = data.list.datalist
          console.log(this.list)
        }else{
          alert("新闻列表数据请求失败!")
        }
        
      });
    }
 },
 computed: {
    marginTop() {
      return  - this.activeIndex * 6;
    }
 },
  mounted() {
    setInterval(_ => { 	
    	if(this.list.length - 7 >0){
    		let vh = this.list.length -7
    		if(this.activeIndex < vh) {
		        this.activeIndex += 1
		      } else {
		        this.activeIndex = 0
		      }
    	}else{
    		this.activeIndex = 0
    	}
     
    }, 2000);
  }
}
</script>

<style lang="scss">
 @import './index'
</style>