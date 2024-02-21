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

$( document ).ready(function() {
    $('.sty-home').css('background-color', l1_color); // todo > OnLoad!!
});

/* ================= URL QUERY ================ */
let urlQuery = new URLSearchParams(window.location.search);
urlQuery = String(urlQuery).split('&');
// console.log("[ URL QUERY ] > " + urlQuery);
let website_queries = {};
try {
    urlQuery.forEach(element => {
        _query = String(element).split('=');
        // console.log("[ QUERY ] > " + _query);
        website_queries[_query[0].toLowerCase()] = _query[1].toLowerCase();
    });
    console.log("[ QUERY OBJ ] > " + JSON.stringify(website_queries, null, 4));
} catch (error) {
  console.log(error);
}

// Handle Section Query
if (website_queries.hasOwnProperty('section')) {
    switch (website_queries['section']) {
        case 'about':
            show_about_section();
            break;
        case 'services':
            show_services_section();
            break;
        case 'portfolio':
            show_portfolio_section();
            break;
        case 'contact':
            show_contact_section();
            break;
    }
}

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
    if($('.navTrigger').css('display') === 'block'){
        $('.navTrigger').toggleClass('active');
        if($('.navTrigger').hasClass('active')){
            console.log("NavBar Exists!!");
            $('div.logo').css('display', 'none')
            $('.main_list').css('overflow', 'visible');
        } else {
            console.log("NavBar ! Exists!!")
            $('div.logo').css('display', 'block')
            $('.main_list').css('overflow', 'hidden')
        }
        $("#mainListDiv").toggleClass("show_list");
        $("#mainListDiv").fadeIn();
    }
}

$('.navTrigger, .navlinks').click(function () {
    hide_dropdown_nav(from_trigger=true);
});

/* ================= WEBSITE LINKING ================ */
$('.nav-home, .logo').on( "click", function() {
    show_home_section();
})
function show_home_section() {
    dark_theme();
    // home_replace(true)
    $('.sty-home').css('background-color', l1_color);
    $(nav_sectiom_tags).css('display', 'none');
    $('.section-homepage').css('display', 'block');
    document.title = 'Jumbie';
}

$('.nav-about').on( "click", function() {
    show_about_section();
})
function show_about_section() {
    light_theme();
    // home_replace(false)
    $('.sty-about').css('background-color', l2_color);
    $(nav_sectiom_tags).css('display', 'none');
    $('.section-about').css('display', 'block');
    document.title = 'Jumbie ~ About';
}

$('.nav-services').on( "click", function() {
    show_services_section();
})
function show_services_section() {
    light_theme();
    // home_replace(false)
    $('.sty-services').css('background-color', l3_color);
    $(nav_sectiom_tags).css('display', 'none');
    $('.section-services').css('display', 'block');
    document.title = 'Jumbie ~ Services';
}

$('.nav-portfolio').on( "click", function() {
    show_portfolio_section();
})
function show_portfolio_section() {
    light_theme();
    // home_replace(false)
    $('.sty-portfolio').css('background-color', l4_color);
    $(nav_sectiom_tags).css('display', 'none');
    $('.section-portfolio').css('display', 'block');
    document.title = 'Jumbie ~ Portfolio';
}

$('.nav-contact, .action-contact').on( "click", function() {
    show_contact_section();
})
function show_contact_section() {
    light_theme();
    // home_replace(false)
    $('.sty-contact').css('background-color', l5_color);
    $(nav_sectiom_tags).css('display', 'none');
    $('.section-contact').css('display', 'block');
    document.title = 'Jumbie ~ Contact';

}
