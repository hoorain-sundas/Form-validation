function getinput(){
    var fn = document.getElementById("inp1");
    var ln = document.getElementById("inp2");
    var con = document.getElementById("con");
    var z = document.getElementById("zip");
    var em = document.getElementById("email");
    var fnval = fn.value;
    var lnval = ln.value;
    var conval = con.value;
    var zval = z.value;
    var emval = em.value;
}

function checkinput(){
    var fn = document.getElementById("inp1");
    var ln = document.getElementById("inp2");
    var con = document.getElementById("con");
    var z = document.getElementById("zip");
    var em = document.getElementById("email");
    var fname = fn.value;
    var lname = ln.value;
    var contact = con.value;
    var zip = z.value;
    var email = em.value;
    var returnval = true;
    if (fname == "") {
        returnval = false;
       console.log(fname)
        alert("First name required");
        
        return returnval;
    }
    else if (lname == "") {
        returnval = false;
       console.log(lname)
        alert("Last name required");
        return returnval;
    }
    else if (contact == "") {
        returnval = false;
        console.log(contact)
        alert("contact number required");
        return returnval;
        }
    else if (zip == "") {
        returnval = false;
        console.log(zip)
        alert("Zip code required");
        return returnval;
        }
    else if (email == "") {
        returnval = false;
        console.log(email)
        alert("Email address required");
        return returnval;
         }
        //  if (email != "") {
        //     console.log(email)
        //     for (var i=0; i<=email.length-1; i++) {
        //     var txt = email.slice(i, i+1);
        //        if (txt == "@") {
        //         returnval = true;
        //         alert("correct email");
        //         return returnval;
        //        }
        //        else { 
        //         returnval = false;
        //         alert("incorrect email");
        //        return returnval;
        //     }
        // }
               
           
        //  }
         document.write(" <center><h1>  <b> FORM WITH JS VALIDATION DATA </b> </h1></center></br>")
         document.write(" <center><b>" + "First Name: " + "</b> " + fname + " </center></br>");
         document.write(" <center><b>" + "Last Name: " + "</b> " + lname + " </center></br>");
         document.write(" <center><b>" + "Contact: " + "</b> " + contact + " </center></br>");
         document.write(" <center><b>" + "Zip: " + "</b> " + zip + " </center></br>");
         document.write(" <center><b>" + "Email: " + "</b> " + email + " </center></br>");
         
}


