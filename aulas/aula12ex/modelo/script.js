function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByClassName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagembbm.png')
            } else if (idade < 21){
                img.setAttribute('src', 'imagemjovemm.png')
            } else if (idade <60){
                img.setAttribute('src', 'imagemadultom.png')
            } else{
                img.setAttribute('src', 'imagemidosom.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagembbf.png')
            } else if (idade < 21){
                img.setAttribute('src', 'imagemjovemf.png')
            } else if (idade <60){
                img.setAttribute('src', 'imagemadultof.png')
            } else{
                img.setAttribute('src', 'imagemidosof.png')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
