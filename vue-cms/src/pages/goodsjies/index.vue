<template>
   <div class="mui-card">
				<div class="mui-card-header">{{goodsjies.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="content" v-html="goodsjies.content"></div>
					</div>
				</div>
				
			</div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            id:this.$route.params.id,
            goodsjies:[]
        }
    },
    created(){
        this.getgoodsjies()
    },
    methods:{
        getgoodsjies(){
            this.$http.get('api/goods/getdesc/'+this.id).then(res=>{
                // console.log(res)
                if(res.body.status===0){
                    this.goodsjies=res.body.message[0]
                }else{
                   Toast('请求失败')
                }
            })
        }
    }
}
</script>
<style lang="less">
.gomeImgLoad{
    width: 100%;
}
</style>
