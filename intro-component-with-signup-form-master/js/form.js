const d = document,
 $inputsContainer = d.querySelectorAll(".form__input"),
 $inputs = d.querySelectorAll(".input"),
 $button = d.querySelector(".button");



 console.log($inputs)

 $button.addEventListener("click", (e)=>{
    $inputs.forEach((el)=>{
        FormValidation(el)

     })
    e.preventDefault()
 });

 function FormValidation (input) {

      let pattern = RegExp(input.pattern),
       result = pattern.exec(input.value);

     if(input.value == "" || !result) {
        input.parentElement.classList.add("active");
        return false
     } else {
        input.parentElement.classList.remove("active");
     }
 }