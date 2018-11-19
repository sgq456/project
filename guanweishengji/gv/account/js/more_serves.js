var App = new Vue({
    el: '#app',
    data: function () {
        return {
            // 功能列表
            funlist: [
                {
                    title: '查询服务',
                    list: [
                        {
                            title: '我的保单',
                            img: 'gv/account/images/sgq_fn_wodebd@2x.png',
                            url: ''
                        },
                        {
                            title: '我的订单',
                            img: 'gv/account/images/sgq_fn_wodedd@2x.png',
                            url: ''
                        },
                        {
                            title: '服务进度',
                            img: 'gv/account/images/sgq_fn_fuwujd@2x.png',
                            url: ''
                        },
                        {
                            title: '产品利率',
                            img: 'gv/account/images/sgq_fn_chanpinll@2x.png',
                            url: ''
                        },
                        {
                            title: '投资账户',
                            img: 'gv/account/images/sgq_fn_touzizh@2x.png',
                            url: ''
                        },
                        {
                            title: '保障账户',
                            img: 'gv/account/images/sgq_fn_baozhangzh@2x.png',
                            url: ''
                        },
                        {
                            title: '我的资料',
                            img: 'gv/account/images/sgq_fn_wodezl@2x.png',
                            url: ''
                        },
                        {
                            title: '我的团险',
                            img: 'gv/account/images/sgq_fn_wodetx@2x.png',
                            url: ''
                        },
                        {
                            title: '我的客服经理',
                            img: 'gv/account/images/sgq_fn_wodekfjl@2x.png',
                            url: ''
                        }
                        ]
                },
                {
                    title: '预约服务',
                    list: [
                        {
                            title: '回访预约',
                            img: 'gv/account/images/sgq_fn_huifangyy@2x.png',
                            url: ''
                        },
                        {
                            title: '柜面预约',
                            img: 'gv/account/images/sgq_fn_guimianyy@2x.png',
                            url: ''
                        },
                        {
                            title: '服务人员预约',
                            img: 'gv/account/images/sgq_fn_fuwuryyy@2x.png',
                            url: ''
                        }
                    ]
                },
                {
                    title: '理赔服务',
                    list: [
                        {
                            title: '理赔报案',
                            img: 'gv/account/images/sgq_fn_lipeiba@2x.png',
                            url: ''
                        },
                        {
                            title: '理赔申请',
                            img: 'gv/account/images/sgq_fn_lipeisq@2x.png',
                            url: ''
                        },
                        {
                            title: '我的理赔',
                            img: 'gv/account/images/sgq_fn_wodelp@2x.png',
                            url: ''
                        },
                        {
                            title: '理赔服务',
                            img: 'gv/account/images/sgq_fn_lipeifw@2x.png',
                            url: ''
                        }
                    ]
                },
                {
                    title: '变更类服务',
                    col: 3,
                    list: [
                        {
                            title: '基本资料变更',
                            img: 'gv/account/images/sgq_fn_jibenzlbg@2x.png',
                            url: ''
                        },
                        {
                            title: '续保方式变更',
                            img: 'gv/account/images/sgq_fn_xubaofsbg@2x.png',
                            url: ''
                        },
                        {
                            title: '红利领取方式变更',
                            img: 'gv/account/images/sgq_fn_honglilqfsbg@2x.png',
                            url: ''
                        },
                        {
                            title: '垫交方式变更',
                            img: 'gv/account/images/sgq_fn_dianjiaofsbg@2x.png',
                            url: ''
                        },
                        {
                            title: '交费方式变更',
                            img: 'gv/account/images/sgq_fn_jiaofeifsbg@2x.png',
                            url: ''
                        },
                        {
                            title: '年金领取方式变更',
                            img: 'gv/account/images/sgq_fn_nianjinlqfsbg@2x.png',
                            url: ''
                        },
                        {
                            title: '保单冻结与解冻',
                            img: 'gv/account/images/sgq_fn_baodandjyjd@2x.png',
                            url: ''
                        },
                        {
                            title: '新增险种',
                            img: 'gv/account/images/sgq_fn_xinzengxz@2x.png',
                            url: ''
                        },
                        {
                            title: '抵交保费方式变更',
                            img: 'gv/account/images/sgq_fn_dijiaobffsbg@2x.png',
                            url: ''
                        },
                        {
                            title: '中英文投保证明',
                            img: 'gv/account/images/sgq_fn_zhongyingwtbzm@2x.png',
                            url: ''
                        },
                        {
                            title: '保单迁移',
                            img: 'gv/account/images/sgq_fn_baodanqy@2x.png',
                            url: ''
                        },
                        {
                            title: '身故保险金分期领取变更',
                            img: 'gv/account/images/sgq_fn_shengubxjfqlqbg@2x.png',
                            url: ''
                        }
                    ]
                },
                {
                    title: '收费类服务',
                    list: [
                        {
                            title: '追加保费',
                            img: 'gv/account/images/sgq_fn_zhuijiabf@2x.png',
                            url: ''
                        },
                        {
                            title: '保单还款',
                            img: 'gv/account/images/sgq_fn_baodanhk@2x.png',
                            url: ''
                        },
                        {
                            title: '保单复效',
                            img: 'gv/account/images/sgq_fn_baodanfx@2x.png',
                            url: ''
                        },
                        {
                            title: '续期交费',
                            img: 'gv/account/images/sgq_fn_xuqijf@2x.png',
                            url: ''
                        }
                    ]
                },
                {
                    title: '付费类服务',
                    list: [
                        {
                            title: '部分领取',
                            img: 'gv/account/images/sgq_fn_bufenlq@2x.png',
                            url: ''
                        },
                        {
                            title: '保单借款',
                            img: 'gv/account/images/sgq_fn_baodanjk@2x.png',
                            url: ''
                        },
                        {
                            title: '退保',
                            img: 'gv/account/images/sgq_fn_tuibao@2x.png',
                            url: ''
                        },
                        {
                            title: '犹豫期退保',
                            img: 'gv/account/images/sgq_fn_youyuqtb@2x.png',
                            url: ''
                        },
                        {
                            title: '红利领取',
                            img: 'gv/account/images/sgq_fn_honglilq@2x.png',
                            url: ''
                        },
                        {
                            title: '生存金领取',
                            img: 'gv/account/images/sgq_fn_shengcunjlq@2x.png',
                            url: ''
                        },
                        {
                            title: '满期金领取',
                            img: 'gv/account/images/sgq_fn_manqijlq@2x.png',
                            url: ''
                        }
                    ]
                },
                {
                    title: '增值服务',
                    list: [
                        {
                            title: '绿通服务',
                            img: 'gv/account/images/sgq_fn_lvtongfw@2x.png',
                            url: ''
                        },
                        {
                            title: '药联服务',
                            img: 'gv/account/images/sgq_fn_yaolianfw@2x.png',
                            url: ''
                        },
                        {
                            title: '我的福利',
                            img: 'gv/account/images/sgq_fn_wodefl@2x.png',
                            url: ''
                        },
                        {
                            title: '少儿健康',
                            img: 'gv/account/images/sgq_fn_shaoerjk@2x.png',
                            url: ''
                        },
                        {
                            title: '体检预约',
                            img: 'gv/account/images/sgq_fn_tijianyy@2x.png',
                            url: ''
                        }
                    ]
                },
                {
                    title: '更多服务',
                    list: [
                        {
                            title: '保单回执',
                            img: 'gv/account/images/sgq_fn_baodanhz@2x.png',
                            url: ''
                        },
                        {
                            title: '在线回访',
                            img: 'gv/account/images/sgq_fn_zaixianhf@2x.png',
                            url: ''
                        },
                        {
                            title: '服务设置',
                            img: 'gv/account/images/sgq_fn_fuwusz@2x.png',
                            url: ''
                        },
                        {
                            title: '电子信函',
                            img: 'gv/account/images/sgq_fn_dianzixh@2x.png',
                            url: ''
                        },
                        {
                            title: '我的客服',
                            img: 'gv/account/images/sgq_fn_wodekf@2x.png',
                            url: ''
                        },
                        {
                            title: '我的意见',
                            img: 'gv/account/images/sgq_fn_wodeyj@2x.png',
                            url: ''
                        },
                        {
                            title: '电子发票',
                            img: 'gv/account/images/sgq_fn_dianzifp@2x.png',
                            url: ''
                        }
                    ]
                }
            ]
        }
    },
    methods: {

    },
    mounted: function () {
        this.$nextTick(function () {

        })
    },
    filters: {

    },
    beforeDestroy: function () {

    }
});