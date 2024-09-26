const buttons = document.querySelectorAll('.buttons')
const body = document.querySelector('body')
buttons.forEach(function(button)
{
    console.log(button);
    button.addEventListner('click',function(e){
        console.log(e);
        console.log(e.target);
       
        if (e.target==='black'){
            body.style.backgroundColor=e.target.id;
        }
        if (e.target==='green'){
            body.style.backgroundColor=e.target.id;
        }
        if (e.target==='red'){
            body.style.backgroundColor=e.target.id;
        }
        
     });

});