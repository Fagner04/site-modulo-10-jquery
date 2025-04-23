$(document).ready(function () {
    $('#carousel-imagens').slick({
        arrows: true, // Exibe as setas de navegação (opcional)
        autoplay: true, // Ativa o autoplay
        autoplaySpeed: 3000, // Define o intervalo entre slides (em milissegundos)
        dots: true, // Exibe os indicadores de navegação (opcional) 
    });
    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    })
    $('#telefone').mask('(00)0 00000000') //aplicando mascar

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: false,
            },
            veiculoDeInteresse: {
                required: false,
            }
        },
        messages: {
            nome: 'Preenche o campo',
            telefone:'Preenche o campo',
            email:'Preenche um email válido',
        },


        submitHandler: function (form) {
            console.log(form);
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    })
         
    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text(); //exibir um alerta com o texto dentro de um elemento <h3>
        
        $('#veiculo-interesse').val(nomeVeiculo)
         //ANIMAÇÃO DE ROLAGEM NA PAGINA 
        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
})