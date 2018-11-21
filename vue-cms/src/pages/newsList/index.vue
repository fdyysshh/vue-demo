<template>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newsInfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class="mui-ellipsis">
                                <span>发表时间:{{item.add_time | dataFormat}}</span>
                                <span class="mui-pull-right">点击 {{item.click}}次</span>
                                </p>
						</div>
					</router-link>
				</li>
				

			</ul>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
             newsList:[]
        }
    },
    created(){
     this.getNewsList()
    },
    methods:{
         getNewsList(){
             this.$http.get('api/getnewslist').then(res=>{
                //  console.log(res)
                if(res.body.status===0){
                     this.newsList=res.body.message
                }else{
                    Toast('数据请求失败')
                }
             })
         }
    }
}
</script>
<style lang='less'>
.mui-table-view{
    .mui-table-view-cell{
        a{
            img{

            }
            .mui-media-body{
                h1{
                    font-size: 16px;
                    font-weight: bold;

                }
                p{
                    font-size: 12px;
                    color:#26a2ff;
                    &:nth-child(1){
                    
                    }
                    &:nth-child(2){
                       
                    }
                }
            }
        }
    }
}
</style>


