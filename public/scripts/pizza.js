document.getElementById("pizza-form").onsubmit = () => {
    
    let isValid = true;

    clearErrors();

    let fname = document.getElementById("fname").value.trim();
    if(fname === ""){
        document.getElementById("error-fname").style.display = "block";
        isValid = false;
    }

    let lname = document.getElementById("lname").value.trim();
    if(lname === ""){
        document.getElementById("error-lname").style.display = "block";
        isValid = false;
    }

    let email = document.getElementById("email").value.trim();
    if(email === ""){
        document.getElementById("error-email").style.display = "block";
        isValid = false;
    }

    let methodSelected = false;
    let methodButtons = document.getElementsByName("method");
    for(let i=0; i<methodButtons.length; i++){
        if(methodButtons[i].checked){
            methodSelected=true;
        }
    }

    if(!methodSelected){
        document.getElementById("error-method").style.display = "block";
        isValid=false;
    }

    let size = document.getElementById("size").value;
    if(size==="none"){
        document.getElementById("error-size").style.display = "block";
        isValid=false;
    }

    return isValid;
    
    
};

function clearErrors(){
   
    let errors = document.getElementsByClassName("error")
    for (let i=0; i<errors.length; i++){
        errors[i].style.display = "none";
    }

}
