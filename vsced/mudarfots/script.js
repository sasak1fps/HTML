function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = (`AQUI SÃO  ${hora} HORAS!!`)

if (hora >=0 && hora <12 ) {
   
    img.src="manha.png" 
    document.body.style.background = '#e2cd9f'
    
}
else if (hora >= 12 && hora <= 18 ) {
    
    img.src="tard.jpg" 
    document.body.style.background = 'rgb(255, 136, 0)'
 
}
else{
    img.src= "noite.png" 
    document.body.style.background = 'rgb(1, 20, 73)'
   
}


}


