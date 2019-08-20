<!-- 身份证详情页面-->
<template>
 <div class="table">
   <el-card class="box-card">
     <h4 style="text-align:center"><span style="margin-right:30px">用户姓名：{{username}}</span> <span>身份证号:{{idcard}}</span></h4>
     <div class="box">
       <el-collapse v-model="activeNames"  @change="handleChange">
          <el-collapse-item title="基本信息" name="1" v-for="item in basic" :key="item.mobile">
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

        <el-collapse-item title="贷后邦" name="3" v-for="item in daihoubang" :key="item.name">
            <template slot="title">
               贷后邦----来源：金盾
            </template>
             <el-row> 
               <el-col :span="6"><div class="blod">身份证号码:{{item.idcard}}</div></el-col>
                <el-col :span="6"><div class="blod">姓名:{{item.name}}</div></el-col>
                <el-col :span="6"><div class="blod">性别:{{item.gender}}</div></el-col>
                <el-col :span="6"><div class="blod">年龄:{{item.age}}</div></el-col>
                <el-col :span="6"><div class="blod">查询人手机号:{{item.mobile}}</div></el-col>
                <!-- <el-col :span="6"><div class="blod">绑定身份证情况:{{item.binding_idcards}}</div></el-col> -->
                <!-- <el-col :span="6"><div class="blod">绑定号码情况:{{item.binding_phones}}</div></el-col> -->
                <el-col :span="6"><div class="blod">手机号最近出现时间:{{item.last_appear_phone | filterinTime}}</div></el-col>
                <el-col :span="6"><div class="blod">生日日期:{{item.birthday}}</div></el-col>
                <el-col :span="6"><div class="blod">手机运营商:{{item.phone_operator}}</div></el-col>
                <el-col :span="6"><div class="blod">身份证最近出现时间:{{item.last_appear_idcard | filterinTime}}</div></el-col>
                <el-col :span="6"><div class="blod">手机号记录天数:{{item.record_phone_days}}</div></el-col>
                <el-col :span="6"><div class="blod">身份证户籍城市:{{item.idcard_city}}</div></el-col>
                <el-col :span="6"><div class="blod">身份证户籍地区:{{item.idcard_region}}</div></el-col>
                <el-col :span="6"><div class="blod">关联手机号数量:{{item.used_phones_cnt}}</div></el-col>
           
                <el-col :span="6"><div class="blod">身份证户籍省份:{{item.idcard_province}}</div></el-col>
                <el-col :span="6"><div class="blod">手机归属地省份:{{item.phone_province}}</div></el-col>
                <el-col :span="6"><div class="blod">身份证是否是有效身份证:{{item.idcard_validate}}</div></el-col>
                <el-col :span="6"><div class="blod">关联身份证数量:{{item.used_idcards_cnt}}</div></el-col>
                <el-col :span="6"><div class="blod">手机归属地城市:{{item.phone_city}}</div></el-col>
                <el-col :span="6"><div class="blod">身份证号记录天数:{{item.record_idcard_days}}</div></el-col>
                <el-col :span="6"><div class="blod">认识间接黑人的直接联系人个数:{{item.sn_order2_blacklist_routers_cnt}}</div></el-col>
                <el-col :span="6"><div class="blod">间接联系人在黑名单中数量(间接黑人):{{item.sn_order2_blacklist_contacts_cnt}}</div></el-col>
                <el-col :span="6"><div class="blod">直接联系人在黑名单中数量(直接黑人):{{item.sn_order1_blacklist_contacts_cnt}}</div></el-col>
                <el-col :span="6"><div class="blod">直接联系人:{{item.sn_order1_contacts_cnt}}</div></el-col>
                <el-col :span="6"><div class="blod">认识间接黑人的直接联系人比例:{{item.sn_order2_blacklist_routers_pct}}</div></el-col>
                <el-col :span="6"><div class="blod">葫芦分:{{item.sn_score}}</div></el-col>
                <el-col :span="6"><div class="blod">最近该身份证出现在黑名单中时间:{{item.last_appear_idcard_in_blacklist}}</div></el-col>
                <el-col :span="6"><div class="blod">是否命中法院黑名单:{{item.in_court_blacklist | isTrue}}</div></el-col>
                <el-col :span="6"><div class="blod">是否命中网贷黑名单:{{item.in_p2p_blacklist | isTrue}}</div></el-col>
                <el-col :span="6"><div class="blod">身份证是否命中黑名单:{{item.idcard_in_blacklist | isTrue}}</div></el-col>
                <el-col :span="6"><div class="blod">手机号是否命中黑名单:{{item.phone_in_blacklist | isTrue}}</div></el-col>
                <el-col :span="6"><div class="blod">是否命中银行黑名单:{{item.in_bank_blacklist | isTrue}}</div></el-col>
         
                <el-col :span="6"><div class="blod">最近该手机号出现在黑名单中时间:{{item.last_appear_phone_in_blacklist}}</div></el-col>
                <el-col :span="6"><div class="blod">线下现金贷出现次数:{{item.offline_cash_loan_cnt}}</div></el-col>
                <el-col :span="6"><div class="blod">线上现金贷出现次数:{{item.online_cash_loan_cnt}}</div></el-col>
                <el-col :span="6"><div class="blod">线上消费分期出现次数:{{item.online_installment_cnt}}</div></el-col>
                <el-col :span="6"><div class="blod">小额快速贷出现次数:{{item.payday_loan_cnt}}</div></el-col>     
                <el-col :span="6"><div class="blod">信用卡代还出现次数:{{item.credit_card_repayment_cnt}}</div></el-col>
                <el-col :span="6"><div class="blod">线下消费分期出现次数:{{item.offline_installment_cnt}}</div></el-col>
                <el-col :span="6"><div class="blod">其他:{{item.others_cnt}}</div></el-col>
                <el-col :span="6"><div class="blod">最近180天查询次数:{{item.search_cnt_recent_180_days}}</div></el-col>
                <el-col :span="6"><div class="blod">最近7天查询次数:{{item.search_cnt_recent_7_days}}</div></el-col>
                <el-col :span="6"><div class="blod">最近180天查询机构数:{{item.org_cnt_recent_180_days}}</div></el-col>
                <el-col :span="6"><div class="blod">最近90天查询次数:{{item.search_cnt_recent_90_days}}</div></el-col>
                <el-col :span="6"><div class="blod">最近60天查询机构数:{{item.org_cnt_recent_60_day}}</div></el-col>
                <el-col :span="6"><div class="blod">最近30天查询次数:{{item.search_cnt_recent_30_days}}</div></el-col>
                <el-col :span="6"><div class="blod">最近14天查询次数:{{item.search_cnt_recent_14_days}}</div></el-col>
                <el-col :span="6"><div class="blod">最近14天查询机构数:{{item.org_cnt_recent_14_days}}</div></el-col>
                <el-col :span="6"><div class="blod">最近30天查询机构数:{{item.org_cnt_recent_30_days}}</div></el-col>
                <el-col :span="6"><div class="blod">最近7天查询机构数:{{item.org_cnt_recent_7_days}}</div></el-col>
                <el-col :span="6"><div class="blod">最近90天查询机构数:{{item.org_cnt_recent_90_days}}</div></el-col>
                <el-col :span="6"><div class="blod">最近60天查询次数:{{item.search_cnt_recent_60_days}}</div></el-col>
                <el-col :span="6"><div class="blod">历史查询总机构数:{{item.org_cnt}}</div></el-col>
                <el-col :span="6"><div class="blod">入库时间:{{item.ins_time | filterinTime}}</div></el-col> 
                <el-col :span="24"><div class="blod">绑定身份证情况:
                    <myTable :columns="bindidCardColumns" :dataSource="bindidCardTable" :hasIndex="false" 
                     :hasSelection="false" :hasPagination="false"> </myTable>
                   </div>
                </el-col> 
                <el-col :span="24"><div class="blod">绑定手机号码情况:
                     <myTable :columns="bindMobileColumns" :dataSource="bindMobileTable" :hasIndex="false" 
                        :hasSelection="false" :hasPagination="false"  style="margin-top:20px"> </myTable>
                   </div>
                </el-col>
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
        }
        // {
        //   prop: "relation",
        //   label: "关系",
        //   isShow: true,
        //   render: function(v, param) {
        //     let html = "";
        //     if (param.row.relation == "1") {
        //       html = "父亲";
        //     } else if (param.row.relation == "2") {
        //       html = "母亲";
        //     } else if (param.row.relation == "3") {
        //       html = "儿子";
        //     } else if (param.row.relation == "4") {
        //       html = "女儿";
        //     } else if (param.row.relation == "5") {
        //       html = "配偶";
        //     } else if (param.row.relation == "6") {
        //       html = "朋友";
        //     } else {
        //       html = "其他";
        //     }
        //     return html;
        //   }
        // }
      ],
      basic: [], //基本信息
      emergency: [], //通讯录信息（紧急联系人）
      contact: [], //通讯录信息（联系人）
      juxinli: [], //聚信立
      daihoubang: [{}], //贷后邦
      bindidCardColumns: [
        {
          prop: "idcard_gender",
          label: "性别",
          width: 80,
          isShow: true
        },
        {
          prop: "idcard_age",
          label: "年龄",
          width: 80,
          isShow: true
        },
        {
          prop: "last_appear_idcard",
          label: "身份证最近出现时间",
          width: 150,
          isShow: true
        },
        {
          prop: "other_names_cnt",
          label: "此号码绑定其他姓名个数",
          width: 200,
          isShow: true
        },
        {
          prop: "idcard_city",
          label: "身份证户籍城市",
          width: 150,
          isShow: true
        },
        {
          prop: "other_idcard",
          label: "绑定其他身份证号码",
          width: 180,
          isShow: true
        },
        {
          prop: "idcard_region",
          label: "身份证户籍地区",
          width: 150,
          isShow: true
        },
        {
          prop: "idcard_validate",
          label: "身份证是否是有效身份证",
          isShow: true,
          render: function(v, param) {
            let html = "";
            if (param.row.idcard_validate == "1") {
              html = "是";
            } else {
              html = "否";
            }
            return html;
          }
        },
        {
          prop: "idcard_province",
          label: "身份证户籍省份",
          width: 150,
          isShow: true
        },
        {
          prop: "search_orgs_cnt",
          label: "查询此手机号的机构数",
          isShow: true
        }
      ], //绑定身份证情况表
      bindMobileColumns: [
        {
          prop: "last_appear_phone",
          label: "手机号最近出现时间",
          width: 150,
          isShow: true
        },
        {
          prop: "phone_province",
          label: "手机归属地省份",
          width: 150,
          isShow: true
        },
        {
          prop: "phone_operator",
          label: "手机运营商",
          width: 150,
          isShow: true
        },
        {
          prop: "other_names_cnt",
          label: "此号码绑定其他姓名个数",
          width: 200,
          isShow: true
        },
        {
          prop: "search_orgs_cnt",
          label: "查询此手机号的机构数",
          width: 180,
          isShow: true
        },
        {
          prop: "phone_city",
          label: "手机归属地城市",
          width: 150,
          isShow: true
        },
        {
          prop: "other_phone",
          label: "绑定其他手机号码",
          width: 150,
          isShow: true
        }
      ], //绑定号码情况表
      bindidCardTable: [], //绑定身份证情况表数据
      bindMobileTable: [] //绑定号码情况表数据
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
    console.log("basic:", this.basic);
  },
  methods: {
    // 折叠面板
    handleChange(val) {
      let coll = val.map(function(value) {
        return value;
      });
      let colleName = filterCollName(coll.pop());
      let params = {
        idCard: this.idcard,
        colleName: colleName
      };
      this.contactinfoLoading = true;
      getNewsDetail(params)
        .then(res => {
          this.contactinfoLoading = false;
          if (colleName === "contactinfo") {
            this.emergency = res.data[0].emergency; //紧急联系人
            this.contact = res.data[0].contact; //联系人
          } else if (colleName === "daihoubang") {
            this.daihoubang = res.data;
            this.bindidCardTable = res.data[0].binding_idcards;
            this.bindMobileTable = res.data[0].binding_phones;
            console.log("表格:", this.bindidCardTable);
          }
        })
        .catch(error => {
          console.log(error);
        });
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
