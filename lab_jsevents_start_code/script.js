// selectors
const enter = document.querySelector("#enter")
const list = document.querySelector('#list')
const newTodo = document.querySelector('#new-todo')
const completeList = document.querySelector('#list-complete')

//click button
enter.addEventListener('click', () => {
    //create list
    const li = document.createElement('li')
    li.innerText = newTodo.value;
    //adding to the list
    list.append(li) 

    //create completelist checkbox
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    li.append(checkbox)

    //transfer to completedlist
    checkbox.addEventListener('change', () => {
        list.removeChild(li)
        //add the li to the completeList:
        completeList.append(li)
    })

    //create delete button
    const removeBtn = document.createElement('button')
    // innerText used to change the text inside an element
    removeBtn.innerText = 'Remove';
    //adding a delete button
    li.append(removeBtn)

    removeBtn.addEventListener('click', () => {
        list.removeChild(li) 
    });



    const showDateBtn = document.createElement('button')
    showDateBtn.innerText = 'Show Date';

    li.append(showDateBtn)

    showDateBtn.addEventListener('click', () => {
        const date = Date()
        // append variable date
        li.append(date)
        //to disable button after click
        showDateBtn.disabled = true
    });




});


