import ax from 'axios'

let c_uuid = uuid();

export async function request_get(url, success, fail)
{
   if (!getCookie('uuid'))
   {
     console.log('设置cookie')
    setCookie('uuid', c_uuid);
   }
   try{
      const data = await ax.get(url,{});
      return data;
   }catch (error) {
      throw new Error(error);
   }
   
    // ax.get(url, {}).then(function(res){
    //     console.log('success');
    //     return res;
    //     if (success)
    //     {
    //       success(res);
    //     }
        
    // }).catch(function(error){
    //     console.log('error');
    //     if (fail)
    //     {
    //       fail(error);
    //     }
        
    // });
}



//获取cookie、
function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
   return (arr[2]);
  else
   return null;
 }
  
 //设置cookie,增加到vue实例方便全局调用
function setCookie (c_name, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
 };

function uuid() {
	var s = [];
	var hexDigits = "0123456789abcdef";
	for (var i = 0; i < 36; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	}
	s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
	s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
	s[8] = s[13] = s[18] = s[23] = "-";

	var uuid = s.join("");
	return uuid;
}