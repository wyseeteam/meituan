import ax from 'axios'

export function request_get(url, success, fail)
{
    
    console.log('开始请求数据')
    ax.get(url, {}).then(function(res){
        console.log('success');
        if (success)
        {
          success(res);
        }
        
    }).catch(function(error){
        console.log('error');
        if (fail)
        {
          fail(error);
        }
        
    });
}