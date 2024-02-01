/* ================= VARIABLE ================ */
const dark_color = 'black'
const dark_color_alt = '#3d3d3d'
const white_color = 'white'
const l1_color = '#9B91D9';
const l2_color = '#91A3D9';
const l3_color = '#9FD98F';
const l4_color = '#D6D991';
const l5_color = '#D18FB2';


function dark_theme() {
    $('body').css('background-color', dark_color);
    $('header').css('background-color', dark_color);

    $('body').css('color', white_color);

    $('.sty-home, .sty-about, .sty-services, .sty-portfolio, .sty-contacts').css('background-color', white_color);
    $('.footer').css('background-color', dark_color);
}
function light_theme() {
    $('body').css('background-color', white_color);
    $('header').css('background-color', dark_color);

    $('body').css('color', dark_color);
    
    $('.sty-home, .sty-about, .sty-services, .sty-portfolio, .sty-contacts').css('background-color', white_color);
    $('.footer').css('background-color', dark_color_alt);
}
// function home_replace(toHome){
//     if (toHome){
//         $('.company-logo').css('visibility', 'hidden');
//     } 
//     else {
//         $('.company-logo').css('visibility', 'visible');
//     }
// }

$('.nav-home, .company-logo').on( "click", function() {
    dark_theme();
    // home_replace(true)
    $('.sty-home').css('background-color', l1_color);
    $('.section-homepage').css('display', 'block');
    $('.section-about').css('display', 'none');
    $('.section-services').css('display', 'none');
    document.title = 'Jumbie';
})

$('.nav-about').on( "click", function() {
    light_theme();
    // home_replace(false)
    $('.sty-about').css('background-color', l2_color);
    $('.section-homepage').css('display', 'none');
    $('.section-about').css('display', 'block');
    $('.section-services').css('display', 'none');
    document.title = 'Jumbie ~ About';
})

$('.nav-services').on( "click", function() {
    light_theme();
    // home_replace(false)
    $('.sty-services').css('background-color', l3_color);
    $('.section-homepage').css('display', 'none');
    $('.section-about').css('display', 'none');
    $('.section-services').css('display', 'block');
    document.title = 'Jumbie ~ Services';
})