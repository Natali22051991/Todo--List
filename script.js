const container = document.querySelector('.container')
const headName = document.querySelector('.headName')
const list = document.querySelector('.list')
const addBtn = document.querySelector('button')
const saveBtn = document.querySelector('.saveBtn')
const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const text = document.querySelector('.inpModal')
// const crlearBtns = document.querySelectorAll('button');
const itemsArray = [];

function render(){
    list.innerHTML=''
    itemsArray.forEach(item=>{
        list.innerHTML+=item.template
    })
}

addBtn.addEventListener('click', () => {
    backdrop.classList.toggle('hidden')
    if (!text) {
        return
    }
})

saveBtn.addEventListener('click', () => {
    backdrop.classList.toggle('hidden')
    const input = text.value
    const item = new ToDoItem(input)
    itemsArray.push(item)
    render();
})

list.addEventListener('click', (event)=>{
    console.log(event.target);
switch(event.target.tagName.toLowerCase()){
case 'input': 
itemsArray.find(e => e.id === +event.target.parentElement.id).setComleted();
    render();
    break;
case 'img':
    const indexItem = itemsArray.map(e=>e.id).indexOf(+event.target.id);
    if(indexItem!==-1){
        itemsArray.splice(indexItem,1);
    }
    render()
    break;
}
})


backdrop.addEventListener('click', (event) => {
    if (event.target.classList.contains('backdrop')) {
        backdrop.classList.toggle('hidden')
    }
})

class ToDoItem {
    description;
    isCompleted = false;
    id;

    get template(){
        return ` <li id="${this.id}" class="newLi ${this.isCompleted ? 'completed': ''}">
        <input type="checkbox"/>
        <span>${this.description}</span>
        <button class="crlearBtn ${this.isCompleted ? 'completed': ''}"><img id="${this.id}"src="./img/delete__icon.png"></button>
        </li>`
    }
    constructor(description,id=null) {
        this.description = description;
        this.id = id ? +id : Date.now();
    }
   
    setComleted() {
        this.isCompleted = !this.isCompleted
    }
    
}

