<template>
<div class="shop-box">
     <div class="mui-card shang" v-for="item in shopCar" :key="item.id"> 
	
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
						<mt-switch v-model="value"></mt-switch>
                        <img :src="item.thumb_path" alt="">
                        <div class="shop-car">
                            <h1>{{item.title}}</h1>
                            <span>￥{{item.sell_price}}</span>
                            <div class="shop">
                            购买数量: <div class="btn-box " >
                                      <input type="button" value="-" class="btn" @click="num<=0? num=0:num--">
                                      <input type="text" class="text" v-model="$store.getters.getShopCount[item.id]">
                                      <input type="button" value="+" class="btn" @click="num++">
                                      </div>
                        </div>
                        <a href="">删除</a>
                        </div>
				</div>
			</div>
		
     </div>
     
    <div class="mui-card ping"> 
	
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>总计不含运费</p>
                    <div class="gouxuan">
                              <p >已勾选商品<span>0</span>件,总价:<span>￥0</span></p>
                    <mt-button type="danger">去结算</mt-button>
                    </div>
                   
				</div>
			</div>
		
     </div>
</div>
   

</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            num:0,
            value:'',
            shopCar:[]
        }
    },
    created(){
          this.getShopCar()
    },
    methods:{
           

        getShopCar(){
            var idArr=[]
            this.$store.state.car.forEach(item => {
                idArr.push(item.id)
            });
            if(idArr.length<=0){
                return
            }
            this.$http.get('api/goods/getshopcarlist/'+idArr.join(",")).then(res=>{
                // console.log(res)
                if(res.body.status===0){
                    this.shopCar=res.body.message
                }else{
                   Toast('请求失败')
                }
            })

        //    this.num=this.$store.getters.getShopCount[item.id]
        }
    }
};
</script>
<style lang="less">
.shop-box {
  .shang {
     
    .mui-card-content-inner {
      display: flex;
      img {
        width: 36px;
        height: 50px;
      }
     
      .shop-car {
           h1 {
        font-size: 16px;
        font-weight: bold;
      }
      span{
          font-size: 12px;
      }
      a{
          font-size: 12px;
      }
      
           .shop {
               font-size: 12px;
               display: inline-block;
        .btn-box {
          border: 1px solid #ccc;
          width: 108px;
          height: 26px;

          display: inline-block;
          background-color: #eee;
          border-radius: 3px;
          input {
            display: inline-block;
            height: 24px;
            border-radius: 0;
            margin: 0;
            border: none;
            text-align: center;
            line-height: 14px;
          }
          .text {
            width: 35px;
            border-left: 1px solid #ccc;
            border-right: 1px solid #ccc;
            background-color: #fff;
            padding: 0;
          }
          .btn {
            background-color: #eee;
          }
        }
      }
     
      }
     
    }
  }
  .ping{
      p{
          font-size: 12px;
      }
      .gouxuan{
          display: flex;
          justify-content: space-between;
       
         p{
             span{
                 font-size: 16px;
                 color: red;
             }
         }
          
      }
  }
}
</style>