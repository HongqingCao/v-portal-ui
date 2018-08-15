/*
* @Introduce:          平滑放大
* @Author:             HongqingCao
* @Date:               2018-08-1 17:37:22
* @Last Modified by:   HongqingCao
* @Last Modified time: 2018-08-1 17:37:22
*/
<template>
	<wapper>
		<div id="p2">
			<description 
				title="P2.平滑放大效果" 
				introduce="鼠标点击图片平滑放大功能"
				principle="通过transform:属性scale实现图片缩放，其中图片是两张图小大图切换，目前只是实现了功能，ES6部分有待优化"
				>
				<div class="card-box">
			        <h1 class="card-title">Smooth Image Zooming</h1>
			        <p class="card-text">This demo shows how to implement zoomable images with Vue.js. If you click the below image, a dialog will be opened and the image will be zoomed smoothly.</p>
			        <div class="card-image">
			            <image-dialog thumb="http://pic2.ooopic.com/dreamstime/video/39/43/77/39437741.jpg" full="http://pic2.ooopic.com/dreamstime/video/39/43/77/39437741.jpg" :full-width="945" :full-height="600"></image-dialog>
			        </div>
			    </div>
			</description>
		</div>
	</wapper>
</template>

<script>
import ImageDialog from './imgDialog';
export default {
  components: {
  	ImageDialog
  },
  data(){
  	return{
  		
  	}
  }
}
</script>

<style lang="scss">
 @import './index'
</style>