$(document).ready(function () {
    $('#carousel-imagens').slick({
        // arrows: true, // Exibe as setas de navegação
        autoplay: true, // Ativa o autoplay
        autoplaySpeed: 3000, // Define o tempo entre slides
        // dots: true // Mostra os indicadores de navegação
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })

    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },

            highlight: function (element) {
                $(element).addClass("error").removeClass("valid");
            },
            unhighlight: function (element) {
                $(element).addClass("valid").removeClass("error");
            },
           
        },
        messages: {
            nome: 'Preenche o campo',
            telefone:'Preenche o campo',
            email:'Preenche um email válido',
            telefone: 'Preenche o campo',
            endereco: 'Preenche o campo',
            cep: 'Preenche o campo',
            cpf: 'Preenche o campo',

        },

        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        },
            submitHandler: function (form) {
                alert("Formulário enviado com sucesso!");
                form.reset();
            }
    })
})
