    $(document).ready(function () {
        var intCounter = 1;
        var className = $('#openbuttonapp').attr('class');


        $('#openbuttonapp').dblclick(function () {
            var $objWindow = $('<div class="window">Window ' + intCounter + '<br>&nbsp;Welcome to my Time Capsule!<b>(2018-2022)</b><br><br>  <b>2018</b><br>&nbsp;  -Purple Lightsaber (After Effects)   <br><br><br></div>');

            var intRandom = Math.floor((Math.random() * 12) + 1);
            $($objWindow).appendTo('body');
            $objWindow.window({
                title: className,
                width: 480,
                height: 320,
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
