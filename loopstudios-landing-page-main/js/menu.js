let d = document,
    $button = d.getElementById("nav-toggler"),
    $img = d.getElementById("toggler__img"),
    $navbar = d.getElementById("navbar")

    console.log($button)

    $button.addEventListener("click", (e)=>{
    	navbar.classList.toggle("active")
    	

    	if ($navbar.classList.contains("active")) {
    		$img.src = "images/icon-close.svg"
    		d.body.style.overflowY = "hidden"
            
    	}
    	else {
    		$img.src = "images/icon-hamburger.svg"
            d.body.style.overflowY = "scroll"
    	}
    })