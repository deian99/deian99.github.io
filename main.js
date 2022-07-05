

let title = document.getElementById("title")

class Contact {
    constructor(nume, telefon, adresa) {
        this.nume = `<div id="contactInfo">` + "Nume: " + nume + `</div>`;
        this.telefon = `<div id="contactInfo">` + "NrTelefon: " + telefon + `</div>`;
        this.adresa = `<div id="contactInfo">` + "Adresa: " + adresa  + `</div>`;
    }
    string() {

        return this.nume + `<br>` + this.telefon + `<br>` + this.adresa;
    };
}


let contactList = [];
let listaNume = ["Alex", "Deian", "Costel", "Alin", "Cornel", "Marius", "Marius", "Alexandra", "Maria", "Roxi", "Angela", "Dani"]
let listaNrTel = ["12345", "35421", "54321", "32412", "21343", "53412", "32425", "32415", "23145", "33345", "53321", "22351"]
let listaAdresa = ["Str A nr 1", "Str B nr 2", "Str C nr 3", "Str D nr 4", "Str E nr 5", "Str F nr 6", "Str G nr 7", "Str H nr 8", "Str I nr 9", "Str J nr 10", "Str K nr 10", "Str L nr 11"]

for(let i=0;i<12;i++)
{
    contactList.push(new Contact(listaNume[i], listaNrTel[i], listaAdresa[i]))
}
console.log(contactList)
let options = ""
for (let i=0; i < contactList.length;i++) {

}
let nume1 = document.getElementById("nume")
let h3 = document.createElement("h3")
let br = document.createElement("br")





function searchContact (list, numeCautat) {
    let finalResult = [];
    console.log(nume1.value)
    let resultList = list.filter(element => element.nume === numeCautat)
    console.log(resultList)
    for (let i = 0; i < resultList.length; i++) {
        finalResult.push(resultList[i].string())
        h3.innerHTML = finalResult;
        h3.appendChild(br)
        title.appendChild(h3)
        console.log(finalResult)
    }
    for (let i = 0; i < finalResult.length; i++) {

        h3.appendChild(br)
    }
    }

//searchContact(contactList, 'Maria')

class JobOpCard {
    constructor(title, description, link) {
        this.title = '<div id="jobTitle">' + title + '</div>';
        this.description = '<div id="jobDesc">' + description + '</div>';
        this.image = '<img id="jobImage" alt="image" src=""' + '</img>';
        this.link = '<div id="jobLink">' + '<a id="jobLink" href="link">' + 'View Posting' + '</a>' + '</div>';
    }
    string() {
        return this.title + '<br>' + this.description + '<br>' + this.image + '<br>' + this.link
    }
}

let listaTitluri = [], listaDescriptions = [], listaImagini = [], listaLink = [], jobOpCards =[];

listaTitluri = ["Data Entry Operator", "React Developer", "java Developer", "php Developer", "iOS Developer", "android Developer"]
listaDescriptions = ["Entry, Fulltime, Remote", "Intermediate, Senior", "Intermediate, Senior", "Senior", "Senior", "Intermediate, Senior"]


function populateJobsArray (listaTitlu, listaDesc, listaJobOpCard, Class, link) {
    for (let i = 0; i < 6; i++) {
        listaJobOpCard.push(new Class(listaTitlu[i], listaDesc[i], link))
    }
    console.log(listaJobOpCard)
}
populateJobsArray(listaTitluri, listaDescriptions, jobOpCards, JobOpCard, "link")



function populateCards (list, mainTitle, mainDesc) {

    let wrapper = document.getElementById("wrapper")
    let div = document.createElement("div")
    wrapper.innerHTML = '<div id=wrapperTitle>'+ mainTitle + '</div>'
    wrapper.innerHTML+= '<div id=wrapperDescription>'+ mainDesc + '</div>'
    for (let i = 0; i < list.length; i++) {
        div.innerHTML+= `<div id="card">` + list[i].string() + `</div>`
        div.style.display = "grid"
        div.style.gridTemplateColumns = "repeat(auto-fit, 250px)"
        div.style.gridRowGap = "20%";
        div.style.gridColumnGap = "10%"
        div.style.padding = "5px"
        wrapper.appendChild(div)
        div.style.justifyItems = "center"
    }
}


let listaTitluriJos = [], listaDescriptionsJos = [], jobOpCardsJos = [];
listaTitluriJos = ["Shape your path forward", "A fair share for everyone", "Security and support", "Office perks and goodies", "Remote work", "Health and wellness"]
listaDescriptionsJos = ["We provide career development opportunities for all our employees, regardless of their level of experience. There's always something new to learn.",
"Communication is key, contribution is valued and rewarded. We take responsibility for the quality of the work we deliver and the impact we have on others.",
"We're in this together for the long run. Many of our employees and clients have been together with us from day one.",
"Swimming pool, ping-pong and football table, beer dispenser, Christmas gifts and the occasional parties included.",
"We allow full flexibility in choosing your work setup—be it from home, from the office, or even from abroad.",
"We cover a range of medical benefits such as a free ophthalmologic consultation.",]

populateJobsArray(listaTitluriJos, listaDescriptionsJos, jobOpCardsJos, JobOpCard, "link")
//populateCards(jobOpCardsJos, "A career that keeps on giving", "text" )









