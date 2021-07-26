const d = document,
    $body = d.body,
    $modal = d.getElementById("modal"),
    $hamburguer = d.getElementById("hamburguer"),
    $close = d.getElementById("close"),
    $headerContainer = d.getElementById("header_container")


$hamburguer.addEventListener("click", (e)=>{

     e.target.classList.add("disable")
     
     $headerContainer.classList.add("active")

        $body.style.overflowY = "hidden"
         $close.classList.add("active")

         $close.addEventListener("click", (e)=>{
             close(e.target)
            
        })
    

})

d.addEventListener("click", (e)=>{
    if($close.classList.contains("active") && e.target != $close && e.target != $hamburguer){
         
        close($close)
          
    }
});

function close (e){
    $headerContainer.classList.remove("active")
            $body.style.overflowY = "visible"
             e.classList.remove("active")
            $hamburguer.classList.remove("disable")
}

