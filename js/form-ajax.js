$('form button').click(sendForm);

function sendForm(e) {
    if ( $('#main-form')[0].checkValidity() ) {
        $('button').attr( 'data-toggle', 'modal' );
        $('button').attr( 'data-target', '.thank-you' );
        e.preventDefault();
        $.ajax({
            url: 'https://tranquil-sierra-86540.herokuapp.com/[your_email]',
            method: 'POST',
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                message: $('#message').val()
            },
            dataType: 'json'
        })
            .done( $('#name').val(''), $('#email').val(''), $('#message').val('') );
    }
}
