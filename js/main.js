$(document).ready(function () {
    $('#cssmenu > ul > li ul').each(function(index, e){
        var count = $(e).find('li').length;
        var content = '<span class=\"cnt\">' + count + '</span>';
        $(e).closest('li').children('a').append(content);
    });
    $('#cssmenu ul ul li:odd').addClass('odd');
    $('#cssmenu ul ul li:even').addClass('even');
    $('#cssmenu > ul > li > a').click(function() {
        $('#cssmenu li').removeClass('active');
        $(this).closest('li').addClass('active');   
        var checkElement = $(this).next();
        if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');
        }
        if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('#cssmenu ul ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }
        if($(this).closest('li').find('ul').children().length == 0) {
            return true;
        } else {
            return false;
        }
    });
});
(function(jq) {
    jq.autoScroll = function(ops) {
    ops = ops || {};
    ops.styleClass = ops.styleClass || 'scroll-to-top-button';
    var t = jq('<div class="+ops.styleClass+"></div>'),
    d = jq(ops.target || document);
    jq(ops.container || 'body').append(t);

    t.css({
        opacity: 0,
        position: 'absolute',
        top: 0,
        right: 0
    }).click(function() {
        jq('html,body').animate({
            scrollTop: 0
        }, ops.scrollDuration || 1000);
    });

    d.scroll(function() {
        var sv = d.scrollTop();
        if (sv < 10) {
            t.clearQueue().fadeOut(ops.hideDuration || 200);
            return;
        }

        t.css('display', '').clearQueue().animate({
            top: sv,
            opacity: 0.8
        }, ops.showDuration || 500);
    });
};
})(jQuery);


$(document).ready(function(){
$.autoScroll({
    scrollDuration: 2000, 
    showDuration: 600, 
    hideDuration: 300
});
});
