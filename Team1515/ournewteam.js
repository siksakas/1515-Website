let buttons = document.querySelectorAll(".expandbtn")

buttons.forEach(
    (button) => {
        button.addEventListener("click", (event) => {
            let sibling = event.target.previousElementSibling
            if (sibling.classList.contains("expand")) {
                event.target.innerHTML = "Read More"
                sibling.classList.remove("expand")
            }
            else {
                event.target.innerHTML = "Read Less"
                sibling.classList.add("expand")
            }

        })
    }
)