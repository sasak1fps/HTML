const buttom = document.getElementById('generate')
    buttom.addEventListener('click', function(){

 const min = parseInt(document.getElementById('min').value)
 const max = parseInt(document.getElementById('max').value)

 let  result = Math.floor(Math.random()*(max - min + 1)) + min;

        if(isNaN(result)){
            result = 'valor invalido';
        }

document.querySelector('#result > span').textContent = result;

});