// Este modelo possui o código Javascript no HTML
/*
const abrirTab = (idTab) => {
    const listaConteudoTab = document.getElementsByClassName('conteudoTab')
    for(let i = 0; i < listaConteudoTab.length; i++) {
        listaConteudoTab[i].style.display = 'none'
    }
    document.getElementById(idTab).style.display = 'block'
}

function ativarButton(parametro){
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        button.classList.remove('ativo')
    })
    parametro.classList.add('ativo')
}
*/


//////////////////////////////////////////////////////////////////////////////

// Este modelo possui o código no Javascript

// Alterna o conteúdo entre as tabs
const alternarTabs = (idTab) => {
    document.querySelectorAll('.conteudoTab').forEach(tab => {
        tab.style.display = 'none'
    })
    document.getElementById(idTab).style.display = 'block'
}

// Altera o estado dos botões
const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        buttons.forEach(elementoButton => {
            elementoButton.classList.remove('ativo')
        })
        verificaIdTabs(event, 'conteudo-1')
        verificaIdTabs(event, 'conteudo-2')
        verificaIdTabs(event, 'conteudo-3')
    })
})

// Verifica se contém o idTab
const verificaIdTabs = (event, id) => {
    if (event.currentTarget.className === id) {
        alternarTabs(id)
        event.currentTarget.classList.toggle('ativo')
    }
}
