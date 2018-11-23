<template>
<div id="app">

    <!-- 轮播图区域 -->
  <mt-swipe :auto="4000">
  <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
      <a :href="item.url">
          <img :src="item.img" alt="">
      </a>
  </mt-swipe-item>
 
</mt-swipe>

<!-- 九宫格区域 -->
<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
		                    <img src="../../assets/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoList">
		                     <img src="../../assets/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../assets/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../assets/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../assets/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		            
		        </ul> 
		</div>

</div>
 
</template>

<script>
export default {
    data(){
        return {
            bannerList:[]
        }
    },
    created(){
        this.getbanner()
    },
    methods:{
        getbanner(){
            // console.log(this.$http)
            this.$http.get("http://www.lovegf.cn:8899/api/getlunbo").then(res=>{
                // console.log(res.body)
                if(res.body.status===0){
                    this.bannerList=res.body.message
                }else{

                }
            })
        },
        
    }
};
</script >
<style lang="less">
.mint-swipe{
    height: 200px;
    width: 100%;
    .mint-swipe-item{
        width: 100%;
        height: 100%;
       
          
           
            a{
                width: 100%;
                height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                    display: block;
                }
            }
       
    }
}

.mui-content{
  .mui-table-view{
      border: none;
      background-color: #fff;
    .mui-table-view-cell{
        background-color: #fff;
        border: none;
        img{
            width: 60px;
            height: 60px;
            
        }
    }
  }
}

</style>



