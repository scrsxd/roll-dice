function rollDice() {
    let random_number1 = Math.floor((Math.random() * 6) + 1)
    let random_number2 = Math.floor((Math.random() * 6) + 1)

    document.querySelectorAll(".dice")[0].setAttribute("class", "dice")
    document.querySelectorAll(".dice")[1].setAttribute("class", "dice")

    document.querySelector("body > div > div:nth-child(2) > img").setAttribute("src", "./images/dice"+random_number1+".png")
    document.querySelector("body > div > div:nth-child(3) > img").setAttribute("src", "./images/dice"+random_number2+".png")

    console.log(random_number1)
    console.log(random_number2)

    if (random_number1 > random_number2){
        document.querySelector("body > div.message > p").textContent = "🚩" + document.querySelector("body > div > div:nth-child(2) > p").textContent + " wins!";
        document.querySelector("body > div > div:nth-child(2) > p").setAttribute("class", "winner")
        document.querySelector("body > div > div:nth-child(3) > p").setAttribute("class", "loser")
    }
    else if (random_number2 > random_number1){
        document.querySelector("body > div.message > p").textContent = document.querySelector("body > div > div:nth-child(3) > p").textContent + " wins! 🚩";
        document.querySelector("body > div > div:nth-child(3) > p").setAttribute("class", "winner")
        document.querySelector("body > div > div:nth-child(2) > p").setAttribute("class", "loser")
    }
    else{
        document.querySelector("body > div.message > p").textContent = "Draw!"

    }
}

let name1 = document.querySelector("body > div > div:nth-child(2) > p").textContent = prompt("Enter the first player's name: (Max 10 characters)").slice(0, 10)
let name2 = document.querySelector("body > div > div:nth-child(3) > p").textContent = prompt("Enter the second player's name: (Max 10 characters)").slice(0, 10)





document.querySelector("h1").onclick = rollDice;