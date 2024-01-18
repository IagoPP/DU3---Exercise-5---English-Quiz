function test(){
    let answer=document.getElementsByName("option");
    let checked;

    for (let index = 0; index < answer.length; index++) {
        if (answer[index].checked==true){
            checked=answer[index].value;
        }       
    }

    let correct = document.getElementById("correct");
    let incorrect = document.getElementById("incorrect");

    switch (checked) {
        case "1":
            incorrect.style.display="unset";
            correct.style.display="none";
            break;
        case "2":
            correct.style.display="unset";
            incorrect.style.display="none";
          break;
        case "3":
            incorrect.style.display="unset";
            correct.style.display="none";
          break;
      }
      
}