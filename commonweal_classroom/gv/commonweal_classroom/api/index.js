// 将json改为key=val&key=val形式
function xuliehua(datas) {
    var str = '';
    for (var i in datas) {
        if (datas[i] instanceof Array) {
            str += (i + '=' +JSON.stringify(datas[i]) + '&');
        } else {
            str += (i + '=' + datas[i] + '&');
        }
    }
    str = str.slice(0, -1);
    console.log(str);
    return str;
}
// 获取二维码接口
var activityGetQrcodeData = function (datas, cb, type) {
    var that = this;
    $.ajax({
        type: "post",
        url: Url + "activity/getQrcodeData",
        data: datas,
        success: function (data) {
            if (data.result) {
                cb(data.object);
            } else {
                mui.alert('', data.info, '');
            }
        },
        complete: function () {
            $('.loading_layer').remove();
            if (type === 'G') {
                that.flag = true;
            }
        }
    });
};
// 注册接口
var activityInsertAcUserInfo = function (datas, cb, type) {
    var that = this;
    $.ajax({
        type: "post",
        url: Url + "activity/insertAcUserInfo",
        data: datas,
        success: function (data) {
            if (data.result) {
                cb(data.object);
            } else {
                mui.alert('', data.info, '');
            }
        },
        complete: function () {
            $('.loading_layer').remove();
            if (type === 'G') {
                that.flag = true;
            }
        }
    });
};
// 跳转公益讲堂之前接口
var activityActivityDetails = function (datas, cb, type) {
    var that = this;
    $.ajax({
        type: "post",
        url: Url + "activity/activityDetails",
        data: datas,
        success: function (data) {
            if (data.result) {
                cb(data.object);
            } else {
                mui.alert('', data.info, '');
            }
        },
        complete: function () {
            $('.loading_layer').remove();
            if (type === 'G') {
                that.flag = true;
            }
        }
    });
};
// 查询中奖纪录
var activityGetActivityByopenid = function (datas, cb, type) {
    var that = this;
    $.ajax({
        type: "post",
        url: Url + "activity/getActivityByopenid",
        data: datas,
        success: function (data) {
            if (data.result) {
                cb(data.object);
            } else {
                mui.alert('', data.info, '');
            }
        },
        complete: function () {
            $('.loading_layer').remove();
            if (type === 'G') {
                that.flag = true;
            }
        }
    });
};
