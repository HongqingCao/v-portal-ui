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
				title="P5.爱心点赞"
				introduce="鼠标点击点击爱心，会有亲密度等级提示"
				principle="伪类构建对应的鼠标经过事件（修改透明度），点击时候计算点击次数，通过1\2\3数字计算等级，对其值进行修改，（题外话，头像是github.api提供的接口，可以进行数据的拿取）">
		        <div class="container">
	                <div v-for="user in list" class="user" v-cloak>
	                    <div class="img">
	                    	<img :src="user.avatar_url" alt="" />
	                    </div>
	                    <div class="info">
	                    	<div class="title">{{ user.login }}</div>
	                    	<div class="box">
	                    		 <heart :user_id="user.id" :owner_id="user.login" :existing="user.heart">
	                            </heart>
	                        </div>
	                    </div>
	                </div>
			    </div>
			</description>
		</div>
	</wapper>
</template>

<script>
import axios from 'axios';
import heart from './heart';
export default {
 components: {
  	heart
  },
  data(){
    return {
      list:{}
    }
  },
  created(){
    this.githublist();
  },
  methods:{
    githublist(){
     //请求'githublist/data'接口
      axios.get('/githublist/data')
      .then(({data})=>{
        console.log(data);
        if(data.status === 0){
          this.list = data.userList;
        }else{
          this.list = {};
        }
      });
    }
  }
}
</script>

<style lang="scss">
 @import './index'
</style>