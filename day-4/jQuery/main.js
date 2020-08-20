$('button').click(function() {
    const placeholder = $("input[placeholder]");
    const $humanName = $('input').val();
    const $humanElem = $(`<li>${$humanName}</li>`);

    $('input').val('');
    $('ul').append($humanElem);
})

$('ul').on('click', 'li', function() {
    $(this).remove();
})
