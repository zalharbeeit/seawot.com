$(document).ready(function () {
    var z = getvalus();
    var listdata_month = [];
    var listdata_days = [];
    var selecter;
    var availableTags = z.split('@@#@@');
    var monthses = availableTags[0].split(',');
    var dayses = availableTags[1].split(',');
    for (var i = 0; i < monthses.length; i++) {
        listdata_month.push([monthses[i]]);
    }
    for (var i = 0; i < dayses.length; i++) {
        if (i <= 6) {
            listdata_days.push([dayses[i]]);
        }
        else {
            selecter = dayses[i];
        }
    }
    var monthNames = listdata_month;
    var dayNames = listdata_days

    // Create a newDate() object
    var newDate = new Date();
    // Extract the current date from Date object
    newDate.setDate(newDate.getDate());
    // Output the day, date, month and year   
    $('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
    $('#Date_mobile').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

    setInterval(function () {
        if (selecter == 'ar') {
            // Create a newDate() object and extract the seconds of the current time on the visitor's
            var seconds = new Date().getSeconds();
            // Add a leading zero to seconds value
            $("#sec").html((seconds < 10 ? "0" : "") + seconds);
            $("#sec_mobile").html((seconds < 10 ? "0" : "") + seconds);
        }
        else {
            // Create a newDate() object and extract the hours of the current time on the visitor's
            var hours = new Date().getHours();
            // Add a leading zero to the hours value
            $("#sec").html((hours < 10 ? "0" : "") + hours);
            $("#sec_mobile").html((hours < 10 ? "0" : "") + hours);
        }
    }, 1000);

    setInterval(function () {
        // Create a newDate() object and extract the minutes of the current time on the visitor's
        var minutes = new Date().getMinutes();
        // Add a leading zero to the minutes value
        $("#min").html((minutes < 10 ? "0" : "") + minutes);
        $("#min_mobile").html((minutes < 10 ? "0" : "") + minutes);
    }, 1000);

    setInterval(function () {
        if (selecter == 'ar') {
            // Create a newDate() object and extract the hours of the current time on the visitor's
            var hours = new Date().getHours();
            // Add a leading zero to the hours value
            $("#hours").html((hours < 10 ? "0" : "") + hours);
            $("#hours_mobile").html((hours < 10 ? "0" : "") + hours);
        }
        else {
            // Create a newDate() object and extract the seconds of the current time on the visitor's
            var seconds = new Date().getSeconds();
            // Add a leading zero to seconds value
            $("#hours").html((seconds < 10 ? "0" : "") + seconds);
            $("#hours_mobile").html((seconds < 10 ? "0" : "") + seconds);
        }
    }, 1000);
});

//register/login form
$(function () {
    $('.button-checkbox').each(function () {

        // Settings
        var $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                on: {
                    icon: 'glyphicon glyphicon-check'
                },
                off: {
                    icon: 'glyphicon glyphicon-unchecked'
                }
            };

        // Event Handlers
        $button.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });

        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $button.data('state', (isChecked) ? "on" : "off");

            // Set the button's icon
            $button.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$button.data('state')].icon);

            // Update the button's color
            if (isChecked) {
                $button
                    .removeClass('btn-default')
                    .addClass('btn-' + color + ' active');
                $('.check_no').val('check');
            }
            else {
                $button
                    .removeClass('btn-' + color + ' active')
                    .addClass('btn-default'); $('.check_no').val('uncheck');
            }
        }

        // Initialization
        function init() {

            updateDisplay();

            // Inject the icon if applicable
            if ($button.find('.state-icon').length == 0) {
                $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
            }
        }
        init();
    });
});
