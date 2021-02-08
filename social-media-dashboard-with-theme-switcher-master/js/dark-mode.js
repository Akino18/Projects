let $switch = document.querySelector(".switch");
let $btn = document.querySelector(".btn-switch");
let $container = document.querySelectorAll(".container-hover");


$switch.addEventListener("click", (e) => {
    $btn.classList.toggle("btn-active");
    document.body.classList.toggle("active");
    $switch.classList.toggle("switch-active");


    if (document.body.classList.contains("active")) {
        localStorage.setItem("light-mode", "true");

        $container.forEach(el => {
            el.classList.add("light")
        })
    } else {
        localStorage.setItem("light-mode", "false")
        $container.forEach(el => {
            el.classList.remove("light")
        })
    }
})

document.addEventListener("DOMContentLoaded", (e) => {
    if (document.body.classList.contains("active")) {

        $container.forEach(el => {
            el.classList.add("light")
        })
    } else {
        $container.forEach(el => {
            el.classList.remove("light")
        })
    }
})


if (localStorage.getItem("light-mode") == "true") {
    document.body.classList.add("active");
    $btn.classList.add("btn-active");
    $switch.classList.add("switch-active");
} else {
    document.body.classList.remove("active");
    $btn.classList.remove("btn-active");
    $switch.classList.remove("switch-active");
}