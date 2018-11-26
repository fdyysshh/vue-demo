<template>
    <div class="mui-content">
        <!-- 小球 -->
        <transition 
        @before-enter='beforeEnter'
        @enter='enter'
        @after-enter='afterEnter' name="ball">
                 <div class="ball" v-show="isfulg" ref="ball"></div>
        </transition>
       
			<!-- 轮播图 -->
			<div class="mui-card">
				
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :bannerList=" goodsInfo" :isfull="false"></swiper>
					</div>
				</div>
				
			</div>
            <!-- 商品详情 -->
            <div class="mui-card">
				<div class="mui-card-header">{{goods.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="price-s">
                            市场价:<span>￥{{goods.market_price}}</span>
                            销售价:<span>￥{{goods.sell_price}}</span>
                        </div>
                        <div class="shop">
                            购买数量: <div class="btn-box " >
                                      <input type="button" value="-" class="btn" @click="num<=0? num=0:num--">
                                      <input type="text" class="text" v-model="num">
                                      <input type="button" value="+" class="btn" @click="num++">
                                      </div>
                        </div>
                        <mt-button type="primary">立即购买</mt-button>
                        <mt-button type="danger" @click="addShow">加入购物车</mt-button>
					</div>
				</div>
				
			</div>
              <!-- 商品情况 -->
            <div class="mui-card">
				<div class="mui-card-header">产品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="text">产品货号:{{goods.goods_no}}</p>
                        <p class="text">库存情况:剩余{{goods.stock_quantity}}</p>
                        <p class="text">上架时间:{{goods.add_time | dataFormat}}</p>
					</div>
				</div>
				<mt-button size="large" type="primary" plain @click="jieshao">图文介绍</mt-button>
                <mt-button size="large" type="danger" plain @click="pinglun">商品评论</mt-button>
			</div>
			
			
		
</div>
</template>

<script>
import {Toast} from "mint-ui"
import swiper from '../../components/swiper'


export default {
    data(){
        return {
            id:this.$route.params.id,
            goodsInfo:[],
            goods:[],
            num:'0',
            isfulg:false
        }
    },
    created(){
      this.getgoodsInfo(),
      this.getgoods()
    },
    methods:{
        getgoodsInfo(){
             this.$http.get('api/getthumimages/'+this.id).then(res=>{
                //  console.log(res)
                if(res.body.status===0){
                    res.body.message.forEach(item => {
                        item.img=item.src
                        
                    });
                    this.goodsInfo=res.body.message
                }else{
                    Toast('请求失败')
                }
             })
        },
        getgoods(){
            this.$http.get('api/goods/getinfo/'+this.id).then(res=>{
                // console.log(res)
                if(res.body.status===0){
                    this.goods=res.body.message[0]
                }else{
                    Toast('请求失败')
                }
            })
        },

        jieshao(){
            this.$router.push({path:'/home/goodsjies/'+this.id})
        },
        pinglun(){
            this.$router.push({path:'/home/goodspingl/'+this.id})
        },

        addShow(){
            this.isfulg=!this.isfulg
            var goodsInfo={
                id:this.id,
                count:this.num,
                price:this.goods.sell_price,
                selected:true
            }
           this.$store.commit('addToCar',goodsInfo)
        },
        beforeEnter(el){
            el.style.transform="translate(0,0)"
        },
        enter(el,done){
           
            el.offsetWidth
             //获取小球在页面中的位置
            const ballPosition=this.$refs.ball.getBoundingClientRect()
            //  console.log(ballPosition)
            // 获取货物车小球的位置
            const badgePosition= document.getElementById('badge').getBoundingClientRect()
            // console.log(badgePosition)
            const xDist=badgePosition.left-ballPosition.left
            const yDist=badgePosition.top-ballPosition.top
            // console.log(xDist)
            // console.log(yDist)
            el.style.transform=`translate(${xDist}px,${yDist}px)`
            el.style.transition="all 1s cubic-bezier(.35,-0.29,1,.6)"
            
            done()
        },
        afterEnter(el){
            this.isfulg=!this.isfulg
        }
    },
   watch:{
      num:function(newVal,odlVal){
          if(this.num>=this.goods.stock_quantity){
              this.num=this.goods.stock_quantity
          }
      }
   },
    components:{
        swiper
    }

};
</script>
<style lang="less">
.mui-content{
    .mui-card{
        .mui-card-content{
            .mui-card-content-inner{
                   img{
                       width: 100%;
                   }
                   .price-s{
                       font-size: 12px;
                       line-height: 30px;
                       span:nth-of-type(1){
                           text-decoration: line-through;
                           margin-right: 10px;
                       }
                       span:nth-of-type(2){
                         font-size: 14px;
                         color: red;
                       }
                   }
                   .shop{
                       
                       .btn-box{
                           border: 1px solid #ccc;
                           width: 108px;
                           height: 26px;
                           
                           display: inline-block;
                           background-color: #eee;
                           border-radius: 3px;
                             input{
                          display: inline-block;
                          height: 24px;
                          border-radius: 0;
                          margin: 0;
                          border: none;
                          text-align: center;
                          line-height: 14px;
                      }
                      .text{
                          width:35px;
                          border-left:1px solid #ccc;
                          border-right:1px solid #ccc;
                          background-color: #fff;
                          padding: 0;
                        
                      }
                      .btn{
                          background-color: #eee;
                      }
                       }
                     
                   }
                   .mint-button{
                       height: 30px;
                       margin-top: 10px;
                   }
                   .mint-button--normal{
                       padding: 8px;
                       font-size: 12px;
                       
                   }
               .text{
                   font-size: 12px;
                   line-height: 20px;
               }
            }
        }
    }
    .mint-button--danger.is-plain{
        margin-top: 10px;
    }
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        left: 129px;
        top:382px;
        z-index: 99;
        
    }
}
</style>

