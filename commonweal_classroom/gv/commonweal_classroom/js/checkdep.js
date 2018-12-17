/* 20181203 by 苏国强
*  1. 将写背景的图加类名 sgq_changeimgsrc
*  2. 将放置html2canvas生成图片的img加上类名sgq_canvasimg
*  3. 最好在调用html2canvas前一步调用，以免使用某些前端框架时，图片路径还没被赋予元素。如vue :src='imgurl'
*  4. 调用方法change_imgsrc()
* */
function change_imgsrc() {
    if (Url === 'http://zmt.ihxlife.com/oltrain/') {
        // 生产环境
        var el = document.querySelectorAll('.sgq_changeimgsrc');
        var img = document.querySelectorAll('img');
        for (var i = 0; i < el.length; i++) {
            if (el[i].nodeName === 'IMG') {
                try {
                    if (!el[i].classList.contains('sgq_canvasimg')) {
                        var imgurl = el[i].src;
                        if (imgurl && imgurl.match('/gv/') && (!imgurl.match('data:image/jpeg;base64'))) {
                            if (!imgurl.match(Url)) {
                                el[i].src = Url + imgurl.slice(imgurl.indexOf('gv/'));
                            }
                        }
                    }
                } catch (err) {
                    if (!$(el[i]).hasClass('sgq_canvasimg')) {
                        var imgurl = el[i].src;
                        if (imgurl && imgurl.match('/gv/') && (!imgurl.match('data:image/jpeg;base64'))) {
                            if (!imgurl.match(Url)) {
                                el[i].src = Url + imgurl.slice(imgurl.indexOf('gv/'));
                            }
                        }
                    }
                }

            } else {
                var imgurl = '';
                if (window.getComputedStyle) {
                    imgurl = window.getComputedStyle(el[i], null).backgroundImage;
                } else {
                    imgurl = el[i].currentStyle['backgroundImage'];
                }
                if (imgurl && imgurl.match('/gv/') && (!imgurl.match('data:image/jpeg;base64'))) {
                    if (!imgurl.match(Url)) {
                        el[i].style.backgroundImage = 'url("' + Url + imgurl.slice(imgurl.indexOf('gv/'));
                    }
                }
            }
        }
        for (var i = 0; i < img.length; i++) {
            if (img[i].nodeName === 'IMG') {
                try {
                    if (!img[i].classList.contains('sgq_canvasimg')) {
                        var imgurl = img[i].src;
                        if (imgurl && imgurl.match('/gv/') && (!imgurl.match('data:image/jpeg;base64'))) {
                            if (!imgurl.match(Url)) {
                                img[i].src = Url + imgurl.slice(imgurl.indexOf('gv/'));
                            }
                        }
                    }
                } catch (e) {
                    if (!$(img[i]).hasClass('sgq_canvasimg')) {
                        var imgurl = img[i].src;
                        if (imgurl && imgurl.match('/gv/') && (!imgurl.match('data:image/jpeg;base64'))) {
                            if (!imgurl.match(Url)) {
                                img[i].src = Url + imgurl.slice(imgurl.indexOf('gv/'));
                            }
                        }
                    }
                }

            } else {
                var imgurl = '';
                if (window.getComputedStyle) {
                    imgurl = window.getComputedStyle(img[i], null).backgroundImage;
                } else {
                    imgurl = img[i].currentStyle['backgroundImage'];
                }
                if (imgurl && imgurl.match('/gv/') && (!imgurl.match('data:image/jpeg;base64'))) {
                    if (!imgurl.match(Url)) {
                        img[i].style.backgroundImage = 'url("' + Url + imgurl.slice(imgurl.indexOf('gv/'));
                    }
                }
            }
        }
    }
}