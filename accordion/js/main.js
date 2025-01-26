jQuery(document).ready(function () {
    jQuery(".accordion-title-trigger").click(function (e) {
        if (!jQuery(this).closest(".accordion-main").hasClass("open")) {
            jQuery(this)
                .closest(".extender-accordion")
                .find(".accordion-main")
                .removeClass("open");
            jQuery(this)
                .closest(".extender-accordion")
                .find(".accordion-description")
                .slideUp("open");
        }
        jQuery(this).closest(".accordion-main").toggleClass("open");
        jQuery(this).next().slideToggle("slow");
    });
});