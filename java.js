function validate(){
    var name=document.getElementById("name");
    var email=document.getElementById("email");

    var selfexplanation=document.getElementById("selfexplanation");
    if(name.value==""){
        alert("must enter a name");
        document.form1.name();
        return false;
    }
    if(email.value==""){
        alert("must enter a email");
        document.form1.email();
        return false;
    }
    if(selfexplanation.value==""){
        alert("must enter a name");
        document.form1.selfexplanation();
        return false;
    }
    return true;

}