$(document).ready(function() {
    var theme = 'light'
    $("#swich_dark #swich_light").css('transition', '0.5s');
    change_status();

    if (localStorage.getItem('color') == 'dark') {
        swich_dark();
    } else if (localStorage.getItem('color') == 'light') {
        swich_light();
    } else {
        auto_swich_color();
    }
    $('#color_dark').click(function(e) {
        swich_dark();
        localStorage.setItem('color', 'dark');
    });
    $('#color_light').click(function(e) {
        swich_light();
        localStorage.setItem('color', 'light');
    });
    $('#color_default').click(function(e) {
        localStorage.removeItem('color');
        auto_swich_color()
    });

    function swich_dark() {
        $(':root').css("--background-color", "#13131a");
        $(':root').css('--text-color', 'white');
        theme = 'dark';
        change_status();
    }

    function swich_light() {
        $(':root').css("--background-color", "#edf2fa");
        $(':root').css("--text-color", "#13131a");
        theme = 'light';
        change_status();
    }

    function change_status() {
        if (theme == 'dark') {
            $('#color_dark').css("font-size", '1.75rem');
            $('#color_light').css("font-size", '1.25rem');
        }
        if (theme == 'light') {
            $('#color_light').css("font-size", '1.75rem');
            $('#color_dark').css("font-size", '1.25rem');
        }
    }

    function auto_swich_color() {
        if (window.matchMedia) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                swich_dark();
            } else {
                swich_light();
            }
        }
    }
});