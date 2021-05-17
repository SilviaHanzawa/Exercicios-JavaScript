function verificar (){
    let data = new Date ()
    let ano = data.getFullYear()
    let fano = document.getElementById ('txtano')
    let res = document.getElementById ('res')
    if (fano.value.length == 0 || fano.value > ano ){
        window.alert('[Erro] Verifique os dados e tente novamente')
    }else {
        let fsex = document.getElementsByName ('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement ('img')
        img.setAttribute ('id','foto')
        if (fsex [0].checked){
            genero = 'Homem' 
            if( idade >= 0 && idade < 10){
                img.setAttribute ('src', 'foto-crianca.png')
            }else if(idade < 21){
                img.setAttribute ('src', 'foto-jovem.png')

            }else if (idade < 65) {
                img.setAttribute ('src', 'foto-adulto.png')

            }else {
                img.setAttribute ('src', 'foto-idoso.png')

            }
        } else if (fsex [1].checked){
            genero = 'Muher'
            if( idade >= 0 &&  idade < 10){
                img.setAttribute ('src', 'foto-crianca.png')  
             }else if(idade < 21){
                 img.setAttribute ('src', 'foto-jovem.png')
             }else if (idade < 65){
                img.setAttribute ('src', 'foto-adulto.png')
               }else {
                img.setAttribute ('src', 'foto-idoso.png')  
           }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Verificamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        }


}