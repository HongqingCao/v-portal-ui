<template>
  <div id="app">
  	<github :paths="'https://github.com/HongqingCao'"></github>
    <div class="content-wrapper">
       <VpMenu :uniqueOpen="true" :router="true" activeName="index">
          <VpSubmenu name="components">
          <template slot="title">
                                      组件列表
          </template>
          <VpMenuItem :name="'index'">首页</VpMenuItem>
          <VpMenuItem :name="'pi'">P1.新闻选项卡</VpMenuItem>
          <VpMenuItem :name="'pii'">P2.平滑放大效果</VpMenuItem>
          <VpMenuItem :name="'piii'">P3.轮播图</VpMenuItem>
          <VpMenuItem :name="'piv'">P4.即时检索</VpMenuItem>
          <VpMenuItem :name="'pv'">P5.点赞功能</VpMenuItem>
        </VpSubmenu>
      </VpMenu>
      <router-view class="router-view"/>
    </div>
    <backtop :height="100" :bottom="100" :right="40" :duration="1000">
    </backtop>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
