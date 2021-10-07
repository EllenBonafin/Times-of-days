//objct
function carregar(){
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('img')
    var data = new Date() //data atual
    var hora = data.getHours()//hr atual
    msg.innerHTML = `Now its ${hora} hours.`
  
    // para a foto mudar eu coloco uma estrutura de decisao
    if (hora >= 6 && hora < 12){
        //Good Morning!
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#a9d6e5'
    } 
    else if (hora >= 12 && hora <= 18)
    {
        //Good afternoon!
        img.src = 'fototarde.jpg' 
        document.body.style.background = '#f8ad9d'
    } 
    else 
    {
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#4f5d75'
        //Good nigth!
    }

}



