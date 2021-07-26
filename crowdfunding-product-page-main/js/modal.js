const   $Check = d.querySelectorAll(".span"),
      $modalContainer = d.querySelector(".modal__container"),
      $closeModal = d.querySelector(".modal__close"),
      $button = d.querySelectorAll(".button"),
      $thanksModal = d.querySelector(".thanks"),
      $buttonModal = d.querySelectorAll(".pledge_button");



console.log($thanksModal.firstChild)

    $Check.forEach(el =>{
        let father = el.parentNode,
        GrandFather = father.parentNode;

        el.addEventListener("click", (e)=>{
            console.log(GrandFather)

            GrandFather.parentNode.classList.toggle("active")
            el.classList.toggle("active")

        })
    })

    d.addEventListener("click", (e) =>{

        if(e.target.matches(".modal__close *") || e.target == $modalContainer ){
            $modalContainer.classList.add("close")
        }

        if(e.target.matches(".thanks") || e.target.matches(".thanks .thanks__container .button")){
            $thanksModal.classList.add("close")
           console.log(e.target)
            
        }

        if(!$modalContainer.classList.contains("close")) d.body.style.overflowY = "hidden"
        else{
            d.body.style.overflowY = "scroll"
        }
        
    })

    $button.forEach(el =>{
        el.addEventListener("click", () =>{
            $modalContainer.classList.remove("close")
        })
    })

    $buttonModal.forEach(el =>{
        el.addEventListener("click", (e) =>{
            $thanksModal.classList.remove("close")
            
        })
    })

   


