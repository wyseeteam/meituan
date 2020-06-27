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
                                <a href="">不限</a>
                            </div>
                            <div class="searchitem">
                                <a href="">热门</a>
                            </div>
                            <div class="searchitem">
                                <a href="">行政圈/商圈</a>
                            </div>
                            <div class="searchitem">
                                <a href="">地铁站</a>
                            </div>
                            <div class="searchitem">
                                <a href="">高校</a>
                            </div>
                            <div class="searchitem">
                                <a href="">车站/机场</a>
                            </div>
                            <div class="searchitem">
                                <a href="">旅游景点</a>
                            </div>
                            <div class="searchitem">
                                <a href="">医院</a>
                            </div>
                        </div>
                        <div class="searchdetailwrapper">
                            <div class="searchdetail">
                                <div class="filterrow">
                                    <a href="">dddd</a>
                                    <a href="">dddd</a>
                                    <a href="">dddd</a>
                                    <a href="">dddd</a>
                                    <a href="">dddd</a>
                                    <a href="">dddd</a>
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
export default {
    data() {
        return {

        }
    },
    components: {
        headTop,
        search
    },
    methods: {

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
.searchitem:nth-child(3) a{
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
}
</style>