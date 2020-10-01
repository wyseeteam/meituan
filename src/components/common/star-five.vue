<template>
  <div style="width: 100%;">
    <div style="position: relative;display: inline-block;">
      <div class="starback">
        <div v-for="a in 5" v-bind:key="a" class="star-five" id="starback"></div>
      </div>
      <div class="stars" v-bind:style="{width: len}">
        <div v-for="a in 5" v-bind:key="a" class="sub-star-five"></div>
      </div>
    </div>
    <div v-if="commentNum>0" class="likepj">{{commentNum}}个评价</div>
  </div>
  

  <!-- <div> -->
  <!-- <p class='cleanfloat starFive sF3'><span class='org_star'>R</span><span class='org_star'>R</span><span data-content='R'>R</span><span>R</span><span>R</span><b>2.4分</b></p> -->

  <!-- <div class="star-five">
        <div class="sub-star-five"></div>
  </div>-->
  <!-- </div> -->
</template>

<script>
// import './fonts/websymbols-regular-webfont.woff';

// 五星评论组件

export default {
  name: "",
  data() {
    return {
      len: "",
      starwidth: 0
    };
  },
  props: {
    commentNum: {
      type: Number,
      default: 0
    },
    score: {
      type: Number,
      default: 0
    }
  },
  components: {},
  computed: {},

  created(){
  },
  mounted() {
    var el = document.getElementById("starback"); ////获取每个星星的宽度
    var wi = el.offsetWidth;
    var score = this.score;
    ////传递的比率
    var len = ((score * 1) / 5.0) * 100;

    /////转换为实际比率

    // 星星背景实际总宽度
    var blen = wi * 5 + 10 * 4;

    ////非完整星星相对与一个完整星星所占长度比率和长度
    var nstar = parseFloat((len - parseInt(len / 20) * 20) / 20);
    var nlen = nstar * wi;

    ////总共有多少个完整星星
    var wstart = parseInt(score);

    /////需要加多少个  margin-right ： 10px
    var addlen = 10 * (len % 20 > 0 ? wstart : (wstart - 1));

    /////计算当前背景  实际比率的长度  如果没有空隙 每个星星占比为 20%
    var slen = wi * wstart + addlen + nlen;

    ////实际比率
    var sjlv = parseFloat(slen / (wi * 5 + 10 * 4)) * 100;


    this.len = sjlv + "%";
  },
  methods: {}
};
</script>
<style>
/* .cleanfloat::after{display: block; clear: both; content:""; visibility: hidden; height: 0;}
        *{margin:0; padding:0;} */

/* 字体路径按照你的路径去修改 */
/* @font-face {
            font-family: "AlluraRegular";
            src:  */
/* url('./fonts/websymbols-regular-webfont.eot'),
                 url('./fonts/websymbols-regular-webfont?#iefix') format('embedded-opentype'),  */
/* url-loader('./fonts/websymbols-regular-webfont.woff') format('woff'), */
/* url('./fonts/websymbols-regular-webfont.ttf') format('truetype'),
                 url('./fonts/websymbols-regular-webfont.svg#AlluraRegular') format('svg'); */
/* } */
/* .starFive span {display: block;float: left;font-size: 25px;
            text-align: center;color: #888;width: 27px;height: 33px;line-height: 33px;
            margin-right: 5px;position: relative;overflow: hidden;white-space: pre;
         }
        .starFive span:before {position: absolute;
            left: 0;top: 0;display: block;width: 50%;
            content: attr(data-content);overflow: hidden;color: #F63;
        }
        .sF1 span:before{width: 70%;}
        .sF2 span:before{width: 50%;}
        .sF3 span:before{width: 40%;}
        .starFive .org_star {color: #F63;}
        .starFive b {font-weight: normal; line-height: 40px;
            font-size: 25px;color: #888;margin-left: 10px;
        } */

.star-five,
.sub-star-five {
  margin: 10px 0;
  position: relative;
  width: 0px;
  height: 0px;
  border-right: 5px solid transparent;
  border-bottom: 3.5px solid grey;
  border-left: 5px solid transparent;
  -moz-transform: rotate(35deg);
  -webkit-transform: rotate(35deg);
  -ms-transform: rotate(35deg);
  -o-transform: rotate(35deg);

  /* padding: 0 5px; */
  margin-right: 10px;
}

.star-five {
  display: inline-block;
  /* width: 10px; */
}

.sub-star-five {
  border-bottom: 3.5px solid rgb(253, 152, 39);
  display: inline-block;
  /* width: 10px; */
}
/* .sub-star-five:nth-child(0)
{
  -webkit-transform: translateX(0) rotate(35deg);
}
.sub-star-five:nth-child(1)
{
  -webkit-transform: translateX(10px) rotate(35deg);
}
.sub-star-five:nth-child(2)
{
  -webkit-transform: translateX(20px) rotate(35deg);
}
.sub-star-five:nth-child(3)
{
  -webkit-transform: translateX(30px) rotate(35deg);
}*/
.star-five:last-child {
  margin-right: 0;
}
.sub-star-five:last-child {
  margin-right: 0;
}

.star-five:before,
.sub-star-five:before {
  border-bottom: 4px solid grey;
  border-left: 1.5px solid transparent;
  border-right: 1.5px solid transparent;
  position: absolute;
  height: 0;
  width: 0;
  top: -2.25px;
  left: -3.25px;
  content: "";
  -webkit-transform: rotate(-35deg);
  -moz-transform: rotate(-35deg);
  -ms-transform: rotate(-35deg);
  -o-transform: rotate(-35deg);
}

.sub-star-five:before {
  border-bottom: 4px solid rgb(253, 152, 39);
  /* left: 0;
  right: 0; */
}

.star-five:after {
  position: absolute;
  color: red;
  top: 0.15px;
  left: -5.25px;
  width: 0px;
  height: 0px;
  border-right: 5px solid transparent;
  border-bottom: 3.5px solid grey;
  border-left: 5px solid transparent;
  -webkit-transform: rotate(-70deg);
  -moz-transform: rotate(-70deg);
  -ms-transform: rotate(-70deg);
  -o-transform: rotate(-70deg);
  content: "";
}

.sub-star-five:after {
  position: absolute;
  color: red;
  top: 0.15px;
  left: -5.25px;
  width: 0px;
  height: 0px;
  border-right: 5px solid transparent;
  border-bottom: 3.5px solid rgb(253, 152, 39);
  border-left: 5px solid transparent;
  -webkit-transform: rotate(-70deg);
  -moz-transform: rotate(-70deg);
  -ms-transform: rotate(-70deg);
  -o-transform: rotate(-70deg);
  content: "";
  /* border-bottom: 4px solid rgb(253, 152, 39); */
  /* left: 0;
  right: 0; */
}

/* .starback::after
{
  clear: both;
  content: '';
  display: block;
} */

.stars {
  overflow: hidden;
  position: absolute;
  left: 0px;
  top: 0px;
  white-space: nowrap;
  /* display: inline; */
  /* word-break: break-all; */
  /* float: left; */
  margin: 0 auto;
  vertical-align: middle;
}

.starback {
  overflow: hidden;
  /* margin: 0 auto;
  position: absolute;
  left: 0px;
  top: 0px; */
  /* clear: both; */
  /* clear: both;
  display: inline-block; */
  /* position: absolute;
  left: 0;
  right: 0; */
  /* width: 300px;
  height: 30px; */
}

.likepj
{
  float: right;
}

</style>