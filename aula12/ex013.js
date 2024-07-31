var dia = new Date()
var diasem = dia.getDay()
var hora = dia.getHours()
switch(diasem) {
    case 0 :
        diasem = (`Domingo.`)
        break
    case 1 :
        diasem = (`Segunda`)
        break
    case 2 :
        diasem = (`Terça`)
        break
    case 3 :
        diasem = (`Quarta`)
        break
    case 4 : 
        diasem = (`Quinta`)
    case 5 : 
        diasem = (`Sexta`)
        break
    case 6 :
        diasem = (`Sábado`)
        break

}
console.log(`Hoje é ${diasem}, e são ${hora} horas! Tenha uma ótima semana.`)