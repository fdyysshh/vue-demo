<template>

   <div class="photoInfo" >
   <h1 class="biaoti">{{photoInfo.title}}</h1>
   <p class="mui-ellipsis">
       <span>发表时间:{{photoInfo.add_time | dataFormat}}</span>
        <span class="mui-pull-right">点击 {{photoInfo.click}}次</span>
      </p>
      <hr>
      
      <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="index">

      <div class="pinglun" v-html="photoInfo.content"></div>

      <comment :id="id"></comment>
</div>

<!-- 评论子组件 -->



   
</template>
<script>
// 导入评论子组件
import comment from '../../components/comment'
import { Toast } from "mint-ui";
export default {
    data(){
        return {
             id:this.$route.params.id,
             photoInfo:{},
              list: [{
          src: 'https://placekitten.com/600/400',
          w: 600,
          h: 400
        }, {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900
        }]
        }
    },
    created(){
       this.getphotoInfo()
    },
    methods:{
        getphotoInfo(){
            this.$http.get('api/getimageInfo/'+this.id).then(res=>{
                console.log(res)
                if(res.body.status===0){
                       this.photoInfo=res.body.message[0]
                }else{
                    Toast('请求失败')
                }
            })
        }
    },
    components:{
        comment
    }
};
</script>
<style lang="less">
.photoInfo{
    padding: 0 5px;
    .biaoti{
        font-size: 14px;
        text-align: center;
         font-weight: bold;
         color: #26a2ff;
         margin: 20px 0;
    }
    p{
        font-size: 12px;
    }
    .img-box{
        display: flex;
       .img-list{
            flex: 1;
            margin-right: 5px;
            height: 100px;
            background-color:pink;
           margin-bottom: 10px;
           img{
               width: 100%;
           }

        }
    }
    .pinglun{
        font-size: 12px;
        line-height: 30px;
    }
}
</style>
