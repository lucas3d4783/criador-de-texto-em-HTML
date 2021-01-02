
function preview(){ // transformar seleção em Negrito
    var ta = document.getElementById("textarea"); 

    if(ta.value != ""){
        document.getElementById('container-result').style.display = 'block';
        document.getElementById('result').innerHTML = ta.value;

        console.log("Valor do TextArea: " + ta.value);
        console.log('Texto enviado para visualização');
    }else{
        console.log('Nenhum valor encontrado na caixa de texto');
        document.getElementById('container-result').style.display = 'block';
        document.getElementById('result').innerHTML = "<div class='text-center'><b>Que a Força esteja com você.</b></div>";

    }
}

function concatenar(init, end, message){
    var ta = document.querySelector("textarea"); 
    
    console.log("Posição inicial selecionada: " + ta.selectionStart);
    console.log("Posição final selecionada: " + ta.selectionEnd);

    var value = ta.value.substring(ta.selectionStart, ta.selectionEnd);
    console.log("Valor selecionado: " + value);

    if(ta.value.substring(ta.selectionStart, ta.selectionEnd) != ""){ // varifica se foi digitado algo
        if(!value.includes(init)){ // verifica se já possui o init na string
            var text = ta.value.substring(ta.selectionStart, ta.selectionEnd);
            ta.value = ta.value.substring(0, ta.selectionStart) + init + text +
                end + ta.value.substring(ta.selectionEnd);
            console.log(message);
        }
    }else{
        console.log('Nenhum valor selecionado');
    }

    preview();
}


function negrito(){ // transformar seleção em Negrito
    concatenar('<b>','</b>', 'Texto definido como Negrito');

}

function italico(){ // transformar seleção em Itálico
    concatenar('<i>','</i>', 'Texto definido como Itálico');
}

function h1(){ // transformar seleção em Título 1
    concatenar('<h1>','</h1>', 'Texto definido como Título 1');
}

function h2(){ // transformar seleção em Título 2
    concatenar('<h2>','</h2>', 'Texto definido como Título 2');
}

function h3(){ // transformar seleção em Título 3
    concatenar('<h3>','</h3>', 'Texto definido como Título 3');
}

function textleft(){ // Alinhando texto à esquerda
    concatenar('<div class="text-left">','</div>', 'Alinhando texto à esquerda');
}

function textcenter(){ // Centralizando o texto
    concatenar('<div class="text-center">','</div>', 'Alinhando texto no centro');
}

function textright(){ // Alinhando texto à direita
    concatenar('<div class="text-right">','</div>', 'Alinhando texto à direita');
}

function textjustify(){ // Justificando o texto
    concatenar('<div class="text-justify">','</div>', 'Justificando texto');
}

function toUpperCase(){
    var ta = document.querySelector("textarea"); 
    
    console.log("Posição inicial selecionada: " + ta.selectionStart);
    console.log("Posição final selecionada: " + ta.selectionEnd);

    var value = ta.value.substring(ta.selectionStart, ta.selectionEnd);
    console.log("Valor selecionado: " + value);

    if(ta.value.substring(ta.selectionStart, ta.selectionEnd) != ""){ // varifica se foi digitado algo
        ta.value = ta.value.substring(0, ta.selectionStart) + value.toUpperCase() +
        ta.value.substring(ta.selectionEnd);
        console.log("Valor passado para caixa baixa");
    }else{
        console.log('Nenhum valor selecionado');
    }

    preview();
}

function toLowerCase(){
    var ta = document.querySelector("textarea"); 
    
    console.log("Posição inicial selecionada: " + ta.selectionStart);
    console.log("Posição final selecionada: " + ta.selectionEnd);

    var value = ta.value.substring(ta.selectionStart, ta.selectionEnd);
    console.log("Valor selecionado: " + value);

    if(ta.value.substring(ta.selectionStart, ta.selectionEnd) != ""){ // varifica se foi digitado algo
        ta.value = ta.value.substring(0, ta.selectionStart) + value.toLowerCase() +
        ta.value.substring(ta.selectionEnd);
        console.log("Valor passado para caixa baixa");
    }else{
        console.log('Nenhum valor selecionado');
    }

    preview();
}


// adicionar campo para pegar imagem do computador e adicionar a URL no campo de texto, depois essa imagem deve subir para o servidor

