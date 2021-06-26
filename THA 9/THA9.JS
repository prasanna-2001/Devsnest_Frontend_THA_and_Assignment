const boxes = document.querySelectorAll('.unit');
var total=36;
var count=0;
document.getElementById('booked').innerText=count;   
document.getElementById('unbooked').innerText=total-count; 
for(let box of boxes)
{
    box.addEventListener('click',()=>{
        if(box.classList.contains('clicked'))
            {box.classList.remove('clicked');
            count--;
            }
        else
        {
            box.classList.add('clicked');
            count++;
        }
    document.getElementById('booked').innerText=count;   
    document.getElementById('unbooked').innerText=total-count; 
})
document.getElementById('booked').innerText=count;  
} ;

