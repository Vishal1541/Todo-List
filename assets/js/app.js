document.getElementById('add-btn').addEventListener('click',function(){
    var a = document.getElementById('todo-input').value;
    var b = document.getElementById('list');

    var tag;
    tag = document.createElement('li');
    tag.classList.add('list-elem');
    tag.classList.add('list-group-item');
    tag.classList.add('list-group-item-action');
    tag.classList.add('list-group-item-primary');
    tag.innerHTML = a;
    b.append(tag);
    document.getElementById('todo-input').value = '';
    // var item = document.createElement('DIV');
    // item.classList.add('list-group-item list-group-item-action list-group-item-info');
    // item.textContent = a;

    // var todo_input = document.getElementById('add-input');
    // // var list = document.getElementById('list');
    // var todo = todo_input.value;

    // var item = document.createElement('DIV');
    // item.classList.add('item');

    // var item_text = document.createElement('DIV');
    // item_text.classList.add('list-group-item list-group-item-action list-group-item-info');
    // item_text.textContent = todo;
    // document.writeln("hello");
});