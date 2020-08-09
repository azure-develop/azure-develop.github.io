
var logocount = 0;
db.collection("educations").orderBy("year_start").get().then(function(snapshot){
    snapshot.forEach(function(doc){
        if(doc.data().school === "De La Salle University - Manila" && logocount === 0){
            document.getElementById('education').innerHTML += `<img class="logo" src="dlsu.png" />`;
            document.getElementById('education').innerHTML += `<p id="${doc.id}">${doc.data().degree}<button type="button" id="deleteedu" onclick="deleteedu()">&nbsp;Delete&nbsp;</button></p>`;
            document.getElementById('education').innerHTML += `<span>${doc.data().school}&emsp;</span>`;
            document.getElementById('education').innerHTML += `<span>${doc.data().year_start}-</span>`;
            document.getElementById('education').innerHTML += `<span>${doc.data().year_end}</span>`;
            logocount = 1;
        }else if(doc.data().school === "De La Salle University - Manila"){
            document.getElementById('education').innerHTML += `<p id="${doc.id}">${doc.data().degree}<button type="button" id="deleteedu" onclick="deleteedu()">&nbsp;Delete&nbsp;</button></p>`;
            document.getElementById('education').innerHTML += `<span>${doc.data().school}&emsp;</span>`;
            document.getElementById('education').innerHTML += `<span>${doc.data().year_start}-</span>`;
            document.getElementById('education').innerHTML += `<span>${doc.data().year_end}</span>`;
        }else{
            document.getElementById('education').innerHTML += `<p id="${doc.id}">${doc.data().degree}<button type="button" id="deleteedu" onclick="deleteedu()">&nbsp;Delete&nbsp;</button></p>`;
            document.getElementById('education').innerHTML += `<span>${doc.data().school}&emsp;</span>`;
            document.getElementById('education').innerHTML += `<span>${doc.data().year_start}-</span>`;
            document.getElementById('education').innerHTML += `<span>${doc.data().year_end}</span><br>`;
        }
    })
});

db.collection("organizations").orderBy("year_start").get().then(function(snapshot){
    snapshot.forEach(function(doc){
        document.getElementById('orggrid').innerHTML +=`<p id="${doc.id}">${doc.data().name}<button type="button" id="deleteorg" onclick="deleteorg()">&nbsp;Delete&nbsp;</button></p>
        <span>${doc.data().position}&nbsp${doc.data().year_start}-${doc.data().year_end}</span>`;
    })
});


db.collection("works").get().then(function(snapshot){
    snapshot.forEach(function(doc){
        document.getElementById('prevwork').innerHTML +=`<p id="${doc.id}"><a class="workname" href="${doc.data().link}">${doc.data().name}</a><button type="button" id="deletework" onclick="deletework()">&nbsp;Delete&nbsp;</button></p>
        <span>${doc.data().description}</span>`;
    })
});

db.collection("others").doc("introduction").get().then(function(doc){
        document.getElementById('about').innerHTML +=`<span class="intro">${doc.data().intro}</span>`;
});

db.collection("others").doc("link").get().then(function(doc){
        document.getElementById('contact').innerHTML +=`<span class="link">Github: ${doc.data().github}</span>`;
});