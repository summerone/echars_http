<template>
  <div>
    <!--头部-->
    <Row class="headerLeftContent text-center">
      <Col span="9">
      <div class="headerLeft ">
        <span>{{time}}</span>
      </div>
      </Col>
      <Col span="6" class="headerText">
      <img src="../../assets/images/logo.png" alt="">
      <span>成都市国家税务局</span>
      </Col>
      <Col span="9">
      <Row>
        <Col span="20">
        <div class="headerright">
          <span class="name">欢迎你：<span>{{curUser}}</span></span>
          <span class="layout cursor" @click="logout"><i class="iconfont icon-icon"></i>退出</span>
        </div>
        </Col>
        <Col span="4" class="t-r cursor">
        <Tooltip content="单位：万元" placement="left">
          <i class="iconfont vc cf icon-help"></i><span class="cf vc ml5">帮助</span>
        </Tooltip>
        </Col>
      </Row>
      </Col>
    </Row>
    <Row style="margin-bottom: 10px;">
      <Col :xs="{ span: 4}" :lg="{ span: 3 }">
      <Dropdown class="dropdown " @on-click="toggle_qk">
        <a href="javascript:void(0)">
          <i class="iconfont icon-kuaijiecaidan"></i>
          {{qk_text}}
          <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list" style="text-align: center">
          <DropdownItem v-for="(item, index) in qk_obj" :key="index" :name="item.name">{{item.name}}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </Col>
      <!--时间选择-->
      <Col :xs="{ span: 5, offset: 12 }" :lg="{ span: 4, offset: 15 }" class="hoverMao" v-if="juck == 'oneflore'">
      <div style="width: 100%" class="text-center">
        <a href="javascript:void(0)" class=" colorBlue ">
          <i class="verticalMiddl iconfont icon-fanhui"></i>
          <span class="mr40 ml40 cf cursor" @click="isShow = true">本期</span>
          <i class="verticalMiddl iconfont icon-iconfontzhizuobiaozhun19"></i>
        </a>
      </div>
      <div class="dropdownList" v-show="isShow">
        <div class="colorBlue cursor" @click="toggle('thisYear')">本期
          <!--<i class="iconfont icon-gouxuan pull-right" v-show="thisYear"></i>-->
          <span>{{datafast}}/{{datalast}}</span>
        </div>
        <div class="colorBlue cursor" @click="toggle('lastYear')">上期
          <i class="iconfont icon-gouxuan pull-right" v-show="lastYear"></i>
          <span>{{shangFast }}/{{shangLast}}</span>
        </div>
        <div>
          <span class="colorBlue mr10">起</span>
          <DatePicker @on-change="datafastFun" class="inputDate" type="month" placeholder="起始日期"
                      style="width:80%"></DatePicker>
        </div>
        <div>
          <span class="colorBlue mr10">止</span>
          <DatePicker @on-change="datalastFun" class="inputDate"  type="month" placeholder="结束日期"
                      style="width: 80%"></DatePicker>
        </div>
        <div class="btn__group text-center">
          <button class="btn__item btn__item_confirm" @click="sure">确定</button>
          <button class="btn__item btn__item_cancel" @click="isShow = false">取消</button>
        </div>
      </div>
      </Col>
      <!--区域切换-->
      <Col :xs="{ span: 3}" :lg="{ span: 2 }" class="right" v-if="juck == 'oneflore'">
      <Dropdown class="dropdown">
        <a href="javascript:void(0)">
          {{nameMc}}
          <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list" style="text-align: center;height:200px;overflow: auto">
          <DropdownItem @click.native="qyqhuan('','全成都')">全成都</DropdownItem>
          <DropdownItem @click.native="qyqhuan(item.swjgdm,item.swjgmc)" v-for="item in AreaListList"
                        :key="item.swjgdm">{{item.swjgmc}}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </Col>
    </Row>
    <!--第一层页面-->
  </div>
</template>

<script>
  import Cookie from '../../assets/common/cookie'
  import eventBus from '../../assets/common/eventBus'
  export default {
      //juck 用于判断是否显示时间选择，区域切换
    props: ['AreaListList','juck'],
    name: 'headers',
    data() {
      return {
        curUser: '', //当前登录用户名
        now: '', //当前时间
        time: '', // 格式化后的当前时间
        datafast: '',//时间起
        shangFast: '',
        datalast: '',//时间止
        shangLast: '',
        swjgdm: '',//税务机关代码
        isShow: false, //时间弹框
        thisYear: false,
        lastYear: false,
        qk_obj: [{name: '整体情况'}, {name: '集团情况'}, {name: '企业情况'}, {name: '数据白板'}],
        qk_text: '整体情况', //情况
        nameMc: '全成都'
      }
    },
    watch: {
      //实时时间显示
      now: function () {
        this.time = this.tool.toDateString(this.now, 'yyyy-MM-dd HH:mm:ss');
      }
    },
    mounted: function () {
      let self = this;
      setInterval(function () {
        self.now = new Date().getTime();
        switch (sessionStorage.getItem("headerJuck")) {
          case 'oneflore':
            self.qk_text = '整体情况';
            break;
          case 'twoflore':
            self.qk_text = '集团情况';
            break;
          case 'treenflore':
            self.qk_text = '企业情况';
            break;
          case 'lostFlore':
            self.qk_text = '数据白板';
            break;
        }
      }, 1000);
      //获取用户名
      self.curUser = Cookie.getCookie('username');
      eventBus.$on('name', function (val) {
        self.nameMc = val;
      });
      eventBus.$on('swjgdmChange', function (val) {
        self.swjgdm = val;
      });
    },
    methods: {
      //时间弹框
      toggle: function (type) {
        switch (type) {
          case 'thisYear':
            this.thisYear = true;
            this.lastYear = false;
            break;
          case 'lastYear':
            this.thisYear = false;
            this.lastYear = true;
            break;
          default:
            return;
        }
      },
      //情况切换
      toggle_qk: function (name) {
        this.$emit('isjtqy',true);
        this.qk_text = name;
        switch (name) {
          case '整体情况':
            this.$emit('headerJuck', {flore: 'oneflore', blooen: true});
            this.$emit('init', {swjgdmChange: "", fast: '', last: ''});
            sessionStorage.setItem("headerJuck", 'oneflore');
            break;
          case '集团情况':
            this.$emit('headerJuck', {flore: 'twoflore', blooen: true});
            sessionStorage.setItem("headerJuck", 'twoflore');
            break;
          case '企业情况':
            this.$emit('headerJuck', {flore: 'treenflore', blooen: true});
            sessionStorage.setItem("headerJuck", 'treenflore');
            break;
          case '数据白板':
            this.$emit('headerJuck', {flore: 'lostFlore', blooen: true});
            this.$emit('white_cf', null);
            sessionStorage.setItem("headerJuck", 'lostFlore');
            break;
        }
      },
      //退出登录
      logout: function () {
        let self = this;
        self.$http.post('/user/loginOut')
          .then(res => {
            let data = res.data;
            if (data.code === 100) {
              self.$router.push('/login');
            } else {
              self.$Message.error(data.msg);
            }
          })
      },
      qyqhuan: function (swjgdm, name) {//区域的切换
        eventBus.$emit('name', name);
        this.nameMc = name;
        this.swjgdm = swjgdm;
        if (this.nameMc == '全成都') {
          this.$emit('headerJuck', {flore: 'oneflore', blooen: true});
        }else{
          this.$emit('headerJuck', {flore: 'oneflore', blooen: false});
        }
        this.$emit('init', {swjgdmChange: swjgdm? swjgdm:'', fast: this.datafast, last: this.datalast}); //后台处理 % 号
      },
      datafastFun: function (e) {//时间起
        this.datafast = e;
        eventBus.$emit('datafast', this.datafast);
        if(!this.datafast){
          this.shangFast = '';
          return false;
        }
        let nummer = Number(this.datafast.substring(3, 4)) - 1;
        this.shangFast = this.replacePos(this.datafast, 4, nummer);
      },
      datalastFun: function (e) {//时间止
        this.datalast = e;
        eventBus.$emit('datalast', this.datalast);
        if(!this.datalast){
          this.shangLast = '';
          return false;
        }
        let nummer = Number(this.datalast.substring(3, 4)) - 1;
        this.shangLast = this.replacePos(this.datalast, 4, nummer);
      },
      replacePos: function (strObj, pos, replacetext) {//转换本期的时间函数
        var str = strObj.substr(0, pos - 1) + replacetext + strObj.substring(pos, strObj.length);
        return str;
      },
      sure: function () {//时间模糊搜索
        this.isShow = false;
        if(this.datafast){
          if(!this.datalast){
            this.$Message.error('起止时间不能为空！');
            return false;
          }
        }
        if(this.datalast){
          if(!this.datafast){
            this.$Message.error('起止时间不能为空！');
            return false;
          }
        }
        if(new Date(this.datafast) > new Date(this.datalast)){
          this.$Message.error('查询时间起不能大于时间止！');
          return false;
        }
        if(new Date(this.datafast) > new Date() || new Date(this.datalast) > new Date()){
          this.$Message.error('所选时间不能大于当前时间！');
          return false;
        }
        this.$emit('init', {swjgdmChange: this.swjgdm, fast: this.datafast, last: this.datalast});
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dropdownList {
    /*display: none;*/
    width: 100%;
    position: absolute;
    z-index: 1000;
    background: #113B85;
    border: 1px solid #445FA4;
    padding: 5px 10px;
    border-radius: 8px;
  }

  .hoverMao:hover div.dropdownList {
    display: block;
  }

  .colorBlue {
    line-height: 38px;
  }

  .headerText img {
    height: 40px;
    margin-right: 18px;
  }

  .headerLeft span {
    color: #fff;
    line-height: 38px;
  }

  .headerText span {
    color: #fff;
    font-size: 20px;
  }

  .headerLeftContent {
    padding: 10px;
  }

  .headerLeft {
    height: 40px;
    background: url(../../assets/images/headleft.png) no-repeat;
    background-size: 80% 100%;
    background-position: 100% 0px;
  }

  .headerright .name {
    margin-right: 15px;
  }

  .headerright .layout {
    margin-left: 10px;
  }

  .headerright > span + span i {
    vertical-align: middle;
    margin-right: 8px;
  }

  .headerright {
    height: 40px;
    background: url(../../assets/images/headright.png) no-repeat;
    background-size: 80% 100%;
    color: #fff;
    line-height: 38px;
  }

  /*btn*/
  .btn__group {
    margin: 10px 0;
  }

  .btn__item {
    width: 64px;
    height: 30px;
    line-height: 30px;
    border-radius: 20px;
    border: 1px solid #405faf;
    margin-left: 5px;
    cursor: pointer;
  }

  .btn__item:hover {
    opacity: 0.8;
  }

  .btn__item_confirm {
    color: #fff;
    background-color: #102667;
  }

  .btn__item_cancel {
    color: #55adea;
    background-color: #1c4a9a;
  }
</style>
