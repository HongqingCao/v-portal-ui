<template>
	<div>
		<div class="title-box">
				<h2>{{title}}</h2>
				<p>功能描述：{{introduce}}</p>
			</div>
		 <div class="code-box">
		    <div class="code-title">
		      <span>效果展示</span>
		    </div>
		    <div class="code-content">
		      <slot></slot>
		    </div>
         </div>
         <div class="code-box">
		    <div class="code-title">
		      <span>实现原理</span>
		    </div>
		    <div class="code-content">
		     <p>{{principle}}</p>
		    </div>
         </div>
	</div>
</template>

<script>
export default {
  name: 'description',
  props: {
    title: String,
    introduce:String,
    principle: String
  }
}
</script>

<style lang="scss" scoped>
.code-box {
  margin-bottom: 20px;
  border: 1px solid #e4e4e4;
  border-radius: 3px;
  transition: .2s;
  &:hover {
    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
  }
  .code-content {
    padding: 24px;
  }
  .code-title {
    position: relative;
    margin: 10px 0 10px;
    font-weight: 500;
    > span {
      display: inline-block;
      position: relative;
      padding: 0 18px;
      margin-left: 30px;
      background-color: #fff;
      font-size: 14px;
    }
    &::before {
      box-sizing: border-box;
      content: "";
      display: block;
      position: absolute;
      top: 10px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #e4e4e4;
    }
  }
}
</style>
