function carregar (){ 
    let msg = document.getElementById
    ('msg')
    let foto = document.getElementById
    ('foto')
    let data = new Date()
    let hora = data.getHours()
    

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        foto.innerHTML = '<img src= "fotomanha.png">'
        document.body.style.background = '#F2C894'

    }else if (hora >=12 && hora < 18){
        foto.innerHTML ='<img src="fototarde.png">' 
        document.body.style.background = '#8C7870'
    }else {
        foto.innerHTML = '<img src= "fotonoite.png">'
        document.body.style.background = '#011826'
    }


}

