$(document).ready(function () {

    $.ajaxSetup({
        statusCode: {
            302: function (response) {
                var redirect_url = response.getResponseHeader('X-Ajax-Redirect-Url');
                if (redirect_url != undefined) {
                    window.location.pathname = redirect_url;
                }
            }
        }
    });

    $('#redirect').click(function () {
        $.ajax({
            url: '/welcome/redirect',
            success: function (data) {
                console.log('data');
            }
        });
    });

    $('#generate').click(function () {
        $.ajax({
            url: '/welcome/generate',
            success: function (data) {
                $('#container').html(data);
            }
        });
    });

});
