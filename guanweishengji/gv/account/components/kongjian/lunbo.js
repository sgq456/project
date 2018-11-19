Vue.component('sgq-lunbo', {
    props: {
        list: []
    },
    data: function () {
        return {
            t: null
        }
    },
    template: '<ul class="sgqsweiperul">\n' +
    '                        <li v-for="(item, index) in list" :key="index">\n' +
    '                            <a :href="item.url" v-text="item.title"></a>\n' +
    '                        </li>\n' +
    '                    </ul>',
    mounted: function () {
        this.$nextTick(function () {
            var sgqsweiperul = $('.sgqsweiperul');
            if(this.t){
                clearInterval(this.t)
            };
            this.t = setInterval(function () {
                move()
            }, 3000);
            function move () {
                sgqsweiperul.animate({top: '-100%'},1000, function () {
                    $($('.sgqsweiperul li')[0]).appendTo($('.sgqsweiperul'));
                    sgqsweiperul.css({top: 0})
                });
            }
        })
    },
    beforeDestroy: function () {
        if(this.t){
            clearInterval(this.t)
        }
    }
});