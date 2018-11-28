var workResume_addWorkResume = function (datas, cb, type) {
    var that = this;
    $.ajax({
        type: "post",
        url: Url + "workResume/addWorkResume",
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
var interview_resumeList = function (datas, cb, type) {
    var that = this;
    $.ajax({
        type: "post",
        url: Url + "interview/resumeList",
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
var interview_resumeInfo = function (datas, cb, type) {
    var that = this;
    $.ajax({
        type: "post",
        url: Url + "interview/resumeInfo",
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
var workResume_evaluation = function (datas, cb, type) {
    var that = this;
    $.ajax({
        type: "post",
        url: Url + "workResume/evaluation",
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
var workResume_changeInterViewStatu = function (datas, cb, type) {
    var that = this;
    $.ajax({
        type: "post",
        url: Url + "workResume/changeInterViewStatu",
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
var workResume_queryInterviewByagentCode = function (datas, cb, type) {
    var that = this;
    $.ajax({
        type: "post",
        url: Url + "workResume/queryInterviewByagentCode",
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
var workResume_getQrcodeData = function (datas, cb, type) {
    var that = this;
    $.ajax({
        type: "post",
        url: Url + "workResume/getQrcodeData",
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
// 获取agentCode
var workResume_main = function (datas, cb, type) {
    var that = this;
    $.ajax({
        type: "post",
        url: Url + "workResume/main",
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
// 根据agentCode查工号和姓名
var workResume_examWorkResume = function (datas, cb, type) {
    var that = this;
    $.ajax({
        type: "post",
        url: Url + "workResume/examWorkResume",
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
// 上传面试人经纬度
var workResume_bindInterViewer = function (datas, cb, type) {
    var that = this;
    $.ajax({
        type: "post",
        url: Url + "workResume/bindInterViewer",
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