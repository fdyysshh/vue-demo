<template>
    <div class="goods">
        <ul class="goods-ul">
            <li class="goods-li" v-for="(item,index) in goodsList" :key="index" @click="tiao(item.id)">
                <img src="https://img.alicdn.com/imgextra/i4/1114511827/O1CN011PMo5U06OifEbdl_!!0-item_pic.jpg_430x430q90.jpg">
                <h1>{{item.title}}</h1>
                <div class="goods-price">
                    <p class="goods-y"><span class="money">￥{{item.market_price}}</span><span class="mm">￥{{item.sell_price}}</span></p>
                    <div class="goods-m"><div>热卖中</div><div>剩余{{item.stock_quantity}}</div></div>
                </div>
            </li>
            
        </ul>
         <mt-button type="danger" size="large" @click="goodsAdd">加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            pageindex:1,
            goodsList:[]

        }
    },
    created(){
        this.getgoodsList()
    },
    methods:{
        getgoodsList(){
            this.$http.get('api/getgoods?'+this.pageindex).then(res=>{
                // console.log(res)
                if(res.body.status===0){
                    // this.goodsList=res.body.message
                    //加载更多需要把旧数据与新数据拼接
                    this.goodsList=this.goodsList.concat(res.body.message)
                }else{
                   Toast('请求失败')
                }
            })
        },
        goodsAdd(){
            //    alert('hh')
            this.pageindex++
           
            this.getgoodsList()
        },
        tiao(id){
            this.$router.push({path:'/home/goodsInfo/'+id})
        }
    }
}
</script>
<style lang="less">
   .goods{
        padding: 5px;
       .goods-ul{
           display: flex;
          
        //    换行
           flex-wrap:wrap;
        //    justify-content: space-between;
           .goods-li{
              width: 49%;
              box-shadow: 0 0 3px #666;
              margin: 5px 0;
            //   position: relative;
            //   overflow: hidden;
              display: flex;
            //   设置从上往下排列
              flex-direction: column;
              justify-content: space-between;
            //    height: 300px;
              &:nth-of-type(odd){
               margin-right: 5px;
               
           } 
           border: 1px solid #ccc;
            //    background-color: pink;
               img{
                   width: 100%;
               }
               h1{
                   font-size: 14px;
                   font-weight: bold;
               }
               .goods-price{
                   background-color:#eee;
                   color: #666;
                //    position: absolute;
                //    bottom: 0;
                //    max-height: 40px;
                   .goods-y{
                        .mm{
                             font-size: 12px;
                             margin-left: 10px;
                             text-decoration: line-through;
                        }
                   }
                 .goods-m{
                       font-size: 12px;
                       display: flex;
                         justify-content: space-between;
                     line-height: 30px;
                   }
                  
                       .money{
                       color: red;
                       font-size: 16px;
                   }
                 
                   
               }
           }
       }
   }
</style>


