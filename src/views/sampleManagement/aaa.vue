<!--转移矩阵页面-->
<template>
 <div class="aaa">
     
 </div>
</template>
<script>
export default {
  data() {
    return {
      resultList: {
        cell_behavior: [
          {
            phone_num: "15652506625",
            behavior: [
              {
                cell_operator_zh: "中国联通",
                net_flow: 959.29296875,
                call_out_time: 139.75,
                cell_operator: "chinaunicom",
                call_in_cnt: 55,
                cell_phone_num: "15652506625",
                sms_cnt: 3,
                cell_loc: "北京",
                call_cnt: 123,
                total_amount: 148.0,
                cell_mth: "2019-01",
                call_out_cnt: 68,
                call_in_time: 62.11666666666667
              },
              {
                cell_operator_zh: "中国联通",
                net_flow: 691.8935546875,
                call_out_time: 51.9,
                cell_operator: "chinaunicom",
                call_in_cnt: 49,
                cell_phone_num: "15652506625",
                sms_cnt: 10,
                cell_loc: "北京",
                call_cnt: 105,
                total_amount: 104.9,
                cell_mth: "2018-12",
                call_out_cnt: 56,
                call_in_time: 41.11666666666667
              }
            ]
          }
        ],
        deliver_address: [],
        contact_region: [
          {
            region_avg_call_out_time: 0,
            region_call_in_time_pct: 0.0021831201152687424,
            region_call_in_time: 0.8333333333333334,
            region_call_out_time_pct: 0.0,
            region_call_out_cnt_pct: 0.0,
            region_avg_call_in_time: 0.4166666666666667,
            region_call_in_cnt_pct: 0.0047169811320754719,
            region_loc: "陕西",
            region_call_out_time: 0.0,
            region_call_out_cnt: 0,
            region_call_in_cnt: 2,
            region_uniq_num_cnt: 2
          },
          {
            region_avg_call_out_time: 0,
            region_call_in_time_pct: 0.0062873859319739779,
            region_call_in_time: 2.4,
            region_call_out_time_pct: 0.0,
            region_call_out_cnt_pct: 0.0,
            region_avg_call_in_time: 0.26666666666666669,
            region_call_in_cnt_pct: 0.02122641509433962,
            region_loc: "黑龙江",
            region_call_out_time: 0.0,
            region_call_out_cnt: 0,
            region_call_in_cnt: 9,
            region_uniq_num_cnt: 9
          }
        ],
        application_check: [
          {
            app_point: "user_name",
            check_points: {
              key_value: "于思佳"
            }
          },
          {
            app_point: "id_card",
            check_points: {
              court_blacklist: {
                arised: false,
                black_type: []
              },
              financial_blacklist: {
                arised: false,
                black_type: []
              },
              province: "北京市",
              gender: "男",
              city: "市辖区",
              region: "丰台区",
              key_value: "110106199405173314",
              age: 25
            }
          },
          {
            app_point: "cell_phone",
            check_points: {
              website: "中国联通",
              financial_blacklist: {
                arised: false,
                black_type: []
              },
              check_idcard:
                "用户身份证号与运营商提供的身份证号码[1101****3314]匹配成功",
              reg_time: "2012-08-26 00:00:00",
              reliability: "实名认证",
              check_ebusiness: "无法判断该号码的电商使用情况(无电商数据)",
              check_name: "用户姓名与运营商提供的姓名[于思佳]匹配成功",
              key_value: "15652506625"
            }
          },
          {
            app_point: "home_addr",
            check_points: {
              check_ebusiness: "无法判断该居住地址的电商使用情况(无电商数据)",
              check_addr: "无法定位居住地址(未提供居住地址)",
              key_value: ""
            }
          },
          {
            app_point: "home_phone",
            check_points: {
              check_mobile: "无法判断该家庭电话的通话情况(无家庭电话)",
              key_value: ""
            }
          }
        ],
        trip_info: [],
        main_service: [],
        user_info_check: {
          check_search_info: {
            phone_with_other_idcards: [],
            phone_with_other_names: [],
            arised_open_web: [],
            register_org_cnt: 0,
            idcard_with_other_phones: [],
            searched_org_cnt: 36,
            searched_org_type: [
              "线上微额快速贷",
              "线下信用现金贷",
              "线上消费分期",
              "线上信用卡代还",
              "其他",
              "贷款中介",
              "线上信用现金贷"
            ],
            register_org_type: [],
            idcard_with_other_names: []
          },
          check_black_info: {
            contacts_class1_cnt: 69,
            contacts_class1_blacklist_cnt: 0,
            contacts_class2_blacklist_cnt: 2998,
            contacts_router_cnt: 30,
            contacts_router_ratio: 0.43478260869565218,
            phone_gray_score: 39
          }
        },
        ebusiness_expense: [],
        collection_contact: [],
        report: {
          update_time: "2019-05-22T11:16:14.000Z",
          rpt_id: "201905221916140002",
          version: "4.2",
          token: "05610170066540b9b35e8152772423be"
        },
        contact_list: [
          {
            contact_afternoon: 1,
            contact_name: "未知",
            contact_early_morning: 0,
            call_in_len: 0.0,
            contact_all_day: false,
            call_in_cnt: 0,
            call_out_len: 7.6,
            contact_1m: 0,
            call_len: 7.6,
            contact_3m: 1,
            phone_num_loc: "北京",
            p_relation: "",
            call_cnt: 1,
            contact_1w: 0,
            contact_night: 0,
            contact_noon: 0,
            contact_weekday: 1,
            call_out_cnt: 1,
            contact_weekend: 0,
            phone_num: "18611752620",
            contact_holiday: 0,
            contact_3m_plus: 0,
            needs_type: "未知",
            contact_morning: 0
          },
          {
            contact_afternoon: 0,
            contact_name: "未知",
            contact_early_morning: 0,
            call_in_len: 0.23333333333333335,
            contact_all_day: false,
            call_in_cnt: 1,
            call_out_len: 0.0,
            contact_1m: 0,
            call_len: 0.23333333333333335,
            contact_3m: 0,
            phone_num_loc: "北京",
            p_relation: "",
            call_cnt: 1,
            contact_1w: 0,
            contact_night: 0,
            contact_noon: 0,
            contact_weekday: 1,
            call_out_cnt: 0,
            contact_weekend: 0,
            phone_num: "18612438445",
            contact_holiday: 0,
            contact_3m_plus: 1,
            needs_type: "未知",
            contact_morning: 1
          }
        ],
        behavior_check: [
          {
            result: "无数据",
            score: 0,
            evidence: "未提供居住地址",
            check_point_cn: "朋友圈在哪里",
            check_point: "regular_circle"
          },
          {
            result: "长期使用(24个月以上，包含24)",
            score: 1,
            evidence:
              "根据号码[15652506625]运营商提供的认证时间,推算该号码使用82个月",
            check_point_cn: "号码使用时间",
            check_point: "phone_used_time"
          },
          {
            result: "172天内有40天无通话记录",
            score: 1,
            evidence: "根据运营商详单数据，连续三天以上无通话记录0次",
            check_point_cn: "手机静默情况(连续24小时内无通话记录计为静默一天)",
            check_point: "phone_silent"
          },
          {
            result: "数量正常(10-100)",
            score: 1,
            evidence: "互通过电话的号码有31个，比例为8.4%",
            check_point_cn: "互通过电话的号码数量",
            check_point: "contact_each_other"
          },
          {
            result: "无通话记录",
            score: 1,
            evidence: "未发现澳门地区电话通话记录",
            check_point_cn: "澳门电话通话情况",
            check_point: "contact_macao"
          },
          {
            result: "无通话记录",
            score: 1,
            evidence: "未发现与110电话通话记录",
            check_point_cn: "110话通话情况",
            check_point: "contact_110"
          },
          {
            result: "无通话记录",
            score: 1,
            evidence: "未发现与120电话通话记录",
            check_point_cn: "120话通话情况",
            check_point: "contact_120"
          },
          {
            result: "无通话记录",
            score: 1,
            evidence: "未发现与律师电话通话记录",
            check_point_cn: "律师号码通话情况",
            check_point: "contact_lawyer"
          },
          {
            result: "无通话记录",
            score: 1,
            evidence: "未发现与法院电话通话记录",
            check_point_cn: "法院号码通话情况",
            check_point: "contact_court"
          },
          {
            result: "偶尔夜间活动(夜间通话比例20%-50%， 包含20%)",
            score: 1,
            evidence: "晚间活跃频率占全天的21.36%",
            check_point_cn: "夜间活动情况(23点-6点)",
            check_point: "contact_night"
          },
          {
            result:
              "偶尔被联系(联系次数在5次以上，包含5次，且主动呼叫占比 20%-50%之间，包含20%)",
            score: 2,
            evidence:
              "联系列表:[平安易贷]主叫0次共0.0分钟，被叫2次共2.63分钟;[玖富理财]主叫6次共9.12分钟，被叫0次共0.0分钟",
            check_point_cn: "贷款类号码联系情况",
            check_point: "contact_loan"
          },
          {
            result: "无该类号码记录",
            score: 1,
            evidence: "未找到银行类相关号码",
            check_point_cn: "银行类号码联系情况",
            check_point: "contact_bank"
          },
          {
            result: "无该类号码记录",
            score: 1,
            evidence: "未找到信用卡类相关号码",
            check_point_cn: "信用卡类号码联系情况",
            check_point: "contact_credit_card"
          },
          {
            result: "无数据",
            score: 0,
            evidence: "未提供居住地址",
            check_point_cn: "居住地本地（省份）地址在电商中使用时长",
            check_point: "dwell_used_time"
          },
          {
            result: "无数据",
            score: 0,
            evidence: "未提供电商数据",
            check_point_cn: "总体电商使用情况",
            check_point: "ebusiness_info"
          },
          {
            result: "无数据",
            score: 0,
            evidence: "未提供电商数据",
            check_point_cn: "申请人本人电商使用情况",
            check_point: "person_ebusiness_info"
          },
          {
            result: "无数据",
            score: 0,
            evidence: "未提供电商数据",
            check_point_cn: "虚拟商品购买情况",
            check_point: "virtual_buying"
          },
          {
            result: "无数据",
            score: 0,
            evidence: "未提供电商数据",
            check_point_cn: "彩票购买情况",
            check_point: "lottery_buying"
          },
          {
            result: "无数据",
            score: 0,
            evidence: "未提供电商数据",
            check_point_cn: "申请人本人地址变化情况",
            check_point: "person_addr_changed"
          }
        ],
        _id: "ZmU5NGU1ZmIxMTEzNTQ4MzMyYTUwNDM4"
      }
      // 数据end
    };
  }
};
</script>
