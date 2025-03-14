function insertToDisplay(data){
    document.querySelector('#display').value += data
}

function clean(){
    document.querySelector('#display').value = ''
}

function back(){
    const display = document.querySelector('#display')
    display.value = display.value.slice(0, -1)
}

function result(){
    const display = document.querySelector('#display');
    try {
        console.log(display.value)
        if (display.value.includes('%')) {
            calcularPorcentagem(display.value);
        } else {
            display.value = eval(display.value);
        }
    } catch {
        display.value = 'error';
    }
}

function calcularPorcentagem(valor) {
   console.log(valor)
}


