// переменная для секции, где находится инпут и первая кнопка 
const firstSection = document.querySelector(".first-section");

// переменная для поля ввода задачи
const input = document.querySelector('.input');

// создаем кнопку
const firstBtn = document.createElement('button');
// добавляем ей класс
firstBtn.classList.add('first-button');
// добавляем надпись
firstBtn.textContent = 'Добавить'
// добавляем кнопку на страницу
firstSection.append(firstBtn);

// переменная для секции, где находятся задачи и кнопка их удаления
const secondSection = document.querySelector(".second-section");

// создаем контейнер, где находятся введенные задачи
const taskSpace = document.createElement('div');
// указываем класс элемента, добавляем текст по умолчанию
taskSpace.classList.add('task-space'); 
taskSpace.textContent = "Нет задач";
// добавляем элемент во вторую секцию 
secondSection.append(taskSpace);

// создаем кнопку
const secondBtn = document.createElement('button');
// добавляем ей класс
secondBtn.classList.add('second-button');
// добавляем ей атрибут disabled
secondBtn.setAttribute('disabled', '');
// добавляем надпись
secondBtn.textContent = 'Очистить список задач'
// добавляем кнопку на страницу
secondSection.append(secondBtn);


// обработчик события для добавления задач с неактивным чекбоксом
firstBtn.addEventListener("click", () => {
    if (input.value.trim() === "") { // с помощью условия ограничиваем выведение пустой строки, при нажатии на кнопку,
        return;                      // если пользователь не ввел задачу или нажал на пробел
    }

    const newTask = document.createElement("label");
    newTask.classList.add("new-task");
  
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("new-task-checkbox");
    checkbox.setAttribute("disabled", "");
  
    const taskText = document.createElement("span");
    taskText.classList.add("new-task-text");
    taskText.textContent = input.value;
  
    newTask.append(taskText, checkbox);
  
    if (taskSpace.textContent === "Нет задач") { // указываем условие, для удаления текста "Нет задач" и активации кнопки 
      taskSpace.textContent = "";                     //"Очистить список задач", при появлении задачи
      secondBtn.removeAttribute('disabled');
    }
  
    taskSpace.append(newTask);
    input.value = "";
  
    newTask.addEventListener("click", () => { // добавляем обработчик события для активации чекбокса при нажатии на задачу
        checkbox.removeAttribute("disabled");
    });
  });

  
// обработчик события для удаления задач при нажатии на кнопку "Очистить список задач"
// добавляем текст "Нет задач" после нажатия кнопки
secondBtn.addEventListener( "click" , () => {
  const tasks = document.querySelectorAll('.new-task');
document.querySelector('.task-space').textContent = "Нет задач";
 secondBtn.setAttribute('disabled', '');
input.value = "";
  });
