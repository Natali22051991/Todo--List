const container = document.querySelector('.container')
const headName = document.querySelector('.headName')
const list = document.querySelector('.list')
const addBtn = document.querySelector('button')
const saveBtn = document.querySelector('.saveBtn')
const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const text = document.querySelector('.inpModal')

addBtn.addEventListener('click', () => {
    backdrop.classList.toggle('hidden')
    if (!text) {
        return
    }
})

saveBtn.addEventListener('click', () => {
    backdrop.classList.toggle('hidden')
    input = text.value
    const item = new ToDoItem(input)
    item.add(list)
})

backdrop.addEventListener('click', (event) => {
    if (event.target.classList.contains('backdrop')) {
        backdrop.classList.toggle('hidden')
    }
})

class ToDoItem {
    description;
    isCompleted = false;
    id = Date.now();
    check = document.createElement('input')
    newLi = document.createElement('li')
    constructor(description) {
        this.description = description;
    }
    add(parent) {
        this.newLi.id = this.id
        this.check.type = "checkbox"
        this.check.addEventListener('click', this.setComleted.bind(this))
        const input = document.createElement('span')
        input.textContent = this.description
        const crlearBtn = document.createElement('button');
        crlearBtn.textContent = 'Удалить'
        this.newLi.append(this.check)
        this.newLi.append(input)
        conteiner.append(crlearBtn)
        parent.append(this.newLi)
        //console.log(this)
    }
    setComleted() {
        this.isCompleted = !this.isCompleted
        this.newLi.classList.toggle('completed')
    }
}


