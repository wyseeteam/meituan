<template>
  <div class="a">
    <!-- 1.除前4个外 -->
    <footView :title="userHelp.title" :list="userHelp.list"></footView>
    <footView :title="besiness.title" :list="besiness.list"></footView>
    <footView :title="dlsjm.title" :list="dlsjm.list"></footView>
    <footView :title="gzmt.title" :list="gzmt.list"></footView>
    <footView :title="xfzfwrx.title" :list="xfzfwrx.list"></footView>
    <footView :title="mtfw.title" :list="mtfw.list"></footView>
    <footView :title="mtgz.title" :list="mtgz.list"></footView>
    <footView :title="gsxx.title" :list="gsxx.list"></footView>
    <footView :title="sjfwrx.title" :list="sjfwrx.list"></footView>
    <footView :title="lzjb.title" :list="lzjb.list"></footView>
    <footView :title="tsjbzq.title" :list="tsjbzq.list"></footView>
    <footView :title="zscq.title" :list="zscq.list"></footView>
    <footView :title="sjzzrz.title" :list="sjzzrz.list"></footView>
    <footView :title="gyszc.title" :list="gyszc.list"></footView>
  </div>
</template>
<script>

import footView from './footView'

export default {
  name: "",
  components: {
    footView
  },
  data(){
    return {
      userHelp: {
        title: '用户帮助',
        list: [
          {name: '申请退款', ref: ''},
          {name: '查看美团劵密码', ref: ''},
          {name: '常见问题', ref: ''},
          {name: '用户协议', ref: ''},
          {name: '隐私政策', ref: ''},
          {name: '反诈骗公告', ref: ''},
          {name: '消费者权益保障', ref: ''},
        ]
      },
      besiness: {
        title: '商家合作',
        list: [
          {name: '美团餐饮商户中心', ref: ''},
          {name: '美食商家入驻(非外卖)', ref: ''},
          {name: '美团外卖开店申请', ref: ''},
          {name: '美团收银官网', ref: ''},
          {name: '外卖配送加盟申请', ref: ''},
          {name: '美团点评餐饮学院', ref: ''},
          {name: '酒店商家入驻', ref: ''},
          {name: '境内度假商家入驻', ref: ''},
          {name: '综合商家入驻', ref: ''},
          {name: '美团民宿房东商家入驻', ref: ''},
          {name: '商家开票申请', ref: ''},
          {name: '美团点评智能收银机', ref: ''},
          {name: '美团点评餐饮开放平台', ref: ''},
          {name: '美团点评收单', ref: ''},
          {name: '免费试用美团排队', ref: ''},
          {name: '快驴进货商家合作', ref: ''},
          {name: '美团闪购商家入驻', ref: ''}
        ]
      },
      dlsjm: {
        title: '代理商加盟',
        list: [
          {name: '美团外卖代理商招募', ref: ''},
          {name: '到点餐饮代理商招募', ref: ''},
          {name: '非餐饮代理商招募', ref: ''},
          {name: '美团联盟', ref: ''},
          {name: '美团收银招募线上分销商', ref: ''},
          {name: '美团点评5S服务商招募', ref: ''},
        ]
      },
      gzmt: {
        title: '关注美团',
        list: [
          {name: '美团新浪微博', ref: ''},
        ]
      },
      xfzfwrx: {
        title: '消费者服务热线',
        list: [
          {name: '外卖消费者：10109777', ref: ''},
          {name: '猫眼消费者：10105335', ref: ''},
          {name: '其他消费者：10107888', ref: ''}
        ]
      },
      mtfw: {
        title: '美团服务',
        list: [
          {name: '美团外卖', ref: ''},
          {name: '美团酒店', ref: ''},
          {name: '猫眼电影', ref: ''},
          {name: '美团配送', ref: ''},
          {name: '美团云', ref: ''},
          {name: '大众点评', ref: ''},
          {name: '美团民宿', ref: ''},
          {name: '无人配送', ref: ''},
        ]
      },
      mtgz: {
        title: '美团规则',
        list: [
          {name: '规则中心', ref: ''},
          {name: '规则目录', ref: ''},
          {name: '规则评议院', ref: ''}
        ]
      },
      gsxx: {
        title: '公司信息',
        list: [
          {name: '关于我们', ref: ''},
          {name: '投资者关系', ref: ''},
          {name: '加入我们', ref: ''},
          {name: '商户诚心公约及管理办法', ref: ''},
          {name: '保险经纪资质', ref: ''},
        ]
      },
      sjfwrx: {
        title: '商家服务热线',
        list: [
          {name: '外卖&餐饮是商家：10105557', ref: ''},
          {name: '休闲娱乐、丽人、KTV、教育、结婚、亲子、家装等商家：1010010', ref: ''},
        ]
      },
      lzjb: {
        title: '廉政举报',
        list: [
          {name: '廉政举报平台', ref: ''}
        ]
      },
      tsjbzq: {
        title: '投诉举报专区',
        list: [
          {name: '违法和不良信息举报电话：4006018900', ref: ''},
          {name: '举报邮箱：tousujubao@meituan.com', ref: ''},
          {name: '网上有害信息举报', ref: ''}
        ]
      },
      zscq: {
        title: '知识产权',
        list: [
          {name: '知识产权维权平台', ref: ''}
        ]
      },
      sjzzrz: {
        title: '商家自助入驻美团入口',
        list: [
        ]
      },
      gyszc: {
        title: '供应商注册入口',
        list: [
        ]
      },
    }
  }
};
</script>
<style>

.a{
  border-top: solid 1px rgb(204, 204, 204);
  width: 1110px; 
  margin: 0 auto 30px auto;
  padding: 10px 45px 40px 45px; 
  overflow: hidden;
}

</style>