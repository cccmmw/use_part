// 判断浏览器
var browser = {
  versions: function () {
    var u = navigator.userAgent,
      app = navigator.appVersion;
    return { //移动终端浏览器版本信息
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
      iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
    };
  }(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
// 备注：微信、微博、QQ空间和iOS、安卓会重复
if (browser.versions.mobile) { //判断是否是移动设备打开。browser代码在下面
  // 如果之判断微信、微博，可直接用下面代码
  var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    //在微信中打开
  } else if (ua.match(/WeiBo/i) == "weibo") {
    //在新浪微博客户端打开
  } else if (ua.match(/QQ/i) == "qq") {
    //在QQ空间打开
  } else if (browser.versions.ios) {
    //是否在IOS浏览器打开
  } else if (browser.versions.android) {
    //是否在安卓浏览器打开
  }
} else {
  //否则就是PC浏览器打开
}



// 判断手机
function judgeBrand(sUserAgent) {
  var isIphone = sUserAgent.match(/iphone/i) == "iphone";
  var isHuawei = sUserAgent.match(/huawei/i) == "huawei";
  var isHonor = sUserAgent.match(/honor/i) == "honor";
  var isOppo = sUserAgent.match(/oppo/i) == "oppo";
  var isOppoR15 = sUserAgent.match(/pacm00/i) == "pacm00";
  var isVivo = sUserAgent.match(/vivo/i) == "vivo";
  var isXiaomi = sUserAgent.match(/mi\s/i) == "mi ";
  var isXiaomi2s = sUserAgent.match(/mix\s/i) == "mix ";
  var isRedmi = sUserAgent.match(/redmi/i) == "redmi";
  var isSamsung = sUserAgent.match(/sm-/i) == "sm-";

  if (isIphone) {
      return 'iphone';
  } else if (isHuawei || isHonor) {
      return 'huawei';
  } else if (isOppo || isOppoR15) {
      return 'oppo';
  } else if (isVivo) {
      return 'vivo';
  } else if (isXiaomi || isRedmi || isXiaomi2s) {
      return 'xiaomi';
  } else if (isSamsung) {
      return 'samsung';
  } else {
      return 'default';
  }
}

var brand = judgeBrand(navigator.userAgent.toLowerCase()); 




// 日期格式化
setTime: function (index, code) {
  var sTime, eTime;
  var date = new Date();
  if (code == 0) {
    //今日
    sTime = date;
    eTime = date;
  } else if (code == 1) {
    //昨日
    date.setDate(date.getDate() - 1);
    sTime = date;
    eTime = date;
  } else if (code == 2) {
    //本周
    sTime = new Date(date - date.getDay() * 86400000);
    eTime = date;
  } else if (code == 3) {
    //上周
    sTime = new Date(date - (date.getDay() + 7) * 86400000);
    eTime = new Date(date - (date.getDay()) * 86400000);
  } else if (code == 4) {
    //本月
    sTime = new Date(date.getFullYear(), date.getMonth(), 1);
    eTime = date;
  } else if (code == 5) {
    //上月
    sTime = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    eTime = new Date(new Date(date.getFullYear(), date.getMonth(), 1) - 86400000);
  }
}


// 复制
const range = document.createRange();
range.selectNode(document.getElementById('code'));
const selection = window.getSelection();
if (selection.rangeCount > 0) selection.removeAllRanges();
selection.addRange(range);
document.execCommand('copy');


// 获取手机机型
var ua = navigator.userAgent.split("(")[1].split(")")[0];
var brand = "";
var phone = [/IPHONE/gi, /huawei/gi, /mi/gi, /vivo/gi, /OPPO/gi, /samsung/gi, /SONY/gi, /Nokia/gi, /HTC/gi, /ZTE/gi, /Lenovo/gi, /ZUK/gi, ]
if (phone[0].test(ua)) {
  brand = "iPhone";
} else if (phone[1].test(ua)) {
  brand = "HUAWEI";
} else if (phone[2].test(ua)) {
  brand = "小米";
} else if (phone[3].test(ua)) {
  brand = "vivo";
} else if (phone[4].test(ua)) {
  brand = "OPPO";
} else if (phone[5].test(ua)) {
  brand = "SAMSUNG";
} else if (phone[6].test(ua)) {
  brand = "SONY";
} else if (phone[7].test(ua)) {
  brand = "Nokia";
} else if (phone[8].test(ua)) {
  brand = "HTC";
} else if (phone[9].test(ua)) {
  brand = "ZTE";
} else if (phone[10].test(ua) || phone[11].test(ua)) {
  brand = "Lenovo";
} else {
  brand = "Android";
}
console.log(brand)