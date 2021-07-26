let $BookMark = d.getElementById("bookMark") || d.getElementById("bookMark").innerHTML,
      $BookMarkText = d.getElementById("bookMarkText");

      $BookMark.addEventListener("click", (e)=>{
          console.log(e.target)
              $BookMark.classList.toggle("active")

              if($BookMark.classList.contains("active")){
                $BookMarkText.innerHTML = "Bookmarked"
              }
              else{
                $BookMarkText.innerHTML = "Bookmark"
              }
       
      })