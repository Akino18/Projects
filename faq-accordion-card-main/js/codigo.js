let questions = document.querySelectorAll(".question");


questions.forEach(el => {
    el.addEventListener("click", () => {
        el.classList.toggle("active")
    })
})



