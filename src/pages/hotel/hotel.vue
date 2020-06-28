<template>
    <div>
        <head-top></head-top>
        <search></search>
        <div class="container">
            <div class="condition">
                <div class="citywrapper">
                    <label class="c-box citybox">
                        <span class="inputtitle">入住城市</span>
                        <input type="text" value="合肥">
                    </label>
                </div>
                <div class="datewrapper">
                    <div class="enterwrapper">
                        <label class="c-box enterbox">
                            <span class="inputtitle">入住</span>
                            <input type="text" value="2021-03-04" class="dateinput">
                            <span class="week">星期三</span>
                            <i></i>
                        </label>
                    </div>
                    <span class="line">-</span>
                    <div class="leavewrapper">
                        <label class="c-box leavebox">
                            <span class="inputtitle">离店</span>
                            <input type="text" value="2020-09-08" class="dateinput">
                            <span class="week">星期三</span>
                        </label>
                    </div>
                </div>
                <div class="keywordwrapper c-box">
                    <input type="text" placeholder="(关键词选填) 酒店名/位置/品牌">
                </div>
                <span class="searchbtn">搜索</span>
            </div>
            <div class="filter">
                <div class="searchrowwrap">
                    <div class="searchrow">
                        <div class="searchtitle">位置</div>
                        <div class="searchlist">
                            <div class="searchitem">
                                <a href="javascript:;" @click="showDiffCategory(0)" v-bind:class="[cCategoryIndex==0?'active':'']">不限</a>
                            </div>
                            <div class="searchitem">
                                <a href="javascript:;" @click="showDiffCategory(1)" v-bind:class="[cCategoryIndex==1?'active':'']">热门</a>
                            </div>
                            <div class="searchitem">
                                <a href="javascript:;" @click="showDiffCategory(2)" v-bind:class="[cCategoryIndex==2?'active':'']">行政圈/商圈</a>
                            </div>
                            <div class="searchitem">
                                <a href="javascript:;" @click="showDiffCategory(3)" v-bind:class="[cCategoryIndex==3?'active':'']">地铁站</a>
                            </div>
                            <div class="searchitem">
                                <a href="javascript:;" @click="showDiffCategory(4)" v-bind:class="[cCategoryIndex==4?'active':'']">高校</a>
                            </div>
                            <div class="searchitem">
                                <a href="javascript:;" @click="showDiffCategory(5)" v-bind:class="[cCategoryIndex==5?'active':'']">车站/机场</a>
                            </div>
                            <div class="searchitem">
                                <a href="javascript:;" @click="showDiffCategory(6)" v-bind:class="[cCategoryIndex==6?'active':'']">旅游景点</a>
                            </div>
                            <div class="searchitem">
                                <a href="javascript:;" @click="showDiffCategory(7)" v-bind:class="[cCategoryIndex==7?'active':'']">医院</a>
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
                                    <a href="javascript:;" v-for="(item, index) in areasInfo" @click="showSubareas(index)" v-bind:class="[cAreaIndex==index?'active':'']">{{item.name}}</a>
                                   
                                </div>
                                <div class="filterrow" v-for="(item, index1) in areasInfo" v-show="cAreaIndex==index1">
                                    <a href="javascript:;" v-for="(item, index2) in areasInfo[index1]['subareasInfo']">{{item.name}}</a>
                                </div>
                            </div>
                            <div class="searchdetail" v-show="cCategoryIndex==3">
                                <div class="filterrow">
                                    <a href="javascript:;" v-for="(item, index) in subwayInfo" @click="showSubsubway(index)" v-bind:class="[cSubwayIndex==index?'active':'']">{{item.name}}</a>
                                   
                                </div>
                                <div class="filterrow" v-for="(item, index1) in subwayInfo" v-show="cSubwayIndex==index1">
                                    <a href="javascript:;" v-for="(item, index2) in subwayInfo[index1]['stations']">{{item.name}}</a>
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
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import headTop from '../../components/header/header'
import search from '../../components/common/search'
import { request_get } from '../../ajax/request'
export default {
    data() {
        return {
            areasInfo: [],//行政圈/商圈
            cAreaIndex: 0,//选中区域索引
            cSubwayIndex: 0,//选中地铁索引
            subwayInfo: [],//地铁
            universitiesInfo: [],//高校
            hotInfo: [],//热点
            transportInfo: [],//车站机场
            viewInfo: [],//景点
            hospitalInfo: [],//医院
            cCategoryIndex: 1,//分类索引
        }
    },
    components: {
        headTop,
        search
    },
    created() {
        this.initData();
    },
    methods: {
        initData (){
            this.getAreaList();
            this.getSubwayList();
        },
        async getAreaList() {
            let res = await request_get('/jiudian/group/v2/area/list?utm_medium=pc&version_name=999.9&cityId=56&X-FOR-WITH=HCnuEtc%2BAIlOTA7AycE5ERzeb5tyFztDOXmvUjz9WgzSmRtgFZP8wfujURCeE4TeZ4eH%2BdzloSFO%2BlX3fD6ChqYcZbS1GdT7toQ%2FCvqul%2Bij4HSzw8FrV%2FVzoPpbalwYWGIy%2FN0Tdcg8knq6%2FfcfGRNP3lH7GXvqXkKOvB9i9dBd12bo%2Bo7Holx9PToy31mJZ87%2FA%2BhQbC38uWEj9SvRR8BysPhpJnFNNVsWOCPvrm4%3D');
            this.areasInfo = res.data.data.areasinfo;
            let subareasInfo = res.data.data.subareasinfo;
            let universitiesInfo = [];
            let hotInfo = [];
            let transportInfo = [];
            let viewInfo = [];
            let hospitalInfo = [];
            for(var i in res.data.data.landmarks){
                if(res.data.data.landmarks[i].type == 1){
                    universitiesInfo.push(res.data.data.landmarks[i]);
                }else if(res.data.data.landmarks[i].type == 2 || res.data.data.landmarks[i].type == 4){
                    transportInfo.push(res.data.data.landmarks[i]);
                }else if(res.data.data.landmarks[i].type == 3){
                    viewInfo.push(res.data.data.landmarks[i]);
                }else if(res.data.data.landmarks[i].type == 5){
                    hospitalInfo.push(res.data.data.landmarks[i]);
                }
            }
            this.transportInfo = transportInfo;
            this.viewInfo = viewInfo;
            this.hospitalInfo = hospitalInfo;
            console.log(transportInfo)
            console.log(viewInfo)
            console.log(this.hospitalInfo)
            this.universitiesInfo = universitiesInfo;
            for(var i in subareasInfo){
                for(var j in res.data.data.hotareas){
                    if(subareasInfo[i].id == res.data.data.hotareas[j]){
                        hotInfo.push(subareasInfo[i])
                    }
                }
            }
            this.hotInfo = hotInfo;
            console.log(universitiesInfo)
            console.log(hotInfo)
            console.log(res.data.data.hotareas)

            console.log(subareasInfo)
            for(var i in this.areasInfo){
                this.areasInfo[i].subareasInfo = [];
                this.areasInfo[i].subareasInfo.push({name:this.areasInfo[i].name+'（全部）'});
                for(var j in subareasInfo){
                    if(subareasInfo[j].district == this.areasInfo[i].id){
                        this.areasInfo[i].subareasInfo.push(subareasInfo[j]);
                    }
                }
                
            }
            console.log(this.areasInfo)
        },
        async getSubwayList() {
            let res = await request_get('/jiudian/group/v1/subway/listline?utm_medium=pc&version_name=999.9&cityId=56&X-FOR-WITH=HCnuEtc%2BAIlOTA7AycE5ERzeb5tyFztDOXmvUjz9WgxA0p%2FEoEouu8hQe489PaPnYHQhRw7YeCybcJ%2BlE6c6zoJgRXmQjh19fo4oYT%2F3U%2BtT30D062GKOD63fJdXUez%2Bcd8rV3Nz1LLivNX9vl8LAB6ZDLjLga66HqF9IglY5PyMMgv9QsKh5YF8dZdiWDMr7JEMsueTrS2dF00uPkInBSYpcCaw5S9LnTxptco3Kd0%3D');
            this.subwayInfo = res.data.data;
            console.log(this.subwayInfo)
        },
        showSubareas(index) {
            this.cAreaIndex = index;
        },
        showSubsubway(index) {
            this.cSubwayIndex = index;
        },
        showDiffCategory(index) {
            this.cCategoryIndex = index;
        }
    },
}
</script>

<style scoped>
.searchwrapper{
    padding-bottom: 50px !important;
}
.container{
    width: 1200px;
    margin: 20px auto 0;
}
.condition{
    background-color: #ebebeb;
    width: 1200px;
    padding: 20px;
    font-size: 0;
    box-sizing: border-box;
}
.citywrapper{
    display: inline-block;
    margin-right: 20px;
}
.c-box{
    display: inline-block;
    height: 35px;
    line-height: 35px;    
    background-color: #fff;
    padding: 0 10px;
}
.c-box input{
    width: 80px;
    height: 100%;
    border: none;
    color: #666;
}
.datewrapper{
    display: inline-block;
    font-size: 0;
    margin-right: 20px;
}
.enterwrapper,.leavewrapper{
    display: inline-block;
}
.enterwrapper{
    padding-right: 5px;
}
.leavewrapper{
    padding-left: 5px;
}
.keywordwrapper{
    display: inline-block;
}
.keywordwrapper input{
    width: 180px;
}
.searchbtn{
    display: inline-block;
    float: right;
    height: 35px;
    line-height: 35px;
    background-color: #FFC300;
    padding: 0 40px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
}
.inputtitle{
    color: #999;
}
.week,.dateinput{
    color: #999;
}
.searchrow{
    font-size: 0;
}
.searchtitle{
    width: 60px;
    display: inline-block;
}
.filter{
    padding: 20px;
    background-color: #fff;
}
.searchlist{
    font-size: 0;
    display: inline-block;
    line-height: 24px;
}
.searchlist a{
    color: #333;
    padding: 10px 10px;
}
.searchitem{
    display: inline-block;
    margin: 0 10px;
}
.searchitem a.active{
    background-color: #f8f8f8;
}
.searchdetailwrapper{
    margin-left: 60px;
    padding: 20px;
    background-color: #f8f8f8;
}
.filterrow a{
    display: inline-block;
    padding: 5px 10px;
    margin: 5px 10px 5px 0;
    border-radius: 10px;
}
.filterrow:first-child{
    border-bottom: 1px solid #e5e5e5;
}
.filterrow a:hover{
    background-color: #FFC300;
}
.filterrow a.active{
    background-color: #FFC300;
}
</style>