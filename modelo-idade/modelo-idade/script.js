function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
        
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', '/modelo-idade/foto-bebe-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '/modelo-idade/foto-jovem-m.png')
            } else if (idade <50) {
                //Adulto
                img.setAttribute('src', '/modelo-idade/foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', '/modelo-idade/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','/modelo-idade/foto-bebe-f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '/modelo-idade/foto-jovem-f.png')
            } else if ( idade <50) {
                //Adulto
                img.setAttribute('src', '/modelo-idade/foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', '/modelo-idade/foto-idoso-f.png')
            }
        
        
        
        }
            


        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
        
    }
 

}