<template>
  <div class="tableizer-table">
    <table class="wid_b98  clborder">
      <tr>
        <td colspan="7" class="columns-center f24 bold" align="center"><h4><b>增值税减免税申报明细表</b></h4></td>
      </tr>
      <tr>
        <td colspan="7" class="columns-center fill_sksssj" id="fill_sksssj" align="center" >税款所属期：自   年   月  日至    年   月  日</td>
      </tr>
      <tr>
        <td  colspan="4" class="columns-left fill_nsrmcgz" id="fill_nsrmcgz" >纳税人名称（公章）：</td>
        <td colspan="3" class="columns-right" align="right">金额单位：元至角分</td>
      </tr>
    </table>
    <div class="overflow_table t90">
      <table class="wid_b98  table-hover" border="1">
        <thead>
        <tr>
          <td colspan="7" class=" columns-center">一、减税项目</td>
        </tr>
        <tr class=" columns-center"  align="center">
          <td rowspan="2" class=" columns-center wid_gd300" >减税性质代码及名称</td>
          <td rowspan="2" class=" columns-center wid_gd50" >栏次</td>
          <td>期初余额</td>
          <td>本期发生额</td>
          <td>本期应抵减税额</td>
          <td>本期实际抵减税额</td>
          <td>期末余额</td>
        </tr>
        <tr class=" columns-center"  align="center">
          <td>1</td>
          <td>2</td>
          <td>3=1+2</td>
          <td>4≤3</td>
          <td>5=3-4</td>
        </tr>
        </thead>
        <tbody id="M_SMALL_SCALE_ZZSJM_JSXM">

        </tbody>
        <thead>
        <tr>
          <td colspan="7" class=" columns-center"  align="center">二、免税项目</td>
        </tr>
        <tr class=" columns-center"  align="center">
          <td rowspan="2" class=" columns-center wid_gd300"  align="center" >免税性质代码及名称</td>
          <td rowspan="2" class=" columns-center"  align="center" >栏次</td>
          <td>免征增值税项目<br>
            销售额</td>
          <td>免税销售额扣除项目<br>
            本期实际扣除金额</td>
          <td>扣除后免税销售额</td>
          <td>免税销售额<br>
            对应的进项税额</td>
          <td>免税额</td>
        </tr>
        <tr class=" columns-center"  align="center">
          <td>1</td>
          <td>2</td>
          <td>3=1-2</td>
          <td>4</td>
          <td>5</td>
        </tr>
        </thead>
        <tbody id="M_SMALL_SCALE_ZZSJM_MSXM">
        <tr>
          <td class="columns-center wid_gd300"  align="center" name="sbjl_xgmzzs.msxmList[0].jmxzdm" >合计</td>
          <td class="columns-center"  align="center" name="sbjl_xgmzzs.msxmList[0].lc">1</td>
          <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSJM_MSXM_0_4" name="sbjl_xgmzzs.msxmList[0].mzzzsxmxse"></td>
          <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSJM_MSXM_0_5" name="sbjl_xgmzzs.msxmList[0].msxsekcxmbqsjkcje"></td>
          <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSJM_MSXM_0_6" name="sbjl_xgmzzs.msxmList[0].kchmsxse"></td>
          <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSJM_MSXM_0_7" name="sbjl_xgmzzs.msxmList[0].msxsedydjxse"></td>
          <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSJM_MSXM_0_8" name="sbjl_xgmzzs.msxmList[0].mse"></td>
        </tr>
        <tr>
          <td class=" columns-center wid_gd300"  align="center" name="sbjl_xgmzzs.msxmList[1].jmxzdm">出口免税</td>
          <td class=" columns-center"  align="center" name="sbjl_xgmzzs.msxmList[1].lc">2</td>
          <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSJM_MSXM_1_4" name="sbjl_xgmzzs.msxmList[1].mzzzsxmxse"></td>
          <td class=" columns-right" align="right"  name="sbjl_xgmzzs.msxmList[1].msxsekcxmbqsjkcje">---</td>
          <td class=" columns-right" align="right"  name="sbjl_xgmzzs.msxmList[1].kchmsxse">---</td>
          <td class=" columns-right" align="right"  name="sbjl_xgmzzs.msxmList[1].msxsedydjxse">---</td>
          <td class=" columns-right" align="right"  name="sbjl_xgmzzs.msxmList[1].mse">---</td>
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

</style>
