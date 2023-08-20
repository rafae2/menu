const body = document.querySelector("body"),
    navbar = body.querySelector(".navbar"),
    toggle = body.querySelector(".toggle"),
    pesquisaBtn = body.querySelector(".pesquisa"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");    

    toggle.addEventListener("click", () =>{
        navbar.classList.toggle("close");
    });

    modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark")
    

    if(body.classList.contains("dark")){
        modeText.innerHTML ="Dark Mode"
    }else{
        modeText.innerHTML ="Light Mode"
    }
});