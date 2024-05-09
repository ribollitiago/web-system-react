const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text"),
    image = document.querySelector(".image");
    
    modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("light");

        if(body.classList.contains("light")){
            modeText.innerText = "Dark Mode"
            image.src = "../assets/images/icon_light.png";
        }else{
            modeText.innerText = "Light Mode"
            
            image.src = "../assets/images/icon_dark.png";
        }
    })