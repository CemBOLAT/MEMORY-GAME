const emptyBox = document.querySelector("#emptyBox")
const difs = document.querySelectorAll(".difficulty")
const HUDpage = document.querySelector("#HUD-page")
const gamePage = document.querySelector("#gamePage")
const board = document.querySelector("#board-container")
const footerPage = document.querySelector("#footerPage")
const accuruteFooter= document.querySelector("#accuruteFooter")
const colorArr = [
    {
        name:"1",
        img: "/images/blue.jpg"
    },
    {
        name:"2",
        img: "/images/orange.jpeg"
    },
    {
        name:"3",
        img: "/images/pink.jpeg"
    },
    {
        name:"4",
        img: "/images/green.jpeg"
    },
    {
        name:"1",
        img: "/images/blue.jpg"
    },
    {
        name:"2",
        img: "/images/orange.jpeg"
    },
    {
        name:"3",
        img: "/images/pink.jpeg"
    },
    {
        name:"4",
        img: "/images/green.jpeg"
    },
]
const animalArr = [
    {
        name:"1",
        img: "/images/dog.jpeg"
    },
    {
        name:"2",
        img: "/images/frog.jpeg"
    },
    {
        name:"3",
        img: "/images/giraffe.jpeg"
    },
    {
        name:"4",
        img: "/images/mamut.jpg"
    },
    {
        name:"5",
        img: "/images/panda.jpeg"
    },
    {
        name:"6",
        img: "/images/tembel.jpg"
    },
    {
        name:"7",
        img: "/images/tiger.jpg"
    },
    {
        name:"8",
        img: "/images/cat.jpg"
    }, 
    {
        name:"1",
        img: "/images/dog.jpeg"
    },
    {
        name:"2",
        img: "/images/frog.jpeg"
    },
    {
        name:"3",
        img: "/images/giraffe.jpeg"
    },
    {
        name:"4",
        img: "/images/mamut.jpg"
    },
    {
        name:"5",
        img: "/images/panda.jpeg"
    },
    {
        name:"6",
        img: "/images/tembel.jpg"
    },
    {
        name:"7",
        img: "/images/tiger.jpg"
    },
    {
        name:"8",
        img: "/images/cat.jpg"
    },
]
const mineSweeperArr = [
    {
        name:"1",
        img: "/images/1.png"
    },
    {
        name:"2",
        img: "/images/2.png"
    },
    {
        name:"3",
        img: "/images/3.png"
    },
    {
        name:"4",
        img: "/images/4.png"
    },
    {
        name:"5",
        img: "/images/5.png"
    },
    {
        name:"6",
        img: "/images/6.png"
    },
    {
        name:"7",
        img: "/images/7.png"
    },
    {
        name:"8",
        img: "/images/8.png"
    },
    {
        name: "9",
        img: "/images/flag.jpeg"
    },
    {
        name: "10",
        img: "./images/mine.jpg"
    },
    {
        name:"11",
        img: "/images/blue.jpg"
    },
    {
        name:"12",
        img: "/images/orange.jpeg"
    },
    {
        name:"13",
        img: "/images/pink.jpeg"
    },
    {
        name:"14",
        img: "/images/green.jpeg"
    },
    {
        name:"15",
        img: "/images/started-board.png"
    },
    {
        name:"16",
        img: "/images/end-board.png"
    },
    {
        name:"1",
        img: "/images/1.png"
    },
    {
        name:"2",
        img: "/images/2.png"
    },
    {
        name:"3",
        img: "/images/3.png"
    },
    {
        name:"4",
        img: "/images/4.png"
    },
    {
        name:"5",
        img: "/images/5.png"
    },
    {
        name:"6",
        img: "/images/6.png"
    },
    {
        name:"7",
        img: "/images/7.png"
    },
    {
        name:"8",
        img: "/images/8.png"
    },
    {
        name: "9",
        img: "/images/flag.jpeg"
    },
    {
        name: "10",
        img: "./images/mine.jpg"
    },
    {
        name:"11",
        img: "/images/blue.jpg"
    },
    {
        name:"12",
        img: "/images/orange.jpeg"
    },
    {
        name:"13",
        img: "/images/pink.jpeg"
    },
    {
        name:"14",
        img: "/images/green.jpeg"
    },
    {
        name:"15",
        img: "/images/started-board.png"
    },
    {
        name:"16",
        img: "/images/end-board.png"
    },
]
const mixedArr = [
    {
        name:"1",
        img: "/images/1.png"
    },
    {
        name:"2",
        img: "/images/2.png"
    },
    {
        name:"3",
        img: "/images/3.png"
    },
    {
        name:"4",
        img: "/images/4.png"
    },
    {
        name:"5",
        img: "/images/5.png"
    },
    {
        name:"6",
        img: "/images/6.png"
    },
    {
        name:"7",
        img: "/images/7.png"
    },
    {
        name:"8",
        img: "/images/8.png"
    },
    {
        name: "9",
        img: "/images/flag.jpeg"
    },
    {
        name: "10",
        img: "./images/mine.jpg"
    },
    {
        name:"11",
        img: "/images/blue.jpg"
    },
    {
        name:"12",
        img: "/images/orange.jpeg"
    },
    {
        name:"13",
        img: "/images/pink.jpeg"
    },
    {
        name:"14",
        img: "/images/green.jpeg"
    },
    {
        name:"15",
        img: "/images/started-board.png"
    },
    {
        name:"16",
        img: "/images/end-board.png"
    },
    {
        name:"17",
        img: "/images/dog.jpeg"
    },
    {
        name:"18",
        img: "/images/frog.jpeg"
    },
    {
        name:"19",
        img: "/images/giraffe.jpeg"
    },
    {
        name:"20",
        img: "/images/mamut.jpg"
    },
    {
        name:"21",
        img: "/images/panda.jpeg"
    },
    {
        name:"22",
        img: "/images/tembel.jpg"
    },
    {
        name:"23",
        img: "/images/tiger.jpg"
    },
    {
        name:"24",
        img: "/images/cat.jpg"
    }, 
    {
        name:"1",
        img: "/images/1.png"
    },
    {
        name:"2",
        img: "/images/2.png"
    },
    {
        name:"3",
        img: "/images/3.png"
    },
    {
        name:"4",
        img: "/images/4.png"
    },
    {
        name:"5",
        img: "/images/5.png"
    },
    {
        name:"6",
        img: "/images/6.png"
    },
    {
        name:"7",
        img: "/images/7.png"
    },
    {
        name:"8",
        img: "/images/8.png"
    },
    {
        name: "9",
        img: "/images/flag.jpeg"
    },
    {
        name: "10",
        img: "./images/mine.jpg"
    },
    {
        name:"11",
        img: "/images/blue.jpg"
    },
    {
        name:"12",
        img: "/images/orange.jpeg"
    },
    {
        name:"13",
        img: "/images/pink.jpeg"
    },
    {
        name:"14",
        img: "/images/green.jpeg"
    },
    {
        name:"15",
        img: "/images/started-board.png"
    },
    {
        name:"16",
        img: "/images/end-board.png"
    },
    {
        name:"17",
        img: "/images/dog.jpeg"
    },
    {
        name:"18",
        img: "/images/frog.jpeg"
    },
    {
        name:"19",
        img: "/images/giraffe.jpeg"
    },
    {
        name:"20",
        img: "/images/mamut.jpg"
    },
    {
        name:"21",
        img: "/images/panda.jpeg"
    },
    {
        name:"22",
        img: "/images/tembel.jpg"
    },
    {
        name:"23",
        img: "/images/tiger.jpg"
    },
    {
        name:"24",
        img: "/images/cat.jpg"
    }, 
]
const correctAttemptsDisplay = document.querySelector("#correctAttempts")
const totalAttemptsDisplay = document.querySelector("#totalAttempts")
const IDs = []
const dataIDs = []
let correctCounter = 0
let attemptCounter = 0 
let counter = 0 
let cardNumber
emptyBox.addEventListener("click",()=>{
    emptyBox.style.opacity = 0
    emptyBox.style.zIndex = -5
    for(let i = 0 ; i < 4 ; i++){
        difs[i].addEventListener("click",()=>{
            switch(difs[i].textContent){
                case "EASY": //color content
                    cardNumber = 8
                    stuffleTheDeck(colorArr)
                    gameSettings(cardNumber,colorArr)
                    pageSweeper()
                break;
                case "NORMAL":
                    cardNumber = 16 //animal content
                    stuffleTheDeck(animalArr)
                    gameSettings(cardNumber,animalArr)
                    pageSweeper()
                break;
                case "HARD":
                    cardNumber = 32 //minesweeper content
                    stuffleTheDeck(mineSweeperArr)
                    gameSettings(cardNumber,mineSweeperArr)
                    pageSweeper()
                    card90px()
                break;
                case "EXPERT":
                    cardNumber = 48 //everything
                    console.log(mixedArr)
                    stuffleTheDeck(mixedArr)
                    gameSettings(cardNumber,mixedArr)
                    pageSweeper()
                    card90px()
                break;
            }
        })
        difs[i].style.left = `${i*250}` +"px"
    }
})
function gameSettings(cardNumber,arrName){
    for(let i = 0 ; i < cardNumber ; i++){
        const card = document.createElement("div")
        const image = document.createElement("img")
        card.classList.add("card")
        card.classList.add("default")
        image.setAttribute("src","./images/background.jpg")
        card.setAttribute("id",i)
        card.setAttribute("data-id",arrName[i].name)
        board.appendChild(card)
        card.appendChild(image)
        card.addEventListener(("click"),()=>{
            if(!card.classList.contains("clicked")){
                if(counter == 0 ){
                    counter = 1
                    card.classList.add("clicked")
                    IDs[0] = card.id
                    dataIDs[0] = card.getAttribute("data-id")
                    image.src = arrName[card.id]["img"]
                }
                else if(counter == 1){
                    counter = 0
                    card.classList.add("clicked")
                    IDs[1] = card.id
                    dataIDs[1] = card.getAttribute("data-id")
                    image.src = arrName[card.id]["img"]
                }
                if(counter == 0){
                    control(card,image)
                }
            }
        })
    }
}
function pageSweeper(){
    HUDpage.style.visibility = "hidden"
    HUDpage.style.opacity = 0
    HUDpage.style.zIndex = -5
    gamePage.style.visibility = "visible"
    gamePage.style.opacity = 1
    gamePage.style.zIndex = 2
}
function stuffleTheDeck(arr){
    arr.sort(() => 0.5 - Math.random())
}
function control(card,image){
    const cards = document.querySelectorAll(".card")
    const images = document.querySelectorAll("img")
    if(dataIDs[0] == dataIDs[1]){
        correctCounter++
        correctAttemptsDisplay.textContent = correctCounter
        gameOver(correctCounter,cardNumber/2)
    }
    else if(dataIDs[0] != dataIDs[1]){
        setTimeout(()=>{
            cards[IDs[0]].classList.remove("clicked")
            images[IDs[0]].src = "./images/background.jpg"
            card.classList.remove("clicked")
            image.src = "./images/background.jpg"
        },1000)
    }
    attemptCounter++
    totalAttemptsDisplay.textContent = attemptCounter
}
function card90px(){
    const cards = document.querySelectorAll(".card")
    const images = document.querySelectorAll("img")
    cards.forEach((card)=>{
        card.style.width = "110px"
        card.style.height = "110px"
    })
    images.forEach((image)=>{
        image.style.width = "110px"
        image.style.height = "110px"
    })
}
function gameOver(correct,cardNumber){
    setInterval(()=>{
        if(correct == cardNumber){
            gamePage.style.visibility = "hidden"
            gamePage.style.opacity = 0
            gamePage.style.zIndex = -1
            footerPage.style.visibility = "visible"
            footerPage.style.opacity = 1
            footerPage.style.zIndex = 5
            accuruteFooter.textContent = `${Math.floor(correctCounter/attemptCounter*100)} % (${correctCounter}/${attemptCounter})`
        }
    },2000)
}