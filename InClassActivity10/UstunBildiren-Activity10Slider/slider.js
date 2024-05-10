$(document).ready(function() {
    var slider = $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 250,
        slideMargin: 10,
        randomStart: true,
        moveSlides: 1,
        pager: true, 
        pagerSelector: '#pager', 
        pagerType : 'short', 
		pager: true,
		adaptiveHeight: true, 
        pause: 3000, 
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
            updatePageIndicator(newIndex);
        }
    });

});
