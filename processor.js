
function preview(){ // transformar seleção em Negrito
    var ta = document.getElementById("textarea"); 

    console.log(ta.value);

    if(ta.value != ""){
        document.getElementById('container-result').style.display = 'block';
        document.getElementById('result').innerHTML = ta.value;

        console.log("Valor do TextArea: " + ta.value);
        console.log('Texto enviado para visualização');
    }else{
        console.log('Nenhum valor encontrado na caixa de texto');
    }
}


function negrito(){ // transformar seleção em Negrito
    var ta = document.querySelector("textarea"); 
    
    console.log("Posição inicial selecionada: " + ta.selectionStart);
    console.log("Posição final selecionada: " + ta.selectionEnd);
    console.log("Valor selecionado" + ta.value.substring(ta.selectionStart, ta.selectionEnd));

    if(ta.value.substring(ta.selectionStart, ta.selectionEnd) != ""){
        var text = ta.value.substring(ta.selectionStart, ta.selectionEnd);
            ta.value = ta.value.substring(0, ta.selectionStart) + "<b>" + text +
            "</b>" + ta.value.substring(ta.selectionEnd);
        console.log('Texto definido como Negrito');
    }else{
        console.log('Nenhum valor selecionado');
    }

    preview();

}

function italico(){ // transformar seleção em Itálico
    var ta = document.querySelector("textarea"); 
    
    console.log("Posição inicial selecionada: " + ta.selectionStart);
    console.log("Posição final selecionada: " + ta.selectionEnd);
    console.log("Valor selecionado" + ta.value.substring(ta.selectionStart, ta.selectionEnd));

    if(ta.value.substring(ta.selectionStart, ta.selectionEnd) != ""){
        var text = ta.value.substring(ta.selectionStart, ta.selectionEnd);
            ta.value = ta.value.substring(0, ta.selectionStart) + "<i>" + text +
            "</i>" + ta.value.substring(ta.selectionEnd);
        console.log('Texto definido como Itálico');
    }else{
        console.log('Nenhum valor selecionado');
    }

    preview();
}

function h1(){ // transformar seleção em Itálico
    var ta = document.querySelector("textarea"); 
    
    console.log("Posição inicial selecionada: " + ta.selectionStart);
    console.log("Posição final selecionada: " + ta.selectionEnd);
    console.log("Valor selecionado" + ta.value.substring(ta.selectionStart, ta.selectionEnd));

    if(ta.value.substring(ta.selectionStart, ta.selectionEnd) != ""){
        var text = ta.value.substring(ta.selectionStart, ta.selectionEnd);
            ta.value = ta.value.substring(0, ta.selectionStart) + "<h1>" + text +
            "</h1>" + ta.value.substring(ta.selectionEnd);
        console.log('Texto definido como Título 1');
    }else{
        console.log('Nenhum valor selecionado');
    }

    preview();
}

function h2(){ // transformar seleção em Itálico
    var ta = document.querySelector("textarea"); 
    
    console.log("Posição inicial selecionada: " + ta.selectionStart);
    console.log("Posição final selecionada: " + ta.selectionEnd);
    console.log("Valor selecionado" + ta.value.substring(ta.selectionStart, ta.selectionEnd));

    if(ta.value.substring(ta.selectionStart, ta.selectionEnd) != ""){
        var text = ta.value.substring(ta.selectionStart, ta.selectionEnd);
            ta.value = ta.value.substring(0, ta.selectionStart) + "<h2>" + text +
            "</h2>" + ta.value.substring(ta.selectionEnd);
        console.log('Texto definido como Título 2');
    }else{
        console.log('Nenhum valor selecionado');
    }

    preview();
}

function h3(){ // transformar seleção em Itálico
    var ta = document.querySelector("textarea"); 
    
    console.log("Posição inicial selecionada: " + ta.selectionStart);
    console.log("Posição final selecionada: " + ta.selectionEnd);
    console.log("Valor selecionado" + ta.value.substring(ta.selectionStart, ta.selectionEnd));

    if(ta.value.substring(ta.selectionStart, ta.selectionEnd) != ""){
        var text = ta.value.substring(ta.selectionStart, ta.selectionEnd);
            ta.value = ta.value.substring(0, ta.selectionStart) + "<h3>" + text +
            "</h3>" + ta.value.substring(ta.selectionEnd);
        console.log('Texto definido como Título 3');
    }else{
        console.log('Nenhum valor selecionado');
    }

    preview();
}



// adicionar campo para pegar imagem do computador e adicionar a URL no campo de texto, depois essa imagem deve subir para o servidor

