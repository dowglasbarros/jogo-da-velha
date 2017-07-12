var round = 1;
var matrix = Array(3);

$(document).ready(function(){
    $('#btn-start').click(function(){

        // Valida a digitação dos apelidos

        if($('#player-one').val() == ''){
            alert('O apelido do jogador 1 não foi preenchido');
            return false;
        }

        if($('#player-two').val() == ''){
            alert('O apelido do jogador 2 não foi preenchido');
            return false;
        }

        // Exibir os apelidos

        $('#player-one-name').html($('#player-one').val());
        $('#player-two-name').html($('#player-two').val());

        // Controla a visualização das divs
        $('#initial').hide();
        $('#game').show();
    });

    $('.jogada').click(function(){
        var idFieldClicked = this.id;
        move(idFieldClicked);
    });

    function move(id) {
        var icon = '';
        var score = 0;

        if((round % 2) == 1) {
            icone = 'url("images/mark-one.png")'
            score = -1;
        } else {
            icone = 'url("images/mark-two.png")'
            score = 1;
        }

        round++;

        $('#' + id).css('background-image', icone);
    }
});