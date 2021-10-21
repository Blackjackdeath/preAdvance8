let censor = '';
$(function () {
    $('.add').on('click', function () {
        if ($('.boxPanel__input').val() == '') {
            $('.boxPanel__input').css({
                'borderColor': 'red'
            });
            $('.boxPanel__input').attr('placeholder', 'Please write a word!');
        }
        else {
            $('.boxPanel__input').css({
                'borderColor': 'gray'
            });
            if ($('.badWord').text() == '') {
                $('.badWord').text($('.boxPanel__input').val());
            }
            else {
                $('.badWord').text($('.badWord').text() + ', ' + $('.boxPanel__input').val());
            }
            $('.boxPanel__input').val('');
        }
    });
    $('.reset').on('click', function () {
        $('.boxPanel__input').val('');
        $('.boxPanel__input').css({
            'borderColor': 'gray'
        });
        $('.box__textarea').val('');
        $('.box__textarea').css({
            'borderColor': 'gray'
        });
        $('.badWord').text('');
    });
    $('.censor').on('click', function () {
        console.log();
        if ($('.box__textarea').val() != '') {
            let arr = $('.badWord').text().split(', ');
            let text = $('.box__textarea').val();
            for (let i = 0; i < arr.length; i++) {
                while (text.includes(arr[i])) {
                    for (let j = 0; j < arr[i].length; j++) {
                        censor += '*';
                    }
                    ;
                    text = text.replace(arr[i], censor);
                    censor = '';
                }
            }
            $('.box__textarea').val(text);
        }
        else {
            $('.box__textarea').css({
                'borderColor': 'red'
            });
            $('.box__textarea').attr('placeholder', 'Please write a text!');
        }
    });
});
