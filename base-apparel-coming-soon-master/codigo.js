const d = document,
      w = window,
      $img = d.getElementById("image"),
      $form = d.getElementById("form"),
      $input = d.getElementById("input");
      

     if(w.innerWidth < 1440) $img.src = "images/hero-mobile.jpg";

    function comprobacion (el) {
        let pattern = RegExp(el.pattern),
            result = pattern.exec(el.value);


        if(result) {
            
            d.querySelector(".error-icon").classList.remove("active");
            d.querySelector(".form__error").classList.remove("active");
            d.querySelector(".form__input").style.border = " 1px solid hsl(0, 93%, 68%)";
        } else {
      
            $form.querySelector(".error-icon").classList.add("active");
            $form.querySelector(".form__error").classList.add("active");
            d.querySelector(".form__input").style.border ="2px solid red";
         
        }
    }

    d.addEventListener("keyup", e=>{
        if(e.target === $input) {

            if($input.value !== "") {
                comprobacion($input);

                
            }
           
            
        }
    })