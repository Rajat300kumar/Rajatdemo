function buttonClick() {
       
        var email = document.getElementById("inlineFormInputGroup");   
        var password = document.getElementById("exampleInputPassword"); 
        var atposition=email.value.indexOf("@");  
        var dotposition=email.value.lastIndexOf(".");  
        var boolen = 1; 
         if(email.value=="" || atposition<1 || dotposition<atposition+2 || dotposition+2>=email.value.length){
            email.style.border="solid 1px  #F36161";
           document.getElementById("errors1").innerHTML="Enter Valid Email";  
            document.getElementById("errors1").style.color=" #e62e00";  
            return false;
            
        }
        else if (password.value==""|| password.value.length<6){
        password.style.border="solid 1px  #F36161";
         document.getElementById("errors").innerHTML="Enter more than 6 latter";  
        document.getElementById("errors").style.color=" #e62e00";
        
        return false;
        } 
        
        else {
        return true;
        }
        }