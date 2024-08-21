function calcular(){
    var res = document.getElementById('res')
    var txtn = document.getElementById('txtn')
    if(txtn.value.length == 0 || n == 0){
        window.alert(`Verifique os dados e tente novamente.`)
    }else{
        var n = Number(txtn.value)
        var c = 1
        toolbar.innerHTML = ''
        while(c<=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c} `
            res.appendChild(item)
            c++
        }      
    }
}
    