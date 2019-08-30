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
        featurename: 'contact_loan_calledminute',
        value: "贷款类平台被叫时长",
    },
    // {
    //     featurename: 'education',
    //     value: "学历",
    // }
]