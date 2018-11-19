<template>
  <div class="app-container" id="app">
    <!-- 顶部区域 -->
    <mt-header fixed title="天天购购"></mt-header>
    <h1>sqgfg</h1>
    <!-- 路由区域 -->

    <!-- 底部区域 -->
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon  mui-icon-person"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
		</nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
.app-container{
   padding:40px 0;
}
</style>
