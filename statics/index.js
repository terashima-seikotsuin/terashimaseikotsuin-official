jQuery(function($){
    var navFlg = true;
    var clickflug = true;//最初はtrue(クリック受け付ける)
    $('.menu').on('click',function(){
        if(clickflug){
            clickflug = false;
            $('.menu__line').toggleClass('active');
            $('.bar').toggleClass('active');
            $('.gnav').css({
                'display' : 'block',
            });
            if(navFlg){
                navFlg = false;

                setTimeout(function(){
                    clickflug = true;
                },400);//200ミリ秒立ったらtrueになる

            }
            else{
                $('.gnav').css({
                    'display' : 'none',
                });

                navFlg = true;
                clickflug = true;//初期値に戻したらtrue(初期化完了,一瞬)
            }
        }else{
            return false;
        }
    });
});


$(document).ready(function() {
    // .osu_circle要素を取得
    var osuCircles = $('.osu_circle');

    // スクロールイベントを監視
    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        var windowHeight = $(this).height();

        // 各osu_circle要素について
        osuCircles.each(function() {
            var elementTop = $(this).offset().top;

            // 要素が表示範囲に入った場合、アニメーションを適用
            if (scrollTop + windowHeight > elementTop) {
                $(this).addClass('fadeInUp');
            }
        });
    });

    // 初期ロード時にもアニメーションを適用
    $(window).trigger('scroll');
});

$(document).ready(function() {
    // .osu_circle要素を取得
    var virusItems = $('.virus_item');

    // スクロールイベントを監視
    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        var windowHeight = $(this).height();

        // 各osu_circle要素について
        virusItems.each(function() {
            var elementTop = $(this).offset().top;

            // 要素が表示範囲に入った場合、アニメーションを適用
            if (scrollTop + windowHeight > elementTop) {
                $(this).addClass('fadeInUp');
            }
        });
    });

    // 初期ロード時にもアニメーションを適用
    $(window).trigger('scroll');
});