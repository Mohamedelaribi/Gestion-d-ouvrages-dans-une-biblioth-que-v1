var form = document.getElementById("form");
var input = document.getElementsByTagName("input");
var select = document.getElementById("lang");
var type = document.getElementsByClassName("med");
var para = document.getElementById("paragraphe");
var validation =0

function valider(e){
    e.preventDefault();
    for(i=0;i<input.length-3;i++){
        if(input[i].value==''){
            input[i].nextElementSibling.innerHTML = "enter un information"
            input[i].nextElementSibling.style.color = "red"
            validation++;
        }
        else{
            input[i].nextElementSibling.innerHTML = "valide"
            input[i].nextElementSibling.style.color = "green"
        }
        //titre validation
        if(input[0].value.length>30){
            input[0].nextElementSibling.innerHTML = "entre un nome moins de 30"
            input[0].nextElementSibling.style.color = "red"
            validation++;

        }
        //nome de l'auteur validation
        if(input[1].value.length>20){
            input[1].nextElementSibling.innerHTML ="entre un nome moins de 20"
            input[1].nextElementSibling.style.color ="red"
            validation++;


        }
        // prix validation 
        if(isNaN(Number(input[2].value))){
            input[2].nextElementSibling.innerHTML = "entre un number positive"
            input[2].nextElementSibling.style.color = "red"
            validation++;

        }
        else if(Number(input[2].value<0)){
            input[2].nextElementSibling.innerHTML ="entre un number positive"
            input[2].nextElementSibling.style.color = "red"
            validation++;

        }

    }
        // langue validation
        if(select.value==""){
            select.nextElementSibling.innerHTML ="choisir un langue"
            select.nextElementSibling.style.color="red"
            validation++;
            }
        // type de livre
        var is_cheched = false
        for(i=0;i<type.length;i++){
            if(type[i].checked){
                is_cheched =true;
                break;
            }
            else{
                is_cheched = false;
            }
            if(is_cheched){
                para.innerHTML = "valide"
                para.style.color = "green"
            }
            else{
                para.innerHTML = "choisir un type"
                para.style.color = "red"
            }
            
        }
}
form.addEventListener("submit", valider)
