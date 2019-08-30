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
    // {
    //     featurename: "nation",
    //     value: "民族",
    // },
    {
        featurename: "score",
        value: "芝麻分",
    },
    {
        featurename: 'constellation',
        value: "星座",
    },
    // {
    //     featurename: 'education',
    //     value: "学历",
    // },
    // {
    //     featurename: 'province',
    //     value: "户籍省",
    // },
    {
        featurename: 'native_province',
        value: "籍贯",
    },
    // {
    //     featurename: 'sex',
    //     value: "性别",
    // },
    // {
    //     featurename: 'jiguan',
    //     value: "籍贯",
    // }
]