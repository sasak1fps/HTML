const value = document.getElementById('value')
const plusbuttom = document.getElementById('plus')
const minusbuttom = document.getElementById('minus')
const reserbuttom = document.getElementById('resetar')

const updatevalue = (()=>{
    value.innerHTML = count;
})

let count =0;
let intervalid=0;

    plusbuttom.addEventListener('mousedown',()=>{
        intervalid = setInterval(()=>{
            count +=1;
            updatevalue();
        },100)

    })

    minusbuttom.addEventListener('mousedown',()=>{
        intervalid = setInterval(()=>{
            count -=1;
            updatevalue();
        },100)

    })

    resetar.addEventListener('click',()=>{
        count= 0;
        updatevalue();
    });

    document.addEventListener('mouseup',()=> clearInterval(intervalid))