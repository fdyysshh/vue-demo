<template>
  <div class="newsInfo-content">
      <div class="newsInfo-box">
          <div class="newsInfo-head">
              <h1>{{newInfo.title}}</h1>
             <p class="mui-ellipsis">
                 <span>发表时间:{{newInfo.add_time | dataFormat}}</span>
                <span class="mui-pull-right">点击 {{newInfo.click}}次</span>
                </p>
          </div>
          <hr>
          <div class="article" v-html="newInfo.content"></div>
      </div>

      <comment :id='this.$route.params.id'></comment>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
import comment from '../../components/comment'
export default {
    data(){
        return {
            id:this.$route.params.id,
            newInfo:[]
        }
    },
    created(){
       this.getnewInfo()
    },
    methods:{
        getnewInfo(){
            // console.log(this.$route.params.id)
            this.$http.get('api/getnew/'+this.id).then(res=>{
                // console.log(res)
                if(res.body.status===0){
                    this.newInfo=res.body.message[0]
                }else{
                      Toast('请求失败')
                }
            })

        }
    },
    components:{
        comment
    }
}
</script>
<style lang="less">
.newsInfo-content{
    padding: 0 5px;
    .newsInfo-box{
       .newsInfo-head{
           h1{
               font-size: 16px;
               font-weight: bold;
               color: red;
               text-align: center;
               margin: 10px 0;
           }
           p{
               font-size: 14px;
               color: #26a2ff;
           }
       } 
       .article{
           img{
               width: 100%;
           }
       }
    }
}
</style>

