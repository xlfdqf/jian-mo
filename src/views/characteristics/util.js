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
// 按月、年tab切换
export function tabType2(tab) {
    switch (tab) {
        case '1':
            tab = "month";
            break;
        default:
            tab = "year";
    }
    return tab;
}