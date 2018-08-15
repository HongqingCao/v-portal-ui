<template>
	<div class="com-wapper">
			<div class="wapper">
					<div class="content-header">
					    <div class="list" v-for="(item,index) in colorList" :style="{ background: item }"></div>
					</div>
					<div class="content">
						 <slot></slot>
					</div>
			</div>
	</div>
</template>

<script>
export default {
  name: 'wapper',
  data(){
  	return{
  		colorList: ['#ea4035','#fbac46','#2eb472','#f7ec31','#1b72b4','#90268b']
  	}
  }
}
</script>

<style lang="scss">
.com-wapper{
		.wapper{
				padding: 15px;
				margin: 0 auto;
				.content-header {
	                height: 35px;
	                overflow: hidden;
	                .list {
	                    float: left;
	                    width: calc(1/6 * 100% + 25px);
	                    height: 35px;
	                    margin-right: -30px;
	                    border-radius: 14px 14px 0 0;
	                    box-shadow: -4px 12px 25px 2px rgba(0,0,0,0.4);
	                }  
	            }
	    .content{
	    	padding: 15px;
	    	min-height: 500px;
	        box-shadow: rgba(0,0,0,.1)0 0 5px;
	    }
		}
	}
</style>