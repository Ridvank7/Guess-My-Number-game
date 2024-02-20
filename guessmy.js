//* guess my number
//*game logic

//*? 1-100 arasında rastgele bır sayı tut
let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

//? Variable
let score = 10;
// let topScore=0

//? localStorage da topScore adıyla bır degısken olustur
let topScore = localStorage.getItem("topScore") || 0;

//? DOM dakı topscreen degerını localStorage dan okuyarak guncelle
document.querySelector(".top-score").textContent = topScore;

document.querySelector(".check-btn").addEventListener("click", () => {
  //?Gereklı degıskenlerı tanımla
  const guessInput = Number(document.querySelector(".guess-input").value);

  const message = document.querySelector(".message");
  const body = document.querySelector("body");
  const checkBtn = document.querySelector(".check-btn")

  //? eger ınput gırılemedıyse kullanıcıya uyarı ver
  if (!guessInput) {
    message.innerText= "Please enter a number";
  }

  //?eger rastgelesayı ==ınput.value
  else if(randomNumber=== guessInput) {
    message.innerHTML = `Congrats You Win <i class="fa-solid fa-face-grin-hearts fa-2x"></i> `;
    // message.innerText = "Congrats You Win"
    body.className = "bg-success";
    checkBtn.disabled = true;
    if(score> topScore){

        //? localStorage daki topScore degiskenini guncelle
        localStorage.setItem("topScore",score)
        //?DOM daki top-score degerini guncelle
        document.querySelector(".top-score").textContent = score
    }
    document.querySelector(".secret-number").textContent = randomNumber;
}  //?rastgelesayı =! ınput.value
else{
    score--
    // score-=1
    if(score>0){
    guessInput>randomNumber
    ?(message.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-2x"></i> DECREASE `)
    :(message.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-2x"></i> INCREASE `)
    }else {
         message.innerHTML = `You Lost <i class="fa-regular fa-face-sad-tear fa-2x"></i>`;
        // message.innerText = "You Lost"
        body.className = "bg-danger"
        checkBtn.disabled = true
        document.querySelector(".secret-number").textContent = randomNumber
    }
    document.querySelector(".score").textContent = score
}




});

//? agaın butonuna basıldıgında oyunu yenıden baslandıc degerıne getır

document.querySelector(".again-btn").addEventListener("click",() => {
    score = 10;
    document.querySelector(".score").textContent = score
    document.querySelector(".check-btn").disabled =false
    randomNumber = Math.round(Math.random()*100)
    console.log(randomNumber);
    document.querySelector(".secret-number").textContent = "?"
    document.querySelector(".message").innerText = "starting"
    document.querySelector(".guess-input").vaue = ""
    document.querySelector("body").classList.remove("bg-success","bg-danger")
    document.querySelector(".guess-input").addEventListener("keydown", (e) => {
        // console.log(e.code == "Enter");
    if(e.code ==="Enter"){
document.querySelector(".check-btn").click

    }
    })
})