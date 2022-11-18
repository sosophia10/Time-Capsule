$(document).ready(function () {
    var intCounter = 1;
    var className = $('#sprinkles').attr("class");

    $('#sprinkles').dblclick(function () {

        var $objWindow = $('<iframe style="width:98.8%; min-width:98.8%; overflow: auto;" src="apps/sprinkles.html"></iframe>');

        $($objWindow).appendTo('body');
        $objWindow.window({

            title: className,
            width: 800,
            height: 930,
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
