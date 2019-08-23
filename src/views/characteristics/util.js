import moment from "moment";

// 特征离散分析tab分类
export function tabType1(marital) {
    switch (marital) {
        case 1:
            marital = "未婚";
            break;
        case 2:
            marital = "已婚未育";
            break;
        case 3:
            marital = "未婚已育";
            break;
        case 4:
            marital = "离异";
            break;
        default:
            marital = "其他";
    }
    return marital;
}