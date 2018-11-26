<template>
     <mt-swipe :auto="4000">
  <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
      <a :href="item.url">
          <img :src="item.img" alt="" :class="{full:isfull}">
      </a>
  </mt-swipe-item>
 
</mt-swipe>
</template>
<script>
export default {
    props:['bannerList','isfull']
}
</script>

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
                    // width: 100%;
                    text-align: center;
                    height: 100%;
                    display: block;
                    
                }
                .full{
                  width: 100%;
                  background-color:pink;
                }
            }
       
    }
}
</style>
