jk1=localStorage.getItem("v1");
jk2=localStorage.getItem("v2");

score1=0;
score2=0;
document.getElementById("name_1").innerHTML= jk1 +" : ";
document.getElementById("name_2").innerHTML= jk2 +" : ";
document.getElementById("score_1").innerHTML=score1;
document.getElementById("score_2").innerHTML=score2;
document.getElementById("question").innerHTML= name_1;
document.getElementById("answer").innerHTML= name_2;

function send() {
    
    number1=document.getElementById("inp_no_1").value;
    number2=document.getElementById("inp_no_2").value;
    actualans=praseInt(number1)*praseInt(number2);

    ques= "<h4>" +number1+ "X" +number2+ "</h4>";
    input= "<br>Answer: <input placeholder='type the answer'";
    checkbtn= "<br><br> <button onclick='check()' class='btn btn-link' > Check </button>";
    jimin= ques+input+checkbtn;
    document.getElementById("output").innerHTML=jimin;
}