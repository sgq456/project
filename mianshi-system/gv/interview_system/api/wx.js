var configData = {};
var wx_flag = false;
function wx_getSignatureInfo(cb) {
    $.ajax({
        type : "POST",
        url : ShareUrl + '/weChat/getSignatureInfo',
        data : {
            pageUrl : location.href.split('#')[0]
        },
        dataType : "json",
        success : function(data) {
            configData = {
                debug : false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId : data.appid, // 必填，公众号的唯一标识
                timestamp : data.timestamp, // 必填，生成签名的时间戳
                nonceStr : data.nonceStr, // 必填，生成签名的随机串
                signature : data.signature,// 必填，签名，见附录1
                jsApiList : [ 'showOptionMenu', 'onMenuShareTimeline',
                    'onMenuShareAppMessage', 'hideMenuItems', 'getLocation' ]
                // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            };
            cb && cb();
        }
    });
}
function wx_jssdk(cb) {
    // 加载微信SDK引入js
    $.getScript('http://res.wx.qq.com/open/js/jweixin-1.2.0.js').done(
        function() {
            wx.config(configData);
            wx.ready(function() {
                wx_flag = true;
                cb();
            });
            wx.error(function(res) {
                wx_flag = false;
            });
        });
}

function wx_config(cb) {
    wx.config(configData);
    wx.ready(function() {
        wx_flag = true;
        cb && cb();
    });
    wx.error(function(res) {
        wx_flag = false;
    });
}
// 微信分享
function wx_share(title, desc, link, imgUrl) {
    wx_getSignatureInfo(function () {
        wx_config(function () {
            // alert('JS-SDK注册成功！可以使用了');
            wx.showOptionMenu();
            // 分享给朋友
            wx.onMenuShareAppMessage({
                title : title,// 分享标题
                desc : desc,// 分享描述
                link :  ShareUrl+link,// 分享链接
                imgUrl : imgUrl, // 分享图标
                type : '', // 分享类型,music、video或link，不填默认为link
                dataUrl : '', // 如果type是music或video，则要提供数据链接，默认为空
                success : function() {
                    // 用户确认分享后执行的回调函数
                },
                cancel : function() {
                    // 用户取消分享后执行的回调函数
                }
            });
            // 分享到朋友圈
            wx.onMenuShareTimeline({
                title : title,// 分享标题
                link :  ShareUrl+link,// 分享链接
                imgUrl : imgUrl, // 分享图标
                success : function() {
                    // 用户确认分享后执行的回调函数
                },
                cancel : function() {
                    // 用户取消分享后执行的回调函数
                }
            });
            // 隐藏按钮
            wx.hideMenuItems({
                menuList : [ "menuItem:exposeArticle",// 举报
                    "menuItem:setFont",// 调整字体
                    "menuItem:dayMode",// 日间模式
                    "menuItem:nightMode",// 夜间模式
                    "menuItem:refresh",// 刷新
                    "menuItem:profile",// 查看公众号（已添加）:
                    "menuItem:addContact",// 查看公众号（未添加）
                    // "menuItem:share:appMessage",//发送给朋友:
                    // menuItem:share:timeline",//分享到朋友圈: "
                    "menuItem:share:qq",// 分享到QQ:
                    "menuItem:share:weiboApp",// 分享到Weibo:
                    // "menuItem:favorite",//收藏:
                    // "menuItem:share:facebook",//分享到FB:
                    "menuItem:share:QZone",// 分享到 QQ 空间/
                    "menuItem:editTag",// 编辑标签:
                    "menuItem:delete",// 删除:
                    "menuItem:copyUrl",// 复制链接:
                    "menuItem:originPage",// 原网页:
                    "menuItem:readMode",// 阅读模式:
                    "menuItem:openWithQQBrowser",// 在QQ浏览器中打开:
                    "menuItem:openWithSafari",// 在Safari中打开:
                    "menuItem:share:email",// 邮件:
                    "menuItem:share:brand"// 一些特殊公众号:
                ]

            });
        })
    })
}
// 微信获取地理位置
function wx_getLocation(cb) {
    wx_getSignatureInfo(function () {
        wx_config(function () {
            wx.getLocation({
                type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                success: function (res) {
                    var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                    var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                    var speed = res.speed; // 速度，以米/每秒计
                    var accuracy = res.accuracy; // 位置精度
                    cb && cb([res.latitude, res.longitude]);
                }
            });
        })
    })
}
