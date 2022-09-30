const tickEl = document.querySelectorAll(".icon-1")

const containerEl = document.querySelector(".container")

const ulEl = document.querySelector(".list")

const inputEl = document.querySelector(".input")

containerEl.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(inputEl.value);
    createList();
});

function createList() {
    let newTask = inputEl.value
    const liEl = document.createElement("li")
    liEl.innerText = newTask;
    ulEl.appendChild(liEl)
    inputEl.value = "";

    const checkBtnEl = document.createElement("div")
    checkBtnEl.innerHTML = `<i class="icon-1  fa-solid fa-square-check"></i>`
    liEl.appendChild(checkBtnEl)

    const trashBtnEl = document.createElement("div")
    trashBtnEl.innerHTML = `<i class="icon-2  fa-solid fa-trash"></i>`
    liEl.appendChild(trashBtnEl)

    checkBtnEl.addEventListener("click", ()=>{
        liEl.classList.toggle("checked")
    })
    trashBtnEl.addEventListener("click", ()=>{
        liEl.remove();
    })

}
