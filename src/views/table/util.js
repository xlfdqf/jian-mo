// 类型分类
export const dataTypes = [
    {
        classification: "基本信息",
        index: 0,
        list: [
            {
                featurename: "age",
                value: "年龄",
            },
            {
                featurename: 'constellation',
                value: "星座",
            },
            {
                featurename: 'sex',
                value: "性别",
            },
            {
                featurename: 'education',
                value: "学历",
            },
            {
                featurename: 'native_province',
                value: "籍贯省",
            },
            {
                featurename: 'province',
                value: "户籍省",
            },
            {
                featurename: "nation",
                value: "民族",
            },
            {
                featurename: "score",
                value: "芝麻分",
            }
        ]
    },
    {
        classification: "欺诈信息",
        index: 1,
        list: [
            {
                featurename: 'emergency_contact_black_total',
                value: "紧急联系人黑名单数量",
            },
            {
                featurename: 'emergency_contact_grey_total',
                value: "紧急联系人灰名单数量",
            },
            {
                featurename: 'real_name_notpass_count',
                value: "实名验证不通过次数",
            },
            {
                featurename: 'three_elmt_notpass_count',
                value: "手机三要素验证不通过次数",
            },
            {
                featurename: 'bankcard_notpass_count',
                value: "银行卡验证不通过次数",
            }
        ]
    },
    {
        classification: "可疑信息",
        index: 2,
        list: [
            {
                featurename: 'name_total',
                value: "身份证组合其他姓名数量",
            },
            {
                featurename: 'mobile_total',
                value: "身份证关联手机号数量",
            },
            {
                featurename: 'black_mobile_total',
                value: "身份证关联手机号码黑名单数量",
            },
            {
                featurename: 'grey_mobile_total',
                value: "身份证关联手机号码泛黑名单数量",
            },
            {
                featurename: 'bankcard_total',
                value: "身份证关联银行卡数量",
            }
        ]
    },
    {
        classification: "通讯信息",
        index: 3,
        list: [
            {
                featurename: 'mobile_province',
                value: "手机号归属省份",
            },
            {
                featurename: 'regtime',
                value: "手机在网天数",
            },
            {
                featurename: 'fee_per_month',
                value: "手机近六个月的月均消费金额（分）",
            },
            {
                featurename: 'peer_num',
                value: "手机紧密联系人数量",
            },
            {
                featurename: 'peer_black_num',
                value: "手机紧密联系人命中黑名单数量",
            },

            {
                featurename: 'contact_num',
                value: "手机通话联系人数量",
            },
            {
                featurename: 'contact_black_num',
                value: "手机通话联系人黑名单数量",
            },
            {
                featurename: 'contact_grey_num',
                value: "手机通话联系人泛黑名单数量",
            },
            {
                featurename: 'black_call_num',
                value: "手机黑名单通话次数",
            },
            {
                featurename: 'grey_call_num',
                value: "手机泛黑名单通话次数",
            },
            {
                featurename: 'black_call_time',
                value: "手机黑名单通话时长（分）",
            },
            {
                featurename: 'black_call_time_ratio',
                value: "手机黑名单通话时长占比",
            },
            {
                featurename: 'black_call_time',
                value: "手机泛黑名单通话时长（分）",
            },
            {
                featurename: 'grey_call_time_ratio',
                value: "手机泛黑名单通话时长占比",
            },
            {
                featurename: 'dial_num',
                value: "手机主叫联系人数量",
            },
            {
                featurename: 'black_dial_num',
                value: "手机主叫联系人黑名单数量",
            },
            {
                featurename: 'grey_dial_num',
                value: "手机主叫联系人泛黑名单数量",
            },
            {
                featurename: 'dialed_num',
                value: "手机1被叫联系人数量",
            },
            {
                featurename: 'black_dialed_num',
                value: "被叫联系人黑名单数量",
            },
            {
                featurename: 'grey_dialed_num',
                value: "手机被叫联系人泛黑名单数量",
            },
            {
                featurename: 'call_time_perday',
                value: "手机1近六个月的日均通话时长（秒）",
            },
            {
                featurename: 'call_num_perday',
                value: "手机近六个月的日均通话次数",
            },
            {
                featurename: 'night_call_total_num',
                value: "手机近6个月夜间累计通话次数",
            },
            {
                featurename: 'night_call_total_time',
                value: "手机近6个月夜间通话时长（分）",
            },
            {
                featurename: 'night_calll_time_pct',
                value: "手机近6个月夜间通话时长占比",
            },
            {
                featurename: 'silent_time',
                value: "近6个月静默时长",
            },
            {
                featurename: 'silent_num',
                value: "近6个月静默总次数",
            },
            {
                featurename: 'silent_days',
                value: "手机近6个月最长连续静默时长（毫秒）",
            }
        ]
    },
    {
        classification: "银行卡信息",
        index: 4,
        list: [
            {
                featurename: ' ',
                value: "银行卡关联身份证数量",
            },
            {
                featurename: ' ',
                value: "银行卡关联手机号数量",
            },
            {
                featurename: ' ',
                value: "银行卡发卡行",
            }
        ],
    },
    {
        classification: "多头信息",
        index: 5,
        list: [
            {
                featurename: 'register_platform_total',
                value: "累计注册平台个数",
            },
            {
                featurename: 'register_platform_3days',
                value: "近3天注册平台个数",
            },
            {
                featurename: 'register_platform_7days',
                value: "近7天注册平台个数",
            },
            {
                featurename: 'register_platform_15days',
                value: "近15天注册平台个数",
            },
            {
                featurename: 'register_platform_30days',
                value: "近30天注册平台个数",
            },
            {
                featurename: 'register_platform_60days',
                value: "近60天注册平台个数",
            },
            {
                featurename: 'register_platform_90days',
                value: "近90天注册平台个数",
            },
            {
                featurename: 'idcard_application_time_range',
                value: "累计被查平台个数",
            },
            {
                featurename: 'lastthreeday_idcard_application_time_range',
                value: "近3天被查平台个数",
            },
            {
                featurename: 'lastsevenday_idcard_application_time_range',
                value: "近7天被查平台个数",
            },
            {
                featurename: 'lastfifteenday_idcard_application_time_range',
                value: "近15天被查平台个数",
            },
            {
                featurename: 'lastonemonth_idcard_application_time_range',
                value: "近30天被查平台个数",
            },
            {
                featurename: 'lasttwomonth_idcard_application_time_range',
                value: "近60天被查平台个数",
            },
            {
                featurename: 'lastthreemonth_idcard_application_time_range',
                value: "近90天被查平台个数",
            },
            {
                featurename: 'refuse_platform_total',
                value: "累计拒贷平台个数",
            },
            {
                featurename: 'refuse_platform_3days',
                value: "近3天拒贷平台个数",
            },
            {
                featurename: 'refuse_platform_7days',
                value: "近7天拒贷平台个数",
            },
            {
                featurename: 'refuse_platform_15days',
                value: "近15天拒贷平台个数",
            },
            {
                featurename: 'refuse_platform_30days',
                value: "近30天拒贷平台个数",
            },
            {
                featurename: 'refuse_platform_60days',
                value: "近60天拒贷平台个数",
            },
            {
                featurename: 'refuse_platform_90days',
                value: "近90天拒贷平台个数",
            },
            {
                featurename: 'loan_platform_total',
                value: "累计放款平台个数",
            },
            {
                featurename: 'loan_platform_3days',
                value: "近3天放款平台个数",
            },
            {
                featurename: 'loan_platform_7days',
                value: "近7天放款平台个数",
            },

            {
                featurename: 'loan_platform_15days',
                value: "近15天放款平台个数",
            },
            {
                featurename: 'loan_platform_30days',
                value: "近30天放款平台个数",
            },
            {
                featurename: 'loan_platform_60days',
                value: "近60天放款平台个数",
            },
            {
                featurename: 'loan_platform_90days',
                value: "近90天放款平台个数",
            },
            {
                featurename: 'repayment_platform_total',
                value: "累计还款平台个数",
            },
            {
                featurename: 'repayment_platform_3days',
                value: "近3天还款平台个数",
            },
            {
                featurename: 'repayment_platform_7days',
                value: "近7天还款平台个数",
            },
            {
                featurename: 'repayment_platform_15days',
                value: "近15天还款平台个数",
            },
            {
                featurename: 'repayment_platform_30days',
                value: "近30天还款平台个数",
            },
            {
                featurename: 'repayment_platform_60days',
                value: "近60天还款平台个数",
            },
            {
                featurename: 'repayment_platform_90days',
                value: "近90天还款平台个数",
            },
            {
                featurename: 'overdue_platform_total',
                value: "累计逾期平台个数",
            },
            {
                featurename: 'overdue_platform_3days',
                value: "近3天逾期平台个数",
            },
            {
                featurename: 'overdue_platform_7days',
                value: "近7天逾期平台个数",
            },
            {
                featurename: 'overdue_platform_15days',
                value: "近15天逾期平台个数",
            },
            {
                featurename: 'overdue_platform_30days',
                value: "近30天逾期平台个数",
            },
            {
                featurename: 'overdue_platform_60days',
                value: "近60天逾期平台个数",
            },
            {
                featurename: 'overdue_platform_90days',
                value: "近90天逾期平台个数",
            }
        ],
    },
    {
        classification: "共债信息",
        index: 6,
        list: [
            {
                featurename: 'loan_amount_max',
                value: "最高放款额度",
            },
            {
                featurename: 'overdue_amt_max',
                value: "最高逾期额度",
            },
            {
                featurename: 'overdue_days_max',
                value: "最大逾期天数",
            }
        ],
    },
    {
        classification: "法院信息",
        index: 7,
        list: [
            {
                featurename: 'court_involved',
                value: "有无法院涉诉记录",
            },
            {
                featurename: 'court_lost_trust',
                value: "法院失信累计出现次数",
            }
        ],
    }
];

function colorRender(dataTypes) {
    return dataTypes
}

export function bgRender() {
    return colorRender(dataTypes);
}