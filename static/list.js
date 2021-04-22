$(document).ready(() => {
    $('button').click(function () {
        var data = $(this).val();
        var tag = $(this).parent().parent();
        var tr = $('tr 1');
        console.log('Tr da tabela ' + tr);
        console.log('Valor do botão ' + data);
        console.log(tag);
        hidden(tag, success);
    });

    let hidden = (tag, success) => {
        tag.hide(1000);
        
        success();
    };

    let success = (callback) => {
        $("#resposta").empty();
        var texto = "Excluído com Sucesso!";
        var resposta = "<div class='alert btn-success text-center' role='alert'>" +
            "<a href='#' class='close' data-dismiss='alert' aria-label='Close'>x</a>" +
            texto + "</div>";
        $("#resposta").append(resposta);
        $("#resposta").hide(2000);
        if(callback === 'true')
            success();
    };

});