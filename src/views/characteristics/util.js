import moment from "moment";

// tab切换分类
export function tabType(tab) {
    switch (tab) {
        case '1':
            tab = "table";
            break;
        default:
            tab = "chart";
    }
    return tab;
}
//表格特征字段
// export const featureType = [
//     {
//         featurename: "age",
//         value: "年龄",
//     }, {
//         featurename: "score",
//         value: "芝麻分",
//     }, {
//         featurename: 'constellation',
//         value: "星座",
//     }]

// 图表特征字段
export const dataType = [
    {
        featurename: "age",
        value: "年龄",
    }, {
        featurename: "amount_max",
        value: "借款金额",
    }, {
        featurename: "binding_idcards",
        value: "绑定身份证情况",
    }, {
        featurename: 'binding_phones',
        value: "绑定号码情况",
    }, {
        featurename: 'cell_operator_zh',
        value: "运营商中文",
    }, {
        featurename: 'cell_phone_arised',
        value: "cell_phone字段是否出现过",
    }, {
        featurename: 'city',
        value: "城市",
    }, {
        featurename: 'company_period',
        value: "工作时长",
    }, {
        featurename: 'company_type_total_service_cnt_top1',
        value: "近六个月频繁服务企业类型TOP1",
    }, {
        featurename: 'company_type_total_service_cnt_top2',
        value: "近六个月频繁服务企业类型TOP2",
    }, {
        featurename: 'company_type_total_service_cnt_top3',
        value: "近六个月频繁服务企业类型TOP3",
    }, {
        featurename: 'contacts_class1_blacklist_cnt',
        value: "直接联系人中黑名单人数",
    }, {
        featurename: 'contacts_class1_cnt',
        value: "直接联系人人数",
    }, {
        featurename: 'contacts_class2_blacklist_cnt',
        value: "间接联系人中黑名单人数",
    }, {
        featurename: 'contacts_router_cnt',
        value: "引起间接黑名单人数",
    }, {
        featurename: 'contacts_router_ratio',
        value: "直接联系人中引起间接黑名单占比",
    }, {
        featurename: 'contact_loan_calledminute',
        value: "贷款类平台被叫时长",
    }, {
        featurename: 'contact_loan_calledtimes',
        value: "贷款类平台被叫次数",
    },
    {
        featurename: 'contact_loan_callingminutes',
        value: "贷款类平台主叫时长",
    }, {
        featurename: 'contact_loan_callingtimes',
        value: "贷款类平台主叫次数",
    }, {
        featurename: 'contact_loan_result',
        value: "贷款类号码联系情况",
    }, {
        featurename: 'contact_loan_score',
        value: "贷款类号码联系情况",
    }, {
        featurename: 'credit_card_repayment_cnt',
        value: "信用卡代还出现次数",
    }, {
        featurename: 'customer_type',
        value: "是否为新客",
    }, {
        featurename: 'gender',
        value: "性别",
    }, {
        featurename: 'holiday_trip_amt',
        value: "节假日出行次数",
    }, {
        featurename: 'homephone_counts',
        value: "家庭电话通话记录次数",
    }, {
        featurename: 'idcardmptimesrange',
        value: "证件查询平台数",
    }, {
        featurename: 'idcardmptimestype',
        value: "证件查询次数级别",
    }, {
        featurename: 'idcardstatus',
        value: "与运营商提供的身份证是否匹配：1是",
    }, {
        featurename: 'idcard_in_blacklist',
        value: "最近该身份证出现在黑名单中时间",
    },
    {
        featurename: 'idcard_validate',
        value: "身份证是否是有效身份证",
    }, {
        featurename: 'idcard_with_other_names_amt',
        value: "身份证组合过的其他姓名数量",
    },
    {
        featurename: 'idcard_with_other_phones_amt',
        value: "身份证组合过其他电话数量",
    }, {
        featurename: 'id_card_arised',
        value: "身份证是否出现",
    }, {
        featurename: 'in_bank_blacklist',
        value: "是否命中银行黑名单",
    }, {
        featurename: 'in_court_blacklist',
        value: "是否命中法院黑名单",
    }, {
        featurename: 'in_p2p_blacklist',
        value: "是否命中网贷黑名单",
    }, {
        featurename: 'lastamonthidcardapplicationtimerange',
        value: "证件1个月内查询平台数",
    }, {
        featurename: 'lastamonthidcardapplicationtimetype',
        value: "证件1个月内查询次数级别",
    }, {
        featurename: 'lastamonthphoneapplicationtimerange',
        value: "手机1个月内查询平台数",
    },
    //从这开始
    {
        featurename: 'lastamonthphoneapplicationtimetype',
        value: "手机1个月内查询平台数",
    }, {
        featurename: 'lastfifteendayidcardapplicationtimerange',
        value: "手机1个月内查询平台数",
    },
    {
        featurename: 'lastfifteendayidcardapplicationtimetype',
        value: "手机1个月内查询平台数",
    }, {
        featurename: 'lastfifteendayphoneapplicationtimerange',
        value: "手机1个月内查询平台数",
    }, {
        featurename: 'lastfifteendayphoneapplicationtimetype',
        value: "手机1个月内查询平台数",
    }, {
        featurename: 'lastsevendayidcardapplicationtimetype',
        value: "手机1个月内查询平台数",
    }, {
        featurename: 'lastsevendayphoneapplicationtimerange',
        value: "手机1个月内查询平台数",
    },
    {
        featurename: 'lastsevendayphoneapplicationtimetype',
        value: "手机1个月内查询平台数",
    }, {
        featurename: 'lastthreedayidcardapplicationtimerange',
        value: "手机1个月内查询平台数",
    }, {
        featurename: 'lastthreedayidcardapplicationtimetype',
        value: "手机1个月内查询平台数",
    }, {
        featurename: 'lastthreedayphoneapplicationtimerange',
        value: "手机1个月内查询平台数",
    }, {
        featurename: 'lastthreedayphoneapplicationtimetype',
        value: "手机1个月内查询平台数",
    }, {
        featurename: 'lastthreemonthidcardapplicationtimerange',
        value: "手机1个月内查询平台数",
    }, {
        featurename: 'lastthreemonthidcardapplicationtimetype',
        value: "手机1个月内查询平台数",
    },
    {
        featurename: 'lastthreemonthphoneapplicationtimerange',
        value: "手机1个月内查询平台数",
    }, {
        featurename: 'lastthreemonthphoneapplicationtimetype',
        value: "手机1个月内查询平台数",
    },
    {
        featurename: 'lasttwomonthidcardapplicationtimerange',
        value: "手机1个月内查询平台数",
    }, {
        featurename: 'lasttwomonthidcardapplicationtimetype',
        value: "手机1个月内查询平台数",
    },
    {
        featurename: 'lasttwomonthphoneapplicationtimerange',
        value: "手机1个月内查询平台数",
    }, {
        featurename: 'lasttwomonthphoneapplicationtimetype',
        value: "手机1个月内查询平台数",
    }, {
        featurename: 'marital_status',
        value: "手机1个月内查询平台数",
    }, {
        featurename: 'minutes',
        value: "手机1个月内查询平台数",
    }, {
        featurename: 'namestatus',
        value: "手机1个月内查询平台数",
    }, {
        featurename: 'offline_cash_loan_cnt',
        value: "手机1个月内查询平台数",
    }, {
        featurename: 'offline_installment_cnt',
        value: "手机1个月内查询平台数",
    }, {
        featurename: 'online_cash_loan_cnt',
        value: "手机1个月内查询平台数",
    }, {
        featurename: 'online_installment_cnt',
        value: "手机1个月内查询平台数",
    }, {
        featurename: 'org_cnt',
        value: "手机1个月内查询平台数",
    }, {
        featurename: '',
        value: "手机1个月内查询平台数",
    }, {
        featurename: '',
        value: "手机1个月内查询平台数",
    },


]