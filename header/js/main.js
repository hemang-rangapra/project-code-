jQuery(document).ready(function () {
    jQuery(".navToggle").click(function () {
        jQuery(".site-header , .site-header .main-navigation ").toggleClass(
            "active"
        );
        jQuery(this).toggleClass("active");
    });
})