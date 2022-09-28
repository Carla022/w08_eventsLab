// selectors
// with the query "getElementById", you dont need to add the hash symbol as it already knows that it is looking
const enter = document.querySelector("#enter")
const list = document.querySelector('#list')
const newTodo = document.querySelector('#new-todo')
const completeList = document.querySelector('#list-complete')


//click button
enter.addEventListener('click',  () => {
    //create list
    const li = document.createElement('li')
    li.innerText = newTodo.value;
    //adding to the list
    list.append(li) 
   
    // if no user input in form, prompt user input else, add to the list{



    //create completelist checkbox
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    //get the list and apply the checkbox:
    li.append(checkbox)

    //transfer unchecked li back to toDo list:
    checkbox.addEventListener('change', () => {
        completeList.removeChild(li)
        //transfer to list
        list.append(li)
    })


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

    //add delete funciton to completeList li
    removeBtn.addEventListener('click', () => {
        completeList.removeChild(li) 
    });


    //create show date button
    const showDateBtn = document.createElement('button')
    showDateBtn.innerText = 'Show Date';

    li.append(showDateBtn)

    showDateBtn.addEventListener('click', () => {
        const date = Date()
        // append variable date - add it to the li
        li.append(date)
        //to disable button after click
        showDateBtn.disabled = true
    });





});


