/* ================= VARIABLE ================ */
const dark_color = 'black'
const dark_color_alt = '#3d3d3d'
const nav_footer_color = '#111'

const white_color = 'white'
const l1_color = '#9B91D9';
const l2_color = '#91A3D9';
const l3_color = '#9FD98F';
const l4_color = '#D6D991';
const l5_color = '#D18FB2';

const nav_sty_tags = '.sty-home, .sty-about, .sty-services, .sty-portfolio, .sty-contact'
const nav_sectiom_tags = '.section-homepage, .section-about, .section-services, .section-portfolio, .section-contact'
const nav_trigger_hide_tags = '.footer, .logo, .logo_line, .action-text, form, .portfolio-container'

$( document ).ready(function() {
    $('.sty-home').css('background-color', l1_color); // todo > OnLoad!!
});

/* ================= THEMES ================ */
function dark_theme() {
    $('.body').css('background-color', nav_footer_color);
    $('body').css('color', white_color);
    $('header').css('background-color', dark_color);
    $(nav_sty_tags).css('background-color', white_color);
}
function light_theme() {
    $('.body').css('background-color', white_color);
    $('body').css('color', dark_color);
    $('header').css('background-color', dark_color);
    
    $(nav_sty_tags).css('background-color', white_color);
}

/* ================= NAVBAR TRIGGER ================ */
function hide_dropdown_nav(from_trigger=false) {
    if(from_trigger || $('.navTrigger').hasClass('active')){
        $('.navTrigger').toggleClass('active');
    }
    if($('.navTrigger').hasClass('active')){
        console.log("NavBar Exists!!")
        $(nav_trigger_hide_tags).css('display', 'none');
        $('.main_list').css('overflow', 'visible');
    } else {
        console.log("NavBar ! Exists!!")
        $(nav_trigger_hide_tags).css('display', 'block');
        $('.main_list').css('overflow', 'hidden')
    }
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
}

$('.navTrigger').click(function () {
    hide_dropdown_nav(from_trigger=true);
});

/* ================= WEBSITE LINKING ================ */
$('.nav-home, .company-logo').on( "click", function() {
    dark_theme();
    // home_replace(true)
    $('.sty-home').css('background-color', l1_color);
    $(nav_sectiom_tags).css('display', 'none');
    $('.section-homepage').css('display', 'block');
    document.title = 'Jumbie';
    hide_dropdown_nav();
})

$('.nav-about').on( "click", function() {
    light_theme();
    // home_replace(false)
    $('.sty-about').css('background-color', l2_color);
    $(nav_sectiom_tags).css('display', 'none');
    $('.section-about').css('display', 'block');
    document.title = 'Jumbie ~ About';
    hide_dropdown_nav();
})

$('.nav-services').on( "click", function() {
    light_theme();
    // home_replace(false)
    $('.sty-services').css('background-color', l3_color);
    $(nav_sectiom_tags).css('display', 'none');
    $('.section-services').css('display', 'block');
    document.title = 'Jumbie ~ Services';
    hide_dropdown_nav();
})

$('.nav-portfolio').on( "click", function() {
    light_theme();
    // home_replace(false)
    $('.sty-portfolio').css('background-color', l4_color);
    $(nav_sectiom_tags).css('display', 'none');
    $('.section-portfolio').css('display', 'block');
    document.title = 'Jumbie ~ Portfolio';
    hide_dropdown_nav();
})

$('.nav-contact').on( "click", function() {
    light_theme();
    // home_replace(false)
    $('.sty-contact').css('background-color', l5_color);
    $(nav_sectiom_tags).css('display', 'none');
    $('.section-contact').css('display', 'block');
    document.title = 'Jumbie ~ Contact';
    hide_dropdown_nav();
})
$('.action-contact').on( "click", function() {
    light_theme();
    // home_replace(false)
    $('.sty-contact').css('background-color', l5_color);
    $(nav_sectiom_tags).css('display', 'none');
    $('.section-contact').css('display', 'block');
    document.title = 'Jumbie ~ Contact';
})

