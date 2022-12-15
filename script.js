function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('ano');
    var res = document.getElementById('res');
    
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = 40;
        if(fsex[0].checked){
            if(idade < 13){
                genero = 'um Menino'
                img.setAttribute('src','imagens/hcriança.png')
            }else if(idade >=13 && idade < 24){
                genero = 'um Rapaz'
                img.setAttribute('src','imagens/hjovem.png')
            }else if(idade >= 25 && idade < 60){
                genero = 'um Homem'
                img.setAttribute('src','imagens/hadulto.png')
            }else{
                genero = 'um Idoso'
                img.setAttribute('src','imagens/hveio.png')
            }
        }else{
            if(idade < 13){
                genero = 'uma Menina'
                img.setAttribute('src','imagens/mcriança.png')
            }else if(idade >=13 && idade < 24){
                genero = 'uma Garota'
                img.setAttribute('src','imagens/madolescente.png')
            }else if(idade >= 25 && idade < 60){
                genero = 'uma Mulher'
                img.setAttribute('src','imagens/madulta.png')
            }else{
                genero = 'uma Idosa'
                img.setAttribute('src','imagens/midosa.png')
            }

        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}