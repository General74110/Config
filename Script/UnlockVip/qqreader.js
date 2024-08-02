var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const welfareInit = '/activity/new_welfare/init';  // 定义要匹配的URL关键字
const welfareQuery = '/activity/new_welfare/queryAwardList';  // 另一个要匹配的URL关键字
const welfareTaskInitListen = '/activity/new_welfare/taskInitListenTime';  // 另一个要匹配的URL关键字
const welfareTaskInitV2 = '/activity/new_welfare/taskInitV2';  // 另一个要匹配的URL关键字
const bookShelf = '/sign/welfare/bookShelf';  // 另一个要匹配的URL关键字
const adV3 = 'common/adV3';  // 另一个要匹配的URL关键字
const log = 'common/log';  // 另一个要匹配的URL关键字

if (url.indexOf(welfareInit) != -1) {
    obj["data"]["vip"] = 1;  // 将"vip"字段修改为1
    body = JSON.stringify(obj);
}

if (url.indexOf(welfareQuery) != -1 || url.indexOf(welfareTaskInitListen) != -1 || url.indexOf(welfareTaskInitV2) != -1) {
    obj["data"]["vip"] = true;  // 将"vip"字段修改为true
    body = JSON.stringify(obj);
}

if (url.indexOf(bookShelf) != -1) {
    obj["vip"] = true;  // 将"vip"字段修改为true
    body = JSON.stringify(obj);
}

if (url.indexOf(adV3) != -1) {
    obj["isVip"] = true;  // 将"isVip"字段修改为true
    body = JSON.stringify(obj);
}

if (url.indexOf(log) != -1) {
    obj["isVip"] = 1;  // 将"isVip"字段修改为1
    body = JSON.stringify(obj);
}

$done({ body });