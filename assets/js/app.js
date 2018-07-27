document.getElementById('add-btn').addEventListener('click',function(){
    var a = document.getElementById('todo-input').value;
    var b = document.getElementById('list');
    if(a != ''){
        var div,tag, close = "x", ahref;
        div = document.createElement('div');
        div.classList.add('list-div');
        b.append(div);
        tag = document.createElement('li');
        tag.classList.add('list-elem');
        tag.classList.add('list-group-item');
        tag.classList.add('list-group-item-action');
        tag.classList.add('list-group-item-primary');
        tag.innerHTML = a;
        div.append(tag);
        
        ahref = document.createElement('a');
        // ahref.classList.add('list-link');
        ahref.className = 'list-link';
        ahref.href = "#";
        tag.append(ahref);

        var dlt = document.createElement('span');
        dlt.classList.add('glyphicon');
        dlt.classList.add('glyphicon-remove');
        dlt.classList.add('list-dlt');
        dlt.onclick = function(){
            div.style.display = 'none';
        }
        ahref.append(dlt);
        
        var edit = document.createElement('span');
        edit.classList.add('glyphicon');
        edit.classList.add('glyphicon-pencil');
        edit.classList.add('list-edit');

        var ahref_edit = document.createElement('a');
        ahref_edit.classList.add('list-edit-link');
        ahref_edit.href = "#";
        tag.append(ahref_edit);
        ahref_edit.append(edit);
        
        document.getElementById('todo-input').value = '';
    }
    else{
        alert("Cannot add an empty data!");
    }
});
// <span class="glyphicon glyphicon-pencil"></span>
// document.getElementsByClassName('list-link').addEventListener('click',function(){
//     document.write("hello");
//     this.style.display = 'none';
// });