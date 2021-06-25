const d = document,
$RangeValue = d.getElementById("RangeValue"),
$inputRange = d.getElementById("inputRange"),
$Pageviews = d.getElementById("Pageviews"),
$button = d.getElementById("button"),
div = d.createElement("div").textContent = "$"

  
$inputRange.addEventListener("change", (e)=>{
    

    value (e.target.value)

})

$button.addEventListener("click", (e)=>{
    e.target.classList.toggle("active")
     value($inputRange.value)
})


function value (value){

    if(value >= 10000 && value < 50000) {
        $Pageviews.innerHTML = "10k"
        $RangeValue.innerHTML = 8.00;
    }
    else if(value >= 50000 &&value < 100000){
        $Pageviews.innerHTML = "50k";
        $RangeValue.innerHTML = 12.00;
    }
    else if(value >= 100000 && value < 500000){
        $Pageviews.innerHTML = "100k";
        $RangeValue.innerHTML = 16.00;
    }
    else if(value >= 500000 && value < 1000000){
        $Pageviews.innerHTML = "500k"
        $RangeValue.innerHTML = 24.00;
    }
    else if(value == 1000000 ){
        $Pageviews.innerHTML = "1m"
        $RangeValue.innerHTML =  36.00;  
    }

    else if (value == 0) {
        $Pageviews.innerHTML = ""
        $RangeValue.innerHTML =  0;
    }

    if($button.classList.contains("active")) $RangeValue.innerHTML = 75 * $RangeValue.innerHTML / 100
    $RangeValue.insertAdjacentHTML("afterbegin",div);
   }