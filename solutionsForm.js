$(document).on('submit', '.featherlight .form-validate', function(event){
    event.preventDefault();
    event.preventDefault();
    var data = $('.featherlight .form-validate').serializeArray().reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
    }, {});

    data['solution'] = 'devops';

    return submit(data);
});

submit = function(data) {
    var http = new XMLHttpRequest();
    var finalEndpoint = '//contactmailer.rocket.chat/solutions';

    http.open('POST', finalEndpoint, true);
    http.setRequestHeader('Content-type', 'application/json');

    http.send(JSON.stringify(data));

    var current = $.featherlight.current();
    current.close();

    $.featherlight($('#solution-form__after-box'), {});
}




