
var add_todo_btn = document.getElementById('add-btn');/* присваиваем айдишник перееменной кнопка*/
var todo_input = document.getElementById('todo-input');/*присваиваем айдишник переменной инпут куда будем заносить значение*/
var list = document.getElementById('list');/*див лист тобишь список присваиваем переменной список*/
add_todo_btn.addEventListener('click', function () { /*переменной кнопка присваиваем событие клик которое вызовет функцию*/
    var todo = todo_input.value; /* значение инпута присваиваем переменной тодо*/

    var item = document.createElement('DIV'); /*переменной айтем присваиваем див сосданый в документе*/
    item.classList.add('item'); /*переменной айтем добавляем новый айтем*/

        var item_text = document.createElement('DIV');
        item_text.classList.add('item-text');
        item_text.textContent = todo;

        var edit_input = document.createElement('INPUT');
        edit_input.classList.add('edit-input');
        edit_input.classList.add('hide');
        edit_input.name = 'edit-input';
        edit_input.type = 'text';
        edit_input.value = todo;

        var edit_input_btn = document.createElement('BUTTON');
        edit_input_btn.textContent = 'UPDATE';
        edit_input_btn.classList.add('action-btn');
        edit_input_btn.classList.add('update-btn');
        edit_input_btn.classList.add('hide');
        edit_input_btn.type = 'button';

        var action_btns = document.createElement('DIV');
        action_btns.classList.add('action_btns');

        var edit_btn = document.createElement('BUTTON');
        edit_btn.classList.add('action-btn');
        edit_btn.classList.add('edit-btn');
        edit_btn.textContent = 'EDIT';

        edit_btn.addEventListener('click', function(){
            edit_input.classList.remove('hide');
            item_text.classList.add('hide');
            edit_input_btn.classList.remove('hide');
            edit_input_btn.addEventListener('click', function() {
               item_text.textContent = edit_input.value;
               edit_input.classList.add('hide');
               item_text.classList.remove('hide');
               edit_input_btn.classList.add('hide');
            });
        });

        var remove_btn = document.createElement('BUTTON');
        remove_btn.classList.add('action-btn');
        remove_btn.classList.add('remove-btn');
        remove_btn.textContent = 'REMOVE';

        remove_btn.addEventListener('click', function() {
            item.parentNode.removeChild(item);
        });

        action_btns.append(edit_input_btn);
        action_btns.append(edit_btn);
        action_btns.append(remove_btn);
        item.append(item_text);
        item.append(edit_input);
        item.append(action_btns);
        list.append(item);

        todo_input.value = '';
})