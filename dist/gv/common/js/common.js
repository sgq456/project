document.getElementsByTagName("html")[0].style.fontSize = document.documentElement.clientWidth/ 15 + "px";
// 改变窗口的时候重新计算大小
window.onresize = function() {
    document.getElementsByTagName("html")[0].style.fontSize = document.documentElement.clientWidth/ 15 + "px";
}
//设置只能在微信客户端打开
//$(function() {
//	var ua = navigator.userAgent.toLowerCase();
//	if (ua.match(/MicroMessenger/i) != "micromessenger") {
//		$("body").html("<h1 align='center' style='padding-top: 230px;font-size: 18px;'>请在微信客户端打开该页面！</h1>");
//		return false;
//	}
//});


// 地址
// var  Url = "";                                  //测试环境使用
var Url = 'http://112.74.229.203:8080/microClass/';//本地开发使用
var ShareUrl="http://int-wechat.hualife.cc/microClass/";
// ajax公用设置
$.ajaxSetup({
    url : "/xmlhttp/",
    global : false,
    type : 'post',
    dataType : 'json',
    cache : false,
    timeout : 30000,
    beforeSend : function() {
        fnLoading();// 加载loading
    },
    complete : function() {
        $('.loading_layer').remove();// 删除loading
    },
    error : function(jqXHR, textStatus, errorThrown) {
        switch (jqXHR.status) {
            case 404:
            case 500:
            case 502:
            case 503:
                // location.href = Url + "pageTo/to404";
                break;
        }
        if (textStatus == 'timeout') {
            mui.alert('系统链接超时，请稍后再试');
            $('.default_btn').prop('disabled', false);
        }
    }
})
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return decodeURI(r[2]);
    return null;
}
// 手机验证码验证
function fnMobileCode(mobileCodeObj) {
    var regMobile = /^\d{6}$/;// 手机验证码正则（6位数字）
    var mobileCodeVal = mobileCodeObj.val();
    if (mobileCodeVal == '') {
        mobileCodeObj.siblings('.wrong_tips').text('请输入验证码！').show();
        return false;
    } else if (!regMobile.test(mobileCodeVal)) {
        mobileCodeObj.siblings('.wrong_tips').text('请输入正确验证码！').show();
        return false;
    } else {
        mobileCodeObj.siblings('.wrong_tips').text('').hide();
        return true;
    }
}
$('#smsCode').keyup(function() {
    fnMobileCode($(this));
})
// 手机验证码倒计时
// 验证码倒计时
var countdown = 120;
var timer;
var clickTime = 0;// 点击验证码次数
function settimeCode(val) {
    timer = setTimeout(function() {
        settimeCode(val)
    }, 1000)
    if (countdown == 0) {
        clearTimeout(timer);
        val.prop('disabled', false);
        val.html('重新发送');
        countdown = 120;
        clickTime = 0;// 点击验证码次数
    } else {
        val.prop('disabled', true);
        val.html(countdown + '秒后重发');
        countdown--;
    }
}
$('.btn_member_mobile_code').click(function() {
    var that = $(this);
    var mobile = $('#mobile').val();
    if (fnIphone($('#mobile'))) {
        // 请求验证码
        $.ajax({
            url : Url + 'basic/SMSSend',
            data : {
                smsCode : that.attr('edor_app_type'),
                mobile : mobile
            },
            success : function(data) {
                if (data.result) {
                    // 发送短信验证码倒计时（成功开始倒计时）
                    settimeCode(that);
                    clickTime = 1;
                } else {
                    mui.alert('', data.info, '');
                }
            }
        })
    }

})
// 客户身份信息（非空&正确性校验）-姓名、证件类型、证件号码、性别、出生日期
// 姓名：2个及2个以上汉字或英文，将目前上限2-15扩增到2-40
function fnUserName(obj) {
    var val = obj.val();
    var enName = /^(([A-Za-z]+\s?)*[A-Za-z]){2,40}$/;// 英文
    var chName = /^[\u4E00-\u9FA5]{2,40}$/; // 中文
    if (val == '') {
        obj.parents('li').find('.wrong_tips').text('请输入姓名！').show();
        return false;
    } else if (!(enName.test(val) || chName.test(val))) {
        obj.parents('li').find('.wrong_tips').text('请输入2个及2个以上汉字或英文！').show();
        return false;
    } else {
        obj.parents('li').find('.wrong_tips').text('').hide();
        return true;
    }
}
function fnCheckName(obj) {
    obj.keyup(function() {
        fnUserName(obj);
    })
    obj.bind('input', function() {
        fnUserName(obj);
    })
}
// 身份证件号码校验 & 其他类型证件号校验（除身份证号） ---测试
function fnId(obj, objType) {
    var val = obj.val();
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X)$)/;// 身份证号
    var regNo = /^[\da-zA-Z\u4E00-\u9FA5]{6,25}$/;// 6-25个数字字母 其他证件号码
    if (objType.find('option:selected').val() != '请选择证件类型') {
        if (objType.find('option:selected').val() == '01') {
            if (val == '') {
                obj.parents('li').find('.wrong_tips').text('请输入证件号码！').show();
                $('#birthdayDate').val('');
                $('.gender').get(0).selectedIndex = 0;
                return false;
            } else if (!reg.test(val)) {
                obj.parents('li').find('.wrong_tips').text('请输入正确的证件号码（末位为大写字母）！')
                    .show();
                $('#birthdayDate').val('');
                $('.gender').get(0).selectedIndex = 0;
                return false;
            } else {
                var birthdayNo, genderNo;
                if (val.length == 15) {
                    birthdayNo = val.charAt(6) + val.charAt(7);
                    if (parseInt(birthdayNo) < 10) {
                        birthdayNo = '20' + val.substring(6, 12);
                    } else {
                        birthdayNo = '19' + val.substring(6, 12);
                    }
                    genderNo = val.substring(14, 15);
                    var year = val.substring(6, 8);
                    var month = val.substring(8, 10);
                    var day = val.substring(10, 12);
                    var temp_date = new Date(year, parseFloat(month) - 1,
                        parseFloat(day));
                    // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
                    if (temp_date.getYear() != parseFloat(year)
                        || temp_date.getMonth() != parseFloat(month) - 1
                        || temp_date.getDate() != parseFloat(day)) {
                        $('#birthdayDate').val('');
                        $('.gender').get(0).selectedIndex = 0;
                        obj.parents('li').find('.wrong_tips').text(
                            '请输入正确的证件号码（末位为大写字母）！').show();
                        return false;
                    }
                } else if (val.length == 18) {
                    birthdayNo = val.substring(6, 14);
                    genderNo = val.substring(16, 17);
                    var year = val.substring(6, 10);
                    var month = val.substring(10, 12);
                    var day = val.substring(12, 14);
                    var temp_date = new Date(year, parseFloat(month) - 1,
                        parseFloat(day));
                    // 这里用getFullYear()获取年份，避免千年虫问题
                    if (temp_date.getFullYear() != parseFloat(year)
                        || temp_date.getMonth() != parseFloat(month) - 1
                        || temp_date.getDate() != parseFloat(day)) {
                        $('#birthdayDate').val('');
                        $('.gender').get(0).selectedIndex = 0;
                        obj.parents('li').find('.wrong_tips').text(
                            '请输入正确的证件号码（末位为大写字母）！').show();
                        return false;
                    }
                } else {
                    $('#birthdayDate').val('');
                    $('.gender').get(0).selectedIndex = 0;
                    obj.parents('li').find('.wrong_tips').text('请输入正确的证件号码（末位为大写字母）！')
                        .show();
                    return false;
                }
                // 获取日期
                $('#birthdayDate').val(
                    birthdayNo.substring(0, 4) + "-"
                    + getZero(parseInt(birthdayNo.substring(4, 6)))
                    + "-" + birthdayNo.substring(6, 8));
                $("#birthdayDate")
                    .scroller(
                        'setDate',
                        new Date(birthdayNo.substring(0, 4),
                            getZero(parseInt(birthdayNo.substring(
                                4, 6)) - 1), birthdayNo
                                .substring(6, 8)), true);
                // 获取性别
                if (parseInt(genderNo) % 2 == 1) {
                    fnCurBank($('.gender'), '0', $('.gender_name'));
                } else {
                    fnCurBank($('.gender'), '1', $('.gender_name'));
                }
                obj.parents('li').find('.wrong_tips').text('').hide();
                return true;
            }
        } else {
            if (val == '') {
                obj.parents('li').find('.wrong_tips').text('请输入证件号码！').show();
                return false;
            } else if (!regNo.test(val)) {
                obj.parents('li').find('.wrong_tips').text('请输入正确的证件号码（末位为大写字母）！')
                    .show();
                return false;
            } else {
                obj.parents('li').find('.wrong_tips').text('').hide();
                return true;
            }
        }
    }
}
function fnCheckId(obj, objType) {
    obj.keyup(function() {
        fnId(obj, objType);
    })
    obj.bind('input', function() {
        fnId(obj, objType);
    })
}
//校验出生日期非空
function fnBirthday(obj,str){
    var val = obj.val();
    if(val === ''){
        obj.parents('li').find('.wrong_tips').text(str+'！').show();
        return false;
    }else{
        obj.parents('li').find('.wrong_tips').text(str+'！').hide();
        return true;
    }
}
function fnCheckBirthday(obj, str) {
    obj.change(function() {
        fnBirthday(obj, str);
    })
}
// 手机号校验
function fnIphone(obj) {
    var regIphone = /^1[3|4|5|6|7|8|9]\d{9}$|^0085[23]\d{8}$|^00886\d{8}$/;
    var val = obj.val();
    if (val == '') {
        obj.parents('li').find('.wrong_tips').text('请输入手机号！').show();
        return false;
    } else if (!regIphone.test(val)) {

        obj.parents('li').find('.wrong_tips').text('请输入正确的手机号！').show();
        return false;
    } else {
        obj.parents('li').find('.wrong_tips').text('').hide();
        return true;
    }
}
function fnCheckIphone(obj) {
    obj.keyup(function() {
        fnIphone(obj);
    })
    obj.bind('input', function() {
        fnIphone(obj);
    })
}
// 去掉所有空格
function fnTrim(str, is_global) {
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g, "");
    if (is_global.toLowerCase() == "g") {
        result = result.replace(/\s/g, "");
    }
    return result;
}
//性别
//校验选择银行
function fnInitBank(aBank,str){
    if(aBank.val()==""){
        aBank.parents('li').find('.wrong_tips').text(str+'！').show();
        return false;
    }else{
        aBank.parents('li').find('.wrong_tips').text('').hide();
        return true;
    }
}
function fnCheckBank(obj, str) {
    obj.change(function() {
        fnInitBank(obj, str);
    })
    obj.keyup(function() {
        fnInitBank(obj, str);
    })
}
//主题：2个及2个以上汉字或英文，将目前上限2-15扩增到2-40
function fnUserTheme(obj,str){
    var val = obj.val()
    var data=val.trim();
    var regRule = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g;
    if(val === ''){
        obj.parents('li').find('.wrong_tips').text(str+'！').show();
        return false;
    }else if(data.length==0){
        obj.parents('li').find('.wrong_tips').text(str+'！').show();
        return false;
    }else if(val.match(regRule)){
        obj.parents('li').find('.wrong_tips').text('会议主题不支持表情!').show();
        return false;
    } else {
        obj.parents('li').find('.wrong_tips').text('').hide();
        return true;
    }
}
// 校验主题
function fnCheckTheme(obj, str) {
    obj.keyup(function() {
        fnUserTheme(obj, str);
    })
    obj.bind('input', function() {
        fnUserTheme(obj, str);
    })
}
//校验图片是否上传成功
function fnImg(img,val,str){
    if(val === ''){
        img.parents('li').find('.wrong_tips').text(str+'！').show();
        return false;
    }else{
        img.parents('li').find('.wrong_tips').text('').hide();
        return true;
    }
}
function fnCheckImg(img,val,str) {
    obj.change(function() {
        fnImg(img,val,str);
    })
//	obj.bind('input', function() {
//		fnImg(img,val,str);
//	})
}
// 身份证校验
function fnIdcode(obj, objType) {
    // 获取当前日期
    var Year = parseInt(new Date().getFullYear());
    var Month = parseInt(new Date().getMonth()) + 1;
    var Day = parseInt(new Date().getDate());

    var val = obj.val().trim();
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X)$)/;// 身份证号
    if (val == '') {
        obj.parents('li').find('.wrong_tips').text('请输入证件号码！').show();
        return false;
    } else if (!reg.test(val)) {
        obj.parents('li').find('.wrong_tips').text('请输入正确的证件号码（末位为大写字母）！').show();
        return false;
    } else {
        if (val.length == 15) {
            var year = val.substring(6, 8);
            var month = val.substring(8, 10);
            var day = val.substring(10, 12);
            var temp_date = new Date(year, parseFloat(month) - 1,
                parseFloat(day));
            // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
            if (temp_date.getYear() != parseFloat(year)
                || temp_date.getMonth() != parseFloat(month) - 1
                || temp_date.getDate() != parseFloat(day)) {
                obj.parents('li').find('.wrong_tips').text('请输入正确的证件号码（末位为大写字母）！')
                    .show();
                return false;
            }
            // 验证是否小于18周岁大于60周岁
            if (getAge(year + "-" + month + "-" + day) < 18
                || getAge(year + "-" + month + "-" + day) > 60) {
                obj.parents('li').find('.wrong_tips').text(
                    '只能在18至60周岁之间！').show();
                return false;
            }
        } else if (val.length == 18) {
            var year = val.substring(6, 10);
            var month = val.substring(10, 12);
            var day = val.substring(12, 14);
            var temp_date = new Date(year, parseFloat(month) - 1,
                parseFloat(day));
            // 这里用getFullYear()获取年份，避免千年虫问题
            if (temp_date.getFullYear() != parseFloat(year)
                || temp_date.getMonth() != parseFloat(month) - 1
                || temp_date.getDate() != parseFloat(day)) {
                obj.parents('li').find('.wrong_tips').text('请输入正确的证件号码（末位为大写字母）！')
                    .show();
                return false;
            }
            // 验证是否小于18周岁大于60周岁
            if (getAge(year + "-" + month + "-" + day) < 18
                || getAge(year + "-" + month + "-" + day) > 60) {
                obj.parents('li').find('.wrong_tips').text(
                    '只能在18至60周岁之间！').show();
                return false;
            }
        } else {
            obj.parents('li').find('.wrong_tips').text('请输入正确的证件号码（末位为大写字母）！').show();
            return false;
        }
        obj.parents('li').find('.wrong_tips').text('').hide();
        return true;
    }
}
function fnCheckIdcode(obj) {
    obj.keyup(function() {
        fnIdcode(obj);
    })
    obj.bind('input', function() {
        fnIdcode(obj);
    })
}
function getAge(str) {
    var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (r == null)
        return -1;
    var birthday = new Date(str);
    var d = new Date();
    var age = d.getFullYear()
        - birthday.getFullYear()
        - ((d.getMonth() < birthday.getMonth() || d.getMonth() == birthday
                .getMonth()
            && d.getDate() < birthday.getDate()) ? 1 : 0);
    return age;
}
/* ++++++++++++++++++++++++++++++公共组件++++++++++++++++++++++++++++++++++ */
/* 加载loading-所有页面 */
function fnLoading() {
    $('.loading_layer').remove();
    var html = '<div class="loading_layer">' + '<div class="spinnerDiv">'
        + '<div class="rect1"></div>' + '<div class="rect2"></div>'
        + '<div class="rect3"></div>' + '<div class="rect4"></div>'
        + '<div class="rect5"></div>' + '</div>' + '</div>';
    $('body').append(html);
}
/*
 * // 监听加载状态改变 document.onreadystatechange = fnCompleteLoading; //
 * 加载状态为complete时移除loading效果 function fnCompleteLoading() { if
 * (document.readyState == "complete") { $('.loading_layer').remove(); }else{
 * fnLoading(); } }
 */
/**
 * 错误提示-公用
 */
/* 弹出层 */
function fnLayerBox(msg) {
    $('.layer_box').remove();
    var html = '<div class="layer_box">'
        + '<div class="layer_main">'
        + '<div class="layer_main_tips">'
        + '<p>'
        + msg
        + '</p>'
        + '</div>'
        + '<input type="button" value="我知道了" class="layer_know_btn layer_btn">'
        + '</div>' + '</div>';
    $('body').append(html);
    $('.layer_btn').click(function() {
        $(this).parents('.layer_box').remove();
    })
}
//-----------------------------2017年0724------------------------------------------
//校验内容不为空和空格
function fnNocon(obj,str){
    var val = obj.val();
    var data=val.trim();
    if(val === ''){
        obj.parents('li').find('.wrong_tips').text(str+'！').show();
        return false;
    }else if(data.length==0){
        obj.parents('li').find('.wrong_tips').text(str+'！').show();
        return false;
    }else{
        obj.parents('li').find('.wrong_tips').text('').hide();
        return true;
    }
}
function fnCheckNocon(obj,str){
    obj.keyup(function(){
        fnNocon(obj,str);
    })
    obj.bind('input',function(){
        fnNocon(obj,str);
    })
}

//会议链接地址是否正确
function fnHref(obj){
    var val = obj.val();
    var regUrl=/^([hH][tT]{2}[pP]|[hH][tT]{2}[pP][sS]|[hH][Ff][tT][pP][sS]?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/;  //url
    if(val === ''){
        obj.parents('li').find('.wrong_tips').text('请输入考试地址链接！').show();
        return false;
    }else if(!regUrl.test(val)){
        obj.parents('li').find('.wrong_tips').text('您输入的链接地址格式不正确！').show();
        return false;
    }else{
        obj.parents('li').find('.wrong_tips').text('').hide();
        return true;
    }
}
function fnCheckHref(obj){
    obj.keyup(function(){
        fnHref(obj);
    })
    obj.bind('input',function(){
        fnHref(obj);
    })
}
//--------------------------光标----------------------
var preValue;
function fnFormatBankNo(obj,prev){
    var position = obj.get(0).selectionStart;
    var value = obj.val().replace(/\s/g,'');
    obj.val(value);
    if(prev.length == obj.val().length){
        setCaretPosition(obj.get(0),position-1);
    }else{
        setCaretPosition(obj.get(0),position);
    }

}
function fnRunFormat(obj){
    obj.keydown(function(e){
        prevValue = $(this).val();
    });
    obj.keyup(function(){
        fnFormatBankNo(obj,prevValue);
    });
}

//设置光标位置
function setCaretPosition(ctrl, pos){
    if(ctrl.setSelectionRange)
    {
        ctrl.focus();
        ctrl.setSelectionRange(pos,pos);
    }
    else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}
//*****************插件下拉框*********************//
function showData(data,dom){
    if(data){
        (function($, doc) {
            $.init();
            $.ready(function() {
                var xlPicker = new $.PopPicker();
                xlPicker.setData(eval(data));
                var showXlPickerButton = $(dom);
                showXlPickerButton.each(function(i, showXlPicker) {
                    showXlPicker.addEventListener('tap', function(event) {
                        FnBlur();
                        var index = this.getAttribute('index');
                        var result = $(dom)[index];
                        xlPicker.show(function(items) {
                            result.value=eval(JSON.stringify(items[0].text));
                            result.alt=eval(JSON.stringify(items[0].codeCode));
                        });
                    }, false);
                });
            });
        })(mui, document);
    }
}
function showDatas(data,dom,val){
    if(data){
        $('input').blur();
        (function($, doc) {
            $.init();
            $.ready(function() {
                var xlPicker = new $.PopPicker();
                xlPicker.setData(data);
                var showXlPickerButton = $(dom);
                var userResult = $(val);
                showXlPickerButton.each(function(i, showXlPicker) {
                    showXlPicker.addEventListener('tap', function(event) {
                        FnBlur();
                        xlPicker.show(function(items) {
                            userResult.value = items[0].value;
                            showXlPickerButton.value=items[0].text ;
                            //返回 false 可以阻止选择框的关闭
                            //return false;
                        });
                    }, false);
                });
            });
        })(mui, document);
    }
}
function FnBlur(){
    $('.text').blur();
}
//发布会议页面中的会议链接地址是否正确
function fnHRef(obj){
    type = $('input[type="radio"]:checked').attr('value');
    var val = obj.val();
    if(type==1){
        var regUrl=/^([hH][tT]{2}[pP][sS]):\/\/[mM]+(\.([qQ][Ll][cC][hH][aA][tT])+)+(\.([cC][oO][mM])+)\/+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/;  //url
        $('#linkName').text('千聊直播间地址');
    }else{
        var regUrl=/^http:\/\/live\.v114\.com\//;
        $('#linkName').text('视频直播间地址');
    }
    if(val === ''){
        obj.parents('li').find('.wrong_tips').text('请输入会议入口链接！').show();
        return false;
    }else if(!regUrl.test(val.toLowerCase())){
        obj.parents('li').find('.wrong_tips').text('您输入的链接地址格式不正确！').show();
        return false;
    }else{
        obj.parents('li').find('.wrong_tips').text('').hide();
        return true;
    }
}
function fnCheckHRef(obj){
    obj.keyup(function(){
        fnHRef(obj);
    })
    obj.bind('input',function(){
        fnHRef(obj);
    })
}


//双创注册成功页面的身份证校验
function fnIdcode2(obj, objType) {
    // 获取当前日期
    var Year = parseInt(new Date().getFullYear());
    var Month = parseInt(new Date().getMonth()) + 1;
    var Day = parseInt(new Date().getDate());

    var val = obj.val().trim();
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X)$)/;// 身份证号
    if (val == '') {
        obj.parents('li').find('.wrong_tips').text('请输入证件号码！').show();
        return false;
    } else if (!reg.test(val)) {
        obj.parents('li').find('.wrong_tips').text('请输入正确的证件号码（末位为大写字母）！').show();
        return false;
    } else {
        if (val.length == 15) {
            var year = val.substring(6, 8);
            var month = val.substring(8, 10);
            var day = val.substring(10, 12);
            var temp_date = new Date(year, parseFloat(month) - 1,
                parseFloat(day));
            // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
            if (temp_date.getYear() != parseFloat(year)
                || temp_date.getMonth() != parseFloat(month) - 1
                || temp_date.getDate() != parseFloat(day)) {
                obj.parents('li').find('.wrong_tips').text('请输入正确的证件号码（末位为大写字母）！')
                    .show();
                return false;
            }
            // 验证是否小于22周岁大于55周岁
            if (getAge(year + "-" + month + "-" + day) < 22
                || getAge(year + "-" + month + "-" + day) > 55) {
                obj.parents('li').find('.wrong_tips').text(
                    '只能在22至55周岁之间！').show();
                return false;
            }
        } else if (val.length == 18) {
            var year = val.substring(6, 10);
            var month = val.substring(10, 12);
            var day = val.substring(12, 14);
            var temp_date = new Date(year, parseFloat(month) - 1,
                parseFloat(day));
            // 这里用getFullYear()获取年份，避免千年虫问题
            if (temp_date.getFullYear() != parseFloat(year)
                || temp_date.getMonth() != parseFloat(month) - 1
                || temp_date.getDate() != parseFloat(day)) {
                obj.parents('li').find('.wrong_tips').text('请输入正确的证件号码（末位为大写字母）！')
                    .show();
                return false;
            }
            // 验证是否小于22周岁大于55周岁
            if (getAge(year + "-" + month + "-" + day) < 22
                || getAge(year + "-" + month + "-" + day) > 55) {
                obj.parents('li').find('.wrong_tips').text(
                    '只能在22至55周岁之间！').show();
                return false;
            }
        } else {
            obj.parents('li').find('.wrong_tips').text('请输入正确的证件号码（末位为大写字母）！').show();
            return false;
        }
        obj.parents('li').find('.wrong_tips').text('').hide();
        return true;
    }
}
function fnCheckIdcode2(obj) {
    obj.keyup(function() {
        fnIdcode2(obj);
    })
    obj.bind('input', function() {
        fnIdcode2(obj);
    })
}

var muiss = {
    //toast提示
    "toast": function(content) {
        var obj = $('body').find(".toast_box");
        if (obj == undefined) {
            $("body").append("<div class='toast_box'>" + content + "</div>");
            setTimeout(function() {
                $(".toast_box").addClass("toast_hide");
            }, 1000)
            setTimeout(function() {
                $(".toast_box").remove();
            }, 3200)
        } else {
            $(".toast_box").remove();
            $("body").append("<div class='toast_box'>" + content + "</div>");
            setTimeout(function() {
                $(".toast_box").addClass("toast_hide");
            }, 1000)
            setTimeout(function() {
                $(".toast_box").remove();
            }, 3200)
        }
    }
}
