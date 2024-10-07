
const btn = document.getElementById("toggleBtn");
const body = document.body;
const icon = document.getElementById("icon");


btn.addEventListener("click",()=>{
    body.classList.toggle("dark-mode");
    if(body.classList.contains("dark-mode")){
        icon.classList.add("fa-sun");
        icon.classList.remove("fa-moon");

    }else{
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon')
    }
})