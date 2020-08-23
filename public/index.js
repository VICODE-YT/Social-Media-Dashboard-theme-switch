const btnToggle = document.getElementById("btnToggle");
const bodyTag = document.getElementsByTagName("body")[0];
const cards = document.getElementsByClassName("card");
const cardsOverView = document.getElementsByClassName("overview-card");

const cardsAmounts = document.getElementsByClassName("info__amount");
const cardAccounts = document.getElementsByClassName("card__account");
const infoTexts = document.getElementsByClassName("info__text");

const titleDash = document.getElementById("tittle-dashboard");
const descriptionDash = document.getElementById("description-dashboard");
const overviewTittle = document.getElementById("overview-tittle");



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
    descriptionDash.classList.toggle("tittle-description__followers--dark-theme");
    titleDash.classList.toggle("tittle-description__tittle--dark-theme");
    
    overviewTittle.classList.toggle("tittle-description__tittle--dark-theme");

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
    for (let cardOverView of cardsOverView) {
        cardOverView.classList.toggle("card-dark-theme");
    }

},false);
