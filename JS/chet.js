$('form').submit(function (event) { 
    
        event.preventDefault();
        $('form input[type="submit"]').val('Aguarde...')
        .attr('disabled', true);    


        $.ajax({
            type: $('form').attr('method'),
            url: $('form').attr('action'),
            data: $('form').serialize(),
            success: function () {
                
                alert('Email enviado com sucesso');
                $('form').trigger('reset');

                $('form input[type="submit"]').val('Enviar')
                .attr('disabled', false);  
            }
        });


});

