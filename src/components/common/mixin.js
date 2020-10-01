export default{
    data(){

    },
    created(){

    },
    methods:{
        getCurrentDate() {
            var date = new Date();
            var year = date.getFullYear().toString();
            var month = (date.getMonth()+1).toString().length==1?('0'+(date.getMonth()+1)):(date.getMonth()+1);
            var day = String(date.getDate());
            return year+month+day;

        }
    }
}