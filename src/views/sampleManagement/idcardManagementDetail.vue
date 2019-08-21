<!-- 身份证详情页面-->
<template>
 <div class="table">
   <el-card class="box-card">
     <h4 style="text-align:center"><span style="margin-right:30px">用户姓名：{{username}}</span> <span>身份证号:{{idcard}}</span></h4>
     <div class="box">
       <el-collapse v-model="activeNames"  @change="handleChange">
          <el-collapse-item title="基本信息" name="1" v-for="item in basic" :key="item.mobile">
            <template slot="title">
               基本信息 
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
               通讯信息<span style="margin-left:20px;" v-if="contactinSource">来源：{{contactinSource}}</span>
            </template>
            <div>
              <myTable :columns="emergencyColumns" :dataSource="emergency" :hasIndex="false" 
              :hasSelection="false" :hasPagination="false"> </myTable>
              <myTable :columns="contactColumns" :dataSource="contact" :hasIndex="false" 
              :hasSelection="false" :hasPagination="false"  style="margin-top:20px"> </myTable>
           </div>
          </el-collapse-item>

        <el-collapse-item title="贷后邦" name="3" v-for="item in daihoubang" :key="item.name">
            <template slot="title">
               贷后邦<span style="margin-left:20px;" v-if="daihoubangSource">来源：{{daihoubangSource}}</span>
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
     

       <el-collapse-item title="常贷客" name="4" v-for="item in changdaike" :key="item.idcard">
            <template slot="title">
               常贷客<span style="margin-left:20px;" v-if="changdaikeSource">来源：{{changdaikeSource}}</span>
            </template>
             <el-row>
                <el-col :span="6"><div class="blod">证件最近出现日期:{{item.idCardEndTime}}</div></el-col>
                <el-col :span="6"><div class="blod">证件最早出现日期:{{item.idCardFirstTime}}</div></el-col>
                <el-col :span="6"><div class="blod">证件查询平台数:{{item.idCardMpTimesRange}}</div></el-col>
                <el-col :span="6"><div class="blod">证件查询次数级别:{{item.idCardMpTimesType}}</div></el-col>
                <el-col :span="6"><div class="blod">证件1个月内查询平台数:{{item.lastAMonthIdCardApplicationTimeRange}}</div></el-col>
                <el-col :span="6"><div class="blod">证件1个月内查询次数级别:{{item.lastAMonthIdCardApplicationTimeType}}</div></el-col>
                <el-col :span="6"><div class="blod">手机1个月内查询平台数:{{item.lastAMonthPhoneApplicationTimeRange}}</div></el-col>
                <el-col :span="6"><div class="blod">手机1个月内查询次数级别:{{item.lastAMonthPhoneApplicationTimeType}}</div></el-col>
                <el-col :span="6"><div class="blod">证件15天内查询平台数:{{item.lastFifteenDayIdCardApplicationTimeRange}}</div></el-col>
                <el-col :span="6"><div class="blod">证件15天内查询次数级别:{{item.lastFifteenDayIdCardApplicationTimeType}}</div></el-col>
                <el-col :span="6"><div class="blod">手机15天内查询平台数:{{item.lastFifteenDayPhoneApplicationTimeRange}}</div></el-col>
                <el-col :span="6"><div class="blod">手机15天内查询次数级别:{{item.lastFifteenDayPhoneApplicationTimeType}}</div></el-col>
                <el-col :span="6"><div class="blod">证件7天内查询平台数:{{item.lastSevenDayIdCardApplicationTimeRange}}</div></el-col>
                <el-col :span="6"><div class="blod">证件7天内查询次数级别:{{item.lastSevenDayIdCardApplicationTimeType}}</div></el-col>
                <el-col :span="6"><div class="blod">手机7天内查询平台数:{{item.lastSevenDayPhoneApplicationTimeRange}}</div></el-col>
                <el-col :span="6"><div class="blod">手机7天内查询次数级别:{{item.lastSevenDayPhoneApplicationTimeType}}</div></el-col>
                <el-col :span="6"><div class="blod">证件3天内查平台数:{{item.lastThreeDayIdCardApplicationTimeRange}}</div></el-col>
                <el-col :span="6"><div class="blod">证件3天内查询次数级别:{{item.lastThreeDayIdCardApplicationTimeType}}</div></el-col>
                <el-col :span="6"><div class="blod">手机3天内查询平台数:{{item.lastThreeDayPhoneApplicationTimeRange}}</div></el-col>
                <el-col :span="6"><div class="blod">手机3天内查询次数级别:{{item.lastThreeDayPhoneApplicationTimeType}}</div></el-col>
                <el-col :span="6"><div class="blod">证件3个月内平台数:{{item.lastThreeMonthIdCardApplicationTimeType}}</div></el-col>
                <el-col :span="6"><div class="blod">手机3个月内查询平台数:{{item.lastThreeMonthPhoneApplicationTimeRange}}</div></el-col>
                <el-col :span="6"><div class="blod">手机3个月内查询次数级别:{{item.lastThreeMonthPhoneApplicationTimeType}}</div></el-col>
                <el-col :span="6"><div class="blod">证件2个月内查询平台数:{{item.lastTwoMonthIdCardApplicationTimeRange}}</div></el-col>
                <el-col :span="6"><div class="blod">证件2个月内查询次数级别:{{item.lastTwoMonthIdCardApplicationTimeType}}</div></el-col>
                <el-col :span="6"><div class="blod">手机2个月内查询平台数:{{item.lastTwoMonthPhoneApplicationTimeRange}}</div></el-col>
                <el-col :span="6"><div class="blod">手机2个月内查询次数级别:{{item.lastTwoMonthPhoneApplicationTimeType}}</div></el-col>
                <el-col :span="6"><div class="blod">手机最近出现日期:{{item.phoneEndTime}}</div></el-col>
                <el-col :span="6"><div class="blod">手机最早出现日期:{{item.phoneFirstTime}}</div></el-col>
                <el-col :span="6"><div class="blod">手机查询平台数:{{item.phoneMpTimesRange}}</div></el-col>
                <el-col :span="6"><div class="blod">手机查询次数级别:{{item.phoneMpTimesType}}</div></el-col>
                <!-- <el-col :span="6"><div class="blod">平台详情:{{item.platformDetails}}</div></el-col> -->
                <el-col :span="6"><div class="blod">证件当日查询平台数:{{item.todayIdCardApplicationTimeRange}}</div></el-col>
                <el-col :span="6"><div class="blod">证件当日查询次数级别:{{item.todayIdCardApplicationTimeType}}</div></el-col>
                <el-col :span="6"><div class="blod">手机当日查询平台数:{{item.todayPhoneApplicationTimeRange}}</div></el-col>
               <el-col :span="24"><div class="blod">平台详情: 
                 <myTable :columns="platformDetailsColumns" :dataSource="platformDetails" :hasIndex="false" 
                  :hasSelection="false" :hasPagination="false"> </myTable></div>
                </el-col>
            </el-row>
       </el-collapse-item>

       <el-collapse-item title="聚信立分析报告" name="5" v-loading="loading">
            <template slot="title">
               聚信立分析报告<span style="margin-left:20px;" v-if="juxinliSource">来源：{{juxinliSource}}</span>
            </template>
            <div class="jxlreport" v-for="item in report" :key="item.token">
              <h4 style="text-align:center">报告基本信息</h4>
              <el-row>
                  <!-- <el-col :span="6"><div class="blod">报告token:{{item.token}}</div></el-col> -->
                  <el-col :span="8"><div class="blod">报告编号:{{item.rpt_id}}</div></el-col>
                  <el-col :span="8"><div class="blod">报告版本:{{item.version}}</div></el-col>
                  <el-col :span="8"><div class="blod">报告生成时间:{{item.update_time|filterinTime}}</div></el-col>
              </el-row>
             </div>

              <div  class="jxlreport">
              <h4 style="text-align:center">用户申请表检测</h4>
              <el-row>
                  <el-col :span="24"><div class="blod tit">家庭号码检查：</div></el-col>
                  <el-col :span="12"><div class="blod">运营商联系号码检查:{{home_phone.check_mobile}}</div></el-col>
                  <el-col :span="12"><div class="blod">数据值:{{home_phone.key_value}}</div></el-col>
              </el-row>
              <el-row>
                  <el-col :span="24"><div class="blod tit">法院黑名单检查：</div></el-col>
                  <el-col :span="12"><div class="blod">是否出现:{{court_blacklist.arised | isTrue}}</div></el-col>
                  <el-col :span="12"><div class="blod">数据值:{{court_blacklist.black_type}}</div></el-col>
              </el-row>
               <el-row>
                  <el-col :span="24"><div class="blod tit">金融服务类机构黑名单检查:</div></el-col>
                  <el-col :span="12"><div class="blod">是否出现:{{financial_blacklist.arised | isTrue}}</div></el-col>
                  <el-col :span="12"><div class="blod">数据值:{{financial_blacklist.black_type}}</div></el-col>
              </el-row>
              <el-row>
                  <el-col :span="24"><div class="blod tit">移动电话检查:</div></el-col>
                  <el-col :span="8"><div class="blod">身份证号检查:{{cell_phone.check_idcard}}</div></el-col>
                  <el-col :span="8"><div class="blod">注册时间:{{cell_phone.reg_time}}</div></el-col>
                   <el-col :span="8"><div class="blod">实名认证:{{cell_phone.reliability}}</div></el-col>
                    <el-col :span="8"><div class="blod">电商使用号码检查:{{cell_phone.check_ebusiness}}</div></el-col>
                     <el-col :span="8"><div class="blod">姓名检查:{{cell_phone.check_name}}</div></el-col>
                      <el-col :span="8"><div class="blod">数据值:{{cell_phone.key_value}}</div></el-col>
              </el-row>
             </div>

             <div  class="jxlreport" v-if="check_search_info || check_black_info">
              <h4 style="text-align:center">用户信息检测</h4>
                <el-row>
                    <el-col :span="24"><div class="blod tit">用户查询信息:</div></el-col>
                    <el-col :span="24" >查询过该用户的相关企业数量:<span class="blod">{{check_search_info.register_org_cnt}}</span></el-col>
                    <el-col :span="24">查询过该用户的相关企业类型：<span class="blod">{{check_search_info.searched_org_cnt}}</span></el-col>
                    <el-col :span="24">电话号码组合过其他姓名：<span class="blod" v-for="item in check_search_info.phone_with_other_names" :key="item.idcard">{{item}}</span></el-col>
                    <el-col :span="24">电话号码出现过的公开网站：<span class="blod" v-for="item in check_search_info.arised_open_web" :key="item.idcard">{{item}}</span></el-col>
                    <el-col :span="24">身份证组合过其他电话：<span class="blod" v-for="item in check_search_info.idcard_with_other_phones" :key="item.idcard">{{item}}</span></el-col>
                    <el-col :span="24">电话号码组合过其他身份证：<span class="blod" v-for="item in check_search_info.phone_with_other_idcards" :key="item.idcard">{{item}}</span></el-col>
                    <el-col :span="24">查询过该用户的相关企业类型：<span class="blod" v-for="item in check_search_info.searched_org_type" :key="item.idcard">{{item}}、</span></el-col>
                    <el-col :span="24">电话号码注册过的相关企业类型：<span class="blod" v-for="item in check_search_info.register_org_type" :key="item.idcard">{{item}}</span></el-col>
                    <el-col :span="24">身份证组合过的其他姓名：<span class="blod" v-for="item in check_search_info.idcard_with_other_names" :key="item.idcard">{{item}}</span></el-col>
                </el-row>
                <el-row>
                    <el-col :span="24"><div class="blod tit" style="margin-top:10px;">用户黑名单信息:</div></el-col>
                    <el-col :span="8"><div class="blod">直接联系人人数:{{check_black_info.contacts_class1_cnt}}</div></el-col>
                    <el-col :span="8"><div class="blod">直接联系人中黑名单人数:{{check_black_info.contacts_class1_blacklist_cnt}}</div></el-col>
                    <el-col :span="8"><div class="blod">间接联系人中黑名单人数:{{check_black_info.contacts_class2_blacklist_cnt}}</div></el-col>
                    <el-col :span="8"><div class="blod">引起间接黑名单人数:{{check_black_info.contacts_router_cnt}}</div></el-col>
                    <el-col :span="8"><div class="blod">直接联系人中引起间接黑名单占比:{{check_black_info.contacts_router_ratio}}</div></el-col>
                    <el-col :span="8"><div class="blod">用户号码联系黑中介分数:{{check_black_info.phone_gray_score}}</div></el-col>
                </el-row>
             </div>

            <div  class="jxlreport">
              <h4 style="text-align:center">用户行为检测</h4>
                <myTable :columns="behavior_checkColumns" :dataSource="behavior_check" :hasIndex="false" 
                :hasSelection="false" :hasPagination="false"  style="margin-top:20px"> </myTable>
             </div> 

              <div  class="jxlreport">
              <h4 style="text-align:center">运营商数据整理</h4>
                <myTable :columns="cell_behaviorColumns" :dataSource="cell_behavior" :hasIndex="false" 
                :hasSelection="false" :hasPagination="false"  style="margin-top:20px"> </myTable>
             </div>

               <div  class="jxlreport">
              <h4 style="text-align:center">联系人区域汇总</h4>
                <myTable :columns="contact_regionColumns" :dataSource="contact_region" :hasIndex="false" 
                :hasSelection="false" :hasPagination="false"  style="margin-top:20px"> </myTable>
             </div> 

            <h4 style="text-align:center">常用服务</h4>
              <div  class="jxlreport" v-for="item in main_service" :key="item.company_name">
                 服务企业类型：{{item.company_type}}<span style="margin-left:30px;">企业名称：{{item.company_name}}</span>
                <myTable :columns="main_serviceColumns" :dataSource="item.service_details" :hasIndex="false" 
                :hasSelection="false" :hasPagination="false"  style="margin-top:20px"> </myTable>
             </div> 

             <div  class="jxlreport">
              <h4 style="text-align:center">出行分析</h4>
                <myTable :columns="trip_infoColumns" :dataSource="trip_info" :hasIndex="false" 
                :hasSelection="false" :hasPagination="false"  style="margin-top:20px"> </myTable>
             </div> 

             <div  class="jxlreport">
              <h4 style="text-align:center">运营商联系人通话详情</h4>
                <myTable :columns="contact_listColumns" :dataSource="contact_list" :hasIndex="false" 
                :hasSelection="false" :hasPagination="false"  style="margin-top:20px"> </myTable>
             </div> 
          </el-collapse-item>
         
         <el-collapse-item title="大圣报告" name="6">
            <template slot="title">
               大圣报告<span style="margin-left:20px;" v-if="ds_reportSource">来源：{{ds_reportSource}}</span>
            </template>
              <myTable :columns="ds_reportColumns" :dataSource="ds_report" :hasIndex="false" 
              :hasSelection="false" :hasPagination="false"  style="margin-top:20px"> </myTable>
          </el-collapse-item>
     
     </el-collapse>
     </div>
   </el-card>
 </div>
</template>

<script>
import myTable from "@/components/myTable";
import { getNewsDetail } from "@/api/login.js";
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
      loading: false,
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
      ],
      basic: [], //基本信息
      emergency: [], //通讯录信息（紧急联系人）
      contact: [], //通讯录信息（联系人）
      juxinli: [], //聚信立
      daihoubang: [{}], //贷后邦
      changdaike: [{}], //常贷客
      platformDetailsColumns: [
        {
          prop: "platformNo",
          label: "平台序号",
          width: 150,
          isShow: true
        },
        {
          prop: "phoneTime",
          label: "手机出现日期",
          width: 150,
          isShow: true
        },
        {
          prop: "idCardTime",
          label: "证件出现日期",
          width: 150,
          isShow: true
        }
      ], //常贷客平台详情表
      platformDetails: [], //常贷可平台详情数据
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
      bindMobileTable: [], //绑定号码情况表数据
      juxinliReport: [], //聚信立分析报告
      report: [], //报告基本信息
      user_info_check: [], //用户信息检测
      home_phone: {}, //用户申请表检测home_phone
      court_blacklist: {}, //用户申请表检测court_blacklist
      financial_blacklist: {}, //用户申请表检测court_blacklist
      home_addr: {}, //用户申请表检测home_addr
      cell_phone: {}, //用户申请表检测cell_phone
      check_black_info: {}, //用户申请表检测 用户黑名单查询
      check_search_info: {}, //用户申请表检测 用户信息查询
      behavior_check: [], //用户行为检测数据
      behavior_checkColumns: [
        {
          prop: "result",
          label: "检查结果",
          isShow: true
        },
        {
          prop: "score",
          label: "标记",
          isShow: true
        },
        {
          prop: "evidence",
          label: "证据",
          isShow: true
        },
        {
          prop: "check_point_cn",
          label: "分析点",
          isShow: true
        }
      ], //用户行为检测数据表
      cell_behavior: [], //运营商数据整理
      cell_behaviorColumns: [
        {
          prop: "cell_operator_zh",
          label: "运营商（中文）",
          isShow: true
        },
        {
          prop: "net_flow",
          label: "流量",
          isShow: true
          // render: function(v, param) {
          //   return param.row.net_flow.toFixed(2);
          // }
        },
        {
          prop: "call_out_time",
          label: "主叫时间",
          isShow: true
          // render: function(v, param) {
          //   return param.row.call_out_time.toFixed(2);
          // }
        },
        {
          prop: "cell_operator",
          label: "运营商",
          isShow: true
        },
        {
          prop: "call_in_cnt",
          label: "被叫次数",
          isShow: true
        },
        {
          prop: "cell_phone_num",
          label: "号码",
          isShow: true
        },
        {
          prop: "sms_cnt",
          label: "短信数目",
          isShow: true
        },
        {
          prop: "cell_loc",
          label: "归属地",
          isShow: true
        },
        {
          prop: "total_amount",
          label: "话费消费",
          isShow: true
        },
        {
          prop: "cell_mth",
          label: "呼叫次数",
          isShow: true
        },
        {
          prop: "call_out_cnt",
          label: "主叫次数",
          isShow: true
        },
        {
          prop: "call_in_time",
          label: "被叫时间",
          isShow: true
          // render: function(v, param) {
          //   return param.row.call_in_time.toFixed(2);
          // }
        }
      ], //运营商数据整理表
      contact_regionColumns: [
        {
          prop: "region_loc",
          label: "地区名称",
          isShow: true
        },
        {
          prop: "region_call_in_time_pct",
          label: "电话呼入时间百分比",
          isShow: true
          // render: function(v, param) {
          //   return param.row.region_call_in_time_pct.toFixed(2);
          // }
        },
        {
          prop: "region_call_in_time",
          label: "电话呼入时间",
          isShow: true
          // render: function(v, param) {
          //   return param.row.region_call_in_time.toFixed(2);
          // }
        },
        {
          prop: "region_call_out_time_pct",
          label: "电话呼出时间百分比",
          isShow: true
          // render: function(v, param) {
          //   return param.row.region_call_out_time_pct.toFixed(2);
          // }
        },
        {
          prop: "region_call_out_cnt_pct",
          label: "电话呼出次数百分比",
          isShow: true
          // render: function(v, param) {
          //   return param.row.region_call_out_cnt_pct.toFixed(2);
          // }
        },
        {
          prop: "region_avg_call_in_time",
          label: "平均电话呼入时间",
          isShow: true
          // render: function(v, param) {
          //   return param.row.region_avg_call_in_time.toFixed(2);
          // }
        },
        {
          prop: "region_avg_call_out_time",
          label: "平均电话呼出时间",
          isShow: true
          // render: function(v, param) {
          //   return param.row.region_avg_call_out_time.toFixed(2);
          // }
        },
        {
          prop: "region_call_in_cnt_pct",
          label: "电话呼入次数百分比",
          isShow: true
          // render: function(v, param) {
          //   return param.row.region_call_in_cnt_pct.toFixed(2);
          // }
        },
        {
          prop: "region_call_out_time",
          label: "电话呼出时间",
          isShow: true
          // render: function(v, param) {
          //   return param.row.region_call_out_time.toFixed(2);
          // }
        },
        {
          prop: "region_call_out_cnt",
          label: "电话呼出次数",
          isShow: true
        },
        {
          prop: "region_call_in_cnt",
          label: "电话呼入次数",
          isShow: true
        }
      ], //联系人区域汇总表
      contact_region: [], //联系人区域汇总数据
      contact_list: [], //运营商联系人通话详情
      contact_listColumns: [
        {
          prop: "contact_afternoon",
          label: "下午联系次数",
          isShow: true
        },
        {
          prop: "contact_name",
          label: "联系人姓名",
          isShow: true
        },
        {
          prop: "contact_early_morning",
          label: "凌晨联系次数",
          isShow: true
        },
        {
          prop: "call_in_len",
          label: "呼入时间",
          isShow: true,
          render: function(v, param) {
            return param.row.call_in_len.toFixed(2);
          }
        },
        {
          prop: "contact_all_day",
          label: "是否全天联系",
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
          prop: "call_in_cnt",
          label: "呼入次数",
          isShow: true
        },
        {
          prop: "call_out_len",
          label: "呼出时间",
          isShow: true,
          render: function(v, param) {
            return param.row.call_out_len.toFixed(2);
          }
        },
        {
          prop: "contact_1m",
          label: "最近一月联系次数",
          isShow: true
        },
        {
          prop: "call_len",
          label: "呼叫时长",
          isShow: true,
          render: function(v, param) {
            return param.row.call_len.toFixed(2);
          }
        },
        {
          prop: "contact_3m",
          label: "最近三月联系次数",
          isShow: true
        },
        {
          prop: "phone_num_loc",
          label: "号码归属地",
          isShow: true
        },
        {
          prop: "p_relation",
          label: "关系推测",
          isShow: true
        },
        {
          prop: "call_cnt",
          label: "呼叫次数",
          isShow: true
        },
        {
          prop: "contact_1w",
          label: "最近一周联系次数",
          isShow: true
        },
        {
          prop: "contact_night",
          label: "晚上联系次数",
          isShow: true
        },
        {
          prop: "contact_noon",
          label: "中午联系次数",
          isShow: true
        },
        {
          prop: "contact_weekday",
          label: "周中联系次数",
          isShow: true
        },
        {
          prop: "call_out_cnt",
          label: "呼出次数",
          isShow: true
        },
        {
          prop: "contact_weekend",
          label: "周末联系次数",
          isShow: true
        },
        {
          prop: "phone_num",
          label: "号码",
          isShow: true
        },
        {
          prop: "contact_holiday",
          label: "节假日联系次数",
          isShow: true
        },
        {
          prop: "contact_3m_plus",
          label: "三个月以上联系次数",
          isShow: true
        },
        {
          prop: "needs_type",
          label: "需求类别",
          isShow: true
        },
        {
          prop: "contact_morning",
          label: "上午联系次数",
          isShow: true
        }
      ], //运营商联系人通话详情表
      main_serviceColumns: [
        // {
        //   prop: "company_type",
        //   label: "服务企业类型",
        //   isShow: true
        // },
        // {
        //   prop: "company_name",
        //   label: "企业名称",
        //   isShow: true
        // },
        {
          prop: "interact_mth",
          label: "互动月份",
          isShow: true
        },
        {
          prop: "interact_cnt",
          label: "互动次数",
          isShow: true
        }
      ], //常用服务表
      main_service: [], //常用服务数据
      trip_info: [], //出行分析
      trip_infoColumns: [
        {
          prop: "trip_type",
          label: "出行时间类型",
          isShow: true
        },
        {
          prop: "trip_leave",
          label: "出发地",
          isShow: true
        },
        {
          prop: "trip_dest",
          label: "目的地",
          isShow: true
        },
        {
          prop: "trip_start_time",
          label: "出行开始时间",
          isShow: true
        },
        {
          prop: "trip_end_time",
          label: "出行结束时间",
          isShow: true
        }
      ], //出行分析表
      ds_reportColumns: [
        {
          prop: "name",
          label: "姓名",
          isShow: true
        },
        {
          prop: "mobile",
          label: "手机号码",
          width: 150,
          isShow: true
        },
        {
          prop: "idcard",
          label: "身份证号",
          width: 180,
          isShow: true
        },
        {
          prop: "order_no",
          label: "接口返回的唯一订单号",
          width: 180,
          isShow: true
        },
        {
          prop: "extension_periods",
          label: "展期期数",
          isShow: true
        },
        {
          prop: "orderno",
          label: "订单号",
          width: 180,
          isShow: true
        },
        {
          prop: "overdue_day",
          label: "逾期天数",
          isShow: true
        },
        {
          prop: "settle",
          label: "是否已经结清",
          isShow: true
        },
        {
          prop: "ins_time",
          label: "入库时间",
          width: 180,
          isShow: true,
          render: function(v, param) {
            return moment(param.row.ins_time).format("YYYY-MM-DD HH:MM:SS");
          }
        },
        {
          prop: "extension_time",
          label: "发生展期时间（秒）",
          isShow: true
        },
        {
          prop: "unpay",
          label: "未还款金额(分)",
          isShow: true
        },
        {
          prop: "report_time",
          label: "上报的时间",
          width: 180,
          isShow: true
        },
        {
          prop: "extension_pay_due_time",
          label: "展期后应还日期",
          isShow: true
        },
        {
          prop: "pay_finish_time",
          label: "实际还款时间",
          isShow: true
        },
        {
          prop: "pay_due_time",
          label: "应还款时间",
          width: 180,
          isShow: true
        },
        {
          prop: "is_extension",
          label: "是否展期",
          isShow: true
        },
        {
          prop: "payed",
          label: "已经还款金额（分）",
          isShow: true
        },
        {
          prop: "loan_time",
          label: "放款日期",
          width: 180,
          isShow: true
        }
      ], //大圣报告表
      ds_report: [], //大圣报告
      contactinSource: localStorage.getItem("contactinSource"),
      daihoubangSource: localStorage.getItem("daihoubangSource"),
      changdaikeSource: localStorage.getItem("changdaikeSource"),
      juxinliSource: localStorage.getItem("juxinliSource"),
      ds_reportSource: localStorage.getItem("ds_reportSource")
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
      let colleName = filterCollName(coll.pop());
      let params = {
        idCard: this.idcard,
        colleName: colleName
      };
      if (colleName === "juxinli_operator_report") {
        this.loading = true;
      }
      getNewsDetail(params)
        .then(res => {
          if (colleName === "basic") {
            this.loading = false;
          }
          if (colleName === "contactinfo") {
            if (res.data[0]) {
              localStorage.setItem("contactinSource", res.data[0].source);
              this.contactinSource = localStorage.getItem("contactinSource"); //来源
              this.emergency = res.data[0].emergency; //紧急联系人
              this.contact = res.data[0].contact; //联系人
            } else {
              this.emergency = [];
              this.contact = [];
            }
          } else if (colleName === "daihoubang") {
            if (res.data[0]) {
              this.daihoubang = res.data;
              localStorage.setItem("daihoubangSource", res.data[0].source);
              this.daihoubangSource = localStorage.getItem("daihoubangSource"); //来源
              this.bindidCardTable = res.data[0].binding_idcards; //绑定身份证
              this.bindMobileTable = res.data[0].binding_phones; //绑定号码
            } else {
              this.daihoubang = [{}];
            }
          } else if (colleName === "changdaike") {
            if (res.data[0]) {
              localStorage.setItem("changdaikeSource", res.data[0].source);
              this.changdaikeSource = localStorage.getItem("changdaikeSource"); //来源
              this.changdaike = [res.data[0].content];
              this.platformDetails = res.data[0].content.platformDetails; //常贷客平台详情
            } else {
              this.changdaike = [{}];
              this.platformDetails = [];
            }
          } else if (colleName === "juxinli_operator_report") {
            this.loading = false;
            if (res.data[0]) {
              let content = res.data[0].content;
              localStorage.setItem("juxinliSource", res.data[0].source);
              this.juxinliSource = localStorage.getItem("juxinliSource"); //来源
              this.report = [content.report]; //报告基本信息
              this.home_phone = content.home_phone.check_points; //用户申请表检测home_phone
              this.court_blacklist =
                content.id_card.check_points.court_blacklist; //id_card  court_blacklist
              this.financial_blacklist =
                content.id_card.check_points.financial_blacklist; //id_card   financial_blacklist
              this.home_addr = content.home_addr.check_points; //home_addr
              this.cell_phone = content.cell_phone.check_points; //cell_phone
              if (content.user_info_check instanceof Object) {
                this.check_search_info =
                  content.user_info_check.check_search_info; //用户信息查询
                this.check_black_info =
                  content.user_info_check.check_black_info; //check_black_info 用户黑名单信息
              } else {
                this.check_black_info = {};
                this.user_info_check = {};
              }
              this.behavior_check = content.behavior_check; //用户行为检测
              this.cell_behavior = content.cell_behavior[0].behavior; //运营商数据整理
              this.contact_region = content.contact_region; //联系人区域汇总
              this.contact_list = content.contact_list; //运营商联系人通话详情
              this.main_service = content.main_service; //常用服务
              this.trip_info = content.trip_info; //出行分析
            } else {
              this.report = [];
              this.home_phone = {};
              this.court_blacklist = {};
              this.financial_blacklist = {};
              this.home_addr = {};
              this.cell_phone = {};
              this.check_black_info = {};
              this.behavior_check = [];
              this.cell_behavior = [];
              this.contact_region = [];
              this.contact_list = [];
              this.main_service = [];
              this.trip_info = [];
            }
          } else if (colleName === "ds_report") {
            if (res.data) {
              localStorage.setItem("ds_reportSource", res.data[0].source);
              this.ds_reportSource = localStorage.getItem("ds_reportSource"); //来源
              this.ds_report = res.data;
            } else {
              this.ds_report = [];
            }
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
  /* font-weight: bold; */
  padding-bottom: 20px;
}
.jxlreport {
  border: 1px solid#dddddd;
  margin-bottom: 10px;
}
.tit {
  font-weight: bold;
}
</style>
