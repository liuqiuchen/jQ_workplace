$(function () {
    $('#myBtn').on('click', function () {
        var val = $('#animation').val();

        if(val == 1) {
            $('p').toggle();
        }else if(val == 2) {
            $('p').fadeToggle();
        }else if(val == 3) {
            $('p').slideToggle();
        }
    });
});













