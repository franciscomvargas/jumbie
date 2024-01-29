/* ================= VARIABLE ================ */
const dark_color = 'black'
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

    $('.nav-home, .nav-about, .nav-services, .nav-portfolio, .nav-contacts').css('background-color', white_color);
}
function light_theme() {
    $('body').css('background-color', white_color);
    $('header').css('background-color', dark_color);

    $('body').css('color', dark_color);
    
    $('.nav-home, .nav-about, .nav-services, .nav-portfolio, .nav-contacts').css('background-color', white_color);
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
    $('.nav-home').css('background-color', l1_color);
    $('.section-homepage').css('display', 'block');
    $('.section-about').css('display', 'none');
    document.title = 'Jumbie';
})
$('.nav-about').on( "click", function() {
    light_theme();
    // home_replace(false)
    $('.nav-about').css('background-color', l2_color);
    $('.section-homepage').css('display', 'none');
    $('.section-about').css('display', 'block');
    document.title = 'Jumbie ~ About';
})