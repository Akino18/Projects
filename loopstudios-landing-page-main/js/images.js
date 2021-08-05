let $interactive = d.getElementById("img__main");

function hamburguer(mq) {

        const breakPoint = matchMedia(mq);

        console.log(breakPoint.matches)

        const mediaQuery = (e) =>{
        	console.log(breakPoint.matches)

            if (e.matches) {

              $interactive.src = "images/desktop/image-interactive.jpg"

            } else {
               $interactive.src = "images/mobile/image-interactive.jpg"
            }
        }
        breakPoint.addListener(mediaQuery);
        mediaQuery(breakPoint);
         
     }


    hamburguer("(min-width: 991px)")
  


