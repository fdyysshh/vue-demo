import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex)
//每次进入网页,先从本地存储中,把购物车数据读出来放入store中
var car=JSON.parse(localStorage.getItem('car')||'[]')

var store= new Vuex.Store({
    state:{//只能存放数据
        car:car
    },
    mutations:{ //调用方法,操作state中的数据
        addToCar(state,goodsInfo){
            var flag=false
            state.car.some(item=>{
                if(item.id==goodsInfo.id){
                    item.count += parseInt(goodsInfo.count)
                       flag=true
                    return true
                }
            })

            if(!flag){
                state.car.push(goodsInfo)
            }

            //当更新car之后,把car数组,存储到本地的localStorage中
            localStorage.setItem('car',JSON.stringify(state.car))
        }
    },
    getters:{//只负责对外提供数据
        getAllCount(state){
            var c=0
            state.car.forEach(item=>{
                c += item.count
            })
            return c
        },

        getShopCount(state){
          var o={}
          state.car.forEach(item=>{
              o[item.id]=item.count
          })

          return o
        }
          
    }
})

export default store