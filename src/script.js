/* ================= VARIABLE ================ */
const dark_color = 'black'
const dark_color_alt = '#3d3d3d'
const white_color = 'white'
const l1_color = '#9B91D9';
const l2_color = '#91A3D9';
const l3_color = '#9FD98F';
const l4_color = '#D6D991';
const l5_color = '#D18FB2';

const nav_sty_tags = '.sty-home, .sty-about, .sty-services, .sty-portfolio, .sty-contact'
const nav_sectiom_tags = '.section-homepage, .section-about, .section-services, .section-portfolio, .section-contact'

/* ================= THEMES ================ */
function dark_theme() {
    $('body').css('background-color', dark_color);
    $('body').css('color', white_color);
    $('header').css('background-color', dark_color);

    $(nav_sty_tags).css('background-color', white_color);
    $('.footer').css('background-color', dark_color);
}
function light_theme() {
    $('body').css('background-color', white_color);
    $('body').css('color', dark_color);
    $('header').css('background-color', dark_color);
    
    $(nav_sty_tags).css('background-color', white_color);
    $('.footer').css('background-color', dark_color_alt);
}

/* ================= WEBSITE LINKING ================ */
$('.nav-home, .company-logo').on( "click", function() {
    dark_theme();
    // home_replace(true)
    $('.sty-home').css('background-color', l1_color);
    $(nav_sectiom_tags).css('display', 'none');
    $('.section-homepage').css('display', 'block');
    document.title = 'Jumbie';
})

$('.nav-about').on( "click", function() {
    light_theme();
    // home_replace(false)
    $('.sty-about').css('background-color', l2_color);
    $(nav_sectiom_tags).css('display', 'none');
    $('.section-about').css('display', 'block');
    document.title = 'Jumbie ~ About';
})

$('.nav-services').on( "click", function() {
    light_theme();
    // home_replace(false)
    $('.sty-services').css('background-color', l3_color);
    $(nav_sectiom_tags).css('display', 'none');
    $('.section-services').css('display', 'block');
    document.title = 'Jumbie ~ Services';
})

$('.nav-portfolio').on( "click", function() {
    light_theme();
    // home_replace(false)
    $('.sty-portfolio').css('background-color', l4_color);
    $(nav_sectiom_tags).css('display', 'none');
    $('.section-portfolio').css('display', 'block');
    document.title = 'Jumbie ~ Portfolio';
})

$('.nav-contact, .action-contact').on( "click", function() {
    light_theme();
    // home_replace(false)
    $('.sty-contact').css('background-color', l5_color);
    $(nav_sectiom_tags).css('display', 'none');
    $('.section-contact').css('display', 'block');
    document.title = 'Jumbie ~ Contact';
})

