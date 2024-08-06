function carregar(){
    msg = window.document.getElementById(`msg`)
    img = window.document.getElementById('imagem')
    var data = new Date
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora <= 12 ){
        img.src = "imagens/manha.png"
        document.body.style.background = '#ecd2a2'
    } else if(hora <= 17){
        img.src = "imagens/tarde.png"
        document.body.style.background = '#be7b6a'
    }else{
        img.src= "imagens/noite.png"
        document.body.style.background = "#001954"
    }
}