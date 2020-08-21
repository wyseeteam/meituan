<template>
    <div v-if="showCalendar" class="calendarwrapper">
        <div class="c-header">
            <a>l</a>
            <span class="c-input"><input disabled type="text" class="inputyear"/>年<input disabled type="text" class="inputmonth"/>月</span>
            <a>></a>
        </div>
        <div class="c-body">
            <div class="weekwrapper">
                <span class="c-week">日</span>
                <span class="c-week">一</span>
                <span class="c-week">二</span>
                <span class="c-week">三</span>
                <span class="c-week">四</span>
                <span class="c-week">五</span>
                <span class="c-week">六</span>
            </div>
            <div v-for="(item,index) in dayData" class="daywrapper">
                <span v-for="(sitem,sindex) in dayData[index]" class="c-day">{{sitem}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["showCalendar"],
    model: {
        prop: 'value',
        event: 'balabala'
    },
    data() {
        return {
            dayData:[
                [2,2,3,4,5,65,4],
                [2,2,3,4,5,65,4],
                [2,2,3,4,5,65,9],
                [2,2,3,4,5,65,4],
                [2,2,3,4,5,65,4],
                [2,2,3,4,5,65,4],

            ],
            date: new Date()
        }
    },
    created() {
        this.getDay();
    },
    methods: {
        changeShow() {
            this.$emit("balabala",false);
        },
        getDay() {
            this.date.setDate(1);
            console.log(this.date.getDay())
            console.log(new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate())
            var dayNum = new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate();
            var j = 1;
            for( var i = this.date.getDay(); i < 7; i ++ ){
                this.dayData[0][i] = j ++;
            }
            for( var k = 1; k < 6; k ++ ){
                for( var m = 0; m < 7; m++ ){
                    if(j > dayNum){
                        j = 1;
                    }
                    this.dayData[k][m] = j ++;
                }
            }
        }
    }
        
}
</script>

<style scoped>
.calendarwrapper{
    position: absolute;
    width: 230px;
    text-align: center;
    font-weight: bold;
    background-color: #fff;
}
.c-header{
    background-color: #ffc300;
    height: 35px;
    line-height: 35px;
}
.inputyear{
    width: 50px;
}
.inputmonth{
    width: 25px;
}
.weekwrapper{
    display: flex;
    padding: 0 10px;
}
.daywrapper{
    display: flex;
    padding: 0 10px;
}
.c-week{
    width: 30px;
    height: 30px;
    line-height: 30px;
    color: #ffc300;
}
.c-day{
    width: 30px;
    height: 30px;
    line-height: 30px;
    color: #000;
}
</style>