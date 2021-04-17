'use strict';
    const todoBody = document.getElementById('todoBody');
    const addTask = document.getElementById('addTask');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const todos = [];
    const allRadioBtn = document.getElementById('allRadioBtn');
    const workRadioBtn = document.getElementById('workRadioBtn');
    const checkRadioBtn = document.getElementById('checkRadioBtn');
    const showTodo = () => {
      while (todoBody.firstChild) {
        todoBody.removeChild(todoBody.firstChild);
      }
      todos.forEach((todo, index) => {
        const tr = document.createElement('tr');
        if(workRadioBtn.checked) {
          if(todo.status === '完了') {
            tr.classList = 'none';
          }
        }
        else if(checkRadioBtn.checked) {
          if(todo.status === '作業中') {
            tr.classList = 'none';
          }
        }
        const tdId = document.createElement('td');
        tdId.textContent = `${index}`;
        tr.appendChild(tdId);
        const tdComment = document.createElement('td');
        tdComment.textContent = todo.comment;
        tr.appendChild(tdComment);
        const tdWorkBtn = document.createElement('td');
        const workBtn = document.createElement('button');
        workBtn.textContent = todo.status;
        tdWorkBtn.appendChild(workBtn);
        tr.appendChild(tdWorkBtn);
        workBtn.addEventListener('click', () => {
          if(workBtn.textContent === '作業中') {
            workBtn.textContent = '完了';
            todo.status = '完了';
          } else {
            workBtn.textContent = '作業中';
            todo.status = '作業中';
          }
        });
        workRadioBtn.addEventListener('click', () => {
          if(workBtn.innerHTML !== '作業中') {
            tr.classList.add('none');
          } else {
            tr.classList.remove('none');
          }
        });
        checkRadioBtn.addEventListener('click', () => {
          if(workBtn.innerHTML !== '完了') {
            tr.classList.add('none'); 
          } else {
            tr.classList.remove('none');
          }
        });
        allRadioBtn.addEventListener('click', () => {
          tr.classList.remove('none');
        });
        const tdRemoveBtn = document.createElement('td');
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '削除';
        tdRemoveBtn.appendChild(removeBtn);
        tr.appendChild(tdRemoveBtn);
        removeBtn.addEventListener('click', () => {
          todos.splice(index, 1);
          showTodo();
          });
        todoBody.appendChild(tr);
      });
    };
    addTaskBtn.addEventListener('click', () => {
      const todo = {
        comment: addTask.value,
        status: '作業中'
      }
      addTask.value = '';
      if(todo) {
        todos.push(todo);
        showTodo();
      }
    });