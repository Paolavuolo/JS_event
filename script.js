// Fonctionnalité 1 : 

const footer_click = document.getElementsByTagName('footer')[0];
console.log(footer_click)

//fonctionnalité 1 bis :

var clic = 0;
let footer_count = document.querySelector("p.float-right");
footer_count.addEventListener("click", function() {
    clic++;
    footer_count.textContent = `clic numéro ${clic}`; 
    console.log(`clic numéro : ${clic}`)
});

//fonctionnalité 2 : 

const Hamburger = document.querySelector("button.navbar-toggler")
const navHeader = document.getElementById("navbarHeader"); 

Hamburger.addEventListener ('click', function(){
    navHeader.classList.toggle("collapse");
}); 

//fonctionalité 3 : 

const EditHTML5 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
let text_card_HTML = document.body.children[1].children[1].children[0].children[0].children[0];

EditHTML5.addEventListener('click', function(){
    text_card_HTML.style.color = 'red';
});

//fonctionnalité 4 : 

let text_card_CSS = document.body.children[1].children[1].children[0].children[0].children[1];
const EditCSS3 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

EditCSS3.addEventListener ('click', function(){
    if (text_card_CSS.style.color === "green"){
        text_card_CSS.style.color = "";
    } else {
        text_card_CSS.style.color = "green";
    }
}); 

//fonctionnalité 5 : 

const bootstrapLink = document.querySelector('link'); 
let Navbar = document.querySelector(".navbar"); 
i = 1

Navbar.addEventListener ('dblclick', function(){
    i++ //qui est un compteur de clique
		if( i % 2 == 0) { //nombre pair de cliques
			bootstrapLink.setAttribute("href", "#") //lorsque on double clique, le lien s'enlève
		} else {
			bootstrapLink.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css")
		}
});

//fonctionnalité 6 : 

let Cards = document.querySelectorAll(".col-md-4"); 

for (let i = 0; i < Cards.length; i++) {
    let CardText = Cards[i].querySelector('.card-text'); //on défini les différents objets qui devront être modifiés
    let CardImg = Cards[i].querySelector('.card-img-top');
    let CardButton = Cards[i].querySelector('.btn-success');

    CardButton.addEventListener("mouseover", function () { //mouseover permet de déclencher l'animation au moment du pointage sur le bouton view 
        CardText.classList.toggle("collapse");
        // redimension de l'image 
        if (CardImg.style.maxWidth != "20%") { //si celle ci est en grand format
            CardImg.style.maxWidth = "20%";
        } else {
            CardImg.style.maxWidth = "100%"; //revient a sa taille originale 
        };
    })
}

//fonctionnalité 7 : 

let GrayButton = document.querySelector("a.btn.btn-secondary.my-2")
let CardRow = document.body.children[1].children[1].children[0].children[0];

GrayButton.addEventListener("click", function(){
    CardRow.insertBefore(CardRow.lastElementChild, CardRow.firstElementChild);
})

//fonctionnalité 8 : 

let BlueButton = document.querySelector("a.btn.btn-primary.my-2")
BlueButton.setAttribute("href", "#") //on enlève le lien qui redirgait vers la page d'acceuil de THP

BlueButton.addEventListener("click", function(){
    CardRow.insertBefore(CardRow.firstElementChild, CardRow.lastElementChild)
})

//fonctionnalité 9 : 

let logo = document.querySelector("a.navbar-brand.d-flex.align-items-center")

logo.addEventListener("keypress", function logKey(e){
    logo.textContent += `${e.code}`
}); 
