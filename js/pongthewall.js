$(document).ready(function () {
    var intCounter = 1;
    var className = $('#pongthewall').attr("class");

    $('#pongthewall').dblclick(function () {

        var $objWindow = $('<iframe style="width:98.8%; min-width:98.8%; overflow: auto;" src="apps/pongthewall.html"></iframe>');
        var windowH = window.innerHeight;
        $($objWindow).appendTo('body');
        $objWindow.window({

            title: className,
            width: 850,
            height: windowH,
            position: {
                my: 'left+' + 200 + ', top+' + 200,
                at: 'left top',
                of: window
            },
            maximizable: true,
            minimizable: true,

        icon: '../src/jquery-lwd/themes/sophia/images/icons/6.png'
        });

        intCounter++;
    });

    $('#taskbar').taskbar();

    $('#theme').change(function () {
        $("head link#themecss").attr("href", $(this).val());
    });
});
