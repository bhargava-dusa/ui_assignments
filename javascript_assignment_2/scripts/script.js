function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
    console.info("dragging id:" + event.target.id);
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const id = event.dataTransfer.getData('text');    
    const item = document.getElementById(id).innerText;
    const tableId = event.target.id;
    const table = document.getElementById(tableId);
    console.info("table id: " + tableId);
    const parentElement = table.parentElement;
    console.info("parentElement.innerHTML: " + parentElement.innerHTML);
    console.info("parentElement.children.length: " + parentElement.children.length);
    table.parentElement.children[1].innerHTML += "<li class='list-group-item'>"+item+"</li>";
    let itemCount = table.children[0].children[0].innerText;
    table.children[0].children[0].innerText = parseInt(itemCount) + 1;
    table.children[0].style.display = 'block';
    event.dataTransfer.clearData();
}

function deleteItem(tableId, itemName){
    console.info(tableId + ", " + itemName);
}