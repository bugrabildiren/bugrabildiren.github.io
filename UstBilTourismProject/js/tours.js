$(document).ready(function() {
    var slider = $("#slider1").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 300,
        slideMargin: 10,
        randomStart: true,
        moveSlides: 1,
        pager: true, 
        pagerSelector: '#pager1', 
        pagerType : 'short', 
		pager: true,
		adaptiveHeight: true, 
        pause: 3000, 
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
            updatePageIndicator(newIndex);
        }
    });

});
$(document).ready(function() {
    var slider = $("#slider2").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 300,
        slideMargin: 10,
        randomStart: true,
        moveSlides: 1,
        pager: true, 
        pagerSelector: '#pager2', 
        pagerType : 'short', 
		pager: true,
		adaptiveHeight: true, 
        pause: 3000, 
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
            updatePageIndicator(newIndex);
        }
    });

});
$(document).ready(function() {
    var slider = $("#slider3").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 300,
        slideMargin: 10,
        randomStart: true,
        moveSlides: 1,
        pager: true, 
        pagerSelector: '#pager3', 
        pagerType : 'short', 
		pager: true,
		adaptiveHeight: true, 
        pause: 3000, 
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
            updatePageIndicator(newIndex);
        }
    });

});
