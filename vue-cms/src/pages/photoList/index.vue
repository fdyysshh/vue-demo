<template>
    <div class="photoList-box">
    <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id==0? 'mui-active':'']" href="#item1mobile" data-wid="tab-top-subpage-1.html" v-for="item in photoList" :key="item.id" @click="getimgList(item.id)">
							{{item.title}}
						</a>
						
					</div>
				</div>

	</div>

     <!-- 图片区 -->
	 <ul>
       <router-link v-for="item in imgList" :key="item.id" :to="'/home/photoInfo/'+item.id" tag="li">
          <img v-lazy="'http://img4.imgtn.bdimg.com/it/u=4277254641,3505768445&fm=26&gp=0.jpg'">
		  <p>{{item.zhaiyao}}</p>
       </router-link>
      </ul>
    </div>
</template>
<script>
import mui from "../../lib/mui/dist/js/mui.min.js";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      photoList: [],
      imgList: []
    };
  },
  created() {
    this.getphotoList();
    this.getimgList(0);
  },
  methods: {
    getphotoList() {
      this.$http.get("api/getimgcategory").then(res => {
        //    console.log(res)
        if (res.body.status === 0) {
          res.body.message.unshift({ title: "全部", id: 0 });
          this.photoList = res.body.message;
        } else {
          Toast("请求失败");
        }
      });
    },
    // 请求图片
    getimgList(id) {
      this.$http.get("api/getimages/" + id).then(res => {
        // console.log(res);
        if (res.body.status === 0) {
          this.imgList = res.body.message;
        } else {
          Toast("请求失败");
        }
      });
    }
  },
  mounted() {
    // console.log('111')
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>
<style lang="less">
.photoList-box {
  padding: 0 10px;
  .mui-slider {
    .mui-scroll {
      .mui-control-item {
        font-size: 13px;
        text-decoration: none;
      }
    }
  }

  ul {
    li {
	  position: relative;
	  background-color:#ccc;
      img[lazy="loading"] {
        width: 100%;
        height: 300px;
        margin: auto;
		background-color: red;
		background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542971877673&di=1053f3ed4d50112ad6c99292d4d71742&imgtype=0&src=http%3A%2F%2Fimg.chuansong.me%2Fmmbiz%2F4qCzNKlkcHMMtu1hSILEdffEYODic3oicFSMpT4nJhNszlNpgVQh3Ah3ExKD8v2KlLHkYSziaVatgibTCXSW6LJiczg%2F0%3Fwx_fmt%3Dgif);
	    }
      img {
        width: 100%;
      }
      p {
        position: absolute;
        bottom: 0;
        color: #fff;
        max-height: 60px;
        font-size: 12px;
      }
    }
  }
}
</style>


