<template>
  <div>
    <head-top></head-top>
    <search></search>
    <div class="container">
      <div class="filtercontainer">
        <div class="condition">
          <div class="citywrapper">
            <label class="c-box citybox">
              <span class="inputtitle">入住城市</span>
              <input type="text" value="合肥" />
            </label>
          </div>
          <div class="datewrapper">
            <div class="enterwrapper">
              <label class="c-box enterbox" @click="showCalendar">
                <span class="inputtitle">入住</span>
                <input type="text" value="2021-03-04" class="dateinput" />
                <span class="week">星期三</span>
                <i></i>
              </label>
              <calendar :showCalendar="showcalendar"></calendar>
            </div>
            <span class="line">-</span>
            <div class="leavewrapper">
              <label class="c-box leavebox">
                <span class="inputtitle">离店</span>
                <input type="text" value="2020-09-08" class="dateinput" />
                <span class="week">星期三</span>
              </label>
            </div>
          </div>
          <div class="keywordwrapper c-box">
            <input type="text" placeholder="(关键词选填) 酒店名/位置/品牌" />
          </div>
          <span class="searchbtn">搜索</span>
        </div>
        <div class="filter">
          <div class="searchrowwrap">
            <div class="searchrow">
              <div class="searchtitle">位置</div>
              <div class="searchlist">
                <div class="searchitem">
                  <a
                    href="javascript:;"
                    @click="showDiffCategory(0)"
                    v-bind:class="[cCategoryIndex==0?'active':'']"
                  >不限</a>
                </div>
                <div class="searchitem">
                  <a
                    href="javascript:;"
                    @click="showDiffCategory(1)"
                    v-bind:class="[cCategoryIndex==1?'active':'']"
                  >热门</a>
                </div>
                <div class="searchitem">
                  <a
                    href="javascript:;"
                    @click="showDiffCategory(2)"
                    v-bind:class="[cCategoryIndex==2?'active':'']"
                  >行政圈/商圈</a>
                </div>
                <div class="searchitem">
                  <a
                    href="javascript:;"
                    @click="showDiffCategory(3)"
                    v-bind:class="[cCategoryIndex==3?'active':'']"
                  >地铁站</a>
                </div>
                <div class="searchitem">
                  <a
                    href="javascript:;"
                    @click="showDiffCategory(4)"
                    v-bind:class="[cCategoryIndex==4?'active':'']"
                  >高校</a>
                </div>
                <div class="searchitem">
                  <a
                    href="javascript:;"
                    @click="showDiffCategory(5)"
                    v-bind:class="[cCategoryIndex==5?'active':'']"
                  >车站/机场</a>
                </div>
                <div class="searchitem">
                  <a
                    href="javascript:;"
                    @click="showDiffCategory(6)"
                    v-bind:class="[cCategoryIndex==6?'active':'']"
                  >旅游景点</a>
                </div>
                <div class="searchitem">
                  <a
                    href="javascript:;"
                    @click="showDiffCategory(7)"
                    v-bind:class="[cCategoryIndex==7?'active':'']"
                  >医院</a>
                </div>
              </div>
              <div class="searchdetailwrapper">
                <div class="searchdetail" v-show="cCategoryIndex==1">
                  <div class="filterrow">
                    <a href="javascript:;" v-for="(item, index) in hotInfo">{{item.name}}</a>
                  </div>
                </div>
                <div class="searchdetail" v-show="cCategoryIndex==2">
                  <div class="filterrow">
                    <a
                      href="javascript:;"
                      v-for="(item, index) in areasInfo"
                      @click="showSubareas(index)"
                      v-bind:class="[cAreaIndex==index?'active':'']"
                    >{{item.name}}</a>
                  </div>
                  <div
                    class="filterrow"
                    v-for="(item, index1) in areasInfo"
                    v-show="cAreaIndex==index1"
                  >
                    <a
                      href="javascript:;"
                      v-for="(item, index2) in areasInfo[index1]['subareasInfo']"
                    >{{item.name}}</a>
                  </div>
                </div>
                <div class="searchdetail" v-show="cCategoryIndex==3">
                  <div class="filterrow">
                    <a
                      href="javascript:;"
                      v-for="(item, index) in subwayInfo"
                      @click="showSubsubway(index)"
                      v-bind:class="[cSubwayIndex==index?'active':'']"
                    >{{item.name}}</a>
                  </div>
                  <div
                    class="filterrow"
                    v-for="(item, index1) in subwayInfo"
                    v-show="cSubwayIndex==index1"
                  >
                    <a
                      href="javascript:;"
                      v-for="(item, index2) in subwayInfo[index1]['stations']"
                    >{{item.name}}</a>
                  </div>
                </div>
                <div class="searchdetail" v-show="cCategoryIndex==4">
                  <div class="filterrow">
                    <a href="javascript:;" v-for="(item, index) in universitiesInfo">{{item.name}}</a>
                  </div>
                </div>
                <div class="searchdetail" v-show="cCategoryIndex==5">
                  <div class="filterrow">
                    <a href="javascript:;" v-for="(item, index) in transportInfo">{{item.name}}</a>
                  </div>
                </div>
                <div class="searchdetail" v-show="cCategoryIndex==6">
                  <div class="filterrow">
                    <a href="javascript:;" v-for="(item, index) in viewInfo">{{item.name}}</a>
                  </div>
                </div>
                <div class="searchdetail" v-show="cCategoryIndex==7">
                  <div class="filterrow">
                    <a href="javascript:;" v-for="(item, index) in hospitalInfo">{{item.name}}</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="searchrow searchrowbox">
              <div class="searchtitle">星级</div>
              <div class="searchlist">
                <div class="searchitem unlimited">
                  <a
                    href="javascript:;"
                    @click="showDiffCategory(0)"
                    v-bind:class="[cCategoryIndex==0?'active':'']"
                  >不限</a>
                </div>
                <div class="searchcontent">
                  <div class="searchitem">
                    <a href="javascript:;">
                      <label>
                        <input type="checkbox" />经济型
                      </label>
                    </a>
                  </div>
                  <div class="searchitem">
                    <a href="javascript:;">
                      <label>
                        <input type="checkbox" />舒适/三星
                      </label>
                    </a>
                  </div>
                  <div class="searchitem">
                    <a href="javascript:;">
                      <label>
                        <input type="checkbox" />高档/四星
                      </label>
                    </a>
                  </div>
                  <div class="searchitem">
                    <a href="javascript:;">
                      <label>
                        <input type="checkbox" />豪华/五星
                      </label>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="searchrow searchrowbox">
              <div class="searchtitle">类型</div>
              <div class="searchlist">
                <div class="searchitem unlimited">
                  <a
                    href="javascript:;"
                    @click="showDiffCategory(0)"
                    v-bind:class="[cCategoryIndex==0?'active':'']"
                  >不限</a>
                </div>
                <div class="searchcontent" :style="{height:showmore[0].show?'auto':'30px'}">
                  <div class="searchitem" v-for="(item, index) in hotelTypeInfo">
                    <a href="javascript:;">
                      <label>
                        <input type="checkbox" />
                        {{item[Object.keys(item)[0]]}}
                      </label>
                    </a>
                  </div>
                </div>
              </div>
              <div class="showMore"><span @click="showMore(0)">{{showmore[0].show?'收起':'更多'}}</span></div>
            </div>
            <div class="searchrow searchrowbox">
              <div class="searchtitle">品牌</div>
              <div class="searchlist">
                <div class="searchitem unlimited">
                  <a
                    href="javascript:;"
                    @click="showDiffCategory(0)"
                    v-bind:class="[cCategoryIndex==0?'active':'']"
                  >不限</a>
                </div>
                <div class="searchcontent" :style="{height:showmore[1].show?'auto':'30px'}">
                  <div class="searchitem" v-for="(item, index) in hotelBrandInfo">
                    <a href="javascript:;">
                      <label>
                        <input type="checkbox" />
                        {{item[Object.keys(item)[0]]}}
                      </label>
                    </a>
                  </div>
                </div>
              </div>
              <div class="showMore"><span @click="showMore(1)">{{showmore[1].show?'收起':'更多'}}</span></div>
            </div>
          </div>
        </div>
        <div class="searchex">
          <span>
            <span class="num">{{allCount}}</span>家酒店符合条件
          </span>
        </div>
      </div>
      <div class="contentcontainer">
        <div class="poiitem">
          <div class="poicontent">
            <div class="poilist">
  <div class="poititle">
              <a href="javascript:;">智能排序</a>
            </div>
            <loading :showLoading="!loadHotelList"></loading>
            <div v-if="loadHotelList">
              <div class="poi-item" v-for="(item, index) in poiInfo">
              <div class="pic">
                <a href>
                  <img v-bind:src="item.frontImg.replace('w.h','320.0')" />
                </a>
              </div>
              <div class="poidetail">
                <h1 class="poiinfoheader">
                  <a href="javascript:;">
                    <i>1</i>
                    {{item.name}}
                  </a>
                  <span>{{item.hotelStar}}</span>
                </h1>
                <div class="poicolumn">
                  <div class="poiinfo">
                    <div class="poiaddress">
                      <span>[{{item.areaName}}]</span>
                      {{item.addr}}
                      <a href="javascript:;"><i></i>查看地图</a>
                    </div>
                    <div class="poiicon">
                      <div v-for="(sitem, sindex) in item.serviceIconsInfo.slice(0,4)">
                        <img v-bind:src="sitem.imgUrl">
                        <span>{{sitem.attrDesc}}</span>
                      </div>
                    </div>
                    <div class="poitag">
                      <span class="poitagitem red">订</span>
                      <span class="poitagitem blue" v-for="(tagitem, tagindex) in item.poiAttrTagList">{{tagitem}}</span>
                    </div>
                  </div>
                  <div class="poiscore">
                    {{item.scoreIntro.split(' ')[0].replace('分','')}}<span>分 {{item.scoreIntro.split(' ')[1]}}</span>
                  </div>
                  <div class="applets">
                    <a>微信小程序预订</a>
                  </div>
                </div>
              </div>
            </div>
            
            </div>
            </div>
          
           <div class="poipage" v-if="loadHotelList">
            <ul>
              <li>
                <span>1</span>
              </li>
              <li>
                <a href="javascript:;">2</a>
              </li>
              <li>
                <a href="javascript:;">2</a>
              </li>
              <li>
                <a href="javascript:;">2</a>
              </li>
              <li>
                <a href="javascript:;">2</a>
              </li>
              <li>
                <a href="javascript:;">2</a>
              </li>
              <li>
                <a href="javascript:;">2</a>
              </li>
              <li>
                <a href="javascript:;">2</a>
              </li>
              <li>
                <a href="javascript:;">2</a>
              </li>

            </ul>
          </div>
          </div>
          
        </div>
        <div id="map"></div>
      </div>
    </div>
  </div>
</template>

<script>
import headTop from "../../components/header/header";
import search from "../../components/common/search";
import loading from "../../components/common/loading";
import calendar from "../../components/common/calendar";

import { request_get } from "../../ajax/request";
import Vue from 'Vue';
export default {
  data() {
    return {
      areasInfo: [], //行政圈/商圈
      cAreaIndex: 0, //选中区域索引
      cSubwayIndex: 0, //选中地铁索引
      subwayInfo: [], //地铁
      universitiesInfo: [], //高校
      hotInfo: [], //热点
      transportInfo: [], //车站机场
      viewInfo: [], //景点
      hospitalInfo: [], //医院
      cCategoryIndex: 1, //分类索引
      hotelTypeInfo: [], //酒店类型
      hotelBrandInfo: [], //品牌
      poiids: [], //酒店id
      poiInfo: [], //酒店列表
      loadHotelList: false, //酒店列表数据加载较慢，需要请求所有数据完成后再加载
      allCount: 0,//酒店列表总数量 
      showmore: [{ show: false }, { show: false }],//更多收起
      showcalendar: false,
    };
  },
  components: {
    headTop,
    search,
    loading,
    calendar
  },
  created() {
    this.initData();
  },
  mounted() {
    console.log(this)
  },
  methods: {
    initData() {
      this.getAreaList();
      this.getSubwayList();
      this.getHotelFilterList();
      this.getHotelList();
    },
    async getAreaList() {
      let res = await request_get(
        "/jiudian/group/v2/area/list?utm_medium=pc&version_name=999.9&cityId=56&X-FOR-WITH=HCnuEtc%2BAIlOTA7AycE5ERzeb5tyFztDOXmvUjz9WgzSmRtgFZP8wfujURCeE4TeZ4eH%2BdzloSFO%2BlX3fD6ChqYcZbS1GdT7toQ%2FCvqul%2Bij4HSzw8FrV%2FVzoPpbalwYWGIy%2FN0Tdcg8knq6%2FfcfGRNP3lH7GXvqXkKOvB9i9dBd12bo%2Bo7Holx9PToy31mJZ87%2FA%2BhQbC38uWEj9SvRR8BysPhpJnFNNVsWOCPvrm4%3D"
      );
      this.areasInfo = res.data.data.areasinfo;
      let subareasInfo = res.data.data.subareasinfo;
      let universitiesInfo = [];
      let hotInfo = [];
      let transportInfo = [];
      let viewInfo = [];
      let hospitalInfo = [];
      for (var i in res.data.data.landmarks) {
        if (res.data.data.landmarks[i].type == 1) {
          universitiesInfo.push(res.data.data.landmarks[i]);
        } else if (
          res.data.data.landmarks[i].type == 2 ||
          res.data.data.landmarks[i].type == 4
        ) {
          transportInfo.push(res.data.data.landmarks[i]);
        } else if (res.data.data.landmarks[i].type == 3) {
          viewInfo.push(res.data.data.landmarks[i]);
        } else if (res.data.data.landmarks[i].type == 5) {
          hospitalInfo.push(res.data.data.landmarks[i]);
        }
      }
      this.transportInfo = transportInfo;
      this.viewInfo = viewInfo;
      this.hospitalInfo = hospitalInfo;
    
      this.universitiesInfo = universitiesInfo;
      for (var i in subareasInfo) {
        for (var j in res.data.data.hotareas) {
          if (subareasInfo[i].id == res.data.data.hotareas[j]) {
            hotInfo.push(subareasInfo[i]);
          }
        }
      }
      this.hotInfo = hotInfo;
     
      for (var i in this.areasInfo) {
        this.areasInfo[i].subareasInfo = [];
        this.areasInfo[i].subareasInfo.push({
          name: this.areasInfo[i].name + "（全部）"
        });
        for (var j in subareasInfo) {
          if (subareasInfo[j].district == this.areasInfo[i].id) {
            this.areasInfo[i].subareasInfo.push(subareasInfo[j]);
          }
        }
      }
    },
    async getSubwayList() {
      let res = await request_get(
        "/jiudian/group/v1/subway/listline?utm_medium=pc&version_name=999.9&cityId=56&X-FOR-WITH=HCnuEtc%2BAIlOTA7AycE5ERzeb5tyFztDOXmvUjz9WgxA0p%2FEoEouu8hQe489PaPnYHQhRw7YeCybcJ%2BlE6c6zoJgRXmQjh19fo4oYT%2F3U%2BtT30D062GKOD63fJdXUez%2Bcd8rV3Nz1LLivNX9vl8LAB6ZDLjLga66HqF9IglY5PyMMgv9QsKh5YF8dZdiWDMr7JEMsueTrS2dF00uPkInBSYpcCaw5S9LnTxptco3Kd0%3D"
      );
      this.subwayInfo = res.data.data;
    },
    async getHotelFilterList() {
      let res = await request_get(
        "/jiudian/group/v2/deal/select/list/city/56/cate/20?utm_medium=pc&version_name=999.9&X-FOR-WITH=RXCG8HjCM5Gl0xGrBw6V%2BSPjlZHaGbK9THmXRs2bFixfRWN23CbJucLDb8KFQp1q0dFFYSs3Xij1J%2BeUssgKG1WH53e3jx9yQfEt%2FFkqKWBKc89CmmhbWID9tz32DmWgFrA3%2BIo2iXDSzdHjui%2FlYHo0GX2auMn1LZFUUtbboEWN%2BNbGLpgLYDp4zlick2Y4R0Iub3is0CoIx%2BIlsrN7Uw%3D%3D"
      );
     
      this.hotelTypeInfo = res.data.data[3].values;
      this.hotelBrandInfo = res.data.data[5].values;
    },
 
    async getHotelList() {
      let that = this;
      let res = await request_get(
        "/jiudian/hbsearch/HotelSearch?utm_medium=pc&version_name=999.9&cateId=20&attr_28=129&uuid=48D1058348DCE928091FF5391F53D00E6C5CB8477ED806309B9DAF7454E05783%401593415106328&cityId=56&offset=0&limit=20&startDay=20200819&endDay=20200819&q=&sort=defaults&X-FOR-WITH=CXa14Wg8s%2FYM4AMbtwuj1aHLyZkq2EMGoZ9ejcONv6mx4qpBezHK1uXrMhwrANsofo7rKNTZiNxj%2BT62rkJlWVgFhTjCM00y5yfPla308eT9pko6GSAuJ8xZDOLr8jAsjgmEyQNdBqKGfhVeYfMh1oT1qzrXOUvy35qLWHJcmNe%2BRMUIhMlffIFB0AagRlbeJdymcaZOqaofQ%2FZwCjcSHQ%3D%3D"
      );      
      this.poiids = res.data.ct_pois;
      this.poiInfo = res.data.data.searchresult;
      this.allCount = res.data.data.totalcount;
      for(let i in this.poiids){
          
          // this.getHotelContents(this.poiids[i].poiid);
          let data = await request_get(
            "/jiudian/group/v2/poi/detail/service?utm_medium=pc&version_name=999.9&poiId=" +
             this.poiids[i].poiid
          );
          that.poiInfo[i].serviceIconsInfo = data.data.data.serviceIconsInfo.serviceIcons;
          if(i==19){
            that.loadHotelList = true;
          }
        // that.$forceUpdate()
          
      }
      // this.poiids.forEach(async i => {
      //   let data = await request_get(
      //       "/jiudian/group/v2/poi/detail/service?utm_medium=pc&version_name=999.9&poiId=" +
      //        that.poiids[i].poiid
      //     );
      //       that.poiInfo[i].serviceIconsInfo = [{id:8,name:'jjj'}];
      // console.log(that.poiInfo[8].serviceIconsInfo)
      // that.$forceUpdate()
      // })
      // for(var i in this.poiids){
      //     this.poiInfo.serviceIconsInfo = serviceIconsInfo;
      // }
     
    },
    async getHotelContents(id) {
      let data = await request_get(
        "/jiudian/group/v2/poi/detail/service?utm_medium=pc&version_name=999.9&poiId=" +
          id
      );
      this.poiInfo.push(data.data.data);
    },
    showSubareas(index) {
      this.cAreaIndex = index;
    },
    showSubsubway(index) {
      this.cSubwayIndex = index;
    },
    showDiffCategory(index) {
      this.cCategoryIndex = index;
    },
    showMore(index) {
      this.showmore[index].show = !this.showmore[index].show;
    },
    showCalendar() {
      this.showcalendar = true;
    }
  }
};
</script>

<style scoped>
.searchwrapper {
  padding-bottom: 50px !important;
}
.container {
  width: 1200px;
  margin: 20px auto 0;
}
.filtercontainer {
  background-color: #fff;
  border: 1px solid #e5e5e5;
}
.condition {
  background-color: #ebebeb;
  width: 1200px;
  padding: 20px;
  font-size: 0;
  box-sizing: border-box;
}
.citywrapper {
  display: inline-block;
  margin-right: 20px;
}
.c-box {
  display: inline-block;
  height: 35px;
  line-height: 35px;
  background-color: #fff;
  padding: 0 10px;
}
.c-box input {
  width: 80px;
  height: 100%;
  border: none;
  color: #666;
}
.datewrapper {
  display: inline-block;
  font-size: 0;
  margin-right: 20px;
}
.enterwrapper,
.leavewrapper {
  display: inline-block;
}
.enterwrapper {
  padding-right: 5px;
}
.leavewrapper {
  padding-left: 5px;
}
.keywordwrapper {
  display: inline-block;
}
.keywordwrapper input {
  width: 180px;
}
.searchbtn {
  display: inline-block;
  float: right;
  height: 35px;
  line-height: 35px;
  background-color: #ffc300;
  padding: 0 40px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
}
.inputtitle {
  color: #999;
}
.week,
.dateinput {
  color: #999;
}
.searchrow {
  font-size: 0;
  padding: 20px 0;
  border-bottom: 1px solid #e5e5e5;
}
.searchtitle {
  width: 60px;
  display: inline-block;
}
.filter {
  padding: 0 20px;
}
.searchlist {
  font-size: 0;
  display: inline-block;
  line-height: 24px;
}
.searchlist a {
  color: #333;
  padding: 10px 10px;
}
.searchitem {
  display: inline-block;
  margin: 0 10px;
}
.searchitem a.active {
  background-color: #f8f8f8;
}
.searchdetailwrapper {
  margin-left: 60px;
  padding: 20px;
  background-color: #f8f8f8;
}
.filterrow a {
  display: inline-block;
  padding: 5px 10px;
  margin: 5px 10px 5px 0;
  border-radius: 10px;
}
.filterrow:first-child {
  border-bottom: 1px solid #e5e5e5;
}
.filterrow a:hover {
  background-color: #ffc300;
}
.filterrow a.active {
  background-color: #ffc300;
}
.searchrowbox input {
  vertical-align: middle;
  margin-right: 10px;
}
.searchrowbox .searchlist {
}
.searchrowbox .searchitem {
  width: 140px;
}
.searchrowbox .searchitem.unlimited {
  width: 60px;
}
.searchrowbox .searchcontent {
  display: inline-block;
  max-width: 950px;
  font-size: 0;
  vertical-align: top;
  height: 30px;
  overflow: hidden;
}
.showMore{
  width: 50px;
  float: right;
  text-align: right;
}
.showMore span{
  cursor: pointer;
}
.searchex {
  padding: 20px;
}
.searchex span {
  font-size: 16px;
}
.searchex .num{
  color: #ff8634;
}
.poiitem {
  width: 900px;
}
.poilist {
  position: relative;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  margin-bottom: 20px;
}
.contentcontainer {
  margin-top: 20px;
}
.poititle {
  padding: 20px;
  border-bottom: 1px solid #e5e5e5;
}
.poititle a {
  color: #fe8c00;
}
.poi-item {
  padding: 20px;
  border-bottom: 1px solid #e5e5e5;
}
.pic {
  float: left;
}
.poidetail {
  margin-left: 220px;
}
.poiinfoheader{
  margin-bottom: 10px;
}
.poiinfoheader a{
  color: #fe8c00;
  font-size: 18px;

}
.poiinfoheader span{
  color: #999;
}
.poiaddress{
  height: 40px;
  line-height: 20px;
  margin-bottom: 5px;
}
.poiaddress span{
  color: #fe8c00;
}
.poiicon{
  height: 20px;
  margin-bottom: 5px;
  white-space: nowrap;
}
.poiicon img{
  width: 20px;
  height: 20px;
}
.poiicon div{
  display: inline-block;
  margin-right: 20px;
}
.poiicon div *{
  vertical-align: top;
}
.poiicon div span{
  color: #999;
}
.pic img{
  width: 200px;
  height: 125px;
}
.poicolumn{
  overflow: hidden;
  height: 90px;
}
.poiinfo{
  float: left;
  width: 350px;
  padding-right: 10px;
  border-right: 1px solid #e5e5e5;
}
.poitag{
  font-size: 0;
  height: 20px;
}
.poitagitem{
  display: inline-block;
  padding: 1px 2px;
  margin-right: 5px;
  height: 16px;
  line-height: 16px;
}
.poitagitem.red{
  color: #f5716e;
  border: 1px solid #f5716e;
}
.poitagitem.blue{
  color: #569cea;
  border: 1px solid #569cea;
}
.poiscore{
  float: left;
  font-size: 24px;
  color: #fe8c00;
  width: 150px;
  height: 100%;
  line-height: 90px;
  text-align: center;
  border-right: 1px solid #e5e5e5;
}
.applets{
  position: relative;
  float: left;
  top: 50%;
  transform: translateY(-50%);
}
.applets a{
  display: inline-block;
  padding: 0 10px;
  background-color: #ffc300;
  font-size: 14px;
  font-weight: bold;
  line-height: 2;
  border-radius: 1em;
}
.poipage{
  text-align: center;
}
.poipage li span,.poipage li a{
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  border: 1px solid #999;
}
</style>