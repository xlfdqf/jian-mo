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
    },
    {
        featurename: "gender",
        value: "性别",
    },
    {
        featurename: "race",
        value: "民族",
    }, {
        featurename: "amount_max",
        value: "借款金额",
    },
    // 问题：中文不能严谨判断
    {
        featurename: 'customer_type',
        value: "是否为新客",
    },
    // {
    //     featurename: 'company_period',
    //     value: "工作时长 （单位：年）",
    // },
    // {
    //     featurename: 'product_type',
    //     value: "产品类型 7：7天产品，14：14天产品",
    // }, {
    //     featurename: 'promotion_channel',
    //     value: "是否为推广渠道 0.否 1.是",
    // }, {
    //     featurename: 'telecom_type',
    //     value: "运营商类型 0 为聚信立，1为魔蝎 默认0",
    // },
    {
        featurename: "binding_idcards",
        value: "绑定身份证情况",
    }, {
        featurename: 'binding_phones',
        value: "绑定号码情况",
    },
    {
        featurename: 'phone_operator',
        value: "手机运营商",
    },
    {
        featurename: '',
        value: "手机号记录天数",
    },
    {
        featurename: '',
        value: "关联手机号数量",
    }, {
        featurename: '',
        value: "身份证是否是有效身份证",
    }, {
        featurename: '',
        value: "关联身份证数量",
    }, {
        featurename: '',
        value: "身份证号记录天数",
    }, {
        featurename: '',
        value: "认识间接黑人的直接联系人个数",
    }, {
        featurename: '',
        value: "间接联系人在黑名单中数量(间接黑人)",
    }, {
        featurename: '',
        value: "直接联系人",
    }, {
        featurename: '',
        value: "认识间接黑人的直接联系人比例",
    }, {
        featurename: '',
        value: "葫芦分",
    }, {
        featurename: '',
        value: "是否命中法院黑名单",
    }, {
        featurename: '',
        value: "是否命中网贷黑名单",
    }, {
        featurename: '',
        value: "身份证是否命中黑名单",
    }, {
        featurename: '',
        value: "手机号是否命中黑名单",
    }, {
        featurename: '',
        value: "是否命中银行黑名单",
    }, {
        featurename: '',
        value: "线下现金贷出现次数",
    }, {
        featurename: '',
        value: "线上现金贷出现次数",
    }, {
        featurename: '',
        value: "线上消费分期出现次数",
    }, {
        featurename: '',
        value: "小额快速贷出现次数",
    }, {
        featurename: '',
        value: "信用卡代还出现次数",
    }, {
        featurename: '',
        value: "线下消费分期出现次数",
    }, {
        featurename: '',
        value: "其他",
    }, {
        featurename: '',
        value: "最近180天查询次数",
    }, {
        featurename: '',
        value: "最近7天查询次数",
    }, {
        featurename: '',
        value: "最近180天查询机构数",
    }, {
        featurename: '',
        value: "最近90天查询次数",
    }, {
        featurename: '',
        value: "最近60天查询机构数",
    }, {
        featurename: '',
        value: "最近30天查询次数",
    }, {
        featurename: '',
        value: "最近14天查询次数",
    }, {
        featurename: '',
        value: "最近30天查询机构数",
    }, {
        featurename: '',
        value: "最近7天查询机构数",
    }, {
        featurename: '',
        value: "最近90天查询机构数",
    }, {
        featurename: '',
        value: "历史查询总机构数",
    }, {
        featurename: '',
        value: "最近60天查询次数",
    }, {
        featurename: '',
        value: "历史查询总次数",
    }, {
        featurename: '',
        value: "证件查询次数级别",
    }, {
        featurename: '',
        value: "手机2个月内查询次数级别",
    }, {
        featurename: '',
        value: "手机1个月内查询平台数",
    }, {
        featurename: '',
        value: "证件7天内查询次数级别",
    }, {
        featurename: '',
        value: "手机15天内查询平台数",
    }, {
        featurename: '',
        value: "证件3天内查平台数",
    }, {
        featurename: '',
        value: "证件当日查询次数级别",
    }, {
        featurename: '',
        value: "手机3天内查询次数级别",
    }, {
        featurename: '',
        value: "证件15天内查询平台数",
    }, {
        featurename: '',
        value: "证件1个月内查询平台数",
    }, {
        featurename: '',
        value: "证件3个月内平台数",
    }, {
        featurename: '',
        value: "证件当日查询平台数",
    }, {
        featurename: '',
        value: "证件2个月内查询平台数",
    }, {
        featurename: '',
        value: "证件3个月内查询平台数",
    }, {
        featurename: '',
        value: "手机当日查询平台数",
    }, {
        featurename: '',
        value: "手机1个月内查询次数级别",
    }, {
        featurename: '',
        value: "手机7天内查询平台数",
    }, {
        featurename: '',
        value: "证件1个月内查询次数级别",
    }, {
        featurename: '',
        value: "手机当日查询次数级别",
    }, {
        featurename: '',
        value: "手机15天内查询次数级别",
    }, {
        featurename: '',
        value: "手机最早出现日期",
    }, {
        featurename: '',
        value: "手机查询平台数",
    }, {
        featurename: '',
        value: "手机3个月内查询次数级别",
    }, {
        featurename: '',
        value: "证件7天内查询平台数",
    }, {
        featurename: '',
        value: "手机3个月内查询平台数",
    }, {
        featurename: '',
        value: "证件3天内查询次数级别",
    }, {
        featurename: '',
        value: "手机2个月内查询平台数",
    },
    {
        featurename: '',
        value: "手机查询次数级别",
    }, {
        featurename: '',
        value: "手机3天内查询平台数",
    }, {
        featurename: '',
        value: "证件查询平台数",
    }, {
        featurename: '',
        value: "证件15天内查询次数级别",
    }, {
        featurename: '',
        value: "运营商（中文）",
    }
]