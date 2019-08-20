<!-- 手机号详情页面-->
<template>
 <div class="table">
   <el-card class="box-card">
     <h4 style="text-align:center"><span style="margin-right:30px">用户姓名：{{username}}</span> <span>手机号:{{mobile}}</span></h4>
     <div class="box">
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
        </el-collapse>
     </div>
   </el-card>
 </div>
</template>

<script>
import myTable from "@/components/myTable";
import { getNewsDetail } from "@/api/login.js";
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
      username: "",
      mobile: "",
      activeNames: ["1"],
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
      basic: [] //基本信息
    };
  },
  filters: {
    filterMarital,
    filterCompanyPeriod,
    iscustomer,
    filterProType,
    isTrue,
    filterinTime,
    filterTelecomType,
    filterCollName
  },
  mounted() {
    let row = JSON.parse(localStorage.getItem("mobileRow"));
    this.username = row.name;
    this.mobile = row.mobile;
    this.basic = [row];
  },
  methods: {
    // 折叠面板
    handleChange(val) {
      let coll = val.map(function(value) {
        return value;
      });
      let colleName = coll.pop();
      console.log(filterCollName(colleName));
      // let params = {
      //   idCard: this.idcard,
      //   colleName: filterCollName(colleName)
      // };
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

