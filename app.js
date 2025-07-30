const btn = document.getElementById("getJokeBtn")
const JokeE1 = document.getElementById("joke")

btn.addEventListener("click", async () => {
    JokeE1.innerHTML = "loading..."

    const res = await fetch("https://official-joke-api.appspot.com/jokes/random");
    const data = await res.json()

    JokeE1.innerHTML = `${data.setup}`

    setTimeout(() => {
        JokeE1.innerHTML += `<br><strong>${data.punchline}</strong>`

    }, 1500)
})


