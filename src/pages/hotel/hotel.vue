<template>
    <div>
        <head-top></head-top>
        <search></search>
        <div class="container">
            <div class="condition">
                <div class="citywrapper">
                    <label class="c-box citybox">
                        <span>入住城市</span>
                        <input type="text">
                    </label>
                </div>
                <div class="datewrapper">
                    <div class="enterwrapper">
                        <label class="c-box enterbox">
                            <span>入住</span>
                            <input type="text">
                        </label>
                    </div>
                    <span class="line">-</span>
                    <div class="leavewrapper">
                        <label class="c-box leavebox">
                            <span>离店</span>
                            <input type="text">
                        </label>
                    </div>
                </div>
                <div class="keywordwrapper c-box">
                    <input type="text" placeholder="(关键词选填) 酒店名/位置/品牌">
                </div>
                <span class="searchbtn">搜索</span>
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
    width: 180px;
    height: 100%;
    border: none;
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
.searchbtn{
    display: inline-block;
    float: right;
    height: 35px;
    line-height: 35px;
    background-color: #FFC300;
    padding: 0 20px;
    border-radius: 20px;
}

</style>