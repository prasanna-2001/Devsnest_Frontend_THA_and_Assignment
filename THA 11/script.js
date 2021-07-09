// var correct = getElementbyClassName()

//add the c;ass name
function answer(e){
    const target = e.currentTarget;
    console.log(typeof(target.getAttribute('status')));
    if(target.getAttribute('status') === "correct"){
        target.className = target.className.replace('beforeselection','correct');
    }
    else{
        target.className = target.className.replace('beforeselection','not_correct');
    }

}