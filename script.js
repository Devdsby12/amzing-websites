let audio = new Audio("fahhhhhhhhhhhhhh.mp3")

let a
let b

function change() {

    let list = document.querySelectorAll("div")

    for (let n of list) {

        if (n.style.transform !== "rotate(180deg)") {

            n.style.transform = "rotate(180deg)"

            document.body.style.background = "red"
        }
    }

    setTimeout(() => {

        audio.currentTime = 0
        audio.play()

        a = document.querySelector("img")

        a.style.zIndex = "-1"
        a.style.position = "absolute"
        a.style.width = "100vw"
        a.style.height = "100vh"
        a.style.objectFit = "cover"
        a.src = "https://tse1.mm.bing.net/th/id/OIP.2E8l4Hsi4Ask-1gtBH92rgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"

        b = document.createElement("button")
        b.innerText = "CLICK here to fix_Page"
        b.id = "undobtn"

        document.body.appendChild(b)

        b.style.position = "absolute"
        b.style.top = "40px"
        b.style.left = "200px"
        b.style.zIndex = "9999"

        b.onclick = () => {

            a.remove()

            let list = document.querySelectorAll("div")

            for (let i of list) {
                i.style.transform = "rotate(0deg)"
            }

            document.body.style.background = "white"

            b.remove()
        }

    }, 400)
}