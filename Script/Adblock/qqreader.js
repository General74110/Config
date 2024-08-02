// 获取相应数据
let obj = JSON.parse($response.body);
// 获取请求地址
let requestUrl = $request.url;

// 定义URL关键字
const firstOpenAppAd = '/common/firstOpenApp/ad?';

// 判断是否为匹配项去除 开屏广告/我的-全部活动页面入口
if (/^https?:\/\/(us\.l\.qq\.com\/exapp|commontgw\.reader\.qq\.com\/common\/adV3)/.test(requestUrl)) {
    // 判断是否存在数据
    if (obj.hasOwnProperty("data")) {
        delete obj.data; // 删除指定数据
        delete obj.last_ads;
    }
}

// 处理common/firstOpenApp/ad?链接
if (requestUrl.indexOf(firstOpenAppAd) != -1) {
    delete obj.data; // 删除响应体中的data字段
	delete obj.sk;
}

// 重写数据
$done({ body: JSON.stringify(obj) });