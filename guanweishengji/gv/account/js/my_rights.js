function supportCss3(style) {
    var prefix = ['webkit', 'Moz', 'ms', 'o'],
        i,
        humpString = [],
        htmlStyle = document.documentElement.style,
        _toHumb = function (string) {
            return string.replace(/-(\w)/g, function ($0, $1) {
                return $1.toUpperCase();
            });
        };

    for (i in prefix)
        humpString.push(_toHumb(prefix[i] + '-' + style));

    humpString.push(_toHumb(style));

    for (i in humpString)
        if (humpString[i] in htmlStyle) return true;

    return false;
}

var App = new Vue({
    el: '#app',
    data: function () {
        return {
            // vue挂载
            show: false,
            // 个人信息
            myinfo: {
                img: '', // 头像
                name: '小夏', // 姓名
                renzheng: true, // 是否认证
                integral: 25000, // 积分
                memberclass: 1, // 1黄金会员 (0/1/2/3)
                jindu: 0
            },
            // 会员等级积分规定（模拟）
            memberclass_integral: [
                {
                    title: '普客',
                    num: 10000
                },
                {
                    title: '黄金',
                    num: 20000
                },
                {
                    title: '白金',
                    num: 25999
                },
                {
                    title: '钻石',
                    num: 100000
                }
            ],
            // 待办事项
            daiban: [
                {
                    title: '您的生日红包已送达，敬请领取1！',
                    url: ''
                },
                {
                    title: '您的生日红包已送达，敬请领取2！',
                    url: ''
                }
            ],
            // 功能列表
            funlist: [
                {
                    title: '产品利率',
                    img: 'gv/account/images/sgq_fn_chanpinll@2x.png',
                    url: ''
                },
                {
                    title: '追加保费',
                    img: 'gv/account/images/sgq_fn_zhuijiabf@2x.png',
                    url: ''
                },
                {
                    title: '基本资料变更',
                    img: 'gv/account/images/sgq_fn_jibenzlbg@2x.png',
                    url: ''
                },
                {
                    title: '柜面预约',
                    img: 'gv/account/images/sgq_fn_guimianyy@2x.png',
                    url: ''
                },
                {
                    title: '电子发票',
                    img: 'gv/account/images/sgq_fn_dianzifp@2x.png',
                    url: ''
                },
                {
                    title: '我的客服经理',
                    img: 'gv/account/images/sgq_fn_wodekfjl@2x.png',
                    url: ''
                },
                {
                    title: '理赔服务',
                    img: 'gv/account/images/sgq_fn_lipeifw@2x.png',
                    url: ''
                },
                {
                    title: '查看更多',
                    img: 'gv/account/images/sgq_fn_more@2x.png',
                    url: ''
                }
            ],
            // 特色活动
            teselist: [
                {
                    img: 'gv/account/images/sgq_kefuhd@2x.png',
                    url: ''
                },
                {
                    img: 'gv/account/images/sgq_xiaohuapt@2x.png',
                    url: ''
                },
                {
                    img: 'gv/account/images/sgq_zaixiansc@2x.png',
                    url: ''
                }
            ],
        //    尊享服务
            zunxianglist: [
                {
                    img: 'gv/account/images/sgq_lvtongfw@2x.png',
                    url: ''
                },
                {
                    img: 'gv/account/images/sgq_yaolianfw@2x.png',
                    url: ''
                },
                {
                    img: 'gv/account/images/sgq_shaoerjk@2x.png',
                    url: ''
                },
                {
                    img: 'gv/account/images/sgq_tijianyy@2x.png',
                    url: ''
                }
            ],
        //     vip
            viplist: [
                {
                    title: 'VIP介绍',
                    img: 'gv/account/images/sgq_vipjieshao@2x.png',
                    url: ''
                },
                {
                    title: '尊享服务',
                    img: 'gv/account/images/sgq_vipzunxiang@2x.png',
                    url: ''
                },
                {
                    title: '特色解读',
                    img: 'gv/account/images/sgq_viptese@2x.png',
                    url: ''
                },
                {
                    title: '升级攻略',
                    img: 'gv/account/images/sgq_vipshengji@2x.png',
                    url: ''
                }
            ],
            // css3 background-clip 的支持
            css3_bgclip: false
        }
    },
    methods: {
        // 获取个人信息
        getuserinfo: function () {
            this.myinfo.img = 'gv/account/images/sgq_touxiang@2x.png';
            this.myinfo.jindu = this.myinfo.integral === 0 ? 0 : ((this.myinfo.memberclass + 1) * 25);
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            // 获取个人信息
            this.getuserinfo();
            this.show = true;
            this.css3_bgclip = supportCss3('background-clip')
        })
    },
    filters: {
        money: function (val) {
            if (val) {
                var arr = String(val).split('.');
                var left = arr[0];
                var right = arr[1];
                right = right ? (right.length > 2 ? '.' + right.substr(0, 2) : '.' + right): '';
                var temp = left.split('').reverse().join('').match(/(\d{1,3})/g);
                return (Number(val) < 0 ? '-' : '') + temp.join(',').split('').reverse().join('') + right
            } else if (val === 0 || val === '0') {
                return 0;
            } else {
                return ''
            }

        }
    },
    beforeDestroy: function () {

    }
});