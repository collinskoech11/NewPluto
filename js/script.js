$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
}); /* makes it so that submenus and collapsed menus on phones disappear on click.
the default bootstrap behaviour is to keep visible on click, which sucks */