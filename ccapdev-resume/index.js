
db.collection("educations").orderBy("year_start").get().then(function(snapshot){
        snapshot.forEach(function(doc){
            if(doc.data().school === "De La Salle University - Manila"){
                document.getElementById('education').innerHTML += `<img class="logo" src="dlsu.png" />`;
                document.getElementById('education').innerHTML += `<p>${doc.data().degree}</p>`;
                document.getElementById('education').innerHTML += `<span>${doc.data().school}&emsp;</span>`;
                document.getElementById('education').innerHTML += `<span>${doc.data().year_start}-</span>`;
                document.getElementById('education').innerHTML += `<span>${doc.data().year_end}</span>`;
            }else{
            document.getElementById('education').innerHTML += `<p>${doc.data().degree}</p>`;
            document.getElementById('education').innerHTML += `<span>${doc.data().school}&emsp;</span>`;
            document.getElementById('education').innerHTML += `<span>${doc.data().year_start}-</span>`;
            document.getElementById('education').innerHTML += `<span>${doc.data().year_end}</span><br>`;
            }
    })
});

var orgid = 1;
db.collection("organizations").orderBy("year_start").get().then(function(snapshot){
    snapshot.forEach(function(doc){
        document.getElementById('org').innerHTML +=`<span class="orgid${orgid}"><span class="orgname">${doc.data().name}</span><br>
        ${doc.data().position}&nbsp${doc.data().year_start}-${doc.data().year_end}</span>`;
        orgid++;
    })
});

var workid = 1;
db.collection("works").get().then(function(snapshot){
    snapshot.forEach(function(doc){
        document.getElementById('prevwork').innerHTML +=`<span class="workid${workid}"><a class="workname" href="${doc.data().link}">${doc.data().name}</a><br>
        ${doc.data().description}</span>`;
        workid++;
    })
});

db.collection("others").doc("introduction").get().then(function(doc){
        document.getElementById('about').innerHTML +=`<span class="intro">${doc.data().intro}</span>`;
});

db.collection("others").doc("link").get().then(function(doc){
        document.getElementById('contact').innerHTML +=`<span class="link">Github: ${doc.data().github}</span>`;
});