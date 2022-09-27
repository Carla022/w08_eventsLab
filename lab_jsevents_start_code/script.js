// selectors
const enter = document.querySelector("#enter")
const list = document.querySelector('#list')
const newTodo = document.querySelector('#new-todo')

//click button
enter.addEventListener('click', () => {
    //create list
    const li = document.createElement('li')
    li.innerText = newTodo.value;
    //adding to the list
    list.append(li) 

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
    });




});


