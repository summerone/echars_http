<template>
  <div class="tableizer-table">
    <input id="xlbz"     type="hidden"  value="xb">
    <input id="sssq_z"   type="hidden" name="sbjl_xgmzzs.bt.qykhyh">
    <input id="pzzl_dm"  type="hidden">
    <table class="wid_b98  clborder">
      <tr>
        <td colspan="7" class="columns-center f24 bold" align="center" id="yemianbiaotou"><h4><b>增值税纳税申报表（小规模纳税人适用）</b></h4></td>
      </tr>
      <tr>
        <td  colspan="7" class="columns-center fill_sksssj" id="fill_sksssj" align="center" name="sbjl_xgmzzs.bt.hylxbm">税款所属期： {{data.sssq_q}}至 {{data.sssq_z}}</td>
      </tr>
      <tr>
        <td colspan="4" class="columns-left" id="nsrsbh" name="sbjl_xgmzzs.bt.qysbbh">纳税人识别号：</td>
        <td colspan="3" class="columns-right" id="fill_tbrq" name="sbjl_xgmzzs.bt.djlxbm">填表日期：    年  月  日</td>
      </tr>
      <tr>
        <td  colspan="4" class="columns-left fill_nsrmcgz" id="fill_nsrmcgz" name="sbjl_xgmzzs.bt.qysbmc">纳税人名称（公章）：</td>
        <td colspan="3" class="columns-right" align="right">金额单位：元至角分</td>
      </tr>

    </table>


    <table class="wid_b98"  border="1" >

      <tr class=" columns-center" align="center">
        <td rowspan="17" class=" wid_gd100">一、计税依据</td>
        <td rowspan="2" class=" columns-center wid_gd250" >项   目</td>
        <td  rowspan="2" class="wid_gd100"> 栏次</td>
        <td colspan="2"> 本期数</td>
        <td colspan="2"> 本年累计</td>
      </tr>
      <tr class=" columns-center" align="center">

        <td width="25%"> 货物及劳务</td>
        <td width="25%"> 服务、不动产和无形资产</td>
        <td width="25%"> 货物及劳务</td>
        <td width="25%"> 服务、不动产和无形资产</td>
      </tr>

      <tr>
        <td>（一）应征增值税不含税销售额（3%征收率）</td>
        <td class="columns-center" align="center"><span class="wid_gd100 ">1</span></td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_0_4" name="sbjl_xgmzzs.zbList[0].bqs_yshwjlw">{{data.zb[0].bqyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_0_5" name="sbjl_xgmzzs.zbList[0].bqs_ysfw">{{data.zb[0].bqysfw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_0_6" name="sbjl_xgmzzs.zbList[0].bnlj_yshwjlw">{{data.zb[0].bnyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_0_7" name="sbjl_xgmzzs.zbList[0].bnlj_ysfw">{{data.zb[0].bnysfw}}</td>
      </tr>
      <tr>
        <td class=" columnsem">税务机关代开的增值税专用发票不含税销售额</td>
        <td class=" columns-center" align="center">2</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_1_4" name="sbjl_xgmzzs.zbList[1].bqs_yshwjlw">{{data.zb[1].bqyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_1_5" name="sbjl_xgmzzs.zbList[1].bqs_ysfw">{{data.zb[1].bqysfw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_1_6" name="sbjl_xgmzzs.zbList[1].bnlj_yshwjlw">{{data.zb[1].bnyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_1_7" name="sbjl_xgmzzs.zbList[1].bnlj_ysfw">{{data.zb[1].bnysfw}}</td>
      </tr>
      <tr>
        <td class=" columnsem">税控器具开具的普通发票不含税销售额</td>
        <td class=" columns-center" align="center">3</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_2_4" name="sbjl_xgmzzs.zbList[2].bqs_yshwjlw">{{data.zb[2].bqyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_2_5" name="sbjl_xgmzzs.zbList[2].bqs_ysfw">{{data.zb[2].bqysfw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_2_6" name="sbjl_xgmzzs.zbList[2].bnlj_yshwjlw">{{data.zb[2].bnyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_2_7" name="sbjl_xgmzzs.zbList[2].bnlj_ysfw">{{data.zb[2].bnysfw}}</td>
      </tr>
      <tr>
        <td>（二）应征增值税不含税销售额（5%征收率）</td>
        <td class="columns-center" align="center">4</td>
        <td class="columns-right" align="right">---</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_3_5" name="sbjl_xgmzzs.zbList[3].bqs_ysfw">{{data.zb[3].bqysfw}}</td>
        <td class="columns-right" align="right">---</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_3_7" name="sbjl_xgmzzs.zbList[3].bnlj_ysfw">{{data.zb[3].bnysfw}}</td>
      </tr>
      <tr>
        <td class=" columnsem" align="center">税务机关代开的增值税专用发票不含税销售额</td>
        <td class=" columns-center" align="center">5</td>
        <td class="columns-right" align="right">---</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_4_5" name="sbjl_xgmzzs.zbList[4].bqs_ysfw">{{data.zb[4].bqysfw}}</td>
        <td class="columns-right" align="right">---</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_4_7" name="sbjl_xgmzzs.zbList[4].bnlj_ysfw">{{data.zb[4].bnysfw}}</td>
      </tr>
      <tr>
        <td class="columnsem">税控器具开具的普通发票不含税销售额</td>
        <td class="columns-center" align="center">6</td>
        <td class="columns-right" align="right">---</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_5_5" name="sbjl_xgmzzs.zbList[5].bqs_ysfw">{{data.zb[5].bqysfw}}</td>
        <td class="columns-right" align="right">---</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_5_7" name="sbjl_xgmzzs.zbList[5].bnlj_ysfw">{{data.zb[5].bnysfw}}</td>
      </tr>
      <tr>
        <td>（三）销售使用过的固定资产不含税销售额</td>
        <td class=" columns-center" align="center">7(7≥8)</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_6_4" name="sbjl_xgmzzs.zbList[6].bqs_yshwjlw">{{data.zb[6].bqyshw}}</td>
        <td class="columns-right" align="right">---</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_6_6" name="sbjl_xgmzzs.zbList[6].bnlj_yshwjlw">{{data.zb[6].bnysfw}}</td>
        <td class="columns-right" align="right">---</td>
      </tr>
      <tr>
        <td class="columnsem">其中：税控器具开具的普通发票不含税销售额</td>
        <td class=" columns-center" align="center">8</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_7_4" name="sbjl_xgmzzs.zbList[7].bqs_yshwjlw">{{data.zb[7].bqyshw}}</td>
        <td class="columns-right" align="right">---</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_7_6" name="sbjl_xgmzzs.zbList[7].bnlj_yshwjlw">{{data.zb[7].bnyshw}}</td>
        <td class="columns-right" align="right">---</td>
      </tr>
      <tr>
        <td>（四）免税销售额</td>
        <td class=" columns-center" align="center">9=10+11+12</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_8_4" name="sbjl_xgmzzs.zbList[8].bqs_yshwjlw">{{data.zb[8].bqyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_8_5" name="sbjl_xgmzzs.zbList[8].bqs_ysfw">{{data.zb[8].bqysfw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_8_6" name="sbjl_xgmzzs.zbList[8].bnlj_yshwjlw">{{data.zb[8].bnyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_8_7" name="sbjl_xgmzzs.zbList[8].bnlj_ysfw">{{data.zb[8].bnysfw}}</td>
      </tr>
      <tr>
        <td class="columnsem">其中：小微企业免税销售额</td>
        <td class=" columns-center" align="center">10</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_9_4" name="sbjl_xgmzzs.zbList[9].bqs_yshwjlw">{{data.zb[9].bqyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_9_5" name="sbjl_xgmzzs.zbList[9].bqs_ysfw">{{data.zb[9].bqysfw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_9_6" name="sbjl_xgmzzs.zbList[9].bnlj_yshwjlw">{{data.zb[9].bnyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_9_7" name="sbjl_xgmzzs.zbList[9].bnlj_ysfw">{{data.zb[9].bnysfw}}</td>
      </tr>
      <tr>
        <td class="columnsem">未达起征点销售额</td>
        <td class=" columns-center" align="center">11</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_10_4" name="sbjl_xgmzzs.zbList[10].bqs_yshwjlw">{{data.zb[10].bqyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_10_5" name="sbjl_xgmzzs.zbList[10].bqs_ysfw">{{data.zb[10].bqysfw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_10_6" name="sbjl_xgmzzs.zbList[10].bnlj_yshwjlw">{{data.zb[10].bnyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_10_7" name="sbjl_xgmzzs.zbList[10].bnlj_ysfw">{{data.zb[10].bnysfw}}</td>
      </tr>
      <tr>
        <td class="columnsem">其他免税销售额 </td>
        <td class=" columns-center" align="center">12</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_11_4" name="sbjl_xgmzzs.zbList[11].bqs_yshwjlw">{{data.zb[11].bqyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_11_5" name="sbjl_xgmzzs.zbList[11].bqs_ysfw">{{data.zb[11].bqysfw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_11_6" name="sbjl_xgmzzs.zbList[11].bnlj_yshwjlw">{{data.zb[11].bnyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_11_7" name="sbjl_xgmzzs.zbList[11].bnlj_ysfw">{{data.zb[11].bnysfw}}</td>
      </tr>
      <tr>
        <td>（五）出口免税销售额</td>
        <td class=" columns-center" align="center">13(13≥14)</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_12_4" name="sbjl_xgmzzs.zbList[12].bqs_yshwjlw">{{data.zb[12].bqyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_12_5" name="sbjl_xgmzzs.zbList[12].bqs_ysfw">{{data.zb[12].bqysfw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_12_6" name="sbjl_xgmzzs.zbList[12].bnlj_yshwjlw">{{data.zb[12].bnyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_12_7" name="sbjl_xgmzzs.zbList[12].bnlj_ysfw">{{data.zb[12].bnysfw}}</td>
      </tr>
      <tr>
        <td class="columnsem">其中：税控器具开具的普通发票销售额</td>
        <td class=" columns-center" align="center">14</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_13_4" name="sbjl_xgmzzs.zbList[13].bqs_yshwjlw">{{data.zb[13].bqyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_13_5" name="sbjl_xgmzzs.zbList[13].bqs_ysfw">{{data.zb[13].bqysfw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_13_6" name="sbjl_xgmzzs.zbList[13].bnlj_yshwjlw">{{data.zb[13].bnyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_13_7" name="sbjl_xgmzzs.zbList[13].bnlj_ysfw">{{data.zb[13].bnysfw}}</td>
      </tr>
      <tr>
        <td>核定销售额</td>
        <td class=" columns-center" align="center">15</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_14_4" name="sbjl_xgmzzs.zbList[14].bqs_yshwjlw">{{data.zb[14].bqyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_14_5" name="sbjl_xgmzzs.zbList[14].bqs_ysfw">{{data.zb[14].bqysfw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_14_6" name="sbjl_xgmzzs.zbList[14].bnlj_yshwjlw">{{data.zb[14].bnyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_14_7" name="sbjl_xgmzzs.zbList[14].bnlj_ysfw">{{data.zb[14].bnysfw}}</td>
      </tr>
      <tr>
        <td rowspan="9" class=" wid_gd100 columns-center" align="center" >二、税款计算</td>
        <td>本期应纳税额</td>
        <td class=" columns-center" align="center">16</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_15_4" name="sbjl_xgmzzs.zbList[15].bqs_yshwjlw">{{data.zb[15].bqyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_15_5" name="sbjl_xgmzzs.zbList[15].bqs_ysfw">{{data.zb[15].bqysfw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_15_6" name="sbjl_xgmzzs.zbList[15].bnlj_yshwjlw">{{data.zb[15].bnyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_15_7" name="sbjl_xgmzzs.zbList[15].bnlj_ysfw">{{data.zb[15].bnysfw}}</td>
      </tr>
      <tr>
        <td>核定应纳税额 </td>
        <td class=" columns-center" align="center">17</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_16_4" name="sbjl_xgmzzs.zbList[16].bqs_yshwjlw">{{data.zb[16].bqyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_16_5" name="sbjl_xgmzzs.zbList[16].bqs_ysfw">{{data.zb[16].bqysfw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_16_6" name="sbjl_xgmzzs.zbList[16].bnlj_yshwjlw">{{data.zb[16].bnyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_16_7" name="sbjl_xgmzzs.zbList[16].bnlj_ysfw">{{data.zb[16].bnysfw}}</td>
      </tr>
      <tr>
        <td>本期应纳税额减征额</td>
        <td class=" columns-center" align="center">18</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_17_4" name="sbjl_xgmzzs.zbList[17].bqs_yshwjlw">{{data.zb[17].bqyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_17_5" name="sbjl_xgmzzs.zbList[17].bqs_ysfw">{{data.zb[17].bqysfw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_17_6" name="sbjl_xgmzzs.zbList[17].bnlj_yshwjlw">{{data.zb[17].bnyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_17_7" name="sbjl_xgmzzs.zbList[17].bnlj_ysfw">{{data.zb[17].bnysfw}}</td>
      </tr>
      <tr>
        <td>本期免税额</td>
        <td class=" columns-center" align="center">19</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_18_4" name="sbjl_xgmzzs.zbList[18].bqs_yshwjlw">{{data.zb[18].bqyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_18_5" name="sbjl_xgmzzs.zbList[18].bqs_ysfw">{{data.zb[18].bqysfw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_18_6" name="sbjl_xgmzzs.zbList[18].bnlj_yshwjlw">{{data.zb[18].bnyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_18_7" name="sbjl_xgmzzs.zbList[18].bnlj_ysfw">{{data.zb[18].bnysfw}}</td>
      </tr>
      <tr>
        <td>其中：小微企业免税额</td>
        <td class=" columns-center" align="center">20</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_19_4" name="sbjl_xgmzzs.zbList[19].bqs_yshwjlw">{{data.zb[19].bqyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_19_5" name="sbjl_xgmzzs.zbList[19].bqs_ysfw">{{data.zb[19].bqysfw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_19_6" name="sbjl_xgmzzs.zbList[19].bnlj_yshwjlw">{{data.zb[19].bnyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_19_7" name="sbjl_xgmzzs.zbList[19].bnlj_ysfw">{{data.zb[19].bnysfw}}</td>
      </tr>
      <tr>
        <td class=" columnsem3"> 未达起征点免税额</td>
        <td class=" columns-center" align="center">21</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_20_4" name="sbjl_xgmzzs.zbList[20].bqs_yshwjlw">{{data.zb[20].bqyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_20_5" name="sbjl_xgmzzs.zbList[20].bqs_ysfw">{{data.zb[20].bqysfw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_20_6" name="sbjl_xgmzzs.zbList[20].bnlj_yshwjlw">{{data.zb[20].bnyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_20_7" name="sbjl_xgmzzs.zbList[20].bnlj_ysfw">{{data.zb[20].bnysfw}}</td>
      </tr>
      <tr>
        <td>应纳税额合计</td>
        <td class=" columns-center" align="center">22=16-18或17-18</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_21_4" name="sbjl_xgmzzs.zbList[21].bqs_yshwjlw">{{data.zb[21].bqyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_21_5" name="sbjl_xgmzzs.zbList[21].bqs_ysfw">{{data.zb[21].bqysfw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_21_6" name="sbjl_xgmzzs.zbList[21].bnlj_yshwjlw">{{data.zb[21].bnyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_21_7" name="sbjl_xgmzzs.zbList[21].bnlj_ysfw">{{data.zb[21].bnysfw}}</td>
      </tr>
      <tr>
        <td>本期预缴税额</td>
        <td class=" columns-center" align="center">23</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_22_4" name="sbjl_xgmzzs.zbList[22].bqs_yshwjlw">{{data.zb[22].bqyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_22_5" name="sbjl_xgmzzs.zbList[22].bqs_ysfw">{{data.zb[22].bqysfw}}</td>
        <td class="columns-right" align="right">---</td>
        <td class="columns-right" align="right">---</td>
      </tr>
      <tr>
        <td>本期应补（退）税额</td>
        <td class=" columns-center" align="center">24=22-23</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_23_4" name="sbjl_xgmzzs.zbList[23].bqs_yshwjlw">{{data.zb[23].bqyshw}}</td>
        <td class="columns-right number_2" id="M_SMALL_SCALE_ZZSSBZB_23_5" name="sbjl_xgmzzs.zbList[23].bqs_ysfw">{{data.zb[23].bqysfw}}</td>
        <td class="columns-right" align="right">---</td>
        <td class="columns-right"  align="right">---</td>
      </tr>
    </table>
    <div>
      <table  class="wid_b98 data clrtopborder "  border="1" >
        <tr class=" columns-center " align="center">
          <td  class="wid_gd100" rowspan="2" >纳税人或代理人声明：
            本纳税申报表是根据国家税收法律法规及相关规定填报的，我确定它是真实的、可靠的、完整的。</td>
          <td  ><table class="clborder wid_b98 "  border="0">
            <tr>
              <td   colspan="6"  class="columns-left">如纳税人填报，由纳税人填写以下各栏：</td>
            </tr>
            <tr>
              <td class="columns-left w250">办税人员：</td>
              <td colspan="2" class="w209"></td>
              <td class="columns-left "  nowrap="nowrap"> 财务负责人：</td>
              <td colspan="2"  class="addrightbor w250"></td>
            </tr>
            <tr class="clborderltb">
              <td class="columns-left w250">法定代表人：</td>
              <td colspan="2 " class="w209"></td>
              <td class="columns-left " nowrap="nowrap"> 联系电话：</td>
              <td colspan="2"  class="addrightbor w250"></td>
            </tr>
          </table></td>
        </tr>
        <tr>
          <td   ><table class="clborder wid_b98 "  border="0">
            <tr>
              <td   colspan="6"  class="columns-left">如委托代理人填报，由代理人填写以下各栏：</td>
            </tr>
            <tr>
              <td class="columns-left w250"><span class="w250">代理人名称（公章）：</span></td>
              <td colspan="2" class="w250"></td>
              <td >经办人：</td>
              <td colspan="2"  class="addrightbor w250"></td>
            </tr>
            <tr class="clborderltb">
              <td class="columns-left w250">&nbsp;</td>
              <td colspan="2" class="w250"></td>
              <td>联系电话：</td>
              <td colspan="2"  class="addrightbor w250"></td>
            </tr>
          </table></td>
        </tr>
      </table>
      <table  class=" wid_b98 clborder" >
        <tr  >
          <td >主管税务机关：</td>
          <td class="w250"></td>
          <td>接收人：</td>
          <td class="w250"></td>
          <td>接收日期：</td>
          <td colspan="2" class="w250"></td>
        </tr>
      </table>
    </div>
    <div class="block15"></div>
  </div>



</template>

<script>
    export default {
        name: '',
        props: ['data'],
        data() {
            return {}
        }
    }
</script>


<style scoped>

</style>
