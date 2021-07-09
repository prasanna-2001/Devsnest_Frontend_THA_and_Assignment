const listsContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const deleteListButton = document.querySelector('[data-delete-list-button]');
const listDisplayContainer = document.querySelector('[data-list-display-container]')
const listTitleElement = document.querySelector('[data-list-title]')
const listCountElement = document.querySelector('[data-list-count]')
const taskContainer = document.querySelector('[data-tasks]')



const LOCAL_STORAGE_LIST_KEY = 'task.lists' ; //adding . ie namespace helps to avoidndata repitition
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListID = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);


listsContainer.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase() === 'li'){
       selectedListID = e.target.dataset.listId;
       saveAndRender();
    }
})

deleteListButton.addEventListener('click', e => {
    lists = lists.filter(list => list.id !== selectedListID);
    selectedListID = null;
    saveAndRender();
})

newListForm.addEventListener('submit', e => {
    e.preventDefault();
    const listName = newListInput.value;
    if(listName == null || listName==='') return
    const list = createList(listName)
    newListInput.value = null;
    lists.push(list);
    saveAndRender();
})
function createList(name){
    return { id: Date.now().toString() , name: name , tasks: []}
}

function saveAndRender(){
    save();
    render();
}

function save(){
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListID);
}

function render(){
    clearElement(listsContainer);
    rendeLists();
    const selectedList = lists.find(list => list.id === selectedListID)
    if(selectedListID == null){
        listDisplayContainer.style.display = 'none';
    }
    else{
        listDisplayContainer.style.display = '';
        listTitleElement.innerText =  selectedList.name;
        renderTaskCount(selectedList)
    }
    
}

function renderTaskCount(selectedList){
    const incompleteTaskCount = selectedList.tasks.filter(task => task.complete).length;
    const taskString = incompleteTaskCount === 1 ? "subtask" : "subtasks";
    listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;
}


function rendeLists(){
    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.dataset.listId = list.id;
        listElement.classList.add("list-name");
        listElement.innerText = list.name;
        if(list.id === selectedListID){
            listElement.classList.add('active-list');
        }
        listsContainer.appendChild(listElement);
    })
}


function clearElement(element){
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}
render();

// 100=a1
// 95=a
// 90=b+
// 85=b
// 80=c+
// 75
