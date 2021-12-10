var form = document.getElementById("form");
var input = document.getElementsByTagName("input");
var select = document.getElementById("lang");
var type = document.getElementsByName("type");

function valider(e){
    e.preventDefault();
    for(i=0;i<input.length-3;i++){
        if(input[i].value==''){
            input[i].nextElementSibling.innerHTML = "enter un information"
            input[i].nextElementSibling.style.color = "red"
        }
        else{
            input[i].nextElementSibling.innerHTML = "yes"
            input[i].nextElementSibling.style.color = "green"
        }
    }
}
form.addEventListener("submit", valider)
