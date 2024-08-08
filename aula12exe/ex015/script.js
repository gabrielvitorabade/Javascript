function verificar() { 
    var data = new Date
    var ano = data.getFullYear()
    var txtano = window.document.getElementById("txtano")
    var res = document.getElementById('res')
    if (txtano.value.length == 0 || txtano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }else{
        var vsex = document.getElementsByName('sex')
        var idade = ano - Number(txtano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(vsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'criancam.png')
            } else if(idade <= 21) {
                img.setAttribute('src', 'jovemm.png')
            }else if(idade <= 60){
                img.setAttribute('src', 'adultom.png')
            }else{
                img.setAttribute('src', 'idosom.png')
            }
        }else if(vsex[1].checked){
            genero = `Mulher`
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'criancaf.png')
            } else if(idade <= 21) {
                img.setAttribute('src', 'jovemf.png')
            }else if(idade <= 60){
                img.setAttribute('src', 'adultaf.png')
            }else{
                img.setAttribute('src', 'idosaf.png')
            }
        }
        res.innerHTML= `Indentifiquei ${genero}, com ${idade} anos.`
        res.style.textAlign = "center"
        res.appendChild(img)
        img.style.padding = '8px'
        
    }
}