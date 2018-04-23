<template>
  <div class="tableizer-table">
    <table class="wid_b98  clborder">
      <tr>
        <td colspan="7" class="columns-center f24 bold"align="center"><h4><b>增值税预缴税款表</b></h4></td>
      </tr>
      <tr>
        <td colspan="7" class="columns-center "align="center">税款所属期：自   年   月  日至    年   月  日</td>
      </tr>
      <tr>
        <td colspan="3" class="columns-left">纳税人识别号：</td>
        <td colspan="4" class="columns-right" align="right">是否增值税一般纳税人:<i>是&nbsp;
          <input type="checkbox" class="wid_gd50">
        </i>&nbsp;&nbsp;<i>否&nbsp;
          <input type="checkbox"  class="wid_gd50">
        </i></td>
      </tr>
      <tr>
        <td colspan="4" class="columns-left">纳税人名称（公章）：</td>
        <td colspan="3" class="columns-right" align="right">金额单位：元至角分</td>
      </tr>
    </table>
    <table class="wid_b98  table-hover" border="1">
      <tbody>
      <tr>
        <td   colspan="2" >项目编号</td>
        <td ></td>
        <td >项目名称</td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td   colspan="2" >项目地址</td>
        <td colspan="5"></td>
      </tr>
      <tr>
        <td  colspan="2" rowspan="2" >预征项目和栏次</td>
        <td class=" columns-center" align="center">销售额</td>
        <td class=" columns-center" align="center">扣除金额</td>
        <td class=" columns-center" align="center">预征率</td>
        <td class=" columns-center" align="center"> 预征税额</td>
      </tr>
      <tr>
        <td class=" columns-center" align="center">1</td>
        <td class=" columns-center" align="center">2</td>
        <td class=" columns-center" align="center">3</td>
        <td class=" columns-center" align="center">4=（1-2）×3</td>
      </tr>
      <tr>
        <td class="addbg columns-center wid_gd200">合计</td>
        <td class="addbg columns-center wid_gd200"></td>
        <td class="addbg columns-center"></td>
        <td class="addbg columns-center"></td>
        <td class="addbg columns-center"></td>
        <td class="addbg columns-center"></td>
      </tr>

      <tr>
        <td rowspan="2" align="center" >
          <div class="wid_gd50">授权声明
          </div></td>
        <td colspan="2" class="wid_gd250   clbottomborder"><p>如果你已委托代理人申报，请填写下列资料：   </p>
          <p>为代理一切税务事宜，现授权             （地址）           为本次纳税人的代理申报人，任何与本表有关的往来文件，都可寄予此人。   </p></td>
        <td rowspan="2" align="center">填
          <div class="wid_gd50"> 表人申明</div></td>
        <td colspan="2" class=" clbottomborder">以上内容是真实的、可靠的、完整的。</td>
      </tr>
      <tr>
        <td colspan="2" class=" clrtopborderhidd">授权人签字：</td>
        <td colspan="2" class=" clrtopborderhidd   ">纳税人签字：</td>
      </tr>
      </tbody>
    </table>
    <div class="block15"></div>
  </div>

</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        }
    }
</script>


<style scoped>

</style>
