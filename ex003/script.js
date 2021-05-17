function contar (){
    let ini = document.getElementById('txti').value
    let fim = document.getElementById('txtf').value
    let passo = document.getElementById('txtp').value
    let res = document.getElementById('res')

    if(ini.length == 0 || fim.length == 0 || passo.length == 0) {
        window.alert ('[ERRO] Faltam dados !')
    }else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini)
        let f = Number(fim)
        let p = Number (passo)
                
        if(i < f) {
        for( i; i <= f; i +=p){
            res.innerHTML += `${i} \u{1F449}`
        }
    }else {
        for ( i; i >= f; i -= p){
            res.innerHTML += `${i} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}
}
