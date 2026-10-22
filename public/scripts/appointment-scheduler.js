// Form Validation
document.getElementById("scheduler-form").onsubmit = () => {

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

    return isValid;

};

function clearErrors(){
   
    let errors = document.getElementsByClassName("error")
    for (let i=0; i<errors.length; i++){
        errors[i].style.display = "none";
    }

}