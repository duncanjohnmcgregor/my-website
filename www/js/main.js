jQuery(document).ready(function ($) {
    //Show-Hide Mobile Menu
    $('.mob-menu').on("click", showHideMobMenu);
    if ($("body").width() <= 925) {
        $('.main-menu a').on("click", hideMobMenuItemClick);
    }

    //Set menu
    $('.main-menu').smartmenus({
        subMenusSubOffsetX: 1,
        subMenusSubOffsetY: -8,
        markCurrentItem: true
    });

    var $mainMenu = $('.main-menu').on('click', 'span.sub-arrow', function (e) {
        var obj = $mainMenu.data('smartmenus');
        if (obj && obj.isCollapsible()) {
            var $item = $(this).parent(),
                $sub = $item.parent().dataSM('sub');
            if ($sub && $sub.dataSM) {
                $sub.dataSM('arrowClicked', true);
            }
        }
    }).bind({
        'beforeshow.smapi': function (e, menu) {
            var obj = $mainMenu.data('smartmenus');
            if (obj && obj.isCollapsible()) {
                var $menu = $(menu);
                if ($menu.dataSM && !$menu.dataSM('arrowClicked')) {
                    return false;
                }
                $menu.removeDataSM('arrowClicked');
            }
        }
    });

    $('.section-title-holder').trigger("sticky_kit:recalc");

    $('.doc-loader').fadeOut('fast');

    // Navigation handling
    $('.main-menu a').on('click', function (e) {
        var target = $(this).attr('href');
        if (target.startsWith('#')) {
            e.preventDefault();
            $('.content-section').hide();
            $(target).show();
            $('#home').toggle(target === '#home');
        }
    });
});

// Make sure these functions are defined
function showHideMobMenu() {
    // Implement this function
}

function hideMobMenuItemClick() {
    // Implement this function
}
