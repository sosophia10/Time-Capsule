$(document).ready(function () {
    var intCounter = 1;
    var className = $('#funkyhangman').attr("class");
    var mouseDownTime;

    $('#funkyhangman').on('mousedown', function () {
        mouseDownTime = new Date().getTime();
    });

    $('#funkyhangman').on('mouseup', function () {
        var mouseUpTime = new Date().getTime();
        var timeDifference = mouseUpTime - mouseDownTime;

        if (timeDifference <= 100) {
            openWindow();
        }
    });

    function openWindow() {

        var $objWindow = $('<iframe style="width:98.8%; min-width:98.8%; min-height:98.8%;" src="apps/funkyhangman.html"></iframe>');
        var windowH = window.innerHeight - 100;
        var windowW = window.innerWidth - 100;

        $($objWindow).appendTo('body');
        $objWindow.window({

            title: className,
            width: windowW,
            height: windowH,
            position: {
                my: 'left+' + 50 + ', top+' + 50,
                at: 'left top',
                of: window
            },
            maximizable: true,
            minimizable: true,

            icon: '../src/jquery-lwd/themes/sophia/images/icons/7.png'
        });

        intCounter++;
    }

    $('#taskbar').taskbar();

    $('#theme').change(function () {
        $("head link#themecss").attr("href", $(this).val());
    });
});
