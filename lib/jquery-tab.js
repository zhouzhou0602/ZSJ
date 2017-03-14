$.fn.tab = function(options) {
    var defaults = {
        event: "mouseover",
        active: 0,
        tips: true,
        tipsPosition: "top",
        swiper: true,
        callback: null
    };
    defaults = $.extend({}, defaults, options);

    this.each(function() {
        var ul = $(this);
        var childrens = $(this).children();
        if (defaults.width) {
            childrens.css({
                height: defaults.height,
                lineHeight: defaults.height + "px",
                paddingLeft: 0,
                paddingRight: 0
            });
        }
        if (defaults.height) {
            childrens.css({
                width: defaults.width,
                paddingTop: 0,
                paddingBottom: 0
            });
        }
        if (defaults.tips) {
            var tips = $("<span class='tips'/>");
            $(this).append(tips);
        }
        childrens.on(defaults.event, function() {
            var ele = $(this);
            var _top = ele.position().top;
            if (defaults.tipsPosition == "bottom") {
                _top = ele.outerHeight() - 4;
            }
            if (defaults.swiper) {
                ul.find(".tips").stop()
                ul.find(".tips").css({
                    width: ele.outerWidth()
                }).animate({
                    left: ele.position().left,
                    top: _top
                }, 300).show();
            } else {
                ul.find(".tips").css({
                    width: ele.outerWidth(),
                    left: ele.position().left,
                    top: _top
                }).show();
            }

            ele.siblings().removeClass("active");
            ele.addClass("active");
            if ($.isFunction(defaults.callback)) {
                defaults.callback(ele.index(), ele.text())
            }
        }).eq(defaults.active).addClass("active").trigger(defaults.event);
    })
};
