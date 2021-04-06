'use strict';
    const todoBody = document.getElementById('todoBody');
    const addTask = document.getElementById('addTask');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const todos = [];
    const allRadioBtn = document.getElementById('allRadioBtn');
    const workRadioBtn = document.getElementById('workRadioBtn');
    const checkRadioBtn = document.getElementById('checkRadioBtn');
    const showTodo = () => {
      while (document.querySelector('.todoList')) {
        todoBody.removeChild(document.querySelector('.todoList'));
      }
      todos.forEach((todo, index) => {
        const tr = document.createElement('tr');
        tr.className = 'todoList';
        const tdId = document.createElement('td');
        tdId.textContent = `${index}`;
        tr.appendChild(tdId);
        const tdComment = document.createElement('td');
        tdComment.textContent = todo.comment;
        tr.appendChild(tdComment);
        const tdWorkBtn = document.createElement('td');
        const workBtn = document.createElement('button');
        workBtn.textContent = '作業中';
        tdWorkBtn.appendChild(workBtn);
        tr.appendChild(tdWorkBtn);
        workBtn.addEventListener('click', () => {
          if(workBtn.textContent === '作業中') {
            workBtn.textContent = '完了';
          } else {
            workBtn.textContent = '作業中';
          }
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
    workRadioBtn.addEventListener('click', () => {
      const workTodo = todos.filter(todo => todo.status === '作業中');
      showTodo(workTodo);
    });
    checkRadioBtn.addEventListener('click', () => {
      const checkTodo = todos.filter(todo => todo.status === '完了');
      showTodo(checkTodo);
    });