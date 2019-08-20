<!-- 身份证详情页面-->
<template>
 <div class="table">
   <el-card class="box-card">
     <h4 style="text-align:center"><span style="margin-right:30px">用户姓名：{{username}}</span> <span>身份证号:{{idcard}}</span></h4>
     <div class="box">
       <!-- <p class="blod" style="text-align:center"><span style="margin-right:30px">基本信息</span>   <span>来源：{{item.title}}</span></p> -->
       <el-collapse v-model="activeNames"  @change="handleChange">
          <el-collapse-item title="基本信息" name="1" v-for="item in basic" :key="item.index">
            <template slot="title">
               基本信息----来源：金盾
            </template>
            <el-row>
                <el-col :span="6"><div class="blod">手机号:{{item.mobile}}</div></el-col>
                <el-col :span="6"><div class="blod">借款金额:{{item.amount_max}}</div></el-col>
                <el-col :span="6"><div class="blod">银行卡号:{{item.bank_no}}</div></el-col>
                <el-col :span="6"><div class="blod">民族:{{item.race}}</div></el-col>
                <el-col :span="6"><div class="blod">工作时长:{{item.company_period | filterCompanyPeriod}}</div></el-col>
                <el-col :span="6"><div class="blod">是否新客户:{{item.customer_type | iscustomer}}</div></el-col>
                <el-col :span="6"><div class="blod">借款发生时间戳:{{item.date}}</div></el-col>
                <el-col :span="6"><div class="blod">婚姻状况:{{item.marital_status | filterMarital}}</div></el-col>
                <el-col :span="6"><div class="blod">居住地:{{item.location}}</div></el-col>
                <el-col :span="6"><div class="blod">居住时长:{{item.present_period | filterCompanyPeriod}}</div></el-col>
                <el-col :span="6"><div class="blod">产品编号:{{item.product_id}}</div></el-col>
                <el-col :span="6"><div class="blod">产品类型:{{item.product_type | filterProType}}</div></el-col>
                <el-col :span="6"><div class="blod">是否为推广渠道:{{item.promotion_channel | isTrue}}</div></el-col>
                <el-col :span="6"><div class="blod">运营商类型:{{item.telecom_type | filterTelecomType}}</div></el-col>
                <el-col :span="6"><div class="blod">入库时间:{{item.ins_time | filterinTime}}</div></el-col>
            </el-row>
          </el-collapse-item>

          <el-collapse-item title="通讯信息" name="2">
            <template slot="title">
               通讯信息----来源：金盾
            </template>
            <div :loading="contactinfoLoading">
              <myTable :columns="emergencyColumns" :dataSource="emergency" :hasIndex="false" 
              :hasSelection="false" :hasPagination="false"> </myTable>
              <myTable :columns="contactColumns" :dataSource="contact" :hasIndex="false" 
              :hasSelection="false" :hasPagination="false"  style="margin-top:20px"> </myTable>
           </div>
          </el-collapse-item>

          <el-collapse-item title="贷后邦" name="3">
            <template slot="title">
               贷后邦----来源：金盾
            </template>
            <div :loading="daihoubangLoading" v-for="item in basic" :key="item.index">
              <el-row>
                <el-col :span="6"><div class="blod">身份证号码:</div></el-col>
                <el-col :span="6"><div class="blod">姓名:{{item.amount_max}}</div></el-col>
                <el-col :span="6"><div class="blod">性别:{{item.bank_no}}</div></el-col>
                <el-col :span="6"><div class="blod">年龄:{{item.race}}</div></el-col>
                <el-col :span="6"><div class="blod">查询人手机号:{{item.company_period | filterCompanyPeriod}}</div></el-col>
                <el-col :span="6"><div class="blod">绑定身份证情况:{{item.customer_type | iscustomer}}</div></el-col>
                <el-col :span="6"><div class="blod">绑定号码情况:{{item.date}}</div></el-col>
                <el-col :span="6"><div class="blod">手机号最近出现时间:{{item.marital_status | filterMarital}}</div></el-col>
                <el-col :span="6"><div class="blod">生日日期:{{item.location}}</div></el-col>
                <el-col :span="6"><div class="blod">手机运营商:{{item.present_period | filterCompanyPeriod}}</div></el-col>
                <el-col :span="6"><div class="blod">身份证最近出现时间:{{item.product_id}}</div></el-col>
                <el-col :span="6"><div class="blod">手机号记录天数:{{item.product_type | filterProType}}</div></el-col>
                <el-col :span="6"><div class="blod">身份证户籍城市:{{item.promotion_channel | isTrue}}</div></el-col>
                <el-col :span="6"><div class="blod">身份证户籍地区:{{item.telecom_type | filterTelecomType}}</div></el-col>
                <el-col :span="6"><div class="blod">关联手机号数量:{{item.ins_time | filterinTime}}</div></el-col>
           
                <el-col :span="6"><div class="blod">身份证户籍省份:{{item.mobile}}</div></el-col>
                <el-col :span="6"><div class="blod">手机归属地省份:{{item.amount_max}}</div></el-col>
                <el-col :span="6"><div class="blod">身份证是否是有效身份证:{{item.bank_no}}</div></el-col>
                <el-col :span="6"><div class="blod">关联身份证数量:{{item.race}}</div></el-col>
                <el-col :span="6"><div class="blod">手机归属地城市:{{item.company_period | filterCompanyPeriod}}</div></el-col>
                <el-col :span="6"><div class="blod">身份证号记录天数:{{item.customer_type | iscustomer}}</div></el-col>
                <el-col :span="6"><div class="blod">认识间接黑人的直接联系人个数:{{item.date}}</div></el-col>
                <el-col :span="6"><div class="blod">间接联系人在黑名单中数量(间接黑人):{{item.marital_status | filterMarital}}</div></el-col>
                <el-col :span="6"><div class="blod">直接联系人在黑名单中数量(直接黑人):{{item.location}}</div></el-col>
                <el-col :span="6"><div class="blod">直接联系人:{{item.present_period | filterCompanyPeriod}}</div></el-col>
                <el-col :span="6"><div class="blod">认识间接黑人的直接联系人比例:{{item.product_id}}</div></el-col>
                <el-col :span="6"><div class="blod">葫芦分:{{item.product_type | filterProType}}</div></el-col>
                <el-col :span="6"><div class="blod">是否命中法院黑名单:{{item.promotion_channel | isTrue}}</div></el-col>
                <el-col :span="6"><div class="blod">是否命中网贷黑名单:{{item.telecom_type | filterTelecomType}}</div></el-col>
                <el-col :span="6"><div class="blod">身份证是否命中黑名单:{{item.ins_time | filterinTime}}</div></el-col>
                <el-col :span="6"><div class="blod">手机号是否命中黑名单:{{item.ins_time | filterinTime}}</div></el-col>
                <el-col :span="6"><div class="blod">是否命中银行黑名单:{{item.ins_time | filterinTime}}</div></el-col>
         
                <el-col :span="6"><div class="blod">最近该手机号出现在黑名单中时间:{{item.mobile}}</div></el-col>
                <el-col :span="6"><div class="blod">线下现金贷出现次数:{{item.amount_max}}</div></el-col>
                <el-col :span="6"><div class="blod">线上现金贷出现次数:{{item.bank_no}}</div></el-col>
                <el-col :span="6"><div class="blod">线上消费分期出现次数:{{item.race}}</div></el-col>
                <el-col :span="6"><div class="blod">信用卡代还出现次数:{{item.company_period | filterCompanyPeriod}}</div></el-col>
                <el-col :span="6"><div class="blod">线下消费分期出现次数:{{item.customer_type | iscustomer}}</div></el-col>
                <el-col :span="6"><div class="blod">其他:{{item.date}}</div></el-col>
                <el-col :span="6"><div class="blod">最近180天查询次数:{{item.marital_status | filterMarital}}</div></el-col>
                <el-col :span="6"><div class="blod">最近7天查询次数:{{item.location}}</div></el-col>
                <el-col :span="6"><div class="blod">最近180天查询机构数:{{item.present_period | filterCompanyPeriod}}</div></el-col>
                <el-col :span="6"><div class="blod">最近90天查询次数:{{item.product_id}}</div></el-col>
                <el-col :span="6"><div class="blod">最近60天查询机构数:{{item.product_type | filterProType}}</div></el-col>
                <el-col :span="6"><div class="blod">最近30天查询次数:{{item.promotion_channel | isTrue}}</div></el-col>
                <el-col :span="6"><div class="blod">最近14天查询次数:{{item.telecom_type | filterTelecomType}}</div></el-col>
                <el-col :span="6"><div class="blod">最近14天查询机构数:{{item.ins_time | filterinTime}}</div></el-col>
                 <el-col :span="6"><div class="blod">最近30天查询机构数:{{item.location}}</div></el-col>
                <el-col :span="6"><div class="blod">最近7天查询机构数:{{item.present_period | filterCompanyPeriod}}</div></el-col>
                <el-col :span="6"><div class="blod">最近90天查询机构数:{{item.product_id}}</div></el-col>
                <el-col :span="6"><div class="blod">最近60天查询次数:{{item.product_type | filterProType}}</div></el-col>
                <el-col :span="6"><div class="blod">历史查询总机构数:{{item.promotion_channel | isTrue}}</div></el-col>
                <el-col :span="6"><div class="blod">入库时间:{{item.telecom_type | filterTelecomType}}</div></el-col>
               

            </el-row>
           </div>
          </el-collapse-item>
      </el-collapse>
     </div>
   </el-card>
 </div>
</template>

<script>
import myTable from "@/components/myTable";
import { getNewsList, getNewsDetail } from "@/api/login.js";
import moment from "moment";
import {
  filterMarital,
  filterCompanyPeriod,
  iscustomer,
  filterProType,
  isTrue,
  filterinTime,
  filterTelecomType,
  filterCollName
} from "./util.js";
export default {
  components: { myTable },
  data() {
    return {
      contactinfoLoading: false,
      daihoubangLoading: false,
      juxinliLoading: false,
      activeNames: ["1"],
      username: "",
      idcard: "",
      //联系人
      contactColumns: [
        {
          prop: "name",
          label: "联系人姓名",
          isShow: true
        },
        {
          prop: "contact_phone",
          label: "联系人号码",
          isShow: true
        }
      ],
      // 紧急联系人
      emergencyColumns: [
        {
          prop: "name",
          label: "紧急联系人姓名",
          isShow: true
        },
        {
          prop: "mobile",
          label: "紧急联系人号码",
          isShow: true
        },
        {
          prop: "relation",
          label: "关系",
          isShow: true,
          render: function(v, param) {
            let html = "";
            if (param.row.relation == "1") {
              html = "父亲";
            } else if (param.row.relation == "2") {
              html = "母亲";
            } else if (param.row.relation == "3") {
              html = "儿子";
            } else if (param.row.relation == "4") {
              html = "女儿";
            } else if (param.row.relation == "5") {
              html = "配偶";
            } else if (param.row.relation == "6") {
              html = "朋友";
            } else {
              html = "其他";
            }
            return html;
          }
        }
      ],
      list: [
        {
          title: "金盾",
          num1: 1,
          num2: 2,
          num3: 3,
          website1: 11,
          website2: 22,
          website3: 33
        },
        {
          title: "金盾2",
          num1: 1,
          num2: 2,
          num3: 3,
          website1: 11,
          website2: 22,
          website3: 33
        },
        {
          title: "金盾3",
          num1: 1,
          num2: 2,
          num3: 3,
          website1: 11,
          website2: 22,
          website3: 33
        }
      ],
      basic: [], //基本信息
      emergency: [], //通讯录信息（紧急联系人）
      contact: [], //通讯录信息（联系人）
      daihoubang: [], //贷后邦
      juxinli: [] //聚信立
    };
  },
  filters: {
    filterMarital,
    filterCompanyPeriod,
    iscustomer,
    filterProType,
    isTrue,
    filterTelecomType,
    filterinTime,
    filterCollName
  },
  mounted() {
    let row = JSON.parse(localStorage.getItem("row"));
    this.username = row.name;
    this.idcard = row.idcard;
    this.basic = [row];
  },
  methods: {
    // 折叠面板
    handleChange(val) {
      let coll = val.map(function(value) {
        return value;
      });
      let colleName = coll.pop();
      let params = {
        idCard: this.idcard,
        colleName: filterCollName(colleName)
      };
      this.contactinfoLoading = true;
      // getNewsDetail(params)
      //   .then(res => {
      //     this.contactinfoLoading = false;
      //     if (res.data[0]) {
      //       this.emergency = res.data[0].emergency; //紧急联系人
      //       this.contact = res.data[0].contact; //联系人
      //     } else {
      //       this.emergency = [];
      //       this.contact = [];
      //     }
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    }
  }
};
</script>

<style scoped>
.box {
  width: auto;
  height: auto;
  border: 1px solid #dddddd;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 30px;
}
.blod {
  font-weight: bold;
  padding-bottom: 20px;
}
</style>
