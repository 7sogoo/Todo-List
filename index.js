// const words = ["To do", "In progress", "Done", "Blocked"];
// const colors = ["White", "Yellow", "Green", "Red"]
// const cardContainer = document.getElementById("cardContainer");

// for (let i = 0; i < words.length; i++) {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     cardContainer.appendChild(card);
// }

// const body = document.getElementsByTagName('body')[0];

// const arr = [['Хорвоогийн ', 'хүчирхэг ', 'амьтан ', 'хүн'], ['Хосгүй ', 'хөгжилт ', 'ухаан ', 'сэтгэхүйт ', 'хүн']]


// const createSpanElement = (text) => {
//     const span = document.createElement('span')
//     span.innerText = text
//     return span;
// } 

// const render = (arr) => {
//     const div = document.createElement('div')
//     for(let i = 0; i < arr.length; i++){
//         div.appendChild(createSpanElement(arr[i]))
//     }
//     body.appendChild(div)
// }

// for(let i = 0; i < arr.length; i++){
//     render(arr[i])
// }

// const body = document.getElementsByTagName('body')[0];

// const cardContainer = document.createElement('div');
// cardContainer.classList.add('cardContainer');
// body.appendChild(cardContainer);

// const cardScroll = document.createElement('div')
// cardScroll.classList.add('cardScroll')
// cardContainer.appendChild(cardScroll)

// const images = ["https://cdn.dribbble.com/userupload/14826460/file/still-6376723b9cc707c030bdf4280edf9b5d.png?format=webp&resize=400x300&vertical=center",
// "https://cdn.dribbble.com/userupload/14844018/file/original-78bf484f7f07195e4f79a5ea19a4bf1f.png?format=webp&resize=400x300&vertical=center",
// "https://cdn.dribbble.com/userupload/14735473/file/original-cb8d456e80037fda2b6faecda1f4f367.jpg?format=webp&resize=400x300&vertical=center",
// "https://cdn.dribbble.com/userupload/14718368/file/original-34f0be3a0678ff3bde5d577f8d51cfb1.jpg?format=webp&resize=400x300&vertical=center",
// "https://cdn.dribbble.com/userupload/14574088/file/original-0d0562eb9c4b9ee6e3548fb7e57cf901.jpg?format=webp&resize=400x300&vertical=center",
// "https://cdn.dribbble.com/userupload/14853425/file/original-ccb9b5329563ca8167e3d3ec9b0200d4.jpg?format=webp&resize=400x300&vertical=center"
// ]

// const names = ["Web Design", "Print", "Product design", "Branding", "Mobile", "Illustration"]

// const backgroundImage = () => {
//     for (let i = 0; i < images.length; i++) {
//         const cardContent = document.createElement('div');
//         cardContent.classList.add('cardContent')
//         cardScroll.appendChild(cardContent) 

//         const span = document.createElement('span');
//         span.classList.add('span');

//         const card = document.createElement('div');
//         card.classList.add("card");

//         card.style.backgroundImage = `url(${images[i]})`;
//         span.innerText = names[i];

//         cardContent.appendChild(card);
//         cardContent.appendChild(span);
//     }
// } 

// backgroundImage()

const body = document.getElementsByTagName('body')[0];

const editSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<g clip-path="url(#clip0_4089_57)">
  <path d="M11.3333 2.00001C11.5031 1.79936 11.7131 1.63605 11.95 1.52046C12.1869 1.40488 12.4454 1.33956 12.7091 1.32868C12.9728 1.3178 13.2359 1.36159 13.4816 1.45727C13.7273 1.55294 13.9503 1.69839 14.1362 1.88435C14.3222 2.07032 14.4671 2.29272 14.5617 2.53737C14.6563 2.78202 14.6986 3.04356 14.6857 3.30533C14.6729 3.56709 14.6053 3.82333 14.4873 4.05772C14.3692 4.29211 14.2033 4.4995 14 4.66667L5.00001 13.6667L1.33334 14.6667L2.33334 11L11.3333 2.00001Z" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 3.33333L12.6667 5.99999" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_4089_57">
    <rect width="16" height="16" fill="white"/>
  </clipPath>
</defs>
</svg>`;

const removeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M2 4H14" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.6667 4V13.3333C12.6667 14 12 14.6667 11.3333 14.6667H4.66668C4.00001 14.6667 3.33334 14 3.33334 13.3333V4" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.33334 3.99999V2.66666C5.33334 1.99999 6.00001 1.33333 6.66668 1.33333H9.33334C10 1.33333 10.6667 1.99999 10.6667 2.66666V3.99999" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66666 7.33333V11.3333" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33334 7.33333V11.3333" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const colors = ["White", "Yellow", "Green", "Red"];
const titles = ["To do", "In progress", "Done", "Blocked"]

const cardContainer = document.createElement('div');
cardContainer.classList.add("cardContainer")

const buttonDiv = document.createElement('div')
buttonDiv.classList.add('buttonDiv')
const addTaskButton = document.createElement('button');
buttonDiv.appendChild(addTaskButton)
addTaskButton.classList.add("addTaskButton");
addTaskButton.innerText = "Add task"

body.appendChild(buttonDiv)
body.appendChild(cardContainer);

const myList = ["",]

const createCard = () => {
    for (let i = 0; i < colors.length; i++) {
        const card = document.createElement('div')
        card.classList.add('card');
        cardContainer.appendChild(card);
    
        const cardHeader = document.createElement('div');
        cardHeader.classList.add('cardHeader');
        card.appendChild(cardHeader)
    
        const cardHeaderTitle = document.createElement('div');
        cardHeaderTitle.classList.add('cardHeaderTitle');
        cardHeader.appendChild(cardHeaderTitle);
    
        const dot = document.createElement('p');
        dot.classList.add('dot');
        cardHeaderTitle.appendChild(dot);
    
        const title = document.createElement('p');
        title.classList.add('title');
        cardHeaderTitle.appendChild(title);
    
        const number = document.createElement('p');
        number.classList.add('number');
        cardHeader.appendChild(number);

        const list = document.createElement('div')
        list.classList.add('list');
        card.appendChild(list);
    
        title.innerText = titles[i];
        dot.style.backgroundColor = `${colors[i]}`
        number.innerText = "5"
    }
    
}

createCard()

const createTask = () => {
    const list = document.getElementsByClassName('list')[0];
    const task = document.createElement('div');
    task.classList.add('task');
    const blackDot = document.createElement('p');
    blackDot.classList.add('blackDot');
    const text = document.createElement('p');
    text.classList.add('text')
    const edit = document.createElement('div');
    const remove = document.createElement('div');

    task.appendChild(blackDot);
    task.appendChild(text);

    task.appendChild(edit);
    task.appendChild(remove);

    text.innerText = "[loan-managament] - Add card component"
    edit.innerHTML = editSvg;
    remove.innerHTML = removeSvg;
    list.appendChild(task);
}

createTask()
