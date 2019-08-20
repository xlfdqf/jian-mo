import moment from "moment";

export function filterMarital(marital) {
    switch (marital) {
        case 1:
            marital = "未婚";
            break;
        case 2:
            marital = "未婚";
            break;
        case 3:
            marital = "未婚";
            break;
        case 4:
            marital = "未婚";
            break;
        default:
            marital = "其他";
    }
    return marital;
}
export function filterCompanyPeriod(companyPeriod) {
    if (companyPeriod === '-1111') {
        companyPeriod = "未知";
    } else {
        companyPeriod = companyPeriod;
    }
    return companyPeriod;
}
export function iscustomer(flag) {
    if (flag === 0) {
        flag = "新客户";
    } else {
        flag = "老客户";
    }
    return flag;
}
export function filterProType(type) {
    return type + '天产品';
}
export function isTrue(flag) {
    if (flag === 0 || flag === 'false') {
        flag = "否";
    } else {
        flag = '是';
    }
    return flag;
}

export function filterTelecomType(flag) {
    if (flag === 0) {
        flag = "聚信立";
    } else {
        flag = '摩羯';
    }
    return flag;
}
// 折叠面板分类
export function filterCollName(colleName) {
    switch (colleName) {
        case '1':
            colleName = "basic";
            break;
        case '2':
            colleName = "contactinfo";
            break;
        case '3':
            colleName = "daihoubang";
            break;
        case '4':
            colleName = "changdaike";
            break;
        default:
            colleName = "basic";
    }
    return colleName;
}
export function filterinTime(flag) {
    return moment(flag).format("YYYY-MM-DD HH:MM:SS");
}