function contar(){
    var txtinc = window.document.getElementById('inc')
    var txtfim = window.document.getElementById('fim')
    var txtpas = window.document.getElementById('pas')
    var res = window.document.getElementById('res')
   
    if(inc.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('[ERRO] Preencha os dados para a operação.')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(txtinc.value)
        var f = Number(txtfim.value)
        var p = Number(txtpas.value)
        if(p<=0){
            window.alert(`Passo invalido. Considerando passo 1`)
            p = 1
        }
       if (i<f){
            for (let c = i; c <= f; c+=p ) {
                res.innerText += ` ${c}, \u{1F449}`
            }
       }else{ 
            for (let c = i; c >= f; c-=p ) {
            res.innerText += ` ${c}, \u{1F449}`
            }
       }  res.innerHTML+= `\u{1F3C1}`
    }
}