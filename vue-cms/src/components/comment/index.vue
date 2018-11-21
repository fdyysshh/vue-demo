<template>
    
    <div class="comment-contian">
        <h1>发表评论</h1>
        <hr>
        <textarea placeholder="请输入要评价的内容(120字以内)" maxlength="120">

        </textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="comment-content">
            <ul>
                <li v-for="(item,index) in commentList" :key="index">
                   <div class="header">第{{index+1}}楼 用户: {{item.user_name}} 发表时间:{{item.add_time | dataFormat}}</div>
                   <p>{{item.content}}</p>
                </li>
            </ul>
        </div>
        <mt-button type="danger" size="large" @click="add" plain>加载更多</mt-button>
    </div>
</template>
<script>

import {Toast} from 'mint-ui'
export default {
    
    data(){
        return {
           pageIndex:1,
           commentList:[]
        }
    },
    props:['id'],
    created(){
        this.getComment()
    },
    methods:{

        getComment(){
        //    console.log(this.id)
        this.$http.get('api/getcomments/'+this.id+'?pageindex='+ this.pageIndex).then(res=>{
            // console.log(res)
            if(res.body.status===0){
                //concat()拼接两个数组
              this.commentList = this.commentList.concat(res.body.message)
            }else{
                 Toast('请求失败')
            }
        })
        },

        //加载更多
        add(){
            // alert('dd')
            this.pageIndex++
            this.getComment()
        }
        
    }
}
</script>
<style lang="less">
 .comment-contian{
     h1{
        font-size: 20px;
        font-weight: bold;
     }
     textarea{
         margin: 0;
         font-size: 16px;
     }
     .comment-content{
         ul{
             li{
                 .header{
                     background: rgb(228, 225, 225);
                     height: 30px;
                     font-size: 14px;
                     line-height: 30px;
                 }
                 p{
                     color: #000;
                     padding-left: 20px;
                 }
             }
         }
     }
 }
</style>


