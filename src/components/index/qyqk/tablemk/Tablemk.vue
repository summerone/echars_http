<template>
  <div class="qyqk-table__content">
    <h3 class="tablemk_title chart__title">企业报表</h3>
    <!--导出报表-->
    <div class="tablemk_dcbb">导出报表</div>
    <!--查询模块-->
    <div class="mt20 mb20 clearfix">
      <div class="search__wrap ml20">
        <span class="mr10 disp-ib select__wrap">
          <label class="cf vc">征收项目：</label>
          <Select v-model="zsxm_dm"  style="width:100px;">
            <!--<Option :value="10101" >增值税</Option>-->
            <Option v-for="item in xmList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </span>

        <span class="mr10 disp-ib select__wrap" >
          <label class="cf">所属时期：</label>
          <DatePicker class="timeList" type="daterange" placement="bottom-end" split-panels
                      @on-change="handleChange"
                      placeholder="请选择申报所属日期" style="width: 200px;"></DatePicker>
      </span>

        <Button @click.native="getTablexx" type="primary" shape="circle" icon="ios-search" class="ml20">查询</Button>
      </div>
    </div>
    <!--图切换还有更多-->
    <div class="tab_more">
      <!--下拉-->
      <div class="drop-down" @click="isShow_select = !isShow_select">
        <Icon type="arrow-down-b" class="f18"></Icon>
      </div>
      <!--&lt;!&ndash;下拉选择表&ndash;&gt;-->
      <div class="table_leixing" v-show="isShow_select" @mouseleave="isShow_select = !isShow_select">
        <div class="table_leixing_search">
          <input type="text" class="table_leixing_search_input">
          <i class="iconfont icon-iconfontzhizuobiaozhun22 table_leixing_search_icon"></i>
        </div>
        <div class="table_leixing_name">
          <ul>
            <li v-for="(el,index) in tab_list"  @click="toggleTable(index)">{{el.title}}</li>
          </ul>
        </div>
      </div>
      <!--tab-->
      <div class="tab__wrap">
        <span class="tab tab__one f12 cursor f-color"
              v-for="(item,index) in tab_list"
              :key="index"
              :class="{active: item.state}"
              :style="[{'left': (index == 0?0: (-8*index)) + 'px'},{'font-size': '12px'},{'z-index': 20 - index}]"
              @click="toggleTable(index)">
          {{item.title}}
        </span>
      </div>

      <!--左右切换-->
      <div class="two__witch">
        <!--<span class="mr10 disp-ib select__wrap">-->
          <!--<label class="cf vc">征收项目：</label>-->
          <!--<Select v-model="xm_name" size="small" style="width:100px;height: 25px;">-->
            <!--<Option v-for="item in xmList" :value="item.value" :key="item.value">{{ item.label }}</Option>-->
          <!--</Select>-->
        <!--</span>-->
        <!--<span class="mr10 disp-ib select__wrap" >-->
          <!--<label class="cf timeList">所属时期：</label>-->
          <!--<DatePicker class="timeList" type="daterange" placement="bottom-end" split-panels-->
                      <!--placeholder="请选择申报所属日期" style="width: 200px;height:25px;"></DatePicker>-->
        <!--</span>-->
          <Icon class="two__witch_item" type="chevron-left"></Icon>
        <Icon class="two__witch_item" type="chevron-right"></Icon>
      </div>
      <a href="javascript:;" class="more cursor f-color">
        <!--更多-->
        <!--<i class="iconfont icon-gengduo"></i>-->
      </a>
      <span class="bot__line"></span>
      <span class="dot__line">
        <span class="line"></span>
      </span>
      <!--<img class="picture" src="../../../../assets/images/box__border.png">-->
    </div>
    <!--表格标题-->
    <!--<div class="table__title t-c cf">-->
      <!--<h3 class="chart__title">增值税纳税申报表（小规模纳税人使用）</h3>-->
      <!--<h5 style="font-weight: normal;">税款所属期：<span>2018年02月01日</span><span>2018年02月28日</span></h5>-->
    <!--</div>-->
    <!--<div class="qyqk-table__wrap table__wrap">-->
      <!--<table>-->
        <!--<tbody>-->
          <!--<tr>-->
            <!--<td rowspan="8" class="t-c">(一)计税依据</td>-->
            <!--<td rowspan="2" class="t-c">项目</td>-->
            <!--<td rowspan="2" class="t-c">栏次</td>-->
            <!--<td colspan="2" class="t-c">本期数</td>-->
            <!--<td colspan="2" class="t-c">本年累计</td>-->
          <!--</tr>-->
          <!--<tr>-->
            <!--<td class="t-c">货物及劳务</td>-->
            <!--<td class="t-c">服务、不动产和无形资产</td>-->
            <!--<td class="t-c">货物及劳务</td>-->
            <!--<td class="t-c">服务、不动产和无形资产</td>-->
          <!--</tr>-->
          <!--<tr>-->
            <!--<td>(一)应征增值税不含税销售额(3%征收税)</td>-->
            <!--<td class="t-c">1</td>-->
            <!--<td class="t-r">0.00</td>-->
            <!--<td class="t-r">0.00</td>-->
            <!--<td class="t-r">0.00</td>-->
            <!--<td class="t-r">0.00</td>-->
          <!--</tr>-->
          <!--<tr>-->
            <!--<td>税务机关代开增值税专用发票不含税销售额</td>-->
            <!--<td class="t-c">2</td>-->
            <!--<td class="t-r">0.00</td>-->
            <!--<td class="t-r">0.00</td>-->
            <!--<td class="t-r">0.00</td>-->
            <!--<td class="t-r">0.00</td>-->
          <!--</tr>-->
          <!--<tr>-->
            <!--<td>税控器具开具的普通发票不含税销售额</td>-->
            <!--<td class="t-c">3</td>-->
            <!--<td class="t-r">&#45;&#45;</td>-->
            <!--<td class="t-r">&#45;&#45;</td>-->
            <!--<td class="t-r">&#45;&#45;</td>-->
            <!--<td class="t-r">&#45;&#45;</td>-->
          <!--</tr>-->
          <!--<tr>-->
            <!--<td>(二)应征增值税不含税销售额(5%征收税)</td>-->
            <!--<td class="t-c">4</td>-->
            <!--<td class="t-r">&#45;&#45;</td>-->
            <!--<td class="t-r">&#45;&#45;</td>-->
            <!--<td class="t-r">&#45;&#45;</td>-->
            <!--<td class="t-r">&#45;&#45;</td>-->
          <!--</tr>-->
          <!--<tr>-->
            <!--<td>税务机关代开增值税专用发票不含税销售额</td>-->
            <!--<td class="t-c">5</td>-->
            <!--<td class="t-r">0.00</td>-->
            <!--<td class="t-r">0.00</td>-->
            <!--<td class="t-r">0.00</td>-->
            <!--<td class="t-r">0.00</td>-->
          <!--</tr>-->
          <!--<tr>-->
            <!--<td>税控器具开具的普通发票不含税销售额</td>-->
            <!--<td class="t-c">6</td>-->
            <!--<td class="t-r">0.00</td>-->
            <!--<td class="t-r">0.00</td>-->
            <!--<td class="t-r">0.00</td>-->
            <!--<td class="t-r">0.00</td>-->
          <!--</tr>-->
        <!--</tbody>-->
      <!--</table>-->
    <!--</div>-->
    <div class="qyqk-table__wrap table__wrap">
      <table v-show="isShow_tableList">
      <thead>
        <tr>
          <td>报表名称</td>
          <td>申报日期</td>
          <td>应补退税额</td>
          <td>所属时期起</td>
          <td>所属时期止</td>
          <td>申报方式</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in ysbxx" :key="index">
          <td class="pointer pzzl_mc" @click="get_ysbxxMx(item.pzzl_dm, item.sbuuid)">{{item.pzzl_mc}}</td>
          <td>{{item.sbrq}}</td>
          <td>{{item.ybtse}}</td>
          <td>{{item.sssq_q}}</td>
          <td>{{item.sssq_z}}</td>
          <td>{{item.sbfs_mc}}</td>
        </tr>
      </tbody>
    </table>
      <component :is="currTable" v-show="isShow_currTable" :data="ysbmx"></component>
    </div>
  </div>
</template>
<script>
  //增值税表
  import table_zzs_xgm_fb1_lb from '../Reportform/zzs/dy_table_zzs_xgm_fb1_lb.vue'
  import table_zzs_xgm_fb1 from '../Reportform/zzs/Dy_table_zzs_xgm_fb1_xb.vue'
  import table_zzs_xgm_fb4_lb from '../Reportform/zzs/Dy_table_zzs_xgm_fb4_lb.vue'
  import table_zzs_xgm_fb4 from '../Reportform/zzs/Dy_table_zzs_xgm_fb4_xb.vue'
  import table_zzs_xgm_fb5_lb from '../Reportform/zzs/Dy_table_zzs_xgm_fb5_lb.vue'
  import table_zzs_xgm_fb5 from '../Reportform/zzs/Dy_table_zzs_xgm_fb5_xb.vue'
  import table_zzs_xgm_fb6 from '../Reportform/zzs/Dy_table_zzs_xgm_fb6.vue'
  import table_zzs_xgm_zb_lb from '../Reportform/zzs/Dy_table_zzs_xgm_zb_lb.vue'
  import table_zzs_xgm_zb_xb from '../Reportform/zzs/Dy_table_zzs_xgm_zb_xb.vue'
  import table_zzs_xgm_zb from '../Reportform/zzs/Dy_table_zzs_xgm_zb_zxb.vue'
  export default {
    name: 'Tablemk',
    props: ['qyjbxx'],
    components: {
      table_zzs_xgm_fb1_lb,
      table_zzs_xgm_fb1,
      table_zzs_xgm_fb4_lb,
      table_zzs_xgm_fb4,
      table_zzs_xgm_fb5_lb,
      table_zzs_xgm_fb5,
      table_zzs_xgm_fb6,
      table_zzs_xgm_zb_lb,
      table_zzs_xgm_zb_xb,
      table_zzs_xgm_zb
    },
    data(){
        return{
            tab1: true,
            tab2: false,
            tab3: false,
            isShow_select: false,
            zsxm_dm: '', //征收项目名称
            sssq_q: '', //所属期起
            sssq_z: '', //所属期止
            xmList: [
              {value: '10101',label: '增值税'},
              {value: '10104',label: '所得税'},
              {value: '10102',label: '消费税'},
            ],
            tab_list: [
              {title: '已申报信息查询', state: true,filename:''},
            ],
            ysbxx: [], //已申报信息
            tableList: [], //表列表
            ysbmx: null, //已申报明细
            currTable: '', //当前表哦
            isShow_tableList: true,
            isShow_currTable: false
        }
    },
    mounted(){
       let self = this;
       self.$nextTick(() => {
//           self.getTablexx();
       })
    },
    methods: {
        //获取表信息
        getTablexx: function () {
            let self = this;

//            if(!self.zsxm_dm){
//                self.$Message.info('请选择征收项目类型！');
//                return false;
//            }
//            if(!self.sssq_q || !self.sssq_z){
//                self.$Message.info('请选择所属时期！');
//                return false;
//            }
            self.$http.post('/ysbxxcx/ysbxxcx',{
              djxh: '10115101000068180820',
              zsxm_dm: '10101',
              sssq_q: '2016-05-01',
              sssq_z: '2018-04-13'
            })
              .then((res) => {
                console.log('qytablexx',res);
                if(res.data.code !== 100){
                    self.$Message.info(res.msg);
                    return false;
                }
                self.ysbxx = res.data.data.data.business.returnData;
              })
        },
        //点击查看表明细
        get_ysbxxMx: function (pzzl_dm, sbuuid) {
            let self = this;
            let ret1 = [];
            self.$http.post('/ysbxxcx/ysbxxMx',{
              pzzl_dm: pzzl_dm,
              sbuuid: sbuuid,
            })
              .then((res) => {
                console.log('ysbxxMx',res);
                if(res.data.code !== 100){
                  self.$Message.info(res.msg);
                  return false;
                }
                self.tableList = res.data.data.data.loadTable.tableList;

                self.tableList.forEach((el,i) => {
                    if(i === 0){
                      el['state'] = true;
                      //显示第一张详情表
                      self.currTable = el.filename;
                      self.isShow_tableList = false;
                      self.isShow_currTable = true;
                    }else{
                      el['state'] = false;
                    }
                });
                //生成新的表名列表
                self.tab_list = [{title: '已申报信息查询', state: false,filename:''}].concat(self.tableList);

                //详情表数据
                self.ysbmx = res.data.data.data.ysbmx.business.returnData;
                self.ysbmx.sssq_q = self.tool.toDateString(self.sssq_q, 'yyyy年MM月dd日');
                self.ysbmx.sssq_z = self.tool.toDateString(self.sssq_z, 'yyyy年MM月dd日');
              })
        },
      //获取查询起止日期
        handleChange: function (t) {
          this.sssq_q = t[0];
          this.sssq_z = t[1];
        },
        //table切换
        toggleTable: function (index) {
            let self = this;

            self.isShow_select = false;
            for(let i = 0; i < self.tab_list.length; i++){
                if(i === index){
                  self.tab_list[i].state = true;

                  self.currTable = self.tab_list[i].filename;

                  //判断切换查询列表与详情表
                  if(i !== 0){
                    self.isShow_tableList = false;
                    self.isShow_currTable = true;
                  }else{
                    self.isShow_tableList = true;
                    self.isShow_currTable = false;
                  }

                }else{
                  self.tab_list[i].state = false;
                }
            }
        },
    }
  }
</script>
<style scoped="">
  .qyqk-table__content{
    position: relative;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: #093a72;
    background-image: url('../../../../assets/images/box_hsline.png'),
    url('../../../../assets/images/box_hsline.png'),
    url('../../../../assets/images/box_ssline.png'),
    url('../../../../assets/images/box_ssline.png'),
    url('../../../../assets/images/titleftbj.png'),
    url('../../../../assets/images/titrightbj.png');
    background-repeat: no-repeat;
    background-position: top center,bottom center,left center, right center, left top,right top;
    background-origin: padding-box,padding-box,padding-box,padding-box,content-box,content-box;
    background-size: 98% 4px, 98% 4px,auto 98%,auto 98%,auto auto,auto auto;
  }
  .table__title{
    margin-top: 110px;
  }
  thead tr td{
    text-align: center;
  }
  .qyqk-table__wrap{
    margin-top: 30px;
    color: #fff;
    /*margin-top: 20px;*/
    padding: 0 20px;
    max-height: 300px;
  }
  .table__wrap{
    overflow-x: hidden;
    overflow-y: auto;
  }
  .table__wrap::-webkit-scrollbar{
    width: 10px;
    display: block;
  }
  .table__wrap::-webkit-scrollbar-track{
    background-color: #092964 ;
  }
  .table__wrap::-webkit-scrollbar-thumb{
    width: 100%;
    min-height: 20px;
    background-color: #3d64b1;
  }
  table,td{
    border-collapse: collapse;
  }
  td{
    border: 1px solid #3e72ac;
    padding: 8px 10px;
  }
  /*.qyqk-table__wrap td{*/
    /*border: 1px solid #3e72ac;*/
    /*padding: 8px 10px;*/
  /*}*/
  .tablemk_title{
    /*position: absolute;*/
    /*left: 0;*/
    /*right: 0;*/
    color: #fff;
    text-align: center;
  }
  .tablemk_dcbb{
    position: absolute;
    top: 10px;
    right: 100px;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    color: #fff;
    background-image: url('../../../../assets/images/dao_bot.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  /*选择表名*/
  .table_leixing{
    position: absolute;
    left: 50px;
    top: 38px;
    color: #60c0fb;
    padding: 0 0 24px 0;
    border-radius: 10px;
    border: 1px solid #4187CA;
    background-color: #113b85;
  }
  .table_leixing_name{
    padding: 0 30px;
    max-height: 200px;
    overflow: auto;
  }
  .table_leixing_name li{
    /*text-align: left;*/
    line-height: 30px;
    cursor: pointer;
    padding-left: 10px;
  }
  .table_leixing_name li:hover{
    background-color: rgba(0,0,0,.1);
  }
  .table_leixing_search{
    position: relative;
    margin: 10px 30px;
  }
  .table_leixing_search_input{
    height: 32px;
    width: 250px;
    line-height: 32px;
    background-color: #062963;
    border: none;
    border-radius: 20px;
    text-indent: 14px;
    color: #fff;
  }
  .table_leixing_search_icon{
    display: inline-block;
    position: absolute;
    right: 12px;
    top: 2px;
    font-size: 18px;
    color: #fff;
  }
  /*切换 css - start*/
  .tab_more{
    position: relative;
    /*position: absolute;*/
    /*left: 20px;*/
    /*right: 20px;*/
    /*top: 70px;*/
    /*z-index: 99;*/
    height: 38px;
    line-height: 41px;
    /*background-image: url(../../../../assets/images/box__border.png);*/
    /*background-position: left bottom;*/
    /*background-repeat: no-repeat;*/
    /*background-size: 100% 32px;*/
  }
  .tab__wrap{
    position: absolute;
    left: 100px;
    bottom: 0;
  }
  .tab{
    position: relative;
    vertical-align: bottom;
    display: inline-block;
    white-space: nowrap;
    padding-left: 14px;
    padding-right: 30px;
    height: 28px;
    line-height: 30px;
    text-align: left;
    background-image: url(../../../../assets/images/box_li.png);
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100% 100%;
  }
  .more{
    display: inline-block;
    position: absolute;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 200;
    width: 60px;
    height: 38px;
    text-align: right;
    font-size: 12px;
    line-height: 14px;
    background-image: url('../../../../assets/images/line.png');
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: 100% auto;
  }
  .bot__line{
    display: inline-block;
    height: 1px;
    /*width: 200px;*/
    background-color: #4187CA;
    position: absolute;
    left: 27px;
    bottom: 0;
    right: 60px;
  }
  .f-color{
    color: #60c0fb;
  }
  .active{
    z-index: 111;
    height: 32px;
    line-height: 38px;
    color: #fff !important;
    background-image: url(../../../../assets/images/botselct.png);
    background-size: 100% 100%;
  }
  .two__witch{
    position: absolute;
    right: 80px;
    bottom: 5px;
  }
  .two__witch_item{
    display: inline-block;
    width: 22px;
    height: 22px;
    line-height: 22px;
    cursor: pointer;
    color: #4f8acc;
    font-size: 18px;
    vertical-align: bottom;
    text-align: center;
    background-color: #33559f;
  }
  .timeList{
    /*display: inline-block;*/
    /*height: 23px;*/
    /*line-height: 23px;*/
    vertical-align: middle;
  }
  .two__witch_item:hover{
    opacity: 0.8;
  }
  .drop-down{
    display: inline-block;
    position: absolute;
    left: 60px;
    bottom: 4px;
    width: 24px;
    height: 24px;
    line-height: 24px;
    font-size: 20px;
    text-align: center;
    color: #54bbf5;
    border: 1px solid #54bbf5;
    cursor: pointer;
    border-radius: 50%;
    background-color: #0c3a85;
  }
  .dot__line{
    position: absolute;
    bottom: -18px;
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid #4187CA;
    transform: rotate(-30deg);
  }
  .dot__line .line{
    position: absolute;
    top: 5px;
    left: 11px;
    display: inline-block;
    background-color: #4187CA;
    width: 20px;
    height: 1px;
  }
  /*切换 css - end*/

  .select__wrap{
    line-height: 1;
    vertical-align: middle;
  }
  .pzzl_mc:hover{
    color: #57A3F3;
    text-decoration: underline;
  }
</style>
