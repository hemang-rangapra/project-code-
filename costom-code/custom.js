/* ----------------------------
// sticky Header
// ----------------------------*/

jQuery(document).ready(function ($) {
    jQuery(window).scroll(function () {
        var scroll = jQuery(window).scrollTop();
        if (scroll >= 10) {
            jQuery(".site-header").addClass("stickyHeader");
        }
        if (scroll <= 10) {
            jQuery(".site-header").removeClass("stickyHeader");
        }
    });
});