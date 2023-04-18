$(document).ready(function () {
    var intCounter = 1;
    var className = $('#experience').attr("class");

    $('#experience').dblclick(function () {

        var $objWindow = $('<iframe style="width:98.8%; min-width:98.8%; min-height:98.8%;" src="apps/experience.html"></iframe>');
        var windowH = window.innerHeight;

        $($objWindow).appendTo('body');
        $objWindow.window({

            title: className,
            width: 800,
            height: windowH,
            position: {
                my: 'left+' + 200 + ', top+' + 0,
                at: 'left top',
                of: window
            },
            maximizable: true,
            minimizable: true,

            icon: '../src/jquery-lwd/themes/sophia/images/icons/13.png'
        });

        intCounter++;
    });

    $('#taskbar').taskbar();

    $('#theme').change(function () {
        $("head link#themecss").attr("href", $(this).val());
    });
});
