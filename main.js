$(document).ready(function(){
    $('header button[type="button"]').click(function(){
        $('form').slideDown();
    });

    $('#btn-cancelar').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e){
        e.preventDefault();

        const tarefaNova = $('#tarefa-nova').val();
        const novoItem = $('<li></li>').text(tarefaNova); 

        $('ul').append(novoItem);
        novoItem.hide().fadeIn(1000);

        $('#tarefa-nova').val('');
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('riscado');
    });
});