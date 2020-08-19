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
            <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
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
    methods: {
        changeShow() {
            this.$emit("balabala",false);
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
    height: 30px;
    align-items: center;
}
.c-week{
    width: calc(100%/7);
    color: #ffc300;
}
</style>