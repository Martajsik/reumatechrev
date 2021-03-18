const clickBtn = document.querySelector(".btn_click")
const teste = document.querySelector(".container_header nav")
clickBtn.addEventListener("click", e =>{
    teste.classList.toggle("movimentar")
})