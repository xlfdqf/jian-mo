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
    {
        featurename: 'company_period',
        value: "工作时长",
        // value: "工作时长 （单位：年）",
    },
    {
        featurename: 'product_type',
        value: "产品类型",
        // value: "产品类型 7：7天产品，14：14天产品",
    }, {
        featurename: 'promotion_channel',
        value: "是否为推广渠道",
        // value: "是否为推广渠道 0.否 1.是",
    }, {
        featurename: 'telecom_type',
        value: "运营商类型",
        // value: "运营商类型 0 为聚信立，1为魔蝎 默认0",
    },
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
    },
    // 新增字段
    {
        featurename: '',
        value: "cell_phone字段是否出现过",
    }, {
        featurename: '',
        value: "城市",
    }, {
        featurename: '',
        value: "近六个月频繁服务企业类型TOP1",
    }, {
        featurename: '',
        value: "近六个月频繁服务企业类型TOP2",
    }, {
        featurename: '',
        value: "近六个月频繁服务企业类型TOP3",
    }, {
        featurename: '',
        value: "直接联系人中黑名单人数",
    }, {
        featurename: '',
        value: "直接联系人人数",
    }, {
        featurename: '',
        value: "间接联系人中黑名单人数",
    }, {
        featurename: '',
        value: "引起间接黑名单人数",
    }, {
        featurename: '',
        value: "直接联系人中引起间接黑名单占比",
    }, {
        featurename: '',
        value: "贷款类平台被叫时长",
    }, {
        featurename: '',
        value: "贷款类平台被叫次数",
    }, {
        featurename: '',
        value: "贷款类平台主叫时长",
    }, {
        featurename: '',
        value: "贷款类平台主叫次数",
    }, {
        featurename: '',
        value: "贷款类号码联系情况 结果",
    }, {
        featurename: '',
        value: "贷款类号码联系情况 评分",
    }, {
        featurename: '',
        value: "节假日出行次数",
    }, {
        featurename: '',
        value: "家庭电话通话记录次数",
    }, {
        featurename: '',
        value: "与运营商提供的身份证是否匹配",
    }, {
        featurename: '',
        value: "身份证组合过的其他姓名数量",
    }, {
        featurename: '',
        value: "身份证组合过其他电话数量",
    }, {
        featurename: '',
        value: "身份证是否出现",
    }, {
        featurename: '',
        value: "手机7天内查询次数级别",
    }, {
        featurename: '',
        value: "证件2个月内查询次数级别",
    }, {
        featurename: '',
        value: "婚姻状况",
    }, {
        featurename: '',
        value: "家庭电话通话时长",
    }, {
        featurename: '',
        value: "与运营商提供的姓名是否匹配",
    }, {
        featurename: '',
        value: "最近14天查询机构数",
    }, {
        featurename: '',
        value: "用户号码联系黑中介分数",
    }, {
        featurename: '',
        value: "电话号码组合过其他身份证数量",
    }, {
        featurename: '',
        value: "电话号码组合过其他姓名数量",
    }, {
        featurename: '',
        value: "居住时长",
    }, {
        featurename: '',
        value: "省份",
    }, {
        featurename: '',
        value: "近6个月月均呼叫次数",
    }, {
        featurename: '',
        value: "近6个月月均被叫次数",
    }, {
        featurename: '',
        value: "近6个月月均被叫时间",
    }, {
        featurename: '',
        value: "近6个月月均主叫次数",
    }, {
        featurename: '',
        value: "近6个月月均主叫时间",
    }, {
        featurename: '',
        value: "近6个月月均流量",
    }, {
        featurename: '',
        value: "近6个月月均短信数目",
    }, {
        featurename: '',
        value: "近6个月月均话费消费",
    }, {
        featurename: '',
        value: "区县",
    }, {
        featurename: '',
        value: "电话号码注册过的相关企业数量",
    }, {
        featurename: '',
        value: "实名认证",
    }, {
        featurename: '',
        value: "查询过该用户的相关企业数量",
    }, {
        featurename: '',
        value: "直接联系人在黑名单中数量(直接黑人)",
    }, {
        featurename: '',
        value: "近六个月通话时长TOP1",
    }, {
        featurename: '',
        value: "近六个月通话时长TOP1通话次数",
    }, {
        featurename: '',
        value: "近六个月通话时长TOP1呼入次数",
    }, {
        featurename: '',
        value: "近六个月通话时长TOP1呼入时间",
    }, {
        featurename: '',
        value: "近六个月通话时长TOP1呼出次数",
    }, {
        featurename: '',
        value: "近六个月通话时长TOP1呼出时间",
    }, {
        featurename: '',
        value: "近六个月通话时长TOP2",
    }, {
        featurename: '',
        value: "近六个月通话时长TOP2通话次数",
    }, {
        featurename: '',
        value: "近六个月通话时长TOP2呼入次数",
    }, {
        featurename: '',
        value: "近六个月通话时长TOP2呼入时间",
    }, {
        featurename: '',
        value: "近六个月通话时长TOP2呼出次数",
    }, {
        featurename: '',
        value: "近六个月通话时长TOP2呼出时间",
    }, {
        featurename: '',
        value: "近六个月通话时长TOP3",
    }, {
        featurename: '',
        value: "近六个月通话时长TOP3通话次数",
    }, {
        featurename: '',
        value: "近六个月通话时长TOP3呼入次数",
    }, {
        featurename: '',
        value: "近六个月通话时长TOP3呼入时间",
    }, {
        featurename: '',
        value: "近六个月通话时长TOP3呼出次数",
    }, {
        featurename: '',
        value: "近六个月通话时长TOP3呼出时间",
    }, {
        featurename: '',
        value: "移动运营商",
    }, {
        featurename: '',
        value: "工作日出行次数",
    }, {
        featurename: '',
        value: "双休日出行次数",
    },
]