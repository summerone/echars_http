<template>
  <div class="tableizer-table">
    <table class="wid_b98  clborder">
      <tr>
        <td colspan="4" class="columns-center f24 bold" align="center" ><h4><b>增值税纳税申报表（小规模纳税人适用）附列资料</b></h4></td>
      </tr>
      <tr>
        <td  colspan="4" class="columns-center fill_sksssj" id="fill_sksssj" align="center">税款所属期：  年  月 日至  年 月 日</td>
      </tr>
      <tr>
        <td colspan="2" class="columns-left" id="nsrsbh">纳税人识别号：</td>
        <td colspan="2" class="columns-right" id="fill_tbrq">填表日期：    年  月  日</td>
      </tr>
      <tr>
        <td  colspan="2"  class="columns-left fill_nsrmcgz" id="fill_nsrmcgz">纳税人名称（公章）：</td>
        <td  colspan="2" class="columns-right" align="right">金额单位：元至角分</td>
      </tr>
    </table>
    <div class="overflow_table t50">
      <table  class="wid_b98  table-hover" border="1">
        <thead>
        <tr>
          <td colspan="4" class="wid_b98 table-hover  bold columns-center"  align="center" >应税服务扣除额计算</td>
        </tr>
        <tr class=" columns-center"  align="center" >
          <td width="25%">期初余额</td>
          <td  width="25%">本期发生额</td>
          <td  width="25%">本期扣除额</td>
          <td  width="25%">期末余额</td>
        </tr>
        <tr class=" columns-center"  align="center" >
          <td>1</td>
          <td>2</td>
          <td>3（3≤1＋2之和，且3≤5）</td>
          <td >4＝1＋2－3</td>
        </tr>
        </thead>
        <tbody id="M_SMALL_SCALE_ZZSSBFB1">
        <tr>
          <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBFB1_0_1" name="sbjl_xgmzzs.fb1List[0].qcye" ></td>
          <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBFB1_0_2" name="sbjl_xgmzzs.fb1List[0].bqfse"></td>
          <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBFB1_0_3" name="sbjl_xgmzzs.fb1List[0].bqkce"></td>
          <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBFB1_0_4" name="sbjl_xgmzzs.fb1List[0].qmye"></td>
        </tr>
        </tbody>
        <thead>
        <tr>
          <td colspan="4" class="wid_b98 table-hover  bold columns-center"  align="center" >应税服务计税销售额计算</td>
        </tr>
        <tr class=" columns-center"  align="center" >
          <td>全部含税收入</td>
          <td>本期扣除额</td>
          <td>含税销售额</td>
          <td>不含税销售额</td>
        </tr>
        <tr class=" columns-center"  align="center" >
          <td>5</td>
          <td>6=3</td>
          <td>7＝5－6</td>
          <td>8＝7÷1.03</td>
        </tr>
        </thead>
        <tbody id="M_SMALL_SCALE_ZZSSBFB1MX">
        <tr>
          <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBFB1_0_5" name="sbjl_xgmzzs.fb1mxList[0].qbhssr"></td>
          <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBFB1_0_6" name="sbjl_xgmzzs.fb1mxList[0].bqkce"></td>
          <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBFB1_0_7" name="sbjl_xgmzzs.fb1mxList[0].hsxse"></td>
          <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBFB1_0_8" name="sbjl_xgmzzs.fb1mxList[0].bhsxse"></td>
        </tr>
        </tbody>
      </table>
      <div class="block15"></div>
    </div>
  </div>

</template>

<script>
    export default {
        name: ' ',
        data () {
            return {
                msg: ' '
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .overflow_table{
    background-color: inherit;
  }
</style>
