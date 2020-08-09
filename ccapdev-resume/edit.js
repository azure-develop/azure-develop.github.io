
function verify() {
    var email = document.getElementById('emaillog').value;
    var password = document.getElementById('pass').value;
    const emailreg = /^\S+@\S+[\.][0-9a-z]+$/;
    var emailbool = emailreg.test(email);

    document.getElementById('emaillog').style.backgroundColor="white";

    if (emailbool) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
            console.log("User signed in");
            document.getElementById('container').style.display = "grid";
            document.getElementById('logincon').style.display = "none";

            var user = firebase.auth().currentUser;
            if (user != null) {
                console.log(user.email + " has logged in");
            }
        }).catch(function (err) {
            if (err.code == "auth/wrong-password") {
                alert("Wrong password");
            } else {
                alert(err.message);
            }
        });
    }else{
        document.getElementById('emaillog').style.backgroundColor="#E64556";
    }
}

function addedu(){
    document.getElementById('container').style.display = "none";
    document.getElementById('educon').style.display = "flex";
}

function confirmedu(){
    var newObject = {
        degree: document.getElementById('degree').value,
        school: document.getElementById('school').value,
        year_start: document.getElementById('year_start').value,
        year_end: document.getElementById('year_end').value
    };

    db.collection("educations").add(newObject).then(function(doc){
        console.log("New info added with ID: "+ doc.id);
        document.getElementById('educon').style.display = "none";
        document.getElementById('container').style.display = "grid";
        
        document.getElementById('degree').value = "";
        document.getElementById('school').value = "";
        document.getElementById('year_start').value = "";
        document.getElementById('year_end').value = "";
    });
}

function deleteedu(){
    console.log(event.target.parentNode.id);
    var docid = event.target.parentNode.id;
    db.collection("educations").doc(docid).delete().then(function(){
        console.log("Document successfully deleted!");
    }).catch(function(err){
            console.log("error in deleting item"+ err);
    });
}

function addorg(){
    document.getElementById('container').style.display = "none";
    document.getElementById('orgcon').style.display = "flex";
}

function confirmorg(){
    var newObject = {
        name: document.getElementById('orgname').value,
        position: document.getElementById('pos').value,
        year_start: document.getElementById('year_start_org').value,
        year_end: document.getElementById('year_end_org').value
    };

    db.collection("organizations").add(newObject).then(function(doc){
        console.log("New info added with ID: "+ doc.id);
        document.getElementById('orgcon').style.display = "none";
        document.getElementById('container').style.display = "grid";

        document.getElementById('orgname').value = "";
        document.getElementById('pos').value = "";
        document.getElementById('year_start_org').value = "";
        document.getElementById('year_end_org').value = "";
    });
}

function deleteorg(){
    console.log(event.target.parentNode.id);
    var docid = event.target.parentNode.id;
    db.collection("organizations").doc(docid).delete().then(function(){
        console.log("Document successfully deleted!");
    }).catch(function(err){
            console.log("error in deleting item"+ err);
    });
}

function addwork(){
    document.getElementById('container').style.display = "none";
    document.getElementById('workcon').style.display = "flex";
}

function confirmwork(){
    var newObject = {
        name: document.getElementById('workname').value,
        link: document.getElementById('link').value,
        description: document.getElementById('description').value
    };

    db.collection("works").add(newObject).then(function(doc){
        console.log("New info added with ID: "+ doc.id);
        document.getElementById('workcon').style.display = "none";
        document.getElementById('container').style.display = "grid";

        document.getElementById('workname').value = "";
        document.getElementById('link').value = "";
        document.getElementById('description').value = "";
    });
}

function deletework(){
    console.log(event.target.parentNode.id);
    var docid = event.target.parentNode.id;
    db.collection("works").doc(docid).delete().then(function(){
        console.log("Document successfully deleted!");
    }).catch(function(err){
            console.log("error in deleting item"+ err);
    });
}

function editabout(){
    document.getElementById('container').style.display = "none";
    document.getElementById('aboutcon').style.display = "flex";
}

function confirmabout(){
    db.collection("others").doc("introduction").update({
        intro: document.getElementById('aboutme').value
    }).then(function(){
        console.log("Field successfully updated!");
        document.getElementById('aboutcon').style.display = "none";
        document.getElementById('container').style.display = "grid";

        document.getElementById('aboutme').value = "";
    }).catch(function(error){
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}
    
function editcontact(){
    document.getElementById('container').style.display = "none";
    document.getElementById('contactcon').style.display = "flex";
}

function confirmcontact(){
    db.collection("others").doc("link").update({
        github: document.getElementById('acclink').value
    }).then(function(){
        console.log("Field successfully updated!");
        document.getElementById('contactcon').style.display = "none";
        document.getElementById('container').style.display = "grid";

        document.getElementById('acclink').value = "";
    }).catch(function(error){
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}