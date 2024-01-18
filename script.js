function test(){
    let answer=document.getElementsByName("option");
    let checked;

    for (let index = 0; index < answer.length; index++) {
        if (answer[index].checked==true){
            checked=answer[index].value;
        }       
    }
    
    alert(checked);
}