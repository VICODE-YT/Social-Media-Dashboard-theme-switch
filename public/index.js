const btnToggle = document.getElementById("btnToggle");
const bodyTag = document.getElementsByTagName("body")[0];
const cards = document.getElementsByClassName("card");
const cardsOverView = document.getElementsByClassName("overview-card");

const cardsAmounts = document.getElementsByClassName("info__amount");
const cardAccounts = document.getElementsByClassName("card__account");
const infoTexts = document.getElementsByClassName("info__text");


/* btnToggle.style.justifyContent = "flex-start";
 */
let currentTheme = "light";

btnToggle.addEventListener("click",function(){
/*     let justifCont = this.style.justifyContent;
 */
    if (currentTheme === "light"){
        this.style.justifyContent = "flex-end";
        currentTheme = "dark";
    } else if (currentTheme === "dark"){
        this.style.justifyContent ="flex-start";
        currentTheme = "light";
    }
    bodyTag.classList.toggle("body-dark-theme");

    for(let card of cards){
        card.classList.toggle("card-dark-theme");        
    }
    for(let cardAmount of cardsAmounts){
        cardAmount.classList.toggle("info__amount--dark-theme");
    }
    for (let cardAccount of cardAccounts) {
        cardAccount.classList.toggle("card__account--dark-theme");
    }
    for (let infoText of infoTexts) {
        infoText.classList.toggle("infor__text--dark-theme");
    }


},false);