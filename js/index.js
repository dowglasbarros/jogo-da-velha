var round = 1;
var matrix = Array(3);

matrix['a'] = Array(3);
matrix['b'] = Array(3);
matrix['c'] = Array(3);

matrix['a'][1] = 0;
matrix['a'][2] = 0;
matrix['a'][3] = 0;

matrix['b'][1] = 0;
matrix['b'][2] = 0;
matrix['b'][3] = 0;

matrix['c'][1] = 0;
matrix['c'][2] = 0;
matrix['c'][3] = 0;

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

    $('.move').click(function(){
        var idFieldClicked = this.id;
        $('#'+idFieldClicked).off();
        move(idFieldClicked);
    });

    function move(id) {
        var icon = '';
        var score = 0;

        if((round % 2) == 1) {
            icon = 'url("images/mark-one.png")'
            score = -1;
        } else {
            icon = 'url("images/mark-two.png")'
            score = 1;
        }

        round++;

        $('#' + id).css('background-image', icon);

        var colLine = id.split('-');

        matrix[colLine[0]][colLine[1]] = score;

        checkCombination();
    }

    function checkCombination() {
        // Verifica na horizontal
        var scores = 0;
        for(var i = 1; i <= 3; i++){
            scores = scores + matrix['a'][i];
        }
        winner(scores);

        scores = 0;
        for(var i = 1; i <= 3; i++){
            scores = scores + matrix['b'][i];
        }
        winner(scores);

        scores = 0;
        for(var i = 1; i <= 3; i++){
            scores = scores + matrix['c'][i];
        }
        winner(scores);

        // Verifica na vertical
        for(var l = 1; l <= 3; l++){
            scores = 0;
            scores += matrix['a'][l];
            scores += matrix['b'][l];
            scores += matrix['c'][l];

            winner(scores);
        }

        // Verifica na diagonal
        scores = 0;
        scores = matrix['a'][1] + matrix['b'][2] + matrix['c'][3];
        winner(scores);

        scores = 0;
        scores = matrix['a'][3] + matrix['b'][2] + matrix['c'][1];
        winner(scores);
    }

    function winner(scores) {
        if(scores == -3) {
            var moveOne = $('#player-one').val();
            alert(moveOne + ' é o vencedor!');
            $('.move').off();
        } else if(scores == 3) {
            var moveTwo = $('#player-two').val();
            alert(moveTwo + ' é o vencedor!');
            $('.move').off();
        }
    }
});