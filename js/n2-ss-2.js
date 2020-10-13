N2Require("SmartSliderWidgetArrowImage", [], [], function(i, e, t) {
    function s(e, t, s, h) {
        this.slider = window[e], this.slider.started(i.proxy(this.start, this, e, t, s, h))
    }
    return s.prototype.start = function(e, t, s, h) {
        return this.slider.sliderElement.data("arrow") ? !1 : (this.slider.sliderElement.data("arrow", this), this.deferred = i.Deferred(), this.slider.sliderElement.on("SliderDevice", i.proxy(this.onDevice, this)).trigger("addWidget", this.deferred), this.previous = i("#" + e + "-arrow-previous").on("click", i.proxy(function(i) {
            i.stopPropagation(), this.slider[nextend.rtl.previous]()
        }, this)), this.previousResize = this.previous.find(".n2-resize"), 0 == this.previousResize.length && (this.previousResize = this.previous), this.next = i("#" + e + "-arrow-next").on("click", i.proxy(function(i) {
            i.stopPropagation(), this.slider[nextend.rtl.next]()
        }, this)), this.nextResize = this.next.find(".n2-resize"), 0 == this.nextResize.length && (this.nextResize = this.next), this.desktopRatio = t, this.tabletRatio = s, this.mobileRatio = h, void i.when(this.previous.n2imagesLoaded(), this.next.n2imagesLoaded()).always(i.proxy(this.loaded, this)))
    }, s.prototype.loaded = function() {
        this.previousResize.css("display", "inline-block"), this.previousWidth = this.previousResize.width(), this.previousHeight = this.previousResize.height(), this.previousResize.css("display", ""), this.nextResize.css("display", "inline-block"), this.nextWidth = this.nextResize.width(), this.nextHeight = this.nextResize.height(), this.nextResize.css("display", ""), this.previousResize.find("img").css("width", "100%"), this.nextResize.find("img").css("width", "100%"), this.onDevice(null, {
            device: this.slider.responsive.getDeviceMode()
        }), this.deferred.resolve()
    }, s.prototype.onDevice = function(i, e) {
        var t = 1;
        switch (e.device) {
            case "tablet":
                t = this.tabletRatio;
                break;
            case "mobile":
                t = this.mobileRatio;
                break;
            default:
                t = this.desktopRatio
        }
        this.previousResize.width(this.previousWidth * t), this.previousResize.height(this.previousHeight * t), this.nextResize.width(this.nextWidth * t), this.nextResize.height(this.nextHeight * t)
    }, s
});
N2Require("SmartSliderWidgetAutoplayImage", [], [], function(t, e, i) {
    "use strict";

    function s(e, i, s, a) {
        this.slider = window[e], this.slider.started(t.proxy(this.start, this, e, i, s, a))
    }
    return s.prototype.start = function(e, i, s, a) {
        return this.slider.sliderElement.data("autoplay") ? !1 : (this.slider.sliderElement.data("autoplay", this), this.paused = !1, this.button = this.slider.sliderElement.find(".nextend-autoplay"), this.slider.controls.autoplay.hasButton = !!this.button.length, void(this.slider.controls.autoplay._disabled ? this.destroy() : (this.slider.controls.autoplay.parameters.start || (this.paused = !0, this.setPaused()), this.deferred = t.Deferred(), this.slider.sliderElement.on({
            "SliderDevice.n2-widget-autoplay": t.proxy(this.onDevice, this),
            "autoplayStarted.n2-widget-autoplay": t.proxy(this.setPlaying, this),
            "autoplayPaused.n2-widget-autoplay": t.proxy(this.setPaused, this),
            "autoplayDisabled.n2-widget-autoplay": t.proxy(this.destroy, this)
        }).trigger("addWidget", this.deferred), this.button.on("universalclick", t.proxy(this.switchState, this)), this.desktopRatio = i, this.tabletRatio = s, this.mobileRatio = a, this.button.n2imagesLoaded().always(t.proxy(this.loaded, this)))))
    }, s.prototype.loaded = function() {
        this.button.css("display", "inline-block"), this.width = this.button.width(), this.height = this.button.height(), this.button.css("display", ""), this.onDevice(null, {
            device: this.slider.responsive.getDeviceMode()
        }), this.deferred.resolve()
    }, s.prototype.onDevice = function(t, e) {
        var i = 1;
        switch (e.device) {
            case "tablet":
                i = this.tabletRatio;
                break;
            case "mobile":
                i = this.mobileRatio;
                break;
            default:
                i = this.desktopRatio
        }
        this.button.width(this.width * i), this.button.height(this.height * i)
    }, s.prototype.switchState = function(t) {
        t.preventDefault(), t.stopImmediatePropagation(), this.paused ? (this.setPlaying(), this.slider.sliderElement.triggerHandler("autoplayExtraContinue", "autoplayButton"), this.slider.next()) : (this.setPaused(), this.slider.sliderElement.triggerHandler("autoplayExtraWait", "autoplayButton"))
    }, s.prototype.setPaused = function() {
        this.paused = !0, this.button.addClass("n2-autoplay-paused")
    }, s.prototype.setPlaying = function() {
        this.paused = !1, this.button.removeClass("n2-autoplay-paused")
    }, s.prototype.destroy = function() {
        this.slider.sliderElement.off(".n2-widget-autoplay"), this.button.remove()
    }, s
});